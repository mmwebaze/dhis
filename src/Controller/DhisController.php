<?php

namespace Drupal\dhis\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\taxonomy\Entity\Term;
use Drupal\taxonomy\Entity\Vocabulary;

class DhisController extends ControllerBase implements ContainerInjectionInterface {

  public function display(){
    $orgUnitService = \Drupal::service('dhis.orgunit');
    $content = $orgUnitService->getOrgUnitGroups(FALSE);
    $data = json_decode($content, TRUE);
    drupal_set_message($data['organisationUnitGroups'][0]['code']);

    foreach ($data as $value){
      foreach ($value as $key => $item){
        drupal_set_message($item['id'].' - '.$item['displayName']);
        $term = Vocabulary::create([
          'name' => $item['displayName'],
          'vid' => $item['displayName'],
        ])->save();
      }

    }
    $element = [
      '#theme' => 'dhis',
      '#test_var' => $this->t($content)
    ];
    return $element;
  }
}