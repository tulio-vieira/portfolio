import React from 'react';
import classes from './Navbar.module.css';
import { ReactComponent as LogoSvg } from '../../assets/svgs/logo.svg';

export default function Navbar() {

  return (
    <header className={classes.Navbar}>
      <a className={classes.logo} href={ process.env.PUBLIC_URL + '/#home'}>
        <LogoSvg/>
      </a>
      <div className={classes.items}>
        <a href={ process.env.PUBLIC_URL + '/#projects'}>Projects</a>
        <a href={ process.env.PUBLIC_URL + '/#contact'}>Contact</a>
      </div>
    </header>
  );
}