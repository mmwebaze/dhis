<?php

namespace Drupal\dhis\Plugin\Block;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Block\Annotation\Block;
use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Dhis2 display' Block.
 *
 * @Block(
 *   id = "dhis_block",
 *   admin_label=@Translation("Dhis Block")
 * )
 */
class DhisBlock extends BlockBase{
  public function build() {
    //$form = \Drupal::formBuilder()->getForm('Drupal\dhis\Form\VisualizerForm');
    return array(
      '#theme' => 'dhis',
      '#markup' => $this->t('Hello, World!'),
    );
  }

}