import classes from './Container.module.css';

function Container({ children, className }) {
  return (
    <div className={`${classes[className]}`}>
      {children}
    </div>
  )
}

export default Container;