import React, { Component } from 'react';
import classes from './RollingWord.module.css';

export default class RollingWord extends Component {
  state = { rolled: false };

  roll = () => {
    if (this.state.rolled) return;
    this.setState({ rolled: true });
    setTimeout(() => this.setState({ rolled: false }), 3000);
  }

  render() {
    const { word, fontSize, className } = this.props;
    return (
      <div
        className={classes.RollingWord}
        style={{ fontSize, height: fontSize, margin: `0 ${fontSize/8}px` }}
        onMouseEnter={this.roll} >
        <div
          className={`${classes.Top} ${className} ${this.state.rolled ? classes.moved : null}`} >
          {word}
        </div>
        <div
          className={`${classes.Bottom} ${className} ${this.state.rolled ? classes.moved : null}`} >
          {word}
        </div>
      </div>
    );
  }
}