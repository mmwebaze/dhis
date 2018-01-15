<?php

namespace Drupal\dhis\Form;


use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;

class DataElementFilterForm extends FormBase{
    public function getFormId() {

        return 'DataElementFilterForm';
    }

    public function buildForm(array $form, FormStateInterface $form_state) {
        $form = array();
        $form['filters']['text'] = array(
            '#title' => $this->t('Text'),
            '#type' => 'textfield',
            '#default_value' => \Drupal::request()->get('text'),
        );
        $form['filters']['submit_apply'] = [
            '#type' => 'submit',
            '#value' => t('Filter'),
        ];

        return $form;
    }
    public function submitForm(array &$form, FormStateInterface $form_state) {
        $form_values = $form_state->getValues();
        drupal_set_message(json_encode($form_values['text'], 1));
        $params = array('text' => $form_values['text'], 'form_id' => $form_values['form_id']);
        $form_state->setRedirect('entity.data_element.collection', $params);
        //$form_state->setRedirectUrl(Url::fromUri('internal:' . '/admin/structure/data_element', $params));
    }
}