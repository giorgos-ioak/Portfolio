import classes from './GetInTouchSection.module.css';
import { useMediaQuery } from '@mui/material';

import MainContainer from '../../components/MainContainer/MainContainer.jsx';
import SubContainer from '../../components/SubContainer/SubContainer.jsx';
import GetInTouchContainer from '../../components/GetInTouchContainer/GetInTouchContainer.jsx';
import RedBlock from '../../components/RedBlock/RedBlock.jsx';

function GetInTouchSection() {
  const verySmallScreen = useMediaQuery('(max-width:370px)');

  return (
    <section className={classes.getInTouchSection}>
      <MainContainer className='mainContainer_GetInTouchSection'>
        <SubContainer className='subContainer_GetInTouchSection'>
          <GetInTouchContainer />
          <p className={classes.p}>Copyright 2024 © All Rights Reserved</p>
        </SubContainer>

        {!verySmallScreen && 
          <RedBlock className='redBlock_GetInTouchSection'/>
        }
      </MainContainer>
    </section>
  )
}

export default GetInTouchSection