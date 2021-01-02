import React from 'react';
import classes from './Navbar.module.css';
import { ReactComponent as LogoSvg } from '../../assets/svgs/logo.svg';

export default function Navbar() {

  return (
    <header className={classes.Navbar}>
      <a className={classes.logo} href='/#home'>
        <LogoSvg/>
      </a>
      <div className={classes.items}>
        <a href='/#projects'>Projects</a>
        <a href='/#contact'>Contact</a>
      </div>
    </header>
  );
}