import classes from '../Form.module.css';


function FormInput({ label, name, required, value, onChange }) {
  return (
    <div className={classes.select_container}>
      {label && <label className={classes.label}>{label}</label>}
      <input 
        {...(value !== undefined ? { value } : {})}
        {...(onChange ? { onChange } : {})} 
        type='text' 
        name={name} 
        required = {required}
      />
    </div>
  )
}

export default FormInput
