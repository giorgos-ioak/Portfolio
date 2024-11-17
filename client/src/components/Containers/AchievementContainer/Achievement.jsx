import Button from '../../UI/Button/Button.jsx';
import classes from './Achievement.module.css'; 

import { Link } from 'react-router-dom';

function Achievement({ label, text, id }) {
  return (
    <div className={classes.mainContainer}>
      <label className={classes.label}>{label}</label>
      <p className={classes.p}>{text}</p>
      <div>
        <Link to={`/achievements/${id}`}>
          <Button className={'detailsBtn'}>Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default Achievement