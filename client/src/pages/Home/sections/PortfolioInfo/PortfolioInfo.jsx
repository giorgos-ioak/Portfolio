import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from '../SkillSection/SkillSection.module.css';

import TitleContainer from '../../../../components/Containers/TitleContainer/TitleContainer';
import MainContainer from '../../../../components/Containers/MainContainer/MainContainer';
import SubContainer from '../../../../components/Containers/SubContainer/SubContainer';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

export default function PortfolioInfo() {
  // Setting the queries for different screen sizes.
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  
  const [expanded, setExpanded] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null); // Set the current panel or close all
  };

  return (
    <>
    <section className={classes.skillSection}>
        <TitleContainer 
          title='This Portfolio'
          className='titleContainer'
        />
        <MainContainer 
          className={expanded ? 'mainContainer_PortfolioInfo_expanded' 
            : 'mainContainer_PortfolioInfo'
          }
        >
          <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
            <div>
              <h2 className={classes.h2}>
                This Portfolio is not just a basic or static website.<br/><br/> It is a robust <strong>full-stack web application</strong> built using a mySQL database, a backend server, and a dynamic frontend client.
              </h2>

              <Box 
                sx={{ 
                  width: '100%',
                  display: 'flex',
                  marginTop: 6,
                  gap: '1rem',
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '0.5rem'
                }}
              >
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleAccordionChange('panel1')}
                  sx={{
                    borderRadius: '5px',
                    boxShadow: expanded === 'panel1' ? '0px 4px 12px rgba(0, 0, 0, 0.3)' : '0px 2px 6px rgba(0, 0, 0, 0.1)', 
                    backgroundColor: expanded === 'panel1' ? '#f5f5f5' : '#ffffff', 
                    transition: 'all 0.3s ease', 
                    border: '1px solid',
                    borderColor: expanded === 'panel1' ? 'rgba(63, 63, 63, 0.34)' : '#cccccc'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography 
                      component="span"
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        fontWeight: '400',
                      }}
                    >
                      SQL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={classes.p}>
                      The database is structured with relational tables that ensure data integrity and minimize redundancy. Using a <strong>mySQL</strong> database & APIs built on the backend, I have created <strong>dynamic queries</strong> for:
                    </p>
                    <ul className={classes.ul}> 
                      <li className={classes.li}><strong>Creating</strong> new entries for projects, skills, and achievements.</li>
                      <li className={classes.li}><strong>Editing</strong> existing records to keep the portfolio up-to-date.</li>
                      <li className={classes.li}><strong>Deleting</strong> outdated or irrelevant data securely.</li>
                      <li className={classes.li}><strong>Fetching</strong> and filtering data dynamically for various components on the frontend.</li>
                    </ul>
                    <p className={classes.p}>
                      All the actions above, are performed through an <strong>Admin Dashboard</strong> panel.<br/>
                      This architecture ensures that the portfolio remains both scalable and performant.
                    </p>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleAccordionChange('panel2')}
                  sx={{
                    borderRadius: '5px',
                    boxShadow: expanded === 'panel1' ? '0px 4px 12px rgba(0, 0, 0, 0.3)' : '0px 2px 6px rgba(0, 0, 0, 0.1)', 
                    backgroundColor: expanded === 'panel1' ? '#f5f5f5' : '#ffffff', 
                    transition: 'all 0.3s ease', 
                    border: '1px solid',
                    borderColor: expanded === 'panel1' ? 'rgba(63, 63, 63, 0.34)' : '#cccccc'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography 
                      component="span"
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        fontWeight: '400',
                      }}
                    >
                      Backend
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={classes.p}>
                      The backend of this portfolio is powered by <strong>Node.js</strong> and <strong>Express.js</strong>. Key functionalities include:
                    </p>
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
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleAccordionChange('panel3')}
                  sx={{
                    borderRadius: '5px',
                    boxShadow: expanded === 'panel1' ? '0px 4px 12px rgba(0, 0, 0, 0.3)' : '0px 2px 6px rgba(0, 0, 0, 0.1)', 
                    backgroundColor: expanded === 'panel1' ? '#f5f5f5' : '#ffffff', 
                    transition: 'all 0.3s ease', 
                    border: '1px solid',
                    borderColor: expanded === 'panel1' ? 'rgba(63, 63, 63, 0.34)' : '#cccccc'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography 
                      component="span"
                      sx={{
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        fontWeight: '400',
                      }}
                    >
                      Frontend
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
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
                  </AccordionDetails>
                </Accordion>
              </Box>
            </div>
          </SubContainer>
        </MainContainer>
      </section> 
    </>
    
  );
}