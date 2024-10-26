import Button from '../../UI/Button/Button.jsx';
import classes from './Achievement.module.css'; 

function Achievement({ label, text }) {
  return (
    <div className={classes.mainContainer}>
      <label className={classes.label}>{label}</label>
      <p className={classes.p}>{text}</p>
      <div>
        <Button className={'detailsBtn'}>Details</Button>
      </div>
    </div>
  )
}

export default Achievement