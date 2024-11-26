import classes from '../../components/UI/DashboardForm/Form.module.css';

import FormTextArea from '../../components/UI/DashboardForm/FormTextArea/FormTextArea.jsx';
import FormInput from '../../components/UI/DashboardForm/FormInput/FormInput.jsx';
import Divider from '../../components/UI/Divider/Divider.jsx';

import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';



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

      <Form 
        method='post'
        action='/dashboard'
        className={classes.form}
      >
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
                      name='title'
                      required={true}
                    />
                    <FormTextArea
                      label='Description'
                      name='description'
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
                      label='Technologies (,)'
                      name='technologies'
                      required={true}
                    />
                    <FormTextArea
                      label='Demo Instructions'
                      name='demoInstructions'
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
                      name='demo'
                      required={false}
                    />
                    <FormInput
                      label='Github'
                      name='github'
                      required={false}
                    />
                    <FormInput
                      label='Figma'
                      name='figma'
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
                      name='certificate'
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
                      name='skills'
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
      </Form>
    </section>
  )
}

export default Dashboard;


export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log(data);  

    const response = await fetch('http://localhost:3000/createNewData', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return redirect('/');

  } catch(err) {
    console.error(err.message);
  }
};