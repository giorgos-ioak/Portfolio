import classes from './ProjectDetails.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import arrow from '../../assets/svgIcons/arrow.svg';

import Button from '../../components/UI/Button/Button.jsx';
import { useEffect, useState } from 'react';


function ProjectDetails() {
  // Retrieving the project's id from the URL params.
  const { projectId } = useParams();

  // STATE
  const [technologies, setTechnologies] = useState(null);



  // Getting the projects from the global state.
  const projects = useSelector((state) => state.databaseData.value?.projects);
  // Extract the project with the specific projectId.
  const project = projects?.filter(project => project.project_id === Number(projectId)) || [];

  const selectedProject = project[0].


  // const filepath = '../../../../server/uploads/' + project[0]?.projectImage;
  console.log(selectedProject?.projectImage);

  //// FETCH PROJECT'S TECHNOLOGIES
  useEffect(() => {   
    async function getProjectTechnologies() {
      try {
        const response = await fetch(`http://localhost:3000/projectTech/${projectId}`);
    
        if(!response.ok) {
          throw new Response(JSON.stringify({ message: 'Could not fetch Project Technologies' }), {
            status: response.status,
            statusText: response.statusText || 'Internal Server Error',
          });
        }

        const data = await response.json();

        const technologiesArray = data.technologies.map((obj) => {
          return obj.technology;
        });

        return setTechnologies(technologiesArray);

      } catch(err) {
        if(err instanceof Response) {
          throw err;
        }
    
        throw new Response(JSON.stringify({ message: 'Unexpected error occurred.' }), {
          status: 500,
        });
      }
    };

    getProjectTechnologies();

  }, [projectId]);



 
  
  return (
    <section className={classes.section}>
      <div className={classes.imgContainer}>
        <img src='' className={classes.img}/>
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
            {technologies ? (technologies.map((item) => 
              <li
                className={classes.li}
                key={item}
              >
                {item}
              </li>
            )) : (
              <div 
                className={classes.li}
                style={{textAlign: 'center'}}
              >
                FAILED TO LOAD...
              </div>
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