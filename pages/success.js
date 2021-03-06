import React, { useState } from 'react';
import css from '../styles/success.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { MdOutlineAlternateEmail, MdSend } from 'react-icons/md';

const Success = () => {
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailSubmission = (event) => {
    event.preventDefault();
    setEmail('');

    const emailObj = { email };

    const getEmail = async () => {
      const response = await fetch('api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailObj),
      });

      const data = await response.json();
    };
    getEmail().then((response) => {
      setShowSuccessMessage(!showSuccessMessage);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    });
  };
  return (
    <div className={css.container}>
      <Head>
        <title>Success Page | JestinaCommerce</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={css.thankyou}>
        <h1 className={css.header}>THANK YOU FOR YOUR PURCHASE</h1>
        <p className={css.header}>
          Your order ID number is: <strong>00000021334</strong>.
        </p>
        <p className={css.header}>
          We'll email you an order confirmation with details and tracking info.
        </p>
        <Link href='/'>
          <button type='button' className={css.btn}>
            Continue Shopping
          </button>
        </Link>
      </section>

      <section className={css.productOnWay}>
        <Image
          width='300'
          height='300'
          src='/success.gif'
          alt='product on way'
          className={css.image}
        />
        <div>
          <h3>Relax, Your items are on their way</h3>
          <p className={css.text}>
            Your shopping items will be reaching you in only 1-2 business days,
            with no damage.
          </p>
        </div>
      </section>

      <section className={css.subscribe}>
        <div className={css.email}>
          <Image
            width='300'
            height='300'
            className={`${css.image}${css.at}`}
            src='/email.png'
            alt=''
          />
          <p className={css.desc}>
            Subscribe to receive important product updates and special discount
            in your email directly
          </p>
        </div>
        <div className={css.inputContainer}>
          <div className={css.inputAndIcon}>
            <input
              value={email}
              type='text'
              placeholder='example@company.com'
              className={css.input}
              onChange={(event) => setEmail(event.target.value)}
            />
            <MdOutlineAlternateEmail className={css.icon} />
          </div>
          <button
            type='submit'
            onClick={handleEmailSubmission}
            className={css.sendButton}
          >
            <MdSend />
          </button>
        </div>
        {showSuccessMessage && (
          <span className={css.submitted}>Thank you for signing up.</span>
        )}
      </section>
    </div>
  );
};

export default Success;
