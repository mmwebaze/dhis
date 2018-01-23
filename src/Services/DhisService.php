<?php

namespace Drupal\dhis\Services;


use Drupal\Core\Config\ConfigFactory;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Session\AccountInterface;
use Drupal\dhis\Util\ArrayUtil;

class DhisService implements DhisServiceInterface {
    protected $entity_manager;
    protected $current_user;
    protected $config_factory;
    protected $arrayUtil;

    public function __construct(EntityTypeManager $entity_manager, AccountInterface $current_user, ConfigFactory $config_factory){
        $this->entity_manager = $entity_manager;
        $this->current_user = $current_user;
        $this->config_factory = $config_factory->getEditable('dhis.settings');
        $this->arrayUtil = new ArrayUtil();
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
    public function createContent($rows){

        $header = ['de_uid' => 0, 'de_name' => 1, 'code' => 2,'org_uid' => 3, 'org_name' => 4,
            'org_code' => 5, 'period' => 6, 'value' => 7];

        $node_storage = $this->entity_manager->getStorage('node');
        $data_element_storage = $this->entity_manager->getStorage('data_element');
        $org_unit_storage = $this->entity_manager->getStorage('organisation_unit');

        foreach ($rows as $row){
            $de_uid = $row[$header['de_uid']];
            $de_name = $row[$header['de_name']];
            $org_uid = $row[$header['org_uid']];
            $country = $row[$header['country']];
            $country_code = $row[$header['country_code']];
            $value = $row[$header['value']];

            $dataElementId = $data_element_storage->getQuery()->condition('deuid', $de_uid, '=')->execute();
            $data_element = $data_element_storage->loadMultiple($dataElementId);
            $orgUnitId = $org_unit_storage->getQuery()->condition('orgunituid', $org_uid, '=')->execute();
            $org_unit = $org_unit_storage->loadMultiple($orgUnitId);

            $node_storage->create([
                'type' => 'dhis_data',
                'title'       => $de_name,
                'value' => $value,
                'data_element' => ['target_id' => current($data_element)->id()],
                'organisation_unit' => ['target_id' => current($org_unit)->id()],
                'user_id' => ['target_id' => $this->current_user->id()],
            ])->save();
        }
    }
    public function deleteContent(){
        $storage = $this->entity_manager->getStorage('node');
        $ids = $storage->getQuery()->condition('type', 'dhis_data', '=')->execute();
        $dhis_data = $storage->loadMultiple($ids);

        foreach ($dhis_data as $data){
            $data->delete();
        }
    }
    public function getDhisContentType(){
        $storage = $this->entity_manager->getStorage('node_type');
        $ids = $storage->getQuery()->condition('type', 'dhis_data', '=')->execute();
        $content_types = $storage->loadMultiple($ids);
        return current($content_types);
    }
    public function analyticData($analyticsData){
       $exclude_value = $this->config_factory->get('dhis.empty_value');

        return $this->arrayUtil->reformatDhisAnalyticData($analyticsData, $exclude_value);
    }
}