<?php

namespace Drupal\dhis\Services;

interface DataElementServiceInterface
{
    public function getDataElementByCode($code, $format);
    public function getDataElements($isPaginated, $format);
    public function getDatasetDataElements($datasetCode, $isPaginated, $format);
    public function getDataElementValues($dataElementCodes = array(), $periods = array(), $orgUnits = array());
}