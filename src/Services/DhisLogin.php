<?php

/**
 * @file
 */

namespace Drupal\dhis\Services;

use Drupal\Core\Config\ConfigFactory;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\TooManyRedirectsException;

class DhisLogin implements LoginService
{

    protected $header = array();
    protected $username;
    protected $password;
    protected $isSessionAlive = FALSE;
    protected $httpClient;
    protected $baseUrl;
    //protected $dhisCookieService;

    public function __construct(ConfigFactory $config_factory)
    {
        $config = $config_factory->getEditable('dhis.settings');
        $this->username = $config->get('dhis.username');
        $this->password = $config->get('dhis.password');
        $this->baseUrl = $config->get('dhis.link');
       // $this->dhisCookieService = $dhisCookieService;
        $this->httpClient = new Client();
    }


    public function login($url)
    {
        //$client = new Client();
        $response = $this->httpClient->request('GET', $this->baseUrl . $url, ['auth' => [$this->username, $this->password, 'basic']]);
        return json_decode($response->getBody()->getContents(), true);
    }

    private function setHeaders($username, $password)
    {
        $header = array();
        $header[] = 'Content-length: 0';
        $header[] = 'Content-type: application/json';
        return $header;
    }

    private function isSessionAlive()
    {

        return $this->isSessionAlive;
    }
    public function testLogin(array $credentials){
        $this->baseUrl = $credentials['baseUrl'];
        $this->username = $credentials['username'];
        $this->password = $credentials['password'];
        try{
            $this->login('me');
            return TRUE;
        }
        catch(TooManyRedirectsException $e){

            return FALSE;
        }

    }
    public function loginWithCookie($cookie){
        $base = "https://dhis2.jsi.com/mfl/";
        //$url = $this->baseUrl.'Login';//?loginName='.$this->username.'&password='.$this->password;
        $url = $base .  "dhis-web-commons-security/login.action";
        $response = $this->httpClient->request('POST', $url, [
            'form_params' => [
                'loginName' => $this->username,
                'password' => $this->password
            ],
            'cookies' => $cookie
        ]);

        //print_r($response->getStatusCode());
    }
    public function cookieLoginStatus($cookie){

    }
}