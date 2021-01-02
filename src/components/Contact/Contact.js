import React from 'react';
import Section from '../../hoc/Section/Section';
import RollingWord from '../UI/RollingWord/RollingWord';
import classes from './Contact.module.css';
import { ReactComponent as GithubSvg } from '../../assets/svgs/github.svg';
import { ReactComponent as ProfileSvg } from '../../assets/svgs/profile.svg';
import { ReactComponent as GmailSvg } from '../../assets/svgs/gmail.svg';
import { ReactComponent as LinkedInSvg } from '../../assets/svgs/linkedin.svg';
import { contacts } from '../../config';

function ContactLink({ url, text, type }) {
  const svgMappings = {
    'github': () => <GithubSvg />,
    'resume': () => <ProfileSvg />,
    'email': () => <GmailSvg />,
    'linkedin': () => <LinkedInSvg />
  };

  return <a
    href={url}
    target="_blank"
    rel="noopener noreferrer">
    {svgMappings[type]()}
    <RollingWord
      className={classes.rollingWord}
      fontSize={48}
      word={text} />
  </a>
}

export default function Contact() {
  return (
    <Section id='contact'>
      <h1>Contact Me</h1>

      {contacts.map((data, index) => 
        <div key={index} className={classes.contactLink} >
          <ContactLink {...data} />
        </div>
      )}

    </Section>
  );
}