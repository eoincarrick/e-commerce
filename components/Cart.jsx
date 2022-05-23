import React from 'react';
import css from '../styles/Cart.module.css';

import { useManageContext } from '../context/ManageStateContext';

const Cart = () => {
  const { cartItems } = useManageContext();

  return (
    <div className={css.cartContainer}>
      <div className={css.container}></div>
    </div>
  );
};

export default Cart;
