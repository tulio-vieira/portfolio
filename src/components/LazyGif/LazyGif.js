import React, { Component } from 'react';
import classes from './LazyGif.module.css';

export default class LazyGif extends Component {
  state = {loaded: false};

  render() {
    const { src, alt, className, style } = this.props;
    return (
      <>
        <img
          className={className}
          style={{...style, display: this.state.loaded ? 'block' : 'none'}}
          alt={alt}
          src={src}
          onLoad={() => this.setState({ loaded: true })}/>

        {!this.state.loaded &&
          <div style={style} className={`${classes.gradient} ${className}`}/>
        }
      </>
    );
  }
}