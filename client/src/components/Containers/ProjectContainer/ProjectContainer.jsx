import classes from './ProjectContainer.module.css';
import { useState } from 'react';

import Button from '../../UI/Button/Button';


function ProjectContainer({ project, image }) { 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.mainContainer}>
      <img className={classes.img} src={image} alt='projectImage'/>
      
      <div className={classes.itemContainer}>
        <div className={classes.project}>
          <>
            <label className={classes.label}>{project.label}</label>
            <p className={isOpen ? classes.p_isOpen : classes.p_isClosed}>
              {project.text}
            </p>
            <span 
              className={classes.readMoreSpan}
              onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Read less..' : 'Read more..'}
            </span>
          </>
          <Button className='detailsBtn'>Details</Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer