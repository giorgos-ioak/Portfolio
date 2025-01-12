import Box from '@mui/material/Box';
import education from '../../assets/svgIcons/education.svg';

import classes from '../Home/sections/SkillSection/SkillSection.module.css';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';


import SubContainer from '../../components/Containers/SubContainer/SubContainer.jsx';
import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer.jsx';

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
        title='My CV'
        className='titleContainer'
      />
        <SubContainer className={isSmallScreen ? 'subContainerSmall' : 'subContainer'}>
          <Box sx={{
             width: '100%',
             typography: 'body1',
             display: 'flex',
             flexDirection: 'column',
             backgroundColor: 'white',
             padding: '0.3rem',
             borderRadius: '9px'
            }}
          >
            <Box 
              sx={{ 
                marginTop: 3, 
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
          </Box>
        </SubContainer>
    </section>
  )
}

export default Information