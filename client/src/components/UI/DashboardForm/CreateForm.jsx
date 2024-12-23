import classes from './Form.module.css';

import FormTextArea from './FormTextArea/FormTextArea.jsx';
import Divider from '../Divider/Divider.jsx';
import FormInput from './FormInput/FormInput.jsx';

function CreateForm({ submitFn, type, skillCategory, handleSkillCategoryChange, isError, handleFileChange }) {
  return (
      <form 
        onSubmit={submitFn}
        className={classes.form}
      >
        <h3 
          className={classes.h3} 
          style={{textAlign: 'center'}}
        >
          Create {type}
        </h3>

        {type === '' ? (
          <p 
            className={classes.label} 
            style={{textAlign: 'center'}}
          >
            Please select a Type
          </p> 
          ) : (
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
                    <div className={classes.imageContainer}>
                      Project Image
                      <input required type='file' name='image' onChange={handleFileChange}></input>
                    </div>
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
                    
                    <select 
                      style={{ marginLeft: '0' }}
                      required 
                      value={skillCategory}
                      onChange={handleSkillCategoryChange}
                    >
                      <option value='' disabled>Choose a Category</option>
                      <option value='Programming Language'>Programming Language</option>
                      <option value='Database'>Database</option>
                      <option value='Framework'>Framework</option>
                      <option value='Library-Platform'>Library-Platform</option>
                  </select>
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

            {isError && 
            <p 
              style={{
                fontFamily: 'Montserrat',
                color: 'red',
                fontWeight: '500'
              }}
            >
              
              {type === 'Projects' ? (
                <>
                  Failed to create {type === 'Skills' ? 'Skill' : type === 'Projects' ? 'Project' : 'Achievement'}
                </>
              ) : (
                <>
                  {isError.status} - {isError.message}
                </>
              )}
            </p>
            }
          </>
        )}
      </form>
  )
}

export default CreateForm