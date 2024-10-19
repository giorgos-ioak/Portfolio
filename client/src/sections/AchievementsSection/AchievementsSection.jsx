import classes from './AchievementsSection.module.css';
import titleIcon from '../../assets/story.svg';
import { useMediaQuery } from '@mui/material';


import Button from '../../components/Button/Button.jsx';
import Achievement from '../../components/AchievementContainer/Achievement.jsx';
import Container from '../../components/Container/Container.jsx';
import TitleContainer from '../../components/TitleContainer/TitleContainer.jsx';
import RedBlock from '../../components/RedBlock/RedBlock.jsx';

function AchievementsSection() {
  const smallScreen = useMediaQuery('(max-width:1025px)');

  return (
    <section className={classes.achievementsSection}>
      <TitleContainer 
        title='Key Achievements'
        image={titleIcon}
        alt='titleIcon'
        className='titleContainer'
      />

      <div className={classes.mainContainer}>
        <Container className={'subContainer_AchievementSection'}>
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
        </Container>
        

        <div className={classes.btnContainer}>
          <Button className='viewMoreBtn'>View More</Button>
        </div>

        <RedBlock className='redBlock_AchievementSection'/>

      </div>
    </section>
  )
}

export default AchievementsSection