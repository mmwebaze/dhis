<?php

/**
 * @file
 * Contains Drupal\refchecks\Form\RenterForm
 */

namespace Drupal\dhis\Form;

use Symfony\Component\Yaml\Yaml;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class DhisSettingsForm extends ConfigFormBase {
  private $accounts;
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

    $form['dhis'] = array(
      '#type' => 'fieldset',
      '#title' => $this->t('DHIS2 Settings'),
    );

    $form['dhis']['link'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('DHIS Link'),
      '#default_value' => $config->get('dhis.link'),
      '#required' => TRUE,
    );

    $form['dhis']['username'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('DHIS Username'),
      '#default_value' => $config->get('dhis.username'),
      '#required' => TRUE,
    );

    $form['dhis']['password'] = array(
      '#type' => 'password',
      '#title' => $this->t('DHIS Password'),
      '#default_value' => $config->get('dhis.password'),
      '#required' => TRUE,
    );

    $form['metadata'] = array(
      '#type' => 'fieldset',
      '#title' => $this->t('DHIS2 Metadata to import'),
    );
    $form['metadata']['orgUnitGrp'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Organisation Unit Groups'),
      '#default_value' => $config->get('dhis.orgUnitGrp'),
    );
    $form['metadata']['orgUnits'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Organisation Units'),
      '#default_value' => $config->get('dhis.orgUnits'),
    );
    $form['metadata']['dataElements'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Data Elements from remote'),
      '#default_value' => $config->get('dhis.dataElements'),
    );
    $form['metadata']['dataElementsfile'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Data Elements from file'),
      '#default_value' => $config->get('dhis.dataElementsfile'),
    );
    $form['metadata']['indicators'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Indicators'),
      '#default_value' => $config->get('dhis.indicators'),
    );


    $module_path = drupal_get_path('module', 'dhis');
    $file_contents_accounts = file_get_contents($module_path . '/dhis.accounts.yml');
    $accounts = Yaml::parse($file_contents_accounts);
    if ($file_contents_accounts){
      $countries = $accounts['dhis_accounts']['countries'];
      $this->accounts = count($countries);
      if ($this->accounts != 0){
        $form['accounts'] = array(
          '#type' => 'fieldset',
          '#title' => $this->t('Accounts to import data from'),
        );
        $options = [];
        foreach($countries as $key => $value){
          $options[$key] = t($key);
        }
        $options['None'] = t('none');

        $form['accounts']['country'] = array(
          '#type' => 'radios',
          '#title' => $this->t('Select Country'),
          '#options' => $options,
          '#default_value' => $config->get('dhis.country'),
        );
      }
    }

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
    $config->set('dhis.orgUnitGrp', $form_state->getValue('orgUnitGrp'));
    $config->set('dhis.orgUnits', $form_state->getValue('orgUnits'));
    $config->set('dhis.dataElements', $form_state->getValue('dataElements'));
    $config->set('dhis.dataElementsfile', $form_state->getValue('dataElementsfile'));

    if ($this->accounts != 0){
      $config->set('dhis.country', $form_state->getValue('country'));
    }
    $config->set('dhis.indicators', $form_state->getValue('indicators'));
    $config->save();
    parent::submitForm($form, $form_state);
  }
}