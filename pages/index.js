import css from '../styles/Home.module.css';

import { Hero, Category, Product, Banner, Footer } from '../components';

export default function Home() {
  return (
    <div>
      <Hero />
      <main className={css.main}>
        <Banner />
        <Category />
        <Banner />
        <Product />
        <Banner />
        <Footer />
      </main>
    </div>
  );
}
