import classes from '../Form.module.css';


function FormTextArea({ label }) {
  return (
    <div className={classes.select_container}>
      {label && <label className={classes.label}>{label}</label>}
      <textarea 
        type='text' 
        name={label} 
        required
      />
    </div>
  )
}

export default FormTextArea;