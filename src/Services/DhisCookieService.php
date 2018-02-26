<?php

namespace Drupal\dhis\Services;

use GuzzleHttp\Cookie\CookieJar;
use GuzzleHttp\Cookie\SessionCookieJar;

class DhisCookieService implements DhisCookieServiceInterface {
    private $cookie;
    public function __construct()
    {
        $this->cookie = new SessionCookieJar('DHIS_SESSION', true);
    }

    public function getCookie(){
        return $this->cookie;
    }
    public function destroyCookie(){

    }
}