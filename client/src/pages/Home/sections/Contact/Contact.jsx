import classes from './Contact.module.css';

import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import ContactContainer from '../../../../components/Containers/ContactContainer/ContactContainer.jsx';

function Contact() {
  return (
    <section className={classes.contactSection}>
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