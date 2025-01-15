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
        I am a 24 year old highly motivated and detail-oriented <strong>Full-Stack Software Developer</strong> based in Thessaloniki, Greece.<br/>I have experience designing and building dynamic, responsive, and user-friendly web applications.<br/><br/>

        My technical expertise includes JavaScript, C#, React.js, Node.js, Express.js, and .NET
        <br/><br/>My GitHub portfolio showcases a diverse range of projects that demonstrate my ability to develop <strong>full stack</strong> applications. I stay updated with new technologies to create effective and reliable digital solutions for clients.







        </p>
    </section>
  )
}

export default SummarySection