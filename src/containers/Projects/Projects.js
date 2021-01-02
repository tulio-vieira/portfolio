import React, { Component } from 'react';
import CardSlider from "../../components/CardSlider/CardSlider";
import classes from './Projects.module.css';
import Section from "../../hoc/Section/Section";
import Modal from '../../components/UI/Modal/Modal';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import { myProjects } from '../../config';

export default class Projects extends Component {
  state = { show: false, activeIndex: 6 };

  toggleModal = () => {
    this.setState(prevState => {
      return {show: !prevState.show}
    });
  }

  render() {
    return (
      <>
        <Section className={classes.Projects} id='projects'>
            <h1>My Projects</h1>
            <p>These are my favorite projects from last year. Have a look around and make sure to hit me up!</p>
            <CardSlider
              list={myProjects.map(project => {return {url: project.gifUrl, name: project.name}})}
              aspectRatio={4/3}
              widthPercLarge={60}
              breakPoint={520}
              opacity={0.75}
              scale={0.9}
              activeIndex={this.state.activeIndex}
              loop={true}
              style={{marginTop: 'auto', marginBottom: 'auto'}}
              onChange={index => {
                this.setState({activeIndex: index});
              }}
              selected={this.toggleModal}
            />
        </Section>
        <Modal
          show={this.state.show}
          onClose={this.toggleModal} >
          <ProjectInfo
            {...myProjects[this.state.activeIndex]}
          />
        </Modal>
      </>
    );
  }
}