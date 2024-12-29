import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import classes from '../SkillSection/SkillSection.module.css';

import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer';
import RedBlock from '../../../../components/UI/RedBlock/RedBlock';
import MainContainer from '../../../../components/Containers/MainContainer/MainContainer';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function PortfolioInfo() {
  // Setting the queries for different screen sizes.
  const verySmallScreen = useMediaQuery('(max-width:370px)');
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <section className={classes.skillSection}>
        <TitleContainer 
          title='This Portfolio'
          className='titleContainer'
        />
        <MainContainer className='mainContainer_PortfolioInfo'>
          <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
            <div 
              style={{
                display: 'flex', 
                flexDirection: 'column'
              }}
            >
              <h2 className={classes.h2}>
                This Portfolio is not just a static website.<br/> It is a <strong>full-stack web application</strong> built using a mySQL database, a backend server, and a frontend client.
              </h2>

              <Box 
                sx={{ 
                  width: '100%',
                  display: 'flex',
                  marginTop: 6,
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '1rem'
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="wrapped label tabs example"
                >
                  <Tab  
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 'bold', 
                    }}
                    value="one" 
                    label="SQL"
                  />
                  <Tab 
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 'bold', 
                    }}
                    value="two" 
                    label="Backend" 
                  />
                  <Tab 
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 'bold', 
                    }}
                    value="three" 
                    label="Frontend" 
                  />
                </Tabs>

                {/* Tab Content */}
                <Box
                  sx={{
                    marginTop: 6,
                    textAlign: 'center'
                  }}
                >
                  {value === 'one' && (
                    <>
                    <p className={classes.p}>
                       Having a <strong>mySQL</strong> database & using APIs built on the backend, I have created <strong>dynamic queries</strong> for:
                    </p>
                    <ul className={classes.ul}> 
                      <li className={classes.li}><strong>Creating</strong> new entries for projects, skills, and achievements.</li>
                      <li className={classes.li}><strong>Editing</strong> existing records to keep the portfolio up-to-date.</li>
                      <li className={classes.li}><strong>Deleting</strong> outdated or irrelevant data securely.</li>
                      <li className={classes.li}><strong>Fetching</strong> and filtering data dynamically for various components on the frontend.</li>
                    </ul>
                    <p className={classes.p}>
                      All the actions above, are performed through an <strong>Admin Dashboard</strong>  panel. <br/>
                      This architecture ensures that the portfolio remains both scalable and performant.
                    </p>
                  </>
                  )}
                  {value === 'two' && (
                    <>
                      <p className={classes.p}>
                        The backend of this portfolio is powered by <strong>Node.js</strong> and <strong>Express.js</strong> <br/> Key functionalities of the backend include:
                      </p>
                      <p className={classes.p}></p>
                      <ul className={classes.ul}>
                        <li className={classes.li}>
                          <strong>RESTful APIs:</strong> Endpoints are designed for creating, reading, updating, and deleting (CRUD) data seamlessly.
                        </li>
                        <li className={classes.li}>
                          <strong>Image Uploads:</strong> Middleware like <code>multer</code> is utilized to handle image uploads efficiently, ensuring files are correctly processed and stored.
                        </li>
                        <li className={classes.li}>
                          <strong>File System Management:</strong> The <code>fs</code> module is employed to manage server-side files, including creation, deletion, and organization of project assets and resources.
                        </li>
                      </ul>
                      <p className={classes.p}>
                        This backend ensures that the portfolio remains secure, reliable, and capable of handling complex data operations.
                      </p>
                    </>
                  )}
                  {value === 'three' && (
                    <>
                      <p className={classes.p}>
                        The frontend is built with <strong>React.js</strong>. Core technologies and features include:
                      </p>
                      <ul className={classes.ul}>
                        <li className={classes.li}>
                          <strong>React Router:</strong> Provides seamless navigation and routing, ensuring users can explore different sections of the portfolio effortlessly.
                        </li>
                        <li className={classes.li}>
                          <strong>React Redux Toolkit:</strong> Manages application state efficiently, ensuring consistent and predictable data flow across components.
                        </li>
                        <li className={classes.li}>
                          <strong>Custom CSS:</strong> Most components are styled with custom CSS, ensuring a unique and polished look that aligns with the portfolio's theme and purpose.
                        </li>
                      </ul>
                      <p className={classes.p}>
                        The frontend design prioritizes responsiveness, accessibility, and a smooth user experience across all devices and screen sizes.
                      </p>
                    </>
                  )}
                </Box>
              </Box>
            </div>
            
          </SubContainer>
        </MainContainer>
        
        {!verySmallScreen && 
          <RedBlock className='redBlock_SkillSection'/>
        }
      </section> 
    </>
    
  );
}