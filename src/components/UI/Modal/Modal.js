
import React, { Component } from 'react';
import classes from './Modal.module.css';
import {ReactComponent as CloseSvg} from '../../../assets/svgs/close.svg';

export default class Modal extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps.show !== this.props.show) || (this.props.children !== nextProps.children);
  }

  render() {
    return (
      <>
        <div
          className={classes.Backdrop}
          onClick={this.props.show ? this.props.onClose : null}
          style={{ opacity: this.props.show ? '1' : '0',
            pointerEvents: this.props.show ? 'auto' : 'none' }} />
        <div
          className={classes.Modal}
          style={{ opacity: this.props.show ? '1' : '0',
          pointerEvents: this.props.show ? 'auto' : 'none' }} >
          <div className={classes.closeIcon} onClick={this.props.onClose}>
            <CloseSvg />
          </div>
          {this.props.children}
        </div>
      </>
    );
  }
}