<?php

namespace Drupal\dhis\Util;


class ArrayImploder
{
    public static function implodeArray($arrayToImplode = array(), $separator = ";"){

        return implode($separator, $arrayToImplode);
    }
}