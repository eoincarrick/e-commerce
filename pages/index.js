import css from '../styles/Home.module.css';
import { Hero, Category, Product, Banner, Footer } from '../components';

import { client } from '../library/client';

export default function Home({ products, categories }) {
  return (
    <div>
      <Hero />
      <main className={css.main}>
        <Banner />
        <Category categories={categories} />
        <Banner />
        <Product products={products} />
        <Banner />
        <Footer />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const productsQuery = `*[_type == 'product']{
  name,
  slug,
  image,
  new_price,
  old_price
}`;

  const categoryQuery = `*[_type == 'category']{
  name,
  image,
  _id
}`;

  const products = await client.fetch(productsQuery);
  const categories = await client.fetch(categoryQuery);

  return {
    // props that will be passed to the component
    props: {
      products,
      categories,
    },
  };
};
