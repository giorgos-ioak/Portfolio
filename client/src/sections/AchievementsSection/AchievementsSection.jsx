import classes from './AchievementsSection.module.css';
import titleIcon from '../../assets/story.svg';
import { useMediaQuery } from '@mui/material';


import Button from '../../components/Button/Button.jsx';
import Achievement from '../../components/Achievement/Achievement.jsx';

function AchievementsSection() {
  const smallScreen = useMediaQuery('(max-width:1025px)');

  return (
    <section className={classes.achievementsSection}>
      <div className={classes.titleContainer}>
        <h2 className={classes.h2}>Key Achievements</h2>
        <img src={titleIcon} alt='projectIcon'/>
      </div>

      <div className={classes.mainContainer}>
        <div className={classes.subContainer}>
          {smallScreen && 
            <Achievement 
              label='Achievement 1' 
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
            />
          }

          {!smallScreen && 
            <>
              <Achievement 
                label='Achievement 1' 
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
              />

              <Achievement 
                label='Achievement 2' 
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry industry. Lorem Ipsum has been the industry.'
              />
            </> 
          }
        </div>
        

        <div className={classes.btnContainer}>
          <Button className='viewMoreBtn'>View More</Button>
        </div>

        <div className={classes.redBlock}></div> 

      </div>
    </section>
  )
}

export default AchievementsSection