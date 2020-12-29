import React from 'react';
import classes from './ButtonLink.module.css';

export default function ButtonLink({ svg, text, url, style }) {

  return (
    <a
      style={style}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.ButtonLink}>
      {svg && svg()}
      {text}
    </a>
  );
}