import React from 'react';
import { client, urlFor } from '../../library/client';

const ProductCredentials = () => {
  // Querying for data from backend (SANITY)
  return <div>ProductCredentials</div>;
};

export const getStaticPaths = async () => {};

export const getStaticProps = async () => {
  // Querying for data from backend (SANITY)
  const queryProduct = `*`;

  // Getting data back from backend (SANITY)
  const product = await client.fetch(queryProduct);

  return {
    // And passing the data to props, to render it later.
    props: {
      product,
    },
  };
};

export default ProductCredentials;
