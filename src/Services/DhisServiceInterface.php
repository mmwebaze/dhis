<?php

namespace Drupal\dhis\Services;


interface DhisServiceInterface {
    public function getDhisEntities($entity_type);
    public function removeDhisEntities($entity_type);
    public function createContent($dhis_data);
}