import classes from './ProjectDetails.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import arrow from '../../assets/svgIcons/arrow.svg';
import image from '../../assets/project2Img.jpg';

import Button from '../../components/UI/Button/Button.jsx';
import { useEffect, useState } from 'react';


function ProjectDetails() {
  const { projectId } = useParams();
  const [technologies, setTechnologies] = useState([]);

  ////GET PROJECT'S INFO
  const projects = useSelector((state) => state.databaseData.value?.projects);
  const project = projects?.filter(project => project.project_id === Number(projectId));



  useEffect(() => {   
  ////FETCH PROJECT'S TECHNOLOGIES
    async function getProjectTechData() {
      try {
        const response = await fetch(`http://localhost:3000/projectTech/${projectId}`);
    
        if(!response.ok) {
          throw new Error(`There was an HTTP Error with a status code of: ${response.status}.`);
        }

        const data = await response.json();

        const technologiesArray = data.technologies.map((obj) => {
          return obj.technology;
        });

        return setTechnologies(technologiesArray);

      } catch(err) {
        return { error: true, message: err.message };
      }
    };

    getProjectTechData();

  }, [projectId]);




  
  return (
    <section className={classes.section}>
      <div className={classes.imgContainer}>
        <img src={image} className={classes.img}/>
      </div>
      
      <div className={classes.mainContainer}>
        <div className={classes.infoContainer}>
          <h1 className={classes.h1}>{project?.[0].title}</h1>
          <p className={classes.p}>
            {project?.[0]._description}
          </p>
        </div>

        <div className={classes.btnContainer}>
          {project?.[0].demo_button ? ( 
            <Button className='redirectBtn'>
              Demo
              <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
           </Button>
          ) : null}

          {project?.[0].github_button ? (
            <Button className='redirectBtn'>
              Github
              <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
            </Button>
            ) : null}

          {project?.[0].figma_button ? (
            <Button className='redirectBtn'>
              Figma
              <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
            </Button>
          ) : null}
        </div>

        <div className={classes.techContainer}>
          <h2 className={classes.h2}>Technologies</h2>
          <ul className={classes.techBox}>
            {technologies.map((item) => 
              <li
                className={classes.li}
                key={item}
              >
                {item}
              </li>
            )}
          </ul>
        </div>

        {project?.[0].demo_instructions ? (
          <div className={classes.instructionsContainer}>
            <h2 className={classes.h2}>Demo Instructions</h2>
            <p className={classes.p}>
              {project?.[0].demo_instructions}
            </p>
          </div>
        ) : null}
      </div>

    </section>
  )
}

export default ProjectDetails;