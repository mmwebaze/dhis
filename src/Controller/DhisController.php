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
    $orgUnitService = \Drupal::service('dhis.orgunit');
    $content = $orgUnitService->getOrgUnitGroups(FALSE);
    $data = json_decode($content, TRUE);
    drupal_set_message($data['organisationUnitGroups'][0]['code']);
    $config = $this->config_factory->getEditable('dhis.settings');
    $orgUnitGrp = $config->get('dhis.orgUnitGrp');
    $orgUnits = $config->get('dhis.orgUnits');
    $dataElements = $config->get('dhis.dataElements');
    $indicators = $config->get('dhis.indicators');

    if ($orgUnitGrp == 1){
      drupal_set_message(' grp '.$orgUnitGrp);
    }
    if ($orgUnits == 1){
      drupal_set_message(' units '.$orgUnits);
    }
    if($dataElements == 1){
      drupal_set_message('de '.$dataElements);
    }
    if($indicators == 1){
      drupal_set_message('ind '.$indicators);
    }


    /*foreach ($data as $value){
      foreach ($value as $key => $item){
        drupal_set_message($item['id'].' - '.$item['displayName']);
        $term = Vocabulary::create([
          'name' => $item['displayName'],
          'vid' => $item['id'],
        ])->delete();//->save();
      }

    }*/
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
}