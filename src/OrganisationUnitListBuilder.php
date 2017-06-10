<?php

namespace Drupal\dhis;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Routing\LinkGeneratorTrait;
use Drupal\Core\Url;

/**
 * Defines a class to build a listing of Organisation unit entities.
 *
 * @ingroup dhis
 */
class OrganisationUnitListBuilder extends EntityListBuilder {

  use LinkGeneratorTrait;

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['id'] = $this->t('Organisation unit ID');
    $header['name'] = $this->t('Name');
    $header['orgunituid'] = $this->t('Org unit uid');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\dhis\Entity\OrganisationUnit */
    $row['id'] = $entity->id();
    $row['name'] = $this->l(
      $entity->label(),
      new Url(
        'entity.organisation_unit.edit_form', array(
          'organisation_unit' => $entity->id(),
        )
      )
    );
    $row['orgunituid'] = $entity->getOrgunitUid();
    return $row + parent::buildRow($entity);
  }

}
