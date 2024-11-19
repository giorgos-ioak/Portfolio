import classes from './SummarySection.module.css';
import flag from '../../../../assets/svgIcons/flag.svg';

import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer.jsx';

function SummarySection() {
  return (
    <section className={classes.summarySection}>
        <TitleContainer 
          title='Summary' 
          image={flag} 
          alt='flagIcon' 
          className='titleContainer'
        />

        <p className={classes.p}>
          I'm Giorgos, a Freelance Software Developer and I have 2 Years of Experience, in creating
          dynamic and responsive web applications.<br/> <br/>
          I have used a variety of technologies. My GitHub projects highlight my proficiency with
          JavaScript, React.js, Node.js, Express.js, Redux Toolkit and React Router among others.
        </p>
    </section>
  )
}

export default SummarySection