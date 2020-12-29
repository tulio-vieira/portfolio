import React, { Component } from 'react';
import CardSlider from "../CardSlider";
import CardItem from "../CardItem";
// import classes from './Projects.module.css';
import Section from "../../hoc/Section/Section";
import Modal from '../../components/UI/Modal/Modal';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';

const list = [
  { name: "1", desc: "hahhah", url: "https://dod6qkb6gz8ef.cloudfront.net/app/uploads/2020/09/08145740/Domcake-Dancing-Alien.gif" },
  { name: "2", desc: "wawawa", url: "https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif" },
  { name: "3", desc: "ohhhhh", url: "https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif" },
  { name: "4", desc: "wawawa", url: "https://www.agenciaunius.com.br/wp-content/uploads/2017/07/Gif-animado-18.gif" },
  { name: "5", desc: "ohhhhh", url: "https://i.pinimg.com/originals/fd/3c/cd/fd3ccd7b49e366b4206f5ac7f8fa8dac.gif" },
  { name: "6", desc: "wawawa", url: "https://buffer.com/library/content/images/library/wp-content/uploads/2016/06/giphy.gif" },
  { name: "7", desc: "ohhhhh", url: "https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif" }
];

export default class Projects extends Component {
  state = { show: false };

  toggleModal = () => {
    this.setState(prevState => {
      return {show: !prevState.show}
    });
  }

  render() {
    return (
      <>
        <Section>
          <button onClick={this.toggleModal}>toggle modal</button>
          <CardSlider
            list={list}
            renderItem={CardItem}
            width={400}
            boxWidth={900}
            height={210}
            opacity={0.75}
            scale={0.9}
            disableNext={false}
            disablePrev={false}
            index={3}
            loop={true}
            onChange={(index, data) => {
              console.log(index, data);
            }}
          />
        </Section>
        <Modal
          show={this.state.show}
          onClose={this.toggleModal} >
          <ProjectInfo
            name='Test Project'
            description={description}
            url='https://i.pinimg.com/originals/fd/3c/cd/fd3ccd7b49e366b4206f5ac7f8fa8dac.gif'
            stack={['react', 'nodejs', 'mongodb', 'materialUI']}
          />
        </Modal>
      </>
    );
  }
}

const description = "For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application.\n\nVictor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.";