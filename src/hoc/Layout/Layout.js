import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Layout.module.css';

export default class Layout extends Component {
    render() {
    return (
      <>
        <Navbar/>

        <main className={classes.wrapper}>
          {this.props.children}

          <footer className={classes.footer}>
            <span>Created by Tulio Vieira</span>
          </footer>
        </main>
      </>
    );
  }
}