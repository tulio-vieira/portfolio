import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Layout.module.css';
import {backgrounds} from '../../config' ;

export default class Layout extends Component {
  state = {sectionIndex: 0, transition: 1};
  lastY = 0;
  lockDirection = true;
  scrollingDown = true;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(_, nextState) {
    return (nextState.sectionIndex !== this.state.sectionIndex || nextState.transition !== this.state.transition);
  }

  handleScroll = () => {
    const docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    const sectionHeight = (docHeight - 64) / this.props.children.length;
    const interval = sectionHeight * 0.3;

    const y = window.pageYOffset;
    if (!this.lockDirection) this.scrollingDown = y - this.lastY > 0;
    
    const offset = interval * (this.scrollingDown ? 1 : 2);
    const i = Math.min( this.props.children.length - 1, Math.floor((y + offset) / sectionHeight) );
    const sectionStart = i * sectionHeight - offset;
    const transition = (sectionStart > 0) ? Math.min(1, (y - sectionStart) / interval) : 1;

    this.setState({sectionIndex: i, transition});

    this.lastY = y;
    this.lockDirection = (y % this.sectionHeight) > (this.sectionHeight - 2 * this.offset);
  }

  render() {
    const { children } = this.props;
    const { sectionIndex, transition } = this.state;

    return (
      <>
        <Navbar/>

        {backgrounds.map((data, index) => 
          <img
            key={index}
            style={{
              ...data.style,
              opacity: (index === sectionIndex) ? transition : (index === sectionIndex - 1) ? 1 : 0,
              zIndex: -100 + index
            }}
            className={classes.background}
            alt='background'
            src={data.url} />
        )}
        <main className={classes.wrapper}>
          {children}
        </main>

        <footer className={classes.footer}>
          <span>Created by Tulio Vieira</span>
        </footer>
      </>
    );
  }
}