import classes from './ProjectContainer.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';

import { useState } from 'react';


function ProjectContainer({ project, image }) { 
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.imgContainer} ${!isLoaded ? 'placeholder' : ''}`}>
        <img
          className={`${classes.img} ${isLoaded ? 'loaded' : ''}`}
          src={image}
          alt="projectImage"
          onLoad={() => setIsLoaded(true)} // Mark image as loaded
        />
      </div>
      
      <div className={classes.itemContainer}>
        <div className={classes.project}>
          <>
            <label className={classes.label}>{project.label}</label>
            <p className={classes.p}>
              {project.text}
            </p>
          </>
          <Link to={`/projects/${project.id}`}>
            <Button className='detailsBtn'>Details</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer