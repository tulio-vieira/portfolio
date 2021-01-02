import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Projects from './containers/Projects/Projects';
import Contact from './components/Contact/Contact';

export default class App extends Component {
  render() {
    return (
      <Layout >
        <Home />
        <Projects />
        <Contact />
      </Layout>
    );
  }  
}