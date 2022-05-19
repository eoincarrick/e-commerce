import React from 'react';
import css from '../styles/Header.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import {Cart} from './index'

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <p>Dempi Commerce</p>

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
      </nav>

      <Cart />
    </header>
  );
};

export default Header;
