<?php

namespace Drupal\dhis\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\taxonomy\Entity\Vocabulary;
use Symfony\Component\DependencyInjection\ContainerInterface;

class DhisController extends ControllerBase implements ContainerInjectionInterface {

  protected $entity_manager;
  private $content = [];

  public function __construct(EntityTypeManager $entity_manager) {
    $this->entity_manager = $entity_manager;
  }

  public function display(){

    $vids = Vocabulary::loadMultiple();

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

   $element = [
      '#theme' => 'dhis',
      '#test_var' => $this->content
    ];
    return $element;
  }
  public static function create(ContainerInterface $container){
    return new static(
      $container->get('entity_type.manager')
    );
  }
}