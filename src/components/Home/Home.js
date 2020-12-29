import React from 'react';
import RollingPhrase from '../RollingPhrase';
import Section from '../../hoc/Section/Section';
import classes from './Home.module.css';

export default function Home({ backgroundUrl }) {
  return (
    <Section>
      <img className={classes.background} alt='Background' src={backgroundUrl} />
      <div className={classes.wrapper}>
        <RollingPhrase
          text="Hello world, It's Tulio Vieira"
          fontSize={48}
          colorTop='#ffffff'
          colorBottom='#b4b4b4'
        />
        <RollingPhrase
          text="I'm a software developer"
          fontSize={32}
          colorTop='#d6ff00'
          colorBottom='#6a7f00'
        />
      </div>
    </Section>
  );
}