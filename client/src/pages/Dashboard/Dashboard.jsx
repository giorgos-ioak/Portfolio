import classes from '../../components/UI/DashboardForm/Form.module.css';

import FormTextArea from '../../components/UI/DashboardForm/FormTextArea/FormTextArea.jsx';
import FormInput from '../../components/UI/DashboardForm/FormInput/FormInput.jsx';
import Divider from '../../components/UI/Divider/Divider.jsx';

import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';



function Dashboard() {
  const navigate = useNavigate();
  const [type, setType] = useState('');

  function handleTypeChange(event) {
    setType(event.target.value);
  }


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      console.log(data);
      
      let response1 , response2;


      // TYPE = PROJECT
      if(type === 'Projects') {
        // Creating an array with all technologies separated by commma.
        const technologies = data.technologies.split(',');

        response1 = await fetch('http://localhost:3000/createNewProject', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const result = await response1.json();
        const projectId = result.projectId;

        response2 = await fetch(`http://localhost:3000/postProjectTechnologies/${projectId}`, {
          method: 'POST',
          body: JSON.stringify(technologies),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if(!response1.ok) {
          throw new Error(`Response1 status: ${response1.status}`)
        }

        if(!response2.ok) {
          throw new Error(`Technologies insertion failed with status: ${response2.status}`);
        }

        return navigate('/');


      // TYPE = ACHIEVEMENT
      } else if(type === 'Achievements') {
        response1 = await fetch('http://localhost:3000/createNewAchievement', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });


        if(!response1.ok) {
          throw new Error(`Response status: ${response1.status}`)
        }

        return navigate('/');
      } 


      // TYPE = SKILLS
      response1 = await fetch('http://localhost:3000/createNewSkill', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

  
      if(!response1.ok) {
        throw new Error(`Response status: ${response1.status}`)
      }
  
      return navigate('/');
  
    } catch(err) {
      console.error(err.message);
    }
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

      <form 
        onSubmit={handleSubmit}
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
                      label='description'
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
                      label='demoInstructions'
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
                    <FormInput
                      label='Category'
                      name='category'
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

export default Dashboard;
