import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Projects from './containers/Projects/Projects';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Home backgroundUrl='/images/code_background_01.jpg' />
        <Projects />
      </Layout>
    );
  }  
}