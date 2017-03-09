<?php

/**
 * @file
 */

namespace Drupal\dhis\Services;

use Drupal\Core\Config\ConfigFactory;

class DhisLogin implements LoginService {

  private $header = array();
  private $username;
  private $password;
  private $isSessionAlive = FALSE;
  private $baseUrl;

  public function __construct(ConfigFactory $config_factory) {
    $config = $config_factory->getEditable('dhis.settings');
    $this->username = $config->get('dhis.username');
    $this->password = $config->get('dhis.password');
    $this->baseUrl = $config->get('dhis.link');
  }


  public function login($url){
    drupal_set_message($this->baseUrl.$url);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$this->baseUrl.$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $this->header);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, $this->username.':'.$this->password);
    #curl_setopt($ch, CURLOPT_URL,$url);

    $result = curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    //$r = var_dump(json_decode($result));
    #print($r);

    //return json_decode($result, true);

    return $result;
  }

  private function setHeaders($username, $password){
    $header = array();
    $header[] = 'Content-length: 0';
    $header[] = 'Content-type: application/json';
    return $header;
  }
  private function isSessionAlive(){

    return $this->isSessionAlive;
  }
}