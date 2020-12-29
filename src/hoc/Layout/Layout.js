import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Layout.module.css';

export default function Layout({ children }) {

  return (
    <>
      <Navbar/>
      <main className={classes.wrapper}>
        {children}
      </main>
    </>
  );
}