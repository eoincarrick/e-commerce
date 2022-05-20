import React from 'react';
import { client } from '../../library/client';

const Category = ({ categorySlug }) => {
  console.log(categorySlug);
  return <div>Category</div>;
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{
  category{
  _ref,
}
}
`;
  const id = await client.fetch(query);

  const paths = id.map((product) => ({
    params: {
      slug: product.categories._ref,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  const query = `*[_type == 'product' && references("${category}")]{
  name,
  image,
  slug,
  new_price,
  old_price
}`;

  const categorySlug = await client.fetch(query);

  return {
    props: {
      categorySlug,
    },
  };
};

export default Category;
