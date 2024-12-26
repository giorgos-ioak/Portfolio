import classes from './AhvievementDetails.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import arrow from '../../assets/svgIcons/arrow.svg';
import image from '../../assets/project2Img.jpg';

import Button from '../../components/UI/Button/Button.jsx';


function AhvievementDetails() {
  // Retrieving the project's id from the URL params.
  const { achievementId } = useParams();

  // Getting the achievements from the global state.
  const achievements = useSelector((state) => state.databaseData.value?.achievements);
  const achievement = achievements?.filter(obj => obj.achievement_id === Number(achievementId));
  

  

  return (
    <section className={classes.section}>
      <div className={classes.imgContainer}>
        <img src={image} className={classes.img}/>
      </div>
      
      <div className={classes.mainContainer}>
        <div className={classes.infoContainer}>
          <h1 className={classes.h1}>{achievement?.[0].title}</h1>
          <p className={classes.p}>
            {achievement?.[0]._description}
          </p>
        </div>

        <div className={classes.btnContainer}>
          {achievement?.[0].certificate_btn ? (
            <Button className='redirectBtn'>
              Certificate
              <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default AhvievementDetails