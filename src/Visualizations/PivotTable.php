<?php
namespace Drupal\dhis\Visualizations;

class PivotTable implements  \JsonSerializable{
    //private $url;
    private $el;
    private $id;

    /*public function getUrl(){
        return $this->url;
    }
    public function setUrl($url){
        $this->url = $url;
    }*/
    public function getEl(){
        return $this->el;
    }
    public function setEl($el){
        $this->el = $el;
    }
    public function getId(){
        return $this->id;
    }
    public function setId($id){
        $this->id = $id;
    }

    /**
     * @return array
     */
    public function jsonSerialize() {
        $vars = get_object_vars($this);

        return $vars;
    }
}