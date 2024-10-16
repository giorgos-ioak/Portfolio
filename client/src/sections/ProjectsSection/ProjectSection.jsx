import classes from './ProjectSection.module.css';
import { useMediaQuery } from '@mui/material';


import projectSvg from '../../assets/project.svg';
import project1Img from '../../assets/project1Img.jpg';
import project2Img from '../../assets/project2Img.jpg';
import project3Img from '../../assets/project3Img.jpg';

import ProjectContainer from '../../components/ProjectContainer/ProjectContainer.jsx';
import Button from '../../components/Button/Button.jsx';

function ProjectSection() {
  const smallScreen = useMediaQuery('(max-width:600px)');
  const mediumScreen = useMediaQuery('(min-width:601px) and (max-width:1280px)');
  const largeScreen = useMediaQuery('(min-width:1281px)');


  const project1 = {
    label: 'Admin Dashboard',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
  };

  const project2 = {
    label: 'Social Media App',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
  };

  const project3 = {
    label: 'Currency Calculator',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
  };

  
  return (
    <section className={classes.projectSection}>
      <div className={classes.titleContainer}>
        <h2 className={classes.h2}>Projects</h2>
        <img src={projectSvg} alt='projectIcon'/>
      </div>

      <div className={classes.mainContainer}>
        <div className={smallScreen ? classes.subContainerSmall : classes.subContainer}>
          {smallScreen && <ProjectContainer project={project1} image={project1Img}/>}

          {mediumScreen && 
            <>
              <ProjectContainer project={project1} image={project1Img}/>
              <ProjectContainer project={project2} image={project2Img}/>
            </>
          }

          {largeScreen && 
            <>
              <ProjectContainer project={project1} image={project1Img}/>
              <ProjectContainer project={project2} image={project2Img}/>
              <ProjectContainer project={project3} image={project3Img}/>
            </>
          }
        </div>
        
        <div className={classes.btnContainer}>
          <Button className='viewMoreBtn'>View More</Button>
        </div>

      </div>

      <div className={classes.redBlock}></div> 
    </section>
  )
}

export default ProjectSection