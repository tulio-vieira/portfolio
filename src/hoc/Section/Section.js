import React from 'react';
import classes from './Section.module.css';

export default function Section({ children }) {
  return (
    <div className={classes.Section} >
      {children}
    </div>
  );
}