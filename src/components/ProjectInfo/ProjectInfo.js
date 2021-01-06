import React from 'react';
import classes from './ProjectInfo.module.css';
import {ReactComponent as CodeSvg} from '../../assets/svgs/code.svg';
import {ReactComponent as EyeSvg} from '../../assets/svgs/eye.svg';
import {ReactComponent as DownloadSvg} from '../../assets/svgs/download.svg';
import ButtonLink from '../UI/ButtonLink/ButtonLink';

export default function ProjectInfo({ gifUrl, demoUrl, codeUrl, downloadUrl, description, name, stack }) {

  const arr = description.split(/\[(.+)\]\((.+)\)/g);

  return (
    <div className={classes.ProjectInfo}>
      <div className={classes.image}>
        <img src={gifUrl} alt={name} />
      </div>
      <div className={classes.info} >
        <div className={classes.label}>Project</div>
        <h3 className={classes.projectName}>{name}</h3>

        <ul className={classes.technologies}>
          {stack.map((item, index) => 
            <li key={index} className={classes.techItem}>
              {item}
            </li>
          )}
        </ul>

        <div className={classes.label}>About</div>

        <div className={classes.description}>
          {arr.map((string, index) => {
            switch(index % 3) {
              case(0):
                return string;
              case(1):
                return <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                  href={arr[index + 1]}>
                    {string}
                  </a>;
              default:
                return null;
              }
            }
          )}
        </div>
        
        <div className={classes.buttons}>
          {demoUrl && <ButtonLink
            style={{marginRight: 16}}
            text='Demo'
            svg={() => <EyeSvg />}
            url={demoUrl} />}

          {downloadUrl && <ButtonLink
            style={{marginRight: 16}}
            text='Download'
            svg={() => <DownloadSvg />}
            url={downloadUrl} />}
          
          {codeUrl && <ButtonLink
            text='Code'
            svg={() => <CodeSvg />}
            url={codeUrl} />}
        </div>
        
      </div>
    </div>
  );
}