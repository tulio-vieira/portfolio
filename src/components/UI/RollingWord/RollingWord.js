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
    const { word, fontSize, colorTop, colorBottom } = this.props;
    const transfromStyle = `translateY(-${fontSize * 2}px)`;
    return (
      <div
        className={classes.RollingWord}
        style={{ fontSize, height: fontSize, margin: `0 ${fontSize/8}px` }}
        onMouseEnter={this.roll} >
        <div
          className={classes.Top}
          style={{ color: colorTop, marginBottom: fontSize, transform: this.state.rolled ? transfromStyle : null }}>
          {word}
        </div>
        <div
          className={classes.Bottom}
          style={{ color: colorBottom, transform: this.state.rolled ? transfromStyle : null }}>
          {word}
        </div>
      </div>
    );
  }
}