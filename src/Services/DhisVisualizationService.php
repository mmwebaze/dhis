<?php

namespace Drupal\dhis\Services;


class DhisVisualizationService implements DhisVisualizationServiceInterface {

    protected $loginService;
    protected $dhisCookieService;

    public function __construct(DhisLogin $loginService,DhisCookieServiceInterface $dhisCookieService) {
        $this->dhisCookieService = $dhisCookieService;
        $this->loginService = $loginService;
    }

    public function getPivotTable($pivotTableId){
        $this->loginService->loginWithCookie($this->dhisCookieService->getCookie());
        //print_r(array_values($this->dhisCookieService->getCookie()->toArray()));
    }
}