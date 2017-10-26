<?php

/**
 * @file
 */

namespace Drupal\dhis\Services;

use Drupal\Core\Config\ConfigFactory;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;

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
    $client = new Client();
      drupal_set_message($this->baseUrl.$url);
    $response = $client->request('GET', $this->baseUrl.$url,[
      'auth' =>[$this->username,$this->password],
      [
        'headers' => [
          'Accept' => 'application/json;charset=UTF-8'
        ]
      ]
    ]);

    return json_decode($response->getBody()->getContents(), true);
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

 /* public function login($url){
    $client = new Client(['headers' => [
      'Content-Type' => 'application/json;charset=UTF-8'
    ]]);
    drupal_set_message($this->baseUrl.$url);
    $response = $client->request('POST', $this->baseUrl.$url,[
      'form_params' => [
        'j_username' => $this->username,
        'j_password' => $this->password
      ]
    ]);
    $stream = Psr7\stream_for($response->getBody());
    echo $stream;
    die();
    var_dump((string)$response->getBody()->getContents());die();
    return json_decode($response->getBody()->getContents(), true);

  }*/
}