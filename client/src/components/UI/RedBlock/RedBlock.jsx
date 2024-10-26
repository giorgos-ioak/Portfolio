import classes from './RedBlock.module.css';

function RedBlock({ className }) {
  return (
    <div className={`${classes[className]}`}></div> 
  )
}

export default RedBlock