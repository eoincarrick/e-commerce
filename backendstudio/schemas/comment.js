export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'product',
      type: 'reference',
      to: [{ type: 'product' }],
    },
  ],
};
