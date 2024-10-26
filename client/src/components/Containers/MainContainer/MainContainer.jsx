import classes from './MainContainer.module.css';

function MainContainer({ children, className }) {
  return (
    <div className={`${classes[className]}`}>
      {children}
    </div>
  )
}

export default MainContainer