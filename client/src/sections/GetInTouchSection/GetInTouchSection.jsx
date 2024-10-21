import classes from './GetInTouchSection.module.css';
// import messageIcon from '../../assets/messageIcon.svg';

// import TitleContainer from '../../components/TitleContainer/TitleContainer.jsx';
import MainContainer from '../../components/MainContainer/MainContainer.jsx';
import SubContainer from '../../components/SubContainer/SubContainer.jsx';
import GetInTouchContainer from '../../components/GetInTouchContainer/GetInTouchContainer.jsx';
import RedBlock from '../../components/RedBlock/RedBlock.jsx';

function GetInTouchSection() {
  return (
    <section className={classes.getInTouchSection}>
      {/* <TitleContainer
        title='Get In Touch'
        image={messageIcon}
        alt='messsageIcon'
        className='titleContainer'
      /> */}

      <MainContainer className='mainContainer_GetInTouchSection'>
        <SubContainer className='subContainer_GetInTouchSection'>
          <GetInTouchContainer />
          <p className={classes.p}>Copyright 2024 © All Rights Reserved</p>
        </SubContainer>

        <RedBlock className='redBlock_GetInTouchSection'/>
      </MainContainer>
    </section>
  )
}

export default GetInTouchSection