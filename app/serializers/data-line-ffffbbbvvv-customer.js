import { Serializer as customerSerializer } from
  '../mixins/regenerated/serializers/data-line-ffffbbbvvv-customer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(customerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
