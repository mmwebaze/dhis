<?php

namespace Drupal\dhis\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\dhis\Entity\OrganisationUnit;
use Drupal\dhis\Entity\DataElement;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\dhis\Services\AnalyticService;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Config\ConfigFactory;
use Symfony\Component\HttpFoundation\Request;
use \Drupal\dhis\Util\CsvHandler;
use Drupal\Core\File\FileSystem;
use Drupal\Core\Path\CurrentPathStack;

class DhisController extends ControllerBase implements ContainerInjectionInterface {

  protected $entity_manager;
  private $content = [];
  private $dhis_analytics;
  private $file_system;
  private $path_current;
  private $config_factory;
  private $dx;
  private $ou;

  public function __construct(EntityTypeManager $entity_manager, AnalyticService $dhis_analytics, FileSystem $file_system, CurrentPathStack $path_current, ConfigFactory $config_factory) {
    $this->entity_manager = $entity_manager;
    $this->dhis_analytics = $dhis_analytics;
    $this->file_system = $file_system;
    $this->path_current = $path_current;
    $this->config_factory = $config_factory;
  }

  public function display(){
    $form = \Drupal::formBuilder()->getForm('Drupal\dhis\Form\VisualizerForm');
    //drupal_set_message('Submitted request'.json_encode($form, 1));
    /*$vids = Vocabulary::loadMultiple();

    foreach ($vids as $vid){
      $vocabularyId = $vid->id();
      if ($vocabularyId == 'dhis_data_elements' || $vocabularyId == 'dhis_organisation_units'){
        $terms = $this->entity_manager->getStorage('taxonomy_term')->loadTree($vocabularyId,0,NULL,TRUE);
        if (!empty($terms)) {
          $temp = [];
          foreach($terms as $term) {
            $temp[$term->getDescription()] = $term->getName();
          }
          $this->content[$vocabularyId] = $temp;
        }
      }
    }

    $form['orgUnits']['#options'] = ['1' => 'Taby', '2' => 'Sirabo'];
    var_dump($form['orgUnits']['#options']);*/
    $this->content['form'] = $form;

   $element = [
      '#theme' => 'dhis',
      '#test_var' => $this->content,
    ];
    return $element;
  }
  public function generateAnalytics(Request $request){
    $pe = $this->getActivatedPeriods('dhis_period');

    $config = $this->config_factory->getEditable('dhis.settings');
    $selectedCountry = $config->get('dhis.country');

    if (isset($selectedCountry) && $selectedCountry != 'None'){
      $vid = $selectedCountry.'_dataelements';
      $vocabulary = Vocabulary::loadMultiple([$vid]);
      $ou = [];
      $dx = [];
      array_push($ou, $vocabulary[$vid]->getDescription());
      $this->ou = $ou;

      $terms = $this->entity_manager->getStorage('taxonomy_term')->loadTree($vid,0,NULL,TRUE);
      if (!empty($terms)) {
        foreach($terms as $term) {
          array_push($dx, $term->getDescription());
        }
        $this->dx = $dx;
      }
    }
    else{
      $entities = $this->getEntities();
      $this->dx = $entities['dx'];
      $this->ou = $entities['ou'];
    }

    $analyticsData = $this->dhis_analytics->generateAnalytics($this->dx, $this->ou, $pe);

    $data = [];

    $data['rows'] = $analyticsData['rows'];

    //$data['dimensions'] = $analyticsData['metaData']['dimensions']; for DHIS2 Only
      $data['dimensions'] = $analyticsData['metaData']; //for DATIM only
      $pe = $data['dimensions']['pe'];
    $header = ['de uid', 'de name', 'DE Code', '#','Country uid', 'Country', 'Country code', 'Disaggregation', 'Period', 'Value'];
    $rowsTemp = [];
    $y = count($data['rows'][0]) - count($pe); //Numbr of non data value rows
      for ($i = 0; $i < count($data['rows']); $i++){
          $temp = [];
          for($j = 0; $j < 8; $j++){
              array_push($temp, $data['rows'][$i][$j]);
          }
          array_push($rowsTemp, $temp);
      }
      //inserting category combo ids in row data
      $categoryTaxonomyTerms = $this->entity_manager->getStorage('taxonomy_term')->loadTree('dhis_categories',0,NULL,TRUE);
      $categoryTerms = [];
      if (!empty($categoryTaxonomyTerms)) {
        foreach($categoryTaxonomyTerms as $term) {
          $categoryTerms[$term->getDescription()] = $term->getName();
          //var_dump($categoryTerms);die($categoryTerms);
        }
      }

      for ($i = 0; $i < count($rowsTemp); $i++){
        $comboUid = explode('.', $rowsTemp[$i][0]);
        if (count($categoryTerms) != 0){
          $rowsTemp[$i][$y - 1] = $categoryTerms[$comboUid[1]];
        }else{
          $rowsTemp[$i][$y - 1] = $comboUid[1];
        }
      }
      $rows = [];
      foreach ($data['rows'] as $key => $row){
          $counter = 0; //iterates through the activated periods
          for ($x = $y; $x < count($row); $x++){

              $temp = $rowsTemp[$key];
             array_push($temp, $pe[$counter] );
              $counter++;
              array_push($temp, $row[$x]);
              array_push($rows, $temp);
          }
      }

    $csvHandler = new CsvHandler($this->file_system);
    $csvHandler->createCsv($header, $rows);

    $output = array(
        '#theme' => 'table',
        //'#cache' => ['disabled' => TRUE],
        '#caption' => ' Data pulled',
        '#header' => $header,
        '#rows' => $rows,
    );

    $this->content['table'] = $output;
    $this->content['url'] = '/sites/default/files/data.csv';

    $element = [
        '#theme' => 'dhis',
        '#test_var' => $this->content,
    ];
    return $element;
  }
  public static function create(ContainerInterface $container){
    return new static(
      $container->get('entity_type.manager'),
      $container->get('dhis_analytics'),
      $container->get('file_system'),
      $container->get('path.current'),
      $container->get('config.factory')
    );
  }
  private function getActivatedPeriods($vid){
      $activatedPeriods = [];
      $voc = Vocabulary::load($vid);
      $terms = $this->entity_manager->getStorage('taxonomy_term')->loadTree($voc->id(),0,NULL,TRUE);;
      foreach($terms as $term){
          if ($term->get('activate')->value == 1){
              array_push($activatedPeriods, $term->getName());
          }
      }
      if (count($activatedPeriods) == 0){
          array_push($activatedPeriods, 'LAST_4_QUARTERS');
      }

      return $activatedPeriods;
  }
  private function getEntities(){
    $entities = [];
    $dxElementUids = [];
    $orgUnitUids = [];
    $dataElements = DataElement::loadMultiple();

    foreach ($dataElements as $dx){
        array_push($dxElementUids, $dx->getDataElementUid());
    }
    $entities['dx'] = $dxElementUids;

    $orgUnits = OrganisationUnit::loadMultiple();
    foreach ($orgUnits as $ou){
        array_push($orgUnitUids, $ou->getOrgunitUid());
    }

    $entities['ou'] = $orgUnitUids;

    return $entities;
  }
}
