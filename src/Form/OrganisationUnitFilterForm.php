<?php

namespace Drupal\dhis\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class OrganisationUnitFilterForm extends FormBase{
    public function getFormId() {

        return 'OrganisationUnitFilterForm';
    }

    public function buildForm(array $form, FormStateInterface $form_state) {
        $form = array();
        $form['filters']['name'] = array(
            '#title' => $this->t('Display Name'),
            '#type' => 'textfield',
            '#default_value' => \Drupal::request()->get('name'),
        );
        $form['filters']['submit_apply'] = [
            '#type' => 'submit',
            '#value' => t('Filter'),
        ];

        return $form;
    }
    public function submitForm(array &$form, FormStateInterface $form_state) {
        $form_values = $form_state->getValues();
        $params = array('name' => $form_values['name'], 'form_id' => $form_values['form_id']);
        $form_state->setRedirect('entity.organisation_unit.collection', $params);
    }
}