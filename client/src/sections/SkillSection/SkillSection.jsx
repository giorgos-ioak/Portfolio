import classes from './SkillSection.module.css';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import dot from '../../assets/svgIcons/dot.svg';
import lightning from '../../assets/svgIcons/lightning.svg';
import computer from '../../assets/computer.png';
import database from '../../assets/database.png';
import frameworks from '../../assets/frameworks.png';
import libraries_platforms from '../../assets/libraries_platforms.png';

import SkillsContainer from '../../components/Containers/SkillContainer/SkillsContainer.jsx';
import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer.jsx';
import RedBlock from '../../components/UI/RedBlock/RedBlock.jsx';
import MainContainer from '../../components/Containers/MainContainer/MainContainer.jsx';

function SkillSection() {
  const verySmallScreen = useMediaQuery('(max-width:370px)');
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const skills = useSelector((state) => state.databaseData.value?.skills);


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
              items={[
                skills?.[0].technology,
                skills?.[1].technology,
              ]} 
              title='Programming Languages' 
              titleSvgIcon={computer} 
              itemSvgIcon={dot}
              imgTitle=''
            />

            <SkillsContainer 
              items={[
                skills?.[2].technology,
                skills?.[3].technology,
              ]} 
              title='Databases' 
              titleSvgIcon={database} 
              itemSvgIcon={dot}
              imgTitle=''
            />
          </SubContainer>

          <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
            <SkillsContainer 
              items={[
                skills?.[5].technology,
                skills?.[6].technology,
                skills?.[7].technology,
                skills?.[8].technology,
              ]} 

              title='Libraries & Platforms' 
              titleSvgIcon={libraries_platforms} 
              itemSvgIcon={dot}
              imgTitle=''
            />

            <SkillsContainer 
              items={[
                skills?.[4].technology,
              ]} 
              title='Frameworks' 
              titleSvgIcon={frameworks} 
              itemSvgIcon={dot}
              imgTitle=''
            />
          </SubContainer>
        </MainContainer>
        
        {!verySmallScreen && 
          <RedBlock className='redBlock_SkillSection'/>
        }
      </section>
    </>
    
  )
}

export default SkillSection