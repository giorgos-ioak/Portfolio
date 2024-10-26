import classes from './ProjectSection.module.css';
import { useMediaQuery } from '@mui/material';


import projectSvg from '../../assets/svgIcons/project.svg';
import project1Img from '../../assets/project1Img.jpg';
import project2Img from '../../assets/project2Img.jpg';
import project3Img from '../../assets/project3Img.jpg';

import ProjectContainer from '../../components/Containers/ProjectContainer/ProjectContainer.jsx';
import Button from '../../components/UI/Button/Button.jsx';
import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer.jsx';
import RedBlock from '../../components/UI/RedBlock/RedBlock.jsx';
import MainContainer from '../../components/Containers/MainContainer/MainContainer.jsx';

function ProjectSection() {
  const verySmallScreen = useMediaQuery('(max-width:370px)');
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
      <TitleContainer 
        title='Projects'
        image={projectSvg}
        alt='projectIcon'
        className='titleContainer'
      />

      <MainContainer className='mainContainer_ProjectSection'>

        <SubContainer className={smallScreen ? 'subContainerSmall_ProjectSection' : 'subContainer_ProjectSection'}>
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
        </SubContainer>
        
        <div className={classes.btnContainer}>
          <Button className='viewMoreBtn'>View More</Button>
        </div>
        
      </MainContainer>

      {!verySmallScreen && 
        <RedBlock className='redBlock_ProjectSection'/>
      }
    </section>
  )
}

export default ProjectSection