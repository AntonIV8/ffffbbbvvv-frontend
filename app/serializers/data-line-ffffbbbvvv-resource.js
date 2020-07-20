import { Serializer as resourceSerializer } from
  '../mixins/regenerated/serializers/data-line-ffffbbbvvv-resource';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(resourceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
