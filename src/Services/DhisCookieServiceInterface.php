<?php

namespace Drupal\dhis\Services;


interface DhisCookieServiceInterface {
    public function getCookie();
    public function destroyCookie();
}