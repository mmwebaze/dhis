<?php

namespace Drupal\dhis\Util;

use Drupal\Core\File\FileSystem;

class CsvCreator
{
    private $file_system;
    public function __construct(FileSystem $file_system)
    {
        $this->file_system = $file_system;
    }
    public function createCsv(array $header, array $data){
        array_unshift($data, $header);
        $file = fopen($this->file_system->realpath("private://")."\\data.csv","w");

        foreach ($data as $row){
                drupal_set_message('Creating file');
                fputcsv($file,$row, ',');
        }
        fclose($file);
    }
}