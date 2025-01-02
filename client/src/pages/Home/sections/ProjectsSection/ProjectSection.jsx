import classes from './ProjectSection.module.css';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import projectSvg from '../../../../assets/svgIcons/project.svg';
import project1Img from '../../../../assets/project1Img.jpg';
import project2Img from '../../../../assets/project2Img.jpg';
import project3Img from '../../../../assets/project3Img.jpg';

import ProjectContainer from '../../../../components/Containers/ProjectContainer/ProjectContainer.jsx';
import Button from '../../../../components/UI/Button/Button.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';

function ProjectSection() {
  // Setting the queries for different screen sizes.
  const verySmallScreen = useMediaQuery('(max-width:370px)');
  const smallScreen = useMediaQuery('(max-width:600px)');
  const mediumScreen = useMediaQuery('(min-width:601px) and (max-width:1280px)');
  const largeScreen = useMediaQuery('(min-width:1281px)');

  // Getting the projects from the global state.
  const projects = useSelector((state) => state.databaseData.value?.projects);


  
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
              image={project1Img}
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
                image={project1Img}
              />

              <ProjectContainer 
                project={{
                  label: projects?.[1].title,
                  text: projects?.[1]._description,
                  id: projects?.[1].project_id
                }}
                image={project2Img}
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
                image={project1Img}
              />

              <ProjectContainer 
                project={{
                  label: projects?.[1].title,
                  text: projects?.[1]._description,
                  id: projects?.[1].project_id
                }}
                image={project2Img}
              />

              <ProjectContainer 
                project={{
                  label: projects?.[2].title,
                  text: projects?.[2]._description,
                  id: projects?.[2].project_id
                }} 
                image={project3Img}
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