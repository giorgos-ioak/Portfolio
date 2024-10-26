import classes from './TitleContainer.module.css';

function TitleContainer({ title, image, alt, className }) {
  return (
    <div className={`${classes[className]}`}>
      <h2 className={classes.h2}>{title}</h2>
      <img src={image} alt={alt}/>
    </div>
  )
}

export default TitleContainer