<?php

namespace Drupal\dhis\Services;


class AnalyticService implements AnalyticServiceInterface {

  private $loginService;

  public function __construct(DhisLogin $loginService)
  {
    $this->loginService = $loginService;
    // $this->baseURL = $baseURL;
  }

  public function generateAnalytics(array $dataElements, array $orgUnits, array $periods) {

  }
}