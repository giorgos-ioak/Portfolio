import classes from './ProjectContainer.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../UI/Button/Button';

import CircularProgress from '@mui/material/CircularProgress';



function ProjectContainer({ project, image }) { 
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  return (
    <div className={classes.mainContainer}>
      {!isImageLoaded && (
        <div className={classes.imagePlaceholder}>
          <CircularProgress />
        </div>
      )}

      <img 
        className={`${classes.img} ${!isImageLoaded ? classes.hidden : ''}`} 
        src={image} 
        alt='projectImage'
        onLoad={() => setIsImageLoaded(true)}
        onError={() => setIsImageLoaded(false)}
      />
      
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