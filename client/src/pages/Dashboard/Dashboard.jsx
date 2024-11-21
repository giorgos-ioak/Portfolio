import classes from '../../components/UI/DashboardForm/Form.module.css';

import FormTextArea from '../../components/UI/DashboardForm/FormTextArea/FormTextArea.jsx';
import FormInput from '../../components/UI/DashboardForm/FormInput/FormInput.jsx';
import Divider from '../../components/UI/Divider/Divider.jsx';
import Loading from '../../components/UI/Loading/Loading.jsx';
import { useState } from 'react';

function Dashboard() {

  const [type, setType] = useState('');

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  console.log(type);

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
          <option value='Skills'>Skills</option>
          <option value='Projects'>Projects</option>
          <option value='Achievements'>Achievements</option>
        </select>
      </div>

      <form className={classes.form}>
        <h3 className={classes.h3}>Dashboard</h3>

        <div className={classes.box_container}>
          <div className={classes.formInput_container}>
            <FormInput
              label='Title'
              required={true}
            />
            <FormTextArea
              label='Description'
            />
          </div>
        </div>
        <div style={{display: 'flex' , justifyContent: 'center'}}>
          <Divider black/>
        </div>


        <div className={classes.box_container}>
          <div className={classes.formInput_container}>
            {type === 'Projects' ? (
              <>
                <FormInput
                  label='Technologies'
                  required={true}
                />
                <FormTextArea
                  label='Demo Instructions'
                />
              </> 
            ) : null}
            
          </div>
        </div>
        <div style={{display: 'flex' , justifyContent: 'center'}}>
          <Divider black/>
        </div>


        <div className={classes.box_container}>
          <div className={classes.formInput_container}>
          {type === 'Projects' ? (
              <>
                <FormInput
                  label='Demo'
                />
                <FormInput
                  label='Github'
                />
                <FormInput
                  label='Figma'
                />
              </> 
            ) : null}
          </div>
        </div>

        <div className={classes.submitForm_container}>
          <button 
            type="submit" 
            className={classes.btn}
            disabled 
          >
            Submit
          </button>
        </div>
      </form>
    </section>
    


















    // <>
    //   <div className={classes.typeContainer}>
    //     <label className={classes.typeLabel} for='type'>Type</label>
    //     <select name='type'>
    //       <option value='Skills'>Choose an option</option>
    //     </select>
    //   </div>

    //   <form className={classes.form}>
    //     <div className={classes.mainContainer}>
    //       <div className={classes.innerTopContainer}>
    //         <input 
    //           className={classes.input} 
    //           type='text' 
    //           placeholder='Title' 
    //           required 
    //           style={{
    //             width: '30%'
    //           }}
    //         />
    //         <textarea className={classes.textarea} type='text' placeholder='Description' required />

    //       </div>

    //       <div className={classes.innerBottomContainer}>

    //       </div>
    //     </div>

    //     <Button className='viewMoreBtn'>Submit</Button>
    //   </form>
    // </>
  )
}

export default Dashboard