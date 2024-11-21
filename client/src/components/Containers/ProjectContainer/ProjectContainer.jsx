import classes from './ProjectContainer.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';


function ProjectContainer({ project, image }) { 
  return (
    <div className={classes.mainContainer}>
      <img className={classes.img} src={image} alt='projectImage'/>
      
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