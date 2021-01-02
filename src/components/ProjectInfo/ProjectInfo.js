import React from 'react';
import classes from './ProjectInfo.module.css';
import {ReactComponent as CodeSvg} from '../../assets/svgs/code.svg';
import {ReactComponent as EyeSvg} from '../../assets/svgs/eye.svg';
import ButtonLink from '../UI/ButtonLink/ButtonLink';

export default function ProjectInfo({ gifUrl, demoUrl, codeUrl, description, name, stack }) {

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
          {description}
        </div>
        
        <div style={{marginLeft: 'auto'}}>
          {demoUrl && <ButtonLink
            style={{marginRight: 16}}
            text='Demo'
            svg={() => <EyeSvg />}
            url={demoUrl} />}
          
          {codeUrl && <ButtonLink
            text='Code'
            svg={() => <CodeSvg />}
            url={codeUrl} />}
        </div>
        
      </div>
    </div>
  );
}