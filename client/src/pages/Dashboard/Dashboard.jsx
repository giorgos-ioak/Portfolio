import classes from '../../components/UI/DashboardForm/Form.module.css';

import FormTextArea from '../../components/UI/DashboardForm/FormTextArea/FormTextArea.jsx';
import FormInput from '../../components/UI/DashboardForm/FormInput/FormInput.jsx';
import Divider from '../../components/UI/Divider/Divider.jsx';
import { useState } from 'react';

function Dashboard() {

  const [type, setType] = useState('');

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  return (
    <section className={classes.section}>
      <div className={classes.selectType_container}>
        <label 
          className={classes.label} 
          style={{
            alignSelf: 'center',
            marginBottom: '0',
            fontWeight: 'bold',
            opacity: '1'
          }}
        >
          Type :
        </label>

        <select 
          required 
          value={type}
          onChange={handleTypeChange}
        >
          <option value='' disabled>Choose a Type</option>
          <option value='Projects'>Projects</option>
          <option value='Achievements'>Achievements</option>
          <option value='Skills'>Skills</option>
        </select>
      </div>

      <form className={classes.form}>
        <h3 
          className={classes.h3} 
          style={{textAlign: 'center'}}
        >
          Admin Dashboard
        </h3>

        {type === '' ? (
          <p 
            className={classes.label} 
            style={{textAlign: 'center'}}
          >
            Please select a Type
          </p> ) : null}

        {type === '' ? null : (
          <>
            {type === 'Projects' || type === 'Achievements' ? (
              <>
                <div className={classes.box_container}>
                  <div className={classes.formInput_container}>
                    <FormInput
                      label='Title'
                      required={true}
                    />
                    <FormTextArea
                      label='Description'
                      required={true}
                    />
                  </div>
                </div>
                <div style={{display: 'flex' , justifyContent: 'center'}}>
                  <Divider black/>
                </div>
              </>
            ) : null}

            {type === 'Projects' ? (
              <>
                <div className={classes.box_container}>
                  <div className={classes.formInput_container}>
                    <FormInput
                      label='Technologies'
                      required={true}
                    />
                    <FormTextArea
                      label='Demo Instructions'
                      required={false}
                    />
                  </div>
                </div>
                <div style={{display: 'flex' , justifyContent: 'center'}}>
                  <Divider black/>
                </div>
              </>
            ) : null}

            {type === 'Projects' ? (
              <>
                <div className={classes.box_container}>
                  <div className={classes.formInput_container}>
                    <FormInput
                      label='Demo'
                      required={false}
                    />
                    <FormInput
                      label='Github'
                      required={false}
                    />
                    <FormInput
                      label='Figma'
                      required={false}
                    />
                  </div>
                </div>
              </>
            ) : null} 



            {type === 'Achievements' ? (
              <>
                <div className={classes.box_container}>
                  <div className={classes.formInput_container}>
                    <FormInput
                      label='Certificate'
                      required={false}
                    />
                  </div>
                </div>
              </>
            ) : null}



            {type === 'Skills' ? (
              <>
                <div className={classes.box_container}>
                  <div className={classes.formInput_container}>
                    <FormInput
                      label="Skills (,)"
                      required={true}
                    />
                  </div>
                </div>
              </>
            ) : null}  


            <div className={classes.submitForm_container}>
              <button 
                type="submit" 
                className={classes.btn}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  )
}

export default Dashboard