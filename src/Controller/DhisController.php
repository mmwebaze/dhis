<?php

namespace Drupal\dhis\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\dhis\Services\AnalyticService;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DhisController extends ControllerBase implements ContainerInjectionInterface {

  protected $entity_manager;
  private $content = [];
  private $dhis_analytics;

  public function __construct(EntityTypeManager $entity_manager, AnalyticService $dhis_analytics) {
    $this->entity_manager = $entity_manager;
    $this->dhis_analytics = $dhis_analytics;
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
    $dx = ['hfdmMSPBgLG'];
    $ou = ['ImspTQPwCqd'];
    $pe = ['THIS_YEAR'];
    $analyticsData = $this->dhis_analytics->generateAnalytics($dx, $ou, $pe);
    $render_array = [];

      $render_array['rows'] = $analyticsData['rows'];
      $render_array['dimensions'] = $analyticsData['metaData']['dimensions'];
    //return new JsonResponse( $analyticsData );
      drupal_set_message(json_encode($render_array, 1));

      $element = [
          '#theme' => 'dhis',
          '#test_var' => new JsonResponse( $render_array ),
          //'#test_var' => $render_array,
      ];
      return $element;
  }
  public static function create(ContainerInterface $container){
    return new static(
      $container->get('entity_type.manager'),
      $container->get('dhis_analytics')
    );
  }
}