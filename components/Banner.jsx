import React from 'react';
import css from '../styles/Banner.module.css';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={css.bannerContainer}>
      <div className={css.start}>
        <p className={css.discountPrice}>70% OFF</p>
        <p className={css.discountName}>Discount Sales</p>
        <p className={css.discountPrice}>Best product of the month</p>
        <Link href='/product/name'>
          <button className={css.btn} type='button'>
            Buy Now
          </button>
        </Link>
      </div>
      <div className={css.middle}>
        <img
          className={css.image}
          src='https://images2.imgbox.com/c3/92/m3EhIgfx_o.png'
          alt=''
        />
      </div>
      <div className={css.end}>
        <p className={css.discountPrice}>
          <span className={css.color}>300</span> Quantity Left
        </p>
        <p className={css.discountName}>WEAR</p>
        <p className={css.discountName}>& FEEL IT.</p>
        <Link href='/product/name'>
          <button className={css.btn} type='button'>
            Add Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
