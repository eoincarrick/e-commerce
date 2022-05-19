import React from 'react';
import css from '../styles/Header.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import { Cart } from './index';
import Link from 'next/link'

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href={'/'}>
          <p className={css.logo}>
            Dempi<span className={css.color}>Commerce</span>
          </p>
        </Link>

        <nav className={css.flex}>
          <div className={css.list}>
            <li className={css.item}>Home</li>
            <li className={css.item}>Home</li>
            <li className={css.item}>Home</li>
            <li className={css.item}>Home</li>
            <li className={css.item}>Home</li>
          </div>

          <ul className={css.icon}>
            <div className={css.cartContainer}>
              <HiShoppingCart className={css.list} />
              <span className={css.cartNumber}>1</span>
            </div>
          </ul>
        </nav>

        {/* <Cart /> */}
      </nav>
    </header>
  );
};

export default Header;
