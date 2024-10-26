import classes from './Button.module.css';

function Button({ children, className }) {

  return (
    <button className={`${classes[className]}`}>
      {children}
    </button>
  )
}

export default Button