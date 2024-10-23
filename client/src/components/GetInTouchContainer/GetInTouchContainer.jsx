import classes from './GetInTouchContainer.module.css';

import whatsup from '../../assets/socialMediaIcons/whatsup.png';
import facebook from '../../assets/socialMediaIcons/facebook.png';
import snapchat from '../../assets/socialMediaIcons/snapchat.png';
import gmail from '../../assets/socialMediaIcons/gmail.png';
import messageIcon from '../../assets/messageIcon.svg';

function GetInTouchContainer() {
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

      <form className={classes.formContainer}>
        <input type='text' className={classes.input} placeholder='Your Name...'/>
        <input type='text' className={classes.input} placeholder='Subject...'/>
        <textarea type='text' className={classes.input} placeholder='Message...'/>

        <button className={classes.btn}>Get In Touch</button>
      </form>
    </div>
  )
}

export default GetInTouchContainer