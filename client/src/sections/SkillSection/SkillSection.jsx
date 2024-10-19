import classes from './SkillSection.module.css';
import { useMediaQuery } from '@mui/material';

import dot from '../../assets/dot.svg';
import lightning from '../../assets/lightning.svg';
import computer from '../../assets/computer.png';
import database from '../../assets/database.png';
import frameworks from '../../assets/frameworks.png';
import libraries_platforms from '../../assets/libraries_platforms.png';

import SkillsContainer from '../../components/SkillContainer/SkillsContainer.jsx';
import Container from '../../components/Container/Container.jsx';
import TitleContainer from '../../components/TitleContainer/TitleContainer.jsx';
import RedBlock from '../../components/RedBlock/RedBlock.jsx';

function SkillSection() {
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
        <div className={classes.mainContainer}>
          <Container className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
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
          </Container>

          <Container className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
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
          </Container>
          
        </div>
        
        <RedBlock className='redBlock_SkillSection'/>
      </section>
    </>
    
  )
}

export default SkillSection