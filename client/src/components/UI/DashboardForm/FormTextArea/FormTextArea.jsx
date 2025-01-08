import classes from '../Form.module.css';


function FormTextArea({ label, name, value, onChange, required }) {
  return (
    <div className={classes.select_container}>
      {label && <label className={classes.label}>{label}</label>}
      <textarea 
        {...(value !== undefined ? { value } : {})}
        {...(onChange ? { onChange } : {})} 
        type='text' 
        name={name} 
        required={required}
      />
    </div>
  )
}

export default FormTextArea;