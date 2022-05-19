import css from '../styles/Home.module.css';

import { Hero, Category, Product, Banner } from '../components';

export default function Home() {
  return (
    <div>
      <Hero />
      <main className={css.main}>
        <Category />
        <Product />
        <Banner />
      </main>
    </div>
  );
}
