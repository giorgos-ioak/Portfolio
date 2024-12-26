import classes from './Button.module.css';

function Button({ children, className, onClick }) {

  return (
    <button 
      className={`${classes[className]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button