import classes from './HeroSection.module.css';
import image from '../../../../assets/robotFace.jpg';


function HeroSection() {
  return (
    <section className={classes.heroSection}>
      <div className={classes.container}>
        <div>
          <h1 className={classes.h1}>Hi, I'm Giorgos</h1>
          <h3 className={classes.h3}>A Full-Stack Software Developer.</h3>
          </div>
        <img src={image} className={classes.img} alt='profilePicture'/>
      </div>
    </section>
  )
}

export default HeroSection;