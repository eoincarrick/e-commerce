// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
// Then we give our schema to the builder and provide the result to Sanity
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import document schemas
import product from './product';
import category from './category';
import hero from './hero';
import tags from './tags';
import color from './color';
import size from './size';

// We import object schemas
import blockContent from './blockContent';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    product,
    category,
    tags,
    color,
    size,
    hero,

    /* When added to this list, object types can be used as
   { type: "typename" } in other document schemas.

    Note: This type don't show inside sanity studio,
    and they don't have a type: 'document' but 'object' instead.
    That's why they are object types.
    */

    blockContent,
  ]),
});
