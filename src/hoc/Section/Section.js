import React from 'react';
import classes from './Section.module.css';

export default function Section({ children, className, id, backgroundImageUrl, backgroundStyle }) {
  return (
    <div id={id} className={`${classes.Section} ${className}`} >
      {backgroundImageUrl &&
        <img
          src={backgroundImageUrl}
          style={backgroundStyle}
          alt=""
          className={classes.backgroundImage}/>}
      {children}
    </div>
  );
}