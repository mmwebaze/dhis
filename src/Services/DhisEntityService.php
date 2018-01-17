<?php

namespace Drupal\dhis\Services;


use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Session\AccountInterface;

class DhisEntityService implements DhisEntityServiceInterface {
    protected $entity_manager;
    protected $current_user;

    public function __construct(EntityTypeManager $entity_manager, AccountInterface $current_user){
        $this->entity_manager = $entity_manager;
        $this->current_user = $current_user;
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
    public function createContent($dhis_data){

        $data_element_storage = $this->entity_manager->getStorage('data_element');
        $dataElementId = $data_element_storage->getQuery()->condition('deuid', 'FTRrcoaog83', '=')->execute();
        $data_element = $data_element_storage->loadMultiple($dataElementId);

        $node_storage = $this->entity_manager->getStorage('node');

        print(json_encode(current($data_element)->id(), 1));
        $node_storage->create([
            'type' => 'dhis_data',
            'title'       => 'Druplicon test',
            'field_dataelement' => ['target_id' => current($data_element)->id()],
            'user_id' => ['target_id' => $this->current_user->id()],
        ])->save();

        /*$storage = $this->entity_manager->getStorage('node');
        $nodeIds = $storage->getQuery()->condition('type', 'dhis_data', '=')->execute();
        $nodes = $storage->loadMultiple($nodeIds);
        //print(json_encode($nodes, 1));

        foreach ($nodes as $node){
            $dataElementRef = $node->get('field_dataelement')->getValue();
            print(json_encode($dataElementRef[0]['target_id'], 1));
        }*/
    }
}