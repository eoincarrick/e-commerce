import React from 'react';
import css from '../styles/Product.module.css';
import Link from 'next/link';
import Image from '../assets/shoew.png';

const Product = () => {
  return (
    <Link href={`/product/ddd`}>
      <ul className={css.productContainerCard}>
        <li className={css.cardContainer}>
          <div className={css.card}>
            <img src={Image} alt='' />
          </div>
        </li>
      </ul>
    </Link>
  );
};

export default Product;
