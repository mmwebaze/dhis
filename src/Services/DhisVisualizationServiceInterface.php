<?php

namespace Drupal\dhis\Services;


interface DhisVisualizationServiceInterface {
    public function getPivotTable($pivotTableId);
}