import classes from '../../components/UI/DashboardForm/Form.module.css';

import FormTextArea from '../../components/UI/DashboardForm/FormTextArea/FormTextArea.jsx';
import FormInput from '../../components/UI/DashboardForm/FormInput/FormInput.jsx';
import Divider from '../../components/UI/Divider/Divider.jsx';
import Loading from '../../components/UI/Loading/Loading.jsx';

function Dashboard() {
  return (
    <section className={classes.section}>
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
            <FormInput
              label='Technologies'
              required={true}
            />
            <FormTextArea
              label='Demo Instructions'
            />
          </div>
        </div>
        <div style={{display: 'flex' , justifyContent: 'center'}}>
          <Divider black/>
        </div>


        <div className={classes.box_container}>
          <div className={classes.formInput_container}>
            <FormInput
              label='Demo'
            />
            <FormInput
              label='Github'
            />
            <FormInput
              label='Figma'
            />
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