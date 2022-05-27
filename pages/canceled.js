import React from 'react';
import css from '../styles/canceled.module.css';
import Link from 'next/link';

const canceled = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>Checkout Canceled</p>
      <p className={css.text}>😢</p>
      <Link href='/'>
        <button className={css.btn}>Home</button>
      </Link>

      <p>
        If you faced any problem while checking out, please contact us on{' '}
        <a href='mailto:checkout@dempicommerce.com' className={css.link}>
          checkout@dempicommerce.com
        </a>
      </p>
    </div>
  );
};

export default canceled;
