<?php

namespace Drupal\dhis\Services;


use Drupal\Core\Entity\EntityTypeManager;

class DhisEntityService{
    protected $entity_manager;

    public function __construct(EntityTypeManager $entity_manager){
        $this->entity_manager = $entity_manager;
    }

    /**
     * @param $entity_type $entity_type can take on 'data_element or organisation_unit'
     *
     * @return array of dhis2 uids
     *
     */
    public function getDhisEntities($entity_type){
        $entityUids = [];
        $storage = $this->entity_manager->getStorage($entity_type);
        $ids = $storage->getQuery()->condition('status', 1, '=')->execute();
        $entities = $storage->loadMultiple($ids);

        foreach ($entities as $entity){
            if ($entity_type == 'data_element'){
                array_push($entityUids, $entity->getDataElementUid());
            }
            elseif ($entity_type == 'organisation_unit'){
                array_push($entityUids, $entity->getOrgunitUid());
            }
            else{

            }
        }

        return $entityUids;
    }
    public function removeDhisEntities($entity_type){
        $storage = $this->entity_manager->getStorage($entity_type);
        $ids = $storage->getQuery()->execute();
        $entities = $storage->loadMultiple($ids);

        switch ($entity_type){
            case 'data_element':
                $storage->delete($entities);
                break;
            case 'organisation_unit':
                $storage->delete($entities);
                break;
            default:
                drupal_set_message($this->t(' Unknown Dhis2 entity type'));
        }
    }
}