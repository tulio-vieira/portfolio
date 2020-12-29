import React from 'react';
import classes from './Navbar.module.css';

export default function Navbar() {

  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}>
        <div style={{color: '#b4b4b4'}}>tulio</div>
        <div style={{marginLeft: '1em', marginTop: '-0.3em', color: '#d6ff00'}}><strong>Vieira</strong></div>
      </div>
      <ul className={classes.items}>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}