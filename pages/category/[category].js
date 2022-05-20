import React from 'react';
import { client, urlFor } from '../../library/client';
import { Banner, Product } from '../../components';
import css from '../../styles/CategoryCredentials.module.css';
import Link from 'next/link';

const Category = ({ categorySlug }) => {
  const data = categorySlug.map((item) => console.log(item));
  return (
    <div className={css.main}>
      <Banner />
      <ul className={css.cardContainer}>
        {categorySlug.map((item, i) => (
          <li key={i} className={css.card}>
            <div className={css.center}>
              <img
                className={css.productImage}
                src={urlFor(item?.image[0])}
                alt=''
              />
              <p className={css.productName}>{item.name}</p>
            </div>
            <ul className={css.productDetails}>
              <li className={css.priceContainer}>
                <span className={css.green}>${item.new_price}</span>
                <span className={css.gray}>${item.old_price}</span>
              </li>
              <li className={css.buttonContainer}>
                <Link href={`/product/${item.slug.current}`}>
                  <button className={css.btn} type='button'>
                    Details
                  </button>
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{
  category{
  _ref,
}
}
`;
  const id = await client.fetch(query);

  const paths = id.map((item) => ({
    params: {
      category: item.category._ref,
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
