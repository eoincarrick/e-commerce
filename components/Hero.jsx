import React from 'react';
import css from '../styles/Hero.module.css';
import image from '../assets/shoew.png';

const Hero = () => {
  return (
    <section className={css.section}>
      <div>
        <img
          className={css.image}
          src='https://images2.imgbox.com/da/26/JAB9EPY9_o.png'
          alt='dd'
        />
      </div>
      <div className={css.text}>
        <h3 className={css.title}>Lorram </h3>
        <h1 className={css.name}>Brand New</h1>
        <p className={css.description}>
          Discover the latest additions to our <br /> menswear collection
        </p>
        <button className={css.btn}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Hero;
