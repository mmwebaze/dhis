<?php

/**
 * @file
 */

namespace Drupal\dhis\Services;

interface LoginService
{
    public function login($url);
    public function testLogin(array $credentials);
    public function loginWithCookie($cookie);
    public function cookieLoginStatus($cookie);
}