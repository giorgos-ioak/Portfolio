import classes from './AchievementsSection.module.css';
import titleIcon from '../../assets/svgIcons/story.svg';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';


import Button from '../../components/UI/Button/Button.jsx';
import Achievement from '../../components/Containers/AchievementContainer/Achievement.jsx';
import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer.jsx';
import RedBlock from '../../components/UI/RedBlock/RedBlock.jsx';
import MainContainer from '../../components/Containers/MainContainer/MainContainer.jsx';



function AchievementsSection() {
  const verySmallScreen = useMediaQuery('(max-width:370px)');
  const smallScreen = useMediaQuery('(max-width:1025px)');

  const achievements = useSelector((state) => state.databaseData.value?.achievements);

  return (
    <section className={classes.achievementsSection}>
      <TitleContainer 
        title='Achievements'
        image={titleIcon}
        alt='titleIcon'
        className='titleContainer'
      />

      <MainContainer className='mainContainer_AchievementSection'>
        <SubContainer className={'subContainer_AchievementSection'}>
          {smallScreen && 
            <Achievement 
              label={achievements?.[0].title}
              text={achievements?.[0]._description}
            />
          }

          {!smallScreen && 
            <>
              <Achievement 
                label={achievements?.[0].title}
                text={achievements?.[0]._description}
              />

              <Achievement 
                label='Achievement 2' 
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
              />
            </> 
          }
        </SubContainer>
        

        <div className={classes.btnContainer}>
          <Button className='viewMoreBtn'>View More</Button>
        </div>

        {!verySmallScreen && 
          <RedBlock className='redBlock_AchievementSection'/>
        }

      </MainContainer>
    </section>
  )
}

export default AchievementsSection