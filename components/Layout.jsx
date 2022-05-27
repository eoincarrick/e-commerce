import React from 'react';
import Head from 'next/head';
import { Header } from './index';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Home | JestCommerce</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
