import classes from './ProjectDetails.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import arrow from '../../assets/svgIcons/arrow.svg';
import image from '../../assets/project2Img.jpg';

import Button from '../../components/UI/Button/Button.jsx';


function ProjectDetails() {
  const { projectId } = useParams();

  const array = ['JavaScript', 'React', 'Node.js', 'Express.js', 'React Router'];

  // const projects = useSelector((state) => state.databaseData.value.projects);
  // console.log(projects);

  return (
    <section className={classes.section}>
      <div className={classes.imgContainer}>
        <img src={image} className={classes.img}/>
      </div>
      
      <div className={classes.mainContainer}>
        <div className={classes.infoContainer}>
          <h1 className={classes.h1}>Admin Dashboard</h1>
          <p className={classes.p}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.
          </p>
        </div>

        <div className={classes.btnContainer}>
          <Button className='redirectBtn'>
            Demo
            <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
          </Button>

          <Button className='redirectBtn'>
            Github
            <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
          </Button>

          <Button className='redirectBtn'>
            Figma
            <img src={arrow} alt='arrowIcon' className={classes.arrowIcon}/>
          </Button>
        </div>

        <div className={classes.techContainer}>
          <h2 className={classes.h2}>Technologies</h2>
          <ul className={classes.techBox}>
            {array.map((item) => 
              <li
                className={classes.li}
                key={item}
              >
                {item}
              </li>
            )}
          </ul>
        </div>

        <div className={classes.instructionsContainer}>
          <h2 className={classes.h2}>Demo Instructions</h2>
          <p className={classes.p}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      </div>

    </section>
  )
}

export default ProjectDetails;