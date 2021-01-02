import React from 'react';
import classes from './Section.module.css';

export default function Section({ children, className, id }) {
  return (
    <div id={id} className={`${classes.Section} ${className}`} >
      {children}
    </div>
  );
}