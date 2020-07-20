import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  external_id: DS.attr('string'),
  cfs_id: DS.belongsTo('data-line-ffffbbbvvv-service', { inverse: null, async: false }),
  parent_service_id: DS.belongsTo('data-line-ffffbbbvvv-service', { inverse: null, async: false }),
  resource_shared_id: DS.belongsTo('data-line-ffffbbbvvv-resource-shared', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-ffffbbbvvv-customer', { inverse: null, async: false }),
  resource_shared_id: DS.belongsTo('data-line-ffffbbbvvv-resource-shared', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-ffffbbbvvv-resource-spec', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-ffffbbbvvv-contragent', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-ffffbbbvvv-service', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-ffffbbbvvv-resource', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-ffffbbbvvv-resource-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  external_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_service_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.parent_service_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_shared_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.resource_shared_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-ffffbbbvvv-resource.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resourceE', 'data-line-ffffbbbvvv-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    external_id: attr('External_id', { index: 2 }),
    cfs_id: belongsTo('data-line-ffffbbbvvv-service', 'Cfs_id', {
      name: attr('Name', { index: 4 })
    }, { index: 3 }),
    parent_service_id: belongsTo('data-line-ffffbbbvvv-service', 'Parent_service_id', {
      name: attr('Name', { index: 6 })
    }, { index: 5 }),
    resource_shared_id: belongsTo('data-line-ffffbbbvvv-resource-shared', 'Resource_shared_id', {
      external_id: attr('External_id', { index: 8 })
    }, { index: 7 }),
    resource_spec_id: belongsTo('data-line-ffffbbbvvv-resource-spec', 'Resource_spec_id', {
      enum: attr('Enum', { index: 10 })
    }, { index: 9 }),
    customer_id: belongsTo('data-line-ffffbbbvvv-customer', 'Customer_id', {
      customer: attr('Customer', { index: 12 })
    }, { index: 11 }),
    contragent_id: belongsTo('data-line-ffffbbbvvv-contragent', 'Contragent_id', {
      contragent: attr('Contragent', { index: 14 })
    }, { index: 13 }),
    parent_id: belongsTo('data-line-ffffbbbvvv-resource', 'Parent_id', {
      name: attr('Name', { index: 20 })
    }, { index: 19 })
  });

  modelClass.defineProjection('resourceL', 'data-line-ffffbbbvvv-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    external_id: attr('External_id', { index: 2 }),
    cfs_id: belongsTo('data-line-ffffbbbvvv-service', 'Name', {

    }, { index: 3, hidden: true }),
    parent_service_id: belongsTo('data-line-ffffbbbvvv-service', 'Name', {

    }, { index: 4, hidden: true }),
    resource_shared_id: belongsTo('data-line-ffffbbbvvv-resource-shared', 'External_id', {

    }, { index: 5, hidden: true }),
    resource_spec_id: belongsTo('data-line-ffffbbbvvv-resource-spec', 'Enum', {

    }, { index: 6, hidden: true }),
    customer_id: belongsTo('data-line-ffffbbbvvv-customer', 'Customer', {

    }, { index: 7, hidden: true }),
    contragent_id: belongsTo('data-line-ffffbbbvvv-contragent', 'Contragent', {

    }, { index: 8, hidden: true }),
    parent_id: belongsTo('data-line-ffffbbbvvv-resource', 'Name', {

    }, { index: 11, hidden: true })
  });
};
