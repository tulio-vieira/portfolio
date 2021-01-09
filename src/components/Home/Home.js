import React from 'react';
import RollingPhrase from '../RollingPhrase';
import Section from '../../hoc/Section/Section';
import classes from './Home.module.css';
import background from '../../assets/images/code_background_01.jpg';

export default function Home() {
  return (
    <Section
      className={classes.Home}
      id='home'
      backgroundImageUrl={background}
      backgroundStyle={{filter: 'brightness(0.5) blur(2px)', objectPosition: 'bottom'}}>
      <div className={classes.wrapper}>
        <RollingPhrase
          text="Hello world, It's Tulio Vieira"
          fontSize={48}
          className={classes.first}
        />
        <RollingPhrase
          text="I'm a software developer"
          fontSize={32}
          className={classes.second}
        />
      </div>
    </Section>
  );
}