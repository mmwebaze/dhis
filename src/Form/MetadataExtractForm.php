<?php

namespace Drupal\dhis\Form;


use Drupal\Core\Config\ConfigFactory;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\dhis\Entity\OrganisationUnit;
use Drupal\field\Entity\FieldConfig;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\taxonomy\Entity\Term;
use Drupal\taxonomy\Entity\Vocabulary;
use Symfony\Component\DependencyInjection\ContainerInterface;

class MetadataExtractForm extends FormBase implements ContainerInjectionInterface {
  protected $config_factory;
  private $content;

  public function __construct(ConfigFactory $config_factory) {
    $this->config_factory = $config_factory;
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
    $indicators = $config->get('dhis.indicators');
    $orgUnitGrp = $config->get('dhis.orgUnitGrp');

    if ($orgUnits == 1){

      $orgUnitService = \Drupal::service('dhis.orgunit');
      $this->content = $orgUnitService->getOrgUnits(FALSE);
      $this->content = $this->content['organisationUnits'];
      //$this->createVocabulary($this->content, 'Organisation Units');
      $this->createEntities($this->content);
      drupal_set_message('Sucessfully pulled organisation units from DHIS2');
    }

    if($dataElements == 1){
      $dataElementService = \Drupal::service('dhis.dataelement');
      $this->content = $dataElementService->getDataElements(FALSE);
      $this->content = $this->content['dataElements'];
      //$this->createVocabulary($this->content, 'Data Elements');
      $this->createEntities($this->content);
      drupal_set_message('Sucessfully pulled Data Elements units from DHIS2');
    }
  }
  public static function create(ContainerInterface $container){
    return new static(
      $container->get('config.factory')
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
  private function createEntities($metadata){

    foreach ($metadata as $item){
      OrganisationUnit::create(['name' => $item['displayName'],
      'orgunituid' => $item['id']])->save();
    }
  }
}