import MainContainer from '../../components/Containers/MainContainer/MainContainer.jsx';
import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';

import classes from '../Home/sections/Contact/Contact.module.css';

import ContactContainer from '../../components/Containers/ContactContainer/ContactContainer.jsx';

function Contact() {
  return (
    <section className={classes.getInTouchSection}>
      <div style={{marginTop: '7rem'}}></div>
      <MainContainer className='mainContainer_ContactSection'>
        <SubContainer className='subContainer_ContactSection'>
          <ContactContainer />
          <p className={classes.p}>Copyright 2025 © All Rights Reserved</p>
        </SubContainer>
      </MainContainer>
    </section>
  )
}

export default Contact