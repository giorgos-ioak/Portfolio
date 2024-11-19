import classes from '../Form.module.css';


function FormInput({ label, required }) {
  return (
    <div className={classes.select_container}>
      {label && <label className={classes.label}>{label}</label>}
      <input 
        type='text' 
        name={label} 
        required = {required}
      />
    </div>
  )
}

export default FormInput
