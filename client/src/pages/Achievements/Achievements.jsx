import classes from './Achievements.module.css';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import projectSvg from '../../assets/svgIcons/project.svg';


import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../components/Containers/MainContainer/MainContainer.jsx'
import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';
import Achievement from '../../components/Containers/AchievementContainer/Achievement.jsx';
import MyPagination from '../../components/UI/Pagination/MyPagination.jsx';


function Achievements() {
  // Media Queries
  const smallScreen = useMediaQuery('(max-width:500px)');
  const mediumScreen = useMediaQuery('(min-width:501px) and (max-width:1280px)');
  const largeScreen = useMediaQuery('(min-width:1281px)');

  // Getting the achievements from the global state.
  const achievements = useSelector((state) => state.databaseData.value?.achievements);
  const totalAchievements = achievements?.length;

  
///// PAGINATION /////
  const [achievementsData, setAchievementsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [achievementsPerPage, setAchievementsPerPage] = useState(2);


  const lastProjectIndex = currentPage * achievementsPerPage;
  const firstProjectIndex = lastProjectIndex - achievementsPerPage;
  const currentAchievements = achievementsData.slice(firstProjectIndex, lastProjectIndex);


  /****  Change num of projects per page.  ****/
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



  /****  Change pagination page.  ****/
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
                  <MyPagination 
                    totalItems={totalAchievements} 
                    itemsPerPage={achievementsPerPage ? achievementsPerPage : 1} 
                    pageClick={handleCurrentPage} 
                    smallScreen={smallScreen} 
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