import Head from 'next/head';
import css from '../styles/Home.module.css';
import { AiFillStar } from 'react-icons/ai';
import shoe from '../assets/s.jpg';
import Image from 'next/image';

import { Hero } from '../components';

export default function Home() {
  return (
    <div>
      <main className={css.main}>
        <Hero />

        <section className={css.category}>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
          <div className={css.card}>
            <p className={css.categoryText}>Women's</p>
          </div>
        </section>

        <section className={css.product}>
          <div className={css.productCategory}>
            <p className={css.productLane}>SHOES</p>
            <div className={css.productCardContainer}>
              <div className={css.productCard}>
                <Image
                  className={css.productImage}
                  width={300}
                  height={200}
                  src={shoe}
                  alt='shoe'
                />
                <div className={css.desc}>
                  <span className={css.name}>Cotton Sneakers</span>
                  <span>
                    {[
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                    ]}
                  </span>
                  <span className={css.price}>$89.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.productCategory}>
            <p className={css.productLane}>WATCHES</p>
            <div className={css.productCardContainer}>
              <div className={css.productCard}>
                <Image
                  className={css.productImage}
                  width={300}
                  height={200}
                  src={shoe}
                  alt='shoe'
                />
                <div className={css.desc}>
                  <span className={css.name}>Cotton Sneakers</span>
                  <span>
                    {[
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                    ]}
                  </span>
                  <span className={css.price}>$89.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.productCategory}>
            <p className={css.productLane}>GLASSES</p>
            <div className={css.productCardContainer}>
              <div className={css.productCard}>
                <Image
                  className={css.productImage}
                  width={300}
                  height={200}
                  src={shoe}
                  alt='shoe'
                />
                <div className={css.desc}>
                  <span className={css.name}>Cotton Sneakers</span>
                  <span>
                    {[
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                      <AiFillStar className={css.star} />,
                    ]}
                  </span>
                  <span className={css.price}>$89.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
