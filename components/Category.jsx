import React from 'react';
import css from '../styles/Category.module.css';

const Category = () => {
  return (
    <section className={css.category}>
      <div>
        <h2 className={css.header}> CATEGORIES</h2>
      </div>
      <div className={css.categories}>
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
      </div>
    </section>
  );
};

export default Category;
