import classes from './Form.module.css';

import EditSkills from './EditTypes/EditSkills.jsx';
import EditProjects from './EditTypes/EditProjects.jsx';
import EditAchievements from './EditTypes/EditAchievements.jsx';

function EditForm({ submitFn, type }) {
  return (
      <form 
        onSubmit={submitFn}
        className={classes.form}
      >
        <h3 
          className={classes.h3} 
          style={{textAlign: 'center'}}
        >
          Edit {type}
        </h3>

        {type === '' ? (
          <p 
            className={classes.label} 
            style={{textAlign: 'center'}}
          >
            Please select a Type
          </p> 
          ) : null 
        }

        {type === 'Skills' && (
          <EditSkills />
        )}

        {type === 'Projects' && (
          <EditProjects />
        )}

        {type === 'Achievements' && (
          <EditAchievements />
        )}
            
              
            
            

             {/* <>
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
                        label="Skill(s) (,)"
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
            </> */}
      </form>
  )
}

export default EditForm