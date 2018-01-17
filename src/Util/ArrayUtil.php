<?php

namespace Drupal\dhis\Util;


class ArrayUtil
{
    public function implodeArray($arrayToImplode = array(), $separator = ";"){

        return implode($separator, $arrayToImplode);
    }
    public function reformatDhisAnalyticData($analytics_data){
        $rows_final = [];
        $periods = $analytics_data['metaData']['pe'];

        $rows = $analytics_data['rows'];
        foreach ($rows as $k => $row){
            $split = array_splice($row, ($analytics_data['width'] - count($periods)), count($periods));
            //drupal_set_message(count($split).' <>'.$k);
            //drupal_set_message(json_encode($split, 1).' -'.$k);
            foreach ($split as $key => $value){
                //drupal_set_message($row[1].' => '.$value.'-'.$periods[$key]);
                array_push($rows_final, [$row[0], $row[1], $row[2], $row[4], $row[5], $row[6], $periods[$key], $value]);
            }
        }

        return $rows_final;
    }
}