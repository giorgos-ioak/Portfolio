import classes from './Projects.module.css';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import projectSvg from '../../assets/svgIcons/project.svg';
import project1Img from '../../assets/project1Img.jpg';
import project2Img from '../../assets/project2Img.jpg';
import project3Img from '../../assets/project3Img.jpg';


import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../components/Containers/MainContainer/MainContainer.jsx'
import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';
import ProjectContainer from '../../components/Containers/ProjectContainer/ProjectContainer.jsx';
import Pagination from '../../components/UI/Pagination/Pagination.jsx';



function Projects() {
  const smallScreen = useMediaQuery('(max-width:600px)');
  const mediumScreen = useMediaQuery('(min-width:601px) and (max-width:1280px)');
  const largeScreen = useMediaQuery('(min-width:1281px)');

  const projects = useSelector((state) => state.databaseData.value?.projects); 
  const totalProjects = projects?.length;




  ///// PAGINATION
  const [projectData, setProjectData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(null);

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProjects = projectData.slice(firstProjectIndex, lastProjectIndex);


 //CHANGE NUM OF PROJECTS PER PAGE
  function handleProjectsPerPage() {     
    if(smallScreen) {
      setProjectsPerPage(projectsPerPage != 1 ? 1 : projectsPerPage);
      setCurrentPage(1);
    } else if (mediumScreen) {
      setProjectsPerPage(projectsPerPage != 2 ? 2 : projectsPerPage);
      setCurrentPage(1);
    } else if(largeScreen) {
      setProjectsPerPage(projectsPerPage != 3 ? 3 : projectsPerPage);
      setCurrentPage(1);
    }
  };
 //

 //CHANGE NUM OF PROJECTS PER PAGE
 function handleCurrentPage(currentPage) {     
  setCurrentPage(currentPage);
 };
 //

 

  useEffect(() => {
    setProjectData(projects);

    handleProjectsPerPage();
  }, [projects, smallScreen, mediumScreen, largeScreen]);

  ///////


  
  return (
    <section className={classes.projectPageSection}>
      <TitleContainer 
        title='My Projects'
        image={projectSvg}
        alt='projectIcon'
        className='titleContainer'
      />

      <MainContainer className='mainContainer_ProjectSection'>
        <SubContainer className={smallScreen ? 'subContainerSmall_ProjectSection' : 'subContainer_ProjectSection'}>
            
            {
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>

                <div style={{
                  display: 'flex',
                  gap: '3rem',
                  justifyContent: 'space-between'
                }}>
                  {currentProjects.map((project) => (
                    <ProjectContainer 
                      project={{
                        label: project?.title,
                        text: project?._description,
                      }} 
                      image={project1Img}
                      key={project.project_id}
                    />
                  ))}
                </div>

                {(smallScreen || mediumScreen) &&
                  <Pagination 
                    totalItems={totalProjects} 
                    itemsPerPage={projectsPerPage ? projectsPerPage : 1}
                    pageClick={handleCurrentPage}
                  />
                }
              </div>
            }

        </SubContainer>      
      </MainContainer>
    </section>
  )
}

export default Projects;