import { useState } from 'react';
import Swal from 'sweetalert2';

import classes from './GetInTouchContainer.module.css';

import whatsup from '../../../assets/socialMediaIcons/whatsup.png';
import facebook from '../../../assets/socialMediaIcons/facebook.png';
import snapchat from '../../../assets/socialMediaIcons/snapchat.png';
import gmail from '../../../assets/socialMediaIcons/gmail.png';
import messageIcon from '../../../assets/svgIcons/messageIcon.svg';

function GetInTouchContainer() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7512dd43-84c5-48b0-9e82-d7ad7be681af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Will get back to you soon!",
        icon: "success",
        confirmButtonText: "OK" 
      });
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };


  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSubContainer}>
        <div className={classes.labelContainer}>
          <label className={classes.label}>Get In Touch</label>
          <img src={messageIcon}/>
        </div>
        <div className={classes.iconsContainer}>
          <img src={whatsup} alt='whatsupIcon'/>
          <img src={facebook} alt='facebookIcon'/>
          <img src={snapchat} alt='snapchatIcon'/>
          <img src={gmail} alt='gmailIcon'/>
        </div>
      </div>

      <form 
        onSubmit={onSubmit} 
        className={classes.formContainer}
      >
        <input type='text' name='name' required className={classes.input} placeholder='Your Name...'/>
        <input type='text' name='email' required className={classes.input} placeholder='Your Email...'/>
        <textarea name='message' required className={classes.input} placeholder='Message...'/>
        <button className={classes.btn}>Submit</button>
      </form>
    </div>
  )
}

export default GetInTouchContainer