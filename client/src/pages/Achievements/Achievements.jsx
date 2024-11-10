import classes from './Achievements.module.css';
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
import Achievement from '../../components/Containers/AchievementContainer/Achievement.jsx';
import Pagination from '../../components/UI/Pagination/Pagination.jsx';



function Achievements() {
  const smallScreen = useMediaQuery('(max-width:500px)');
  const mediumScreen = useMediaQuery('(min-width:501px) and (max-width:1280px)');
  const largeScreen = useMediaQuery('(min-width:1281px)');

  const achievements = useSelector((state) => state.databaseData.value?.achievements);
  const totalAchievements = achievements?.length;

  console.log('Achievements', achievements);




///// PAGINATION /////
  const [achievementsData, setAchievementsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [achievementsPerPage, setAchievementsPerPage] = useState(2);


  const lastProjectIndex = currentPage * achievementsPerPage;
  const firstProjectIndex = lastProjectIndex - achievementsPerPage;
  const currentAchievements = achievementsData.slice(firstProjectIndex, lastProjectIndex);


  /****  CHANGE NUM OF PROJECTS PER PAGE  ****/
  function handleAchievementsPerPage() {     
    if(smallScreen) {
      setCurrentPage(1);
    } else if (mediumScreen) {
      setCurrentPage(1);
    } else if(largeScreen) {
      setCurrentPage(1);
    }
  };
  /*****/



  /****  CHANGE NUM OF PROJECTS PER PAGE  ****/
  function handleCurrentPage(currentPage) {     
    setCurrentPage(currentPage);
  };
  /*****/


 
  useEffect(() => {
    setAchievementsData(achievements);

    handleAchievementsPerPage();
  }, [achievements, smallScreen, mediumScreen, largeScreen]);

////////



  return (
    <section className={classes.achievementsPageSection}>
      <TitleContainer 
        title='My Achievements'
        image={projectSvg}
        alt='projectIcon'
        className='titleContainer'
      />

      <MainContainer className='mainContainer_AchievementPageSection'>
        <SubContainer className={'subContainer_AchievementSection'}>
            {
              <div className={classes.mainContainer}>

                <div className={classes.innerContainer}>
                  {currentAchievements.map((achievement) => (
                    <Achievement 
                      label={achievement?.title}
                      text={achievement?._description}
                      id={achievement?.achievement_id}
                      key={achievement.achievement_id}
                    />
                  ))}
                </div>

                {
                  <Pagination 
                    totalItems={totalAchievements} 
                    itemsPerPage={achievementsPerPage ? achievementsPerPage : 1}
                    pageClick={handleCurrentPage}
                    containerClass='container_achievement'
                  />
                }
              </div>
            }
        </SubContainer>    
      </MainContainer>
    </section>
  )
}

export default Achievements