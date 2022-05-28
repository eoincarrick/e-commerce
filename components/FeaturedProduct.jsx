import React from 'react';
import Link from 'next/link';
import css from '../styles/FeaturedProduct.module.css';

const FeaturedProduct = () => {
  return (
    <ul className={css.cardContainer}>
      <li className={css.card}>
        <div>
          <img
            className={css.productImage}
            src='https://images2.imgbox.com/cd/18/aWTfWkji_o.png'
            alt=''
          />
          <p className={css.productName}>
            Black Five-Panel Cap with White Logo
          </p>
        </div>
        <ul className={css.productDetails}>
          <li className={css.priceContainer}>
            <span className={css.green}>$31.22</span>
            <span className={css.gray}>$90.32</span>
          </li>
          <li className={css.buttonContainer}>
            <Link href='/product/name'>
              <button className={css.btn} type='butto'>
                Details
              </button>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default FeaturedProduct;
