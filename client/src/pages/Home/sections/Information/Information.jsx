import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import education from '../../../../assets/svgIcons/education.svg';

import classes from '../SkillSection/SkillSection.module.css';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';


import MainContainer from '../../../../components/Containers/MainContainer/MainContainer.jsx';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer.jsx';

function Information() {
  // Setting the queries for different screen sizes.
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <section className={classes.skillSection}>
      <TitleContainer 
        image={education}
        title='Education & CV'
        className='titleContainer'
      />
      <MainContainer className='mainContainer_Information'>
        <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
          <Box sx={{
             width: '100%',
             typography: 'body1',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             flexDirection: 'column',
             backgroundColor: 'white',
             padding: '0.3rem',
             borderRadius: '9px'
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 0, borderColor: 'black' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab 
                    label="Education" 
                    value="1" 
                    sx={{
                      fontWeight: '400',
                      color: 'black',
                      '&.Mui-selected': {
                        fontWeight: '800'
                      }
                      }}
                    />
                  <Tab 
                    label="CV" 
                    value="2" 
                    sx={{
                      fontWeight: '400',
                      color: 'black',
                      '&.Mui-selected': {
                        fontWeight: '800'
                      }
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
              <Box sx={{ marginTop: 2 }}
              >
                <p className={classes.p}>
                  I have pursued the following educational qualifications that have shaped my technical and professional skills:
                </p>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <p>
                      <strong>Professional Diploma Level 6 - Software Development</strong> (2 years): Specialized in full-stack web development, database management, and modern programming practices.
                    </p>
                    <p style={{fontWeight: '500', marginTop: '0.5rem'}}>
                      IEK DELTA 360, Thessaloniki, Greece
                    </p>
                  </li>
                  <br/>
                  <li className={classes.li}>
                    <p>
                      <strong>BSc - Petroleum and Gas Engineering:</strong> Focused on drilling, reservoir engineering, and production optimization, providing a solid foundation in energy resource management.
                    </p>
                    <p style={{fontWeight: '500', marginTop: '0.5rem'}}>
                      IHU, Kavala, Greece
                    </p>
                  </li>
                </ul>
              </Box>
              </TabPanel>

              <TabPanel value="2">
                <Box 
                  sx={{ 
                    marginTop: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    padding: '1rem', 
                    backgroundColor: '#f9f9f9', 
                    borderRadius: '8px', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                  }}
                >
                  <p style={{ margin: '1rem 0', fontSize: '1rem', color: '#555' }}>
                    Click the button below to view or download my CV.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/11T-87ZdkH9BbBUME9KBO4z-xtnXVwUu_/view?usp=sharing" 
                    target="_blank" 
                    style={{ textDecoration: 'none' }}
                  >
                    <button 
                      style={{
                        backgroundColor: 'rgb(25, 118, 210)',
                        color: 'white',
                        border: 'none',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: '0.3s ease'
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = 'rgb(25, 118, 210)')}
                    >
                      View CV
                    </button>
                  </a>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </SubContainer>
      </MainContainer>
    </section>
    
  )
}

export default Information