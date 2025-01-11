import classes from './HeroSection.module.css';
import image from '../../../../assets/robotFace.jpg';


function HeroSection() {
  return (
    <section className={classes.heroSection}>
      <div className={classes.container}>
        <div>
          <h1 className={classes.h1}>I'm Giorgos</h1>
          <h3 className={classes.h3}>A Full-Stack Software Developer.</h3>
          </div>
        <img src={image} className={classes.img} alt='profilePicture'/>
      </div>
      <svg
        className={classes.curvedLine}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q50,0 100,10"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
      </svg>
    </section>
  )
}

export default HeroSection;