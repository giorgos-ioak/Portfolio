import classes from './GetInTouchSection.module.css';

import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import GetInTouchContainer from '../../../../components/Containers/GetInTouchContainer/GetInTouchContainer.jsx';

function GetInTouchSection() {
  return (
    <section className={classes.getInTouchSection}>
      <MainContainer className='mainContainer_GetInTouchSection'>
        <SubContainer className='subContainer_GetInTouchSection'>
          <GetInTouchContainer />
          <p className={classes.p}>Copyright 2024 © All Rights Reserved</p>
        </SubContainer>
      </MainContainer>
    </section>
  )
}

export default GetInTouchSection