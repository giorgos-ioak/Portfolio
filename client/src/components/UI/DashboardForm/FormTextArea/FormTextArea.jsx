import classes from '../Form.module.css';


function FormTextArea({ label, name, value, onChange }) {
  return (
    <div className={classes.select_container}>
      {label && <label className={classes.label}>{label}</label>}
      <textarea 
        {...(value !== undefined ? { value } : {})}
        {...(onChange ? { onChange } : {})} 
        type='text' 
        name={name} 
        required
      />
    </div>
  )
}

export default FormTextArea;