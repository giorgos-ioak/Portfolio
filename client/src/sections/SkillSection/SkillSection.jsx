import classes from './SkillSection.module.css';
import { useMediaQuery } from '@mui/material';

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

  const items1 = ['Java', 'Javascript'];
  const items2 = ['MongoDB', 'MySQL'];
  const items3 = ['Node.js', 'React.js', 'Redux Toolkit', 'React Router'];
  const items4 = ['Express.js'];

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
              items={items1} 
              title='Programming Languages' 
              titleSvgIcon={computer} 
              itemSvgIcon={dot}
              imgTitle=''
            />

            <SkillsContainer 
              items={items2} 
              title='Databases' 
              titleSvgIcon={database} 
              itemSvgIcon={dot}
              imgTitle=''
            />
          </SubContainer>

          <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
            <SkillsContainer 
              items={items3} 
              title='Libraries & Platforms' 
              titleSvgIcon={libraries_platforms} 
              itemSvgIcon={dot}
              imgTitle=''
            />

            <SkillsContainer 
              items={items4} 
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