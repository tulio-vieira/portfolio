import React, { Component } from 'react';

export default class LazyImage extends Component {
  state = {loaded: false};

  render() {
    const {className, alt, src, altSrc, style} = this.props;
    return (
      <>
        <img
          className={className}
          style={{...style, display: this.state.loaded ? 'block' : 'none'}}
          alt={alt}
          src={src}
          onLoad={() => this.setState({ loaded: true })}/>

        {!this.state.loaded &&
          <img
            className={className}
            alt={alt}
            src={altSrc} />
        }
      </>
    );
  }
}