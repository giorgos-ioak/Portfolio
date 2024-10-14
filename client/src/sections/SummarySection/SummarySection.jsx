import classes from './SummarySection.module.css';
import flag from '../../assets/flag.svg';

function SummarySection() {
  return (
    <section className={classes.summarySection}>
        <div className={classes.titleContainer}>
          <h2 className={classes.h2}>Summary</h2>
          <img src={flag} alt='flagIcon'/>
        </div>

        <p className={classes.p}>
          I'm Giorgos, a Freelance Software Developer and I have 2 Years of Experience, in creating
          dynamic and responsive web applications.<br/> <br/>
          I have used a variety of technologies. My GitHub projects highlight my proficiency with
          JavaScript, React.js, Node.js, Express.js, Redux Toolkit and React Router among others.
        </p>

        <div className={classes.redBlock}></div>
    </section>
  )
}

export default SummarySection