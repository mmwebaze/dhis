<?php

namespace Drupal\dhis\Form;


use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class VisualizerForm extends FormBase {
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['dx'] = array(
      '#type' => 'select',
      '#title' => t('Data Elements'),
    );
    $form['orgUnits'] = array(
      '#type' => 'select',
      '#title' => t('Org units'),
    );
    $form['visualizer'] = array(
      '#type' => 'submit',
      '#value' => t('View graph'),
    );

    return $form;
  }

  public function getFormId() {
    return 'visualizer_form';
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {

  }
}