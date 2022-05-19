import React from 'react';
import css from '../styles/Hero.module.css';
import banner from '../assets/q.jpg';

const Hero = () => {
  return (
    <section
      className={css.section}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170')`,
      }}
    >
      <div className={css.text}>
        <h1>#1 Best Shopping Center</h1>
        <p>lorem ipsumsum d orem ipsum d orem ipsum d</p>
        <p>lorem ipsumsum d orem ipsum d orem ipsum d</p>
        <p>lorem ipsumsum d orem ipsum d orem ipsum d</p>
        <button className={css.btn}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Hero;
