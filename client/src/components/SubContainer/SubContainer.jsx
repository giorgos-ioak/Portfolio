import classes from './SubContainer.module.css';

function Container({ children, className }) {
  return (
    <div className={`${classes[className]}`}>
      {children}
    </div>
  )
}

export default Container;