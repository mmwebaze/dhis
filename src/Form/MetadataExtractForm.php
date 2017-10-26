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
    $categories = $config->get('dhis.categories');
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
      drupal_set_message('Sucessfully pulled Data Elements units from DHIS2');
    }

    if ($dataElementsFile == 1){
      $module_path = drupal_get_path('module', 'dhis');
      $file_contents_accounts = file_get_contents($module_path . '/dhis.accounts.yml');

      if ($file_contents_accounts){
        $accounts = Yaml::parse($file_contents_accounts);
        $countries = $accounts['dhis_accounts']['countries'];

        if (count($countries) != 0){
          $category_voc_params = [
            'name' => 'Dhis2 Categories',
            'description' => 'DHIS2 Category combinations.',
            'vid' => 'dhis_categories'
          ];
          $this->createVocabulary($category_voc_params);

          foreach ($countries as $key => $value){
            $vid_account = $key.'_dataelements';
            $account_voc_params = [
              'name' => $key.' Data Elements',
              'vid' => $vid_account, 'description' => $value['uid'],
            ];
            $this->createVocabulary($account_voc_params);
          }

          foreach ($countries as $key => $value){
            $deList = $csvHandler->readCsv($value['dataelements']);
            foreach ($deList as $item){
              Term::create(['name' => $item['displayName'],
                'vid' => $key.'_dataelements',
                'description' => $item['id']])->save();
            }
            $categoryList = $csvHandler->readCsv($value['categories']);
            foreach($categoryList as $item){
              Term::create(['name' => $item['displayName'],
                'vid' => 'dhis_categories',
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
  private function createVocabulary(array $params){
    $vocabulary = Vocabulary::create($params)->save();
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