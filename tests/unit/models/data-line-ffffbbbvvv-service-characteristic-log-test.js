import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-ffffbbbvvv-service-characteristic-log', 'Unit | Model | data-line-ffffbbbvvv-service-characteristic-log', {
  // Specify the other units that are required for this test.
  needs: [
    'model:data-line-ffffbbbvvv-cardinality-type',
    'model:data-line-ffffbbbvvv-catalog',
    'model:data-line-ffffbbbvvv-characteristic-type',
    'model:data-line-ffffbbbvvv-contragent',
    'model:data-line-ffffbbbvvv-customer-acl',
    'model:data-line-ffffbbbvvv-customer',
    'model:data-line-ffffbbbvvv-dba',
    'model:data-line-ffffbbbvvv-dictionary-value',
    'model:data-line-ffffbbbvvv-dictionary',
    'model:data-line-ffffbbbvvv-grp',
    'model:data-line-ffffbbbvvv-order-item',
    'model:data-line-ffffbbbvvv-order-state',
    'model:data-line-ffffbbbvvv-product-catalog',
    'model:data-line-ffffbbbvvv-resource-characteristic-log',
    'model:data-line-ffffbbbvvv-resource-characteristic',
    'model:data-line-ffffbbbvvv-resource-common',
    'model:data-line-ffffbbbvvv-resource-log',
    'model:data-line-ffffbbbvvv-resource-shared',
    'model:data-line-ffffbbbvvv-resource-spec-characteristic',
    'model:data-line-ffffbbbvvv-resource-spec',
    'model:data-line-ffffbbbvvv-resource-usage-spec',
    'model:data-line-ffffbbbvvv-resource',
    'model:data-line-ffffbbbvvv-role',
    'model:data-line-ffffbbbvvv-service-characteristic-log',
    'model:data-line-ffffbbbvvv-service-characteristic',
    'model:data-line-ffffbbbvvv-service-log',
    'model:data-line-ffffbbbvvv-service-order',
    'model:data-line-ffffbbbvvv-service-spec-acl',
    'model:data-line-ffffbbbvvv-service-spec-characteristic',
    'model:data-line-ffffbbbvvv-service-spec',
    'model:data-line-ffffbbbvvv-service-state',
    'model:data-line-ffffbbbvvv-service-usage-spec',
    'model:data-line-ffffbbbvvv-service',
    'model:data-line-ffffbbbvvv-user-group',
    'model:data-line-ffffbbbvvv-user-resource-spec',
    'model:data-line-ffffbbbvvv-user-role',
    'model:data-line-ffffbbbvvv-user-service-order',
    'model:data-line-ffffbbbvvv-user-service-spec',
    'model:data-line-ffffbbbvvv-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
