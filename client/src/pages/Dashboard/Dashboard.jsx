import classes from '../../components/UI/DashboardForm/Form.module.css';

import CreateForm from '../../components/UI/DashboardForm/CreateForm.jsx';
import EditForm from '../../components/UI/DashboardForm/EditForm.jsx';

import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';



function Dashboard() {
  const navigate = useNavigate();

  const [type, setType] = useState('');
  const [setting, setSetting] = useState('');

  const [skillCategory, setSkillCategory] = useState('');

  // Selected ID.
  const [editedProjectId, setEditedProjectId] = useState(null);
  const [editedSkillId, setEditedSkillId] = useState(null);
  const [editedAchievementId, setEditedAchievementId] = useState(null);


  function handleEditedID(id) {
    type === 'Projects' ? setEditedProjectId(id) : type === 'Skills' ? setEditedSkillId(id) : setEditedAchievementId(id);
  }

  let method = '';
  setting === 'Create' ? method = 'POST' : setting === 'Edit' ? method = 'PUT' : setting === 'Delete' ? method = 'DELETE' : undefined;


//// HANDLE CHANGE FUNCTIONS
  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleSkillCategoryChange(event) {
    setSkillCategory(event.target.value);
  }

  function handleSettingChange(event) {
    setSetting(event.target.value);
  }



//// SUBMIT
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      console.log('Data:' , data);
      
      let response1 , response2;


      // TYPE = PROJECT
      if(type === 'Projects') {
        // Creating an array with all technologies separated by commma.
        const technologies = data.technologies.split(',');

        const createProject = 'http://localhost:3000/createNewProject';
        const editProject = `http://localhost:3000/editProject/${editedProjectId}`;
        const deleteProject = '';

        response1 = await fetch( method === 'POST' ? createProject : method === 'PUT' ? editProject : deleteProject , {
          method: method,
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });


        if(method === 'POST') {
          const result = await response1.json();
          const projectId = result.projectId;
  
          response2 = await fetch(`http://localhost:3000/postProjectTechnologies/${projectId}`, {
            method: 'POST',
            body: JSON.stringify(technologies),
            headers: {
              "Content-Type": "application/json"
            }
          });

          if(!response2.ok) {
            throw new Error(`Technologies insertion failed with status: ${response2.status}`);
          }
        }
        

        if(!response1.ok) {
          throw new Error(`Response1 status: ${response1.status}`)
        }

        return navigate('/');

      // TYPE = ACHIEVEMENT
      } else if(type === 'Achievements') {
        const createAchievement = 'http://localhost:3000/createNewAchievement';
        const editAchievement = `http://localhost:3000/editAchievement/${editedAchievementId}`;
        const deleteAchievement = '';

        response1 = await fetch(method === 'POST' ? createAchievement : method === 'PUT' ? editAchievement : deleteAchievement, {
          method: method,
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });


        if(!response1.ok) {
          throw new Error(`Response status: ${response1.status}`)
        }

        return navigate('/');
      } 


      // TYPE = SKILLS
      const createSkill = 'http://localhost:3000/createNewSkill';
      const editSkill = `http://localhost:3000/editSkill/${editedSkillId}`;
      const deleteSkill = '';

      response1 = await fetch(method === 'POST' ? createSkill : method === 'PUT' ? editSkill : deleteSkill, {
        method: method,
        body: JSON.stringify({...data, skillCategory}),
        headers: {
          "Content-Type": "application/json"
        }
      });

  
      if(!response1.ok) {
        throw new Error(`Response status: ${response1.status}`)
      }
  
      return navigate('/');
  
    } catch(err) {
      console.error(err.message);
    }
  }

  return (
    <section className={classes.section}>
      <div className={classes.selectType_container}>
        <div>
          <label 
            className={classes.label} 
            style={{
              alignSelf: 'center',
              marginBottom: '0',
              fontWeight: 'bold',
              opacity: '1'
            }}
          >
            Setting :
          </label>

          <select 
            required 
            value={setting}
            onChange={handleSettingChange}
          >
            <option value='' disabled>Choose a Setting</option>
            <option value='Create'>Create</option>
            <option value='Edit'>Edit</option>
            <option value='Delete'>Delete</option>
          </select>
        </div>

        <div style={{display: 'flex', gap: '1.2rem'}}>
          <label 
            className={classes.label} 
            style={{
              alignSelf: 'center',
              marginBottom: '0',
              fontWeight: 'bold',
              opacity: '1'
            }}
          >
            Type :
          </label>

          <select 
            required 
            value={type}
            onChange={handleTypeChange}
          >
            <option value='' disabled>Choose a Type</option>
            <option value='Projects'>Projects</option>
            <option value='Achievements'>Achievements</option>
            <option value='Skills'>Skills</option>
          </select>
        </div>
      </div>
      
      {!setting ? (
          <div className={classes.defaultContainer}>
            <h3 
              className={classes.h3} 
              style={{textAlign: 'center'}}
            >
              Admin Dashboard
            </h3>

            <p 
              className={classes.label} 
              style={{textAlign: 'center'}}
            >
              Please select a Type and a Setting
            </p>
          </div>
        ) : setting === 'Create' ? (
            <CreateForm   
              submitFn = {handleSubmit}
              type = {type}
              skillCategory = {skillCategory}
              handleSkillCategoryChange = {handleSkillCategoryChange}
            />
        ) : setting === 'Edit' ? (
            <EditForm 
              submitFn = {handleSubmit}
              type = {type}
              onEditedID={handleEditedID}
            />
        ) : null
      }
    </section>
  )
}

export default Dashboard;
