<?php

/**
 * @file
 * Contains Drupal\refchecks\Form\RenterForm
 */

namespace Drupal\dhis\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class DhisSettings extends ConfigFormBase {
  /*
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'dhis_settings';
  }

  /*
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['dhis.settings'];
  }

  /*
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $config = $this->config('dhis.settings');

    $form['link'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('DHIS Link'),
      '#default_value' => $config->get('dhis.link'),
      '#required' => TRUE,
    );

    $form['username'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('DHIS Username'),
      '#default_value' => $config->get('dhis.username'),
      '#required' => TRUE,
    );

    $form['password'] = array(
      '#type' => 'password',
      '#title' => $this->t('DHIS Password'),
      '#default_value' => $config->get('dhis.password'),
      '#required' => TRUE,
    );
    return $form;
  }
  /*
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state){
    $config = $this->config('dhis.settings');
    $config->set('dhis.link', $form_state->getValue('link'));
    $config->set('dhis.username', $form_state->getValue('username'));
    $config->set('dhis.password', $form_state->getValue('password'));
    $config->save();
    return parent::submitForm($form, $form_state);
  }
}