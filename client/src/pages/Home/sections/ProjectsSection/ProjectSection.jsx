import classes from './ProjectSection.module.css';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import projectSvg from '../../../../assets/svgIcons/project.svg';

import ProjectContainer from '../../../../components/Containers/ProjectContainer/ProjectContainer.jsx';
import Button from '../../../../components/UI/Button/Button.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';

function ProjectSection() {
  // Setting the queries for different screen sizes.
  const smallScreen = useMediaQuery('(max-width:600px)');
  const mediumScreen = useMediaQuery('(min-width:601px) and (max-width:1280px)');
  const largeScreen = useMediaQuery('(min-width:1281px)');

  // Getting the projects from the global state.
  const projects = useSelector((state) => state.databaseData.value?.projects);

  console.log(projects);


  
  return (
    <section className={classes.projectSection}>
      <TitleContainer 
        title='Projects'
        image={projectSvg}
        alt='projectIcon'
        className='titleContainer'
      />

      <MainContainer className='mainContainer_ProjectSection'>
        <SubContainer className={smallScreen ? 'subContainerSmall_ProjectSection' : 'subContainer_ProjectSection'}>
          {smallScreen && 
            <ProjectContainer 
              project={{
                label: projects?.[0].title,
                text: projects?.[0]._description,
                id: projects?.[0].project_id
              }} 
              image={projects?.[0].projectImage ? `http://localhost:3000/uploads/${projects?.[0].projectImage}` : null}
            />
          }

          {mediumScreen && 
            <>
              <ProjectContainer 
                project={{
                  label: projects?.[0].title,
                  text: projects?.[0]._description,
                  id: projects?.[0].project_id
                }} 
                image={projects?.[0].projectImage ? `http://localhost:3000/uploads/${projects?.[0].projectImage}` : null}
              />

              <ProjectContainer 
                project={{
                  label: projects?.[1].title,
                  text: projects?.[1]._description,
                  id: projects?.[1].project_id
                }}
                image={projects?.[1].projectImage ? `http://localhost:3000/uploads/${projects?.[1].projectImage}` : null}
              />
            </>
          }

          {largeScreen && 
            <>
              <ProjectContainer 
                project={{
                  label: projects?.[0].title,
                  text: projects?.[0]._description,
                  id: projects?.[0].project_id
                }}
                image={projects?.[0].projectImage ? `http://localhost:3000/uploads/${projects?.[0].projectImage}` : null}
              />

              <ProjectContainer 
                project={{
                  label: projects?.[1].title,
                  text: projects?.[1]._description,
                  id: projects?.[1].project_id
                }}
                image={projects?.[1].projectImage ? `http://localhost:3000/uploads/${projects?.[1].projectImage}` : null}
              />

              <ProjectContainer 
                project={{
                  label: projects?.[2].title,
                  text: projects?.[2]._description,
                  id: projects?.[2].project_id
                }} 
                image={projects?.[2].projectImage ? `http://localhost:3000/uploads/${projects?.[2].projectImage}` : null}
              />
            </>
          }
        </SubContainer>
        
        <div className={classes.btnContainer}>
          <Link to='/projects'>
            <Button className='viewMoreBtn'>View More</Button>
          </Link>
        </div>   

      </MainContainer>
    </section>
  )
}

export default ProjectSection