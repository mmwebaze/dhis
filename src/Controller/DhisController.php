<?php

namespace Drupal\dhis\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Config\ConfigFactory;
use Drupal\taxonomy\Entity\Vocabulary;
use Symfony\Component\DependencyInjection\ContainerInterface;

class DhisController extends ControllerBase implements ContainerInjectionInterface {

  protected $config_factory;

  public function __construct(ConfigFactory $config_factory) {
    $this->config_factory = $config_factory;
  }

  public function display(){



    $config = $this->config_factory->getEditable('dhis.settings');
    $orgUnitGrp = $config->get('dhis.orgUnitGrp');
    $orgUnits = $config->get('dhis.orgUnits');
    $dataElements = $config->get('dhis.dataElements');
    $indicators = $config->get('dhis.indicators');

    if ($orgUnitGrp == 1){
      $orgUnitService = \Drupal::service('dhis.orgunit');
      $content = $orgUnitService->getOrgUnitGroups(FALSE);
      $voc = Vocabulary::create(['name' => 'Organisation Units Group', 'vid' => 'Organisation_Units_Group',
        'description' => 'A group of similar Organisation Unit Types',])->save();
      $data = json_decode($content, TRUE);
      drupal_set_message($voc);
      drupal_set_message(' grp '.$orgUnitGrp);
      /*foreach ($data as $value){
        foreach ($value as $key => $item){
          drupal_set_message($item['id'].' - '.$item['displayName']);
          $term = Vocabulary::create([
            'name' => $item['displayName'],
            'vid' => $item['id'],
          ])->delete();//->save();
        }
      }*/

    }

    if ($orgUnits == 1){
      drupal_set_message(' units '.$orgUnits);
    }

    if($dataElements == 1){
      $dataElementService = \Drupal::service('dhis.dataelement');
      $content = $dataElementService->getDataElements(FALSE);
      $data = json_decode($content, TRUE);
      drupal_set_message('de '.$dataElements);
    }

    if($indicators == 1){
      drupal_set_message('ind '.$indicators);
    }
    $element = [
      '#theme' => 'dhis',
      '#test_var' => $this->t($content)
    ];
    return $element;
  }
  public static function create(ContainerInterface $container){
    return new static(
      $container->get('config.factory')
    );
  }
  private function createVocabulary($data){
    foreach ($data as $value) {
      foreach ($value as $key => $item) {
        drupal_set_message($item['id'] . ' - ' . $item['displayName']);
        $term = Vocabulary::create(['name' => $item['displayName'], 'vid' => $item['id'],])->delete();//->save();
      }
    }
  }
}