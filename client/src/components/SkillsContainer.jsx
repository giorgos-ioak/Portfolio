import classes from './SkillsContainer.module.css';

function SkillsContainer({ items, title, titleSvgIcon, itemSvgIcon, imgTitle }) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <img className={classes.img} src={titleSvgIcon} alt={imgTitle}/>
        <label className={classes.label}>{title}</label>
      </div>

      <div className={classes.itemContainer}>
        {items.map((item, index) => (
          <div key={index} className={classes.item}>
            <img src={itemSvgIcon} />
            <p className={classes.p}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsContainer