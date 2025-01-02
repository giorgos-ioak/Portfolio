import classes from './SkillSection.module.css';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import dot from '../../../../assets/svgIcons/dot.svg';
import lightning from '../../../../assets/svgIcons/lightning.svg';
import computer from '../../../../assets/computer.png';
import database from '../../../../assets/database.png';
import frameworks from '../../../../assets/frameworks.png';
import libraries_platforms from '../../../../assets/libraries_platforms.png';

import SkillsContainer from '../../../../components/Containers/SkillContainer/SkillsContainer.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';

function SkillSection() {
  // Setting the queries for different screen sizes.
  const verySmallScreen = useMediaQuery('(max-width:370px)');
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  // Getting the skills from the global state.
  const skills = useSelector((state) => state.databaseData.value?.skills);


  // Declaring the arrays containing the technologies of each category.
  let frameworkCategory = [];
  let languagesCategory = [];
  let libraryCategory = [];
  let databaseCategory = [];

  
  // Adding technologies to the FRAMEWORK category.
  skills?.map((skill) => {
    if(skill.category === 'Framework') {
      frameworkCategory.push(skill.technology);
    }
  });

  
  // Adding technologies to the LANGUAGES category.
  skills?.map((skill) => {
    if(skill.category === 'Programming Language') {
      languagesCategory.push(skill.technology);
    }
  });


  // Adding technologies to the DATABASE category.
  skills?.map((skill) => {
    if(skill.category === 'Database') {
      databaseCategory.push(skill.technology);
    }
  });


  // Adding technologies to the LIBRARIES category.
  skills?.map((skill) => {
    if(skill.category === 'Library-Platform') {
      libraryCategory.push(skill.technology);
    }
  });



  return (
    <>
      <section className={classes.skillSection}>
        <TitleContainer 
          title='Skills'
          image={lightning}
          alt='lightningIcon'
          className='titleContainer'
        />
        <MainContainer className='mainContainer_SkillSection'>
          <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
            <SkillsContainer 
              items={languagesCategory} 
              title='Languages' 
              titleSvgIcon={computer} 
              itemSvgIcon={dot}
              imgTitle=''
            />

            <SkillsContainer 
              items={databaseCategory} 
              title='Databases' 
              titleSvgIcon={database} 
              itemSvgIcon={dot}
              imgTitle=''
            />
          </SubContainer>

          <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
            <SkillsContainer 
              items={libraryCategory} 
              title='Libraries & Platforms' 
              titleSvgIcon={libraries_platforms} 
              itemSvgIcon={dot}
              imgTitle=''
            />

            <SkillsContainer 
              items={frameworkCategory} 
              title='Frameworks' 
              titleSvgIcon={frameworks} 
              itemSvgIcon={dot}
              imgTitle=''
            />
          </SubContainer>
        </MainContainer>
      </section>
    </>
    
  )
}

export default SkillSection