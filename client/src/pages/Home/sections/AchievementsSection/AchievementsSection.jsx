import classes from './AchievementsSection.module.css';
import titleIcon from '../../../../assets/svgIcons/story.svg';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import Button from '../../../../components/UI/Button/Button.jsx';
import Achievement from '../../../../components/Containers/AchievementContainer/Achievement.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';



function AchievementsSection() {
  // Setting the queries for different screen sizes.
  const smallScreen = useMediaQuery('(max-width:1025px)');

  // Getting the achievements from the global state.
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
              id={achievements?.[0].achievement_id}
            />
          }

          {!smallScreen && 
            <>
              <Achievement 
                label={achievements?.[0].title}
                text={achievements?.[0]._description}
                id={achievements?.[0].achievement_id}
              />

              <Achievement 
                label={achievements?.[1].title}
                text={achievements?.[1]._description}
                id={achievements?.[1].achievement_id}
              />
            </> 
          }
        </SubContainer>
        

        <div className={classes.btnContainer}>
          <Link to='/achievements'>
            <Button className='viewMoreBtn'>View More</Button>
          </Link>
        </div>
      </MainContainer>
    </section>
  )
}

export default AchievementsSection