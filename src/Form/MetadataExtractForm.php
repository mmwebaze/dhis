<?php

namespace Drupal\dhis\Form;

use Symfony\Component\Yaml\Yaml;
use Drupal\Core\Config\ConfigFactory;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\Exception\NoCorrespondingEntityClassException;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\dhis\Entity\OrganisationUnit;
use Drupal\dhis\Entity\DataElement;
use Drupal\field\Entity\FieldConfig;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\taxonomy\Entity\Term;
use Drupal\taxonomy\Entity\Vocabulary;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\File\FileSystem;
use \Drupal\dhis\Util\CsvHandler;
use Drupal\Core\Entity\EntityTypeManager;

class MetadataExtractForm extends FormBase implements ContainerInjectionInterface {
  protected $config_factory;
  private $content;
    private $file_system;
    private $entity_manager;

  public function __construct(ConfigFactory $config_factory, FileSystem $file_system, EntityTypeManager $entity_manager) {
    $this->config_factory = $config_factory;
      $this->file_system = $file_system;
      $this->entity_manager = $entity_manager;
  }
  /**
   * {@inheritdoc}
   */
  public function getFormId() {

    return 'metadata_extract_form';
  }
  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['metadata_extract'] = array(
      '#type' => 'submit',
      '#value' => t('Fetch Metadata'),
    );

    return $form;
  }
  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config_factory->getEditable('dhis.settings');
    $orgUnits = $config->get('dhis.orgUnits');
    $dataElements = $config->get('dhis.dataElements');
    $dataElementsFile = $config->get('dhis.dataElementsfile');
    /*$indicators = $config->get('dhis.indicators');
    $orgUnitGrp = $config->get('dhis.orgUnitGrp');*/
    $csvHandler = new CsvHandler($this->file_system);


    if ($orgUnits == 1){
        $this->removeEntities('organisation_unit');
        $ouList = $csvHandler->readCsv('ou.csv');
        if (count($ouList) == 0){
            $orgUnitService = \Drupal::service('dhis.orgunit');
            $this->content = $orgUnitService->getOrgUnits(FALSE);
            $this->content = $this->content['organisationUnits'];
            //$this->createVocabulary($this->content, 'Organisation Units');
            $this->createEntities($this->content, 'organisationunit');
        }
        else{
            $this->createEntities($ouList, 'organisationunit');
        }

      drupal_set_message('Sucessfully pulled organisation units from DHIS2');
    }

    if($dataElements == 1){
        $this->removeEntities('data_element');
        $deList = $csvHandler->readCsv('dx.csv');
        if (count($deList) == 0){
            $dataElementService = \Drupal::service('dhis.dataelement');
            $this->content = $dataElementService->getDataElements(FALSE);
            $this->content = $this->content['dataElements'];
            $this->createEntities($this->content, 'dataelement');
        }
        else{
            $this->createEntities($deList, 'dataelement');
        }

      //$this->createVocabulary($this->content, 'Data Elements');

      drupal_set_message('Sucessfully pulled Data Elements units from DHIS2');
    }

    if ($dataElementsFile == 1){
      $module_path = drupal_get_path('module', 'dhis');
      $file_contents_accounts = file_get_contents($module_path . '/dhis.accounts.yml');
      $accounts = Yaml::parse($file_contents_accounts);
      if ($file_contents_accounts){
        $countries = $accounts['dhis_accounts']['countries'];

        if (count($countries) != 0){
          foreach ($countries as $key => $value){
            $deList = $csvHandler->readCsv($value['dataelements']);
            foreach ($deList as $item){
              Term::create(['name' => $item['displayName'],
                'vid' => $key.'_dataelements',
                'description' => $item['id']])->save();
            }
          }
        }
        else{
          drupal_set_message('The file dhis.accounts.yml is incorrectly configured.');
        }
      }
      else{
        drupal_set_message('The file dhis.accounts.yml does not exist.');
      }
    }
  }
  public static function create(ContainerInterface $container){
    return new static(
      $container->get('config.factory'),
        $container->get('file_system'),
        $container->get('entity_type.manager')
    );
  }
  private function createVocabulary($metadata, $vocabularyName){
    $vid = str_replace(' ', '_', 'dhis_'.strtolower($vocabularyName));
    $vocabulary = Vocabulary::create(['name' => $vocabularyName, 'vid' => $vid,])->save();
    $field_name = str_replace(' ', '_', 'dhis2_uid'.strtolower($vocabularyName));
    FieldStorageConfig::create(
      array(
        'field_name' => $field_name,
        'entity_type' => 'taxonomy_term',
        'type' => 'text',
        'settings' => [
          'max_length' =>'12',
        ],
        'cardinality' => 1,
      )
    )->save();
    FieldConfig::create([
      'field_name' => $field_name,
      'entity_type' => 'taxonomy_term',
      'bundle' => $vid,
      'label' => $vocabularyName.' uid',
      'field_type' => 'text',
      'required' => TRUE,
      'settings' => [

      ]
    ])->save();
    foreach ($metadata as $item){
      Term::create([
        'name' => $item['displayName'],
        'vid' => $vid,
        //'dhis2_uid'.strtolower($vocabularyName) => $item['id']
        'description' => $item['id']
      ])->save();
    }
  }
  private function createEntities($items, $entity_type){
      if ($entity_type == 'organisationunit'){
          //foreach ($items as $item){
              $this->createOrganisationUnitEntity($items);
          //}
      }
      elseif ($entity_type == 'dataelement'){
         // foreach ($items as $item){
              $this->createDataElementEntity($items);
         // }
      }
      else{
          //add indicators
      }
  }
  private function createDataElementEntity($items){
      foreach ($items as $item){
          DataElement::create(['name' => $item['displayName'],
              'deuid' => $item['id'],
          'decode' => $item['code']])->save();
      }
  }
  private function createOrganisationUnitEntity($items){
      foreach ($items as $item){
          OrganisationUnit::create(['name' => $item['displayName'],
              'orgunituid' => $item['id']])->save();
      }
  }

  private function removeEntities($entity_id){
      $vids = [];
      try{
          if ($entity_id == 'data_element'){
              $vids = DataElement::loadMultiple();
          }
          if ($entity_id == 'organisation_unit'){
              $vids = OrganisationUnit::loadMultiple();
          }
      }
      catch(NoCorrespondingEntityClassException $e){
          drupal_set_message($this->t('DHIS:'.$e->getMessage()));
      }
      $this->entity_manager->getStorage($entity_id)->delete($vids);
  }
}