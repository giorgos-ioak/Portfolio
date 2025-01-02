import classes from '../../components/UI/DashboardForm/Form.module.css';

import CreateForm from '../../components/UI/DashboardForm/CreateForm.jsx';
import EditForm from '../../components/UI/DashboardForm/EditForm.jsx';
import DeleteForm from '../../components/UI/DashboardForm/DeleteForm.jsx';

import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';



function Dashboard() {
  const navigate = useNavigate();

  // STATES
  const [type, setType] = useState('');
  const [setting, setSetting] = useState('');
  const [skillCategory, setSkillCategory] = useState('');
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  // Selected ID.
  const [editedProjectId, setEditedProjectId] = useState(null);
  const [editedSkillId, setEditedSkillId] = useState(null);
  const [editedAchievementId, setEditedAchievementId] = useState(null);


  // Method variable initialize.
  let method = '';
  setting === 'Create' ? method = 'POST' : setting === 'Edit' ? method = 'PUT' : setting === 'Delete' ? method = 'DELETE' : undefined;

  
  // Handle change the ID.
  function handleEditedID(id) {
    type === 'Projects' ? setEditedProjectId(id) : type === 'Skills' ? setEditedSkillId(id) : setEditedAchievementId(id);
  }


  //// Handle change TYPE functions.
  function handleTypeChange(event) {
    setType(event.target.value);
    setError(false);
  }

  function handleSkillCategoryChange(event) {
    setSkillCategory(event.target.value);
  }

  function handleSettingChange(event) {
    setSetting(event.target.value);
    setError(false);
  }

  function handleFileChange (e) {
    setFile(e.target.files[0]);
  }

  console.log(file);



  //// Submit Function
  async function handleSubmit(e) {
    e.preventDefault();

  /***** 
    For Creating a Project, we first create the project and then it's technologies.
    For Editing a Project, we edit the project on one go.
    For Deleting a Project, we delete the project's technologies first and then delete the project.
  *****/

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      
      let response, response1 , response2;


      // TYPE = PROJECT
      if(type === 'Projects') {

        //URLS
        const createProject = 'http://localhost:3000/createNewProject';
        const editProject = `http://localhost:3000/editProject/${editedProjectId}`;
        const deleteProject = `http://localhost:3000/deleteProject/${editedProjectId}`;

        let text;
        method === 'POST' ? text = 'create' : method === 'PUT' ? text = 'edit' : text = 'delete';


        // DELETING PROJECT'S TECHNOLOGIES.
        if(method === 'DELETE') {
          response = await fetch(`http://localhost:3000/deleteProjectTechnologies/${editedProjectId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            }
          });

          if(!response.ok) {
            throw new Response(JSON.stringify({ message: 'Could not delete project technologies.' }), {
              status: response.status,
              statusText: response.statusText || 'Internal Server Error.',
            });
          }
        }


        // CREATING or EDITING or DELETING A PROJECT.
        response1 = await fetch( method === 'POST' ? createProject : method === 'PUT' ? editProject : deleteProject , {
          method: method,
          credentials: 'include',
          ...(method !== 'DELETE' && { body: formData })
        });



        // CREATING THE PROJECT'S TECHNOLOGIES.
        if(method === 'POST') {
          // Creating an array with all technologies separated by commma.
          const technologies = data.technologies.split(',');
          const result = await response1.json();
          const projectId = result.projectId;
  
          response2 = await fetch(`http://localhost:3000/postProjectTechnologies/${projectId}`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(technologies),
            headers: {
              "Content-Type": "application/json"
            }
          });

          if(!response2.ok) {
            throw new Response(JSON.stringify({ message: 'Could not create the technologies.' }), {
              status: response2.status,
              statusText: response2.statusText || 'Internal Server Error.',
            });
          }
        }
        

        if(!response1.ok) {
          throw new Response(JSON.stringify({ message: `Could not ${text} the project.` }), {
            status: response1.status,
            statusText: response1.statusText || 'Internal Server Error.',
          });
        }

        // Changing the state for causing a re-render and rendering the default UI 
        setSetting('');

        // Causing a URL refresh to show the updated state.
        return navigate('/dashboard');

      // TYPE = ACHIEVEMENT
      } else if(type === 'Achievements') {
        const createAchievement = 'http://localhost:3000/createNewAchievement';
        const editAchievement = `http://localhost:3000/editAchievement/${editedAchievementId}`;
        const deleteAchievement = `http://localhost:3000/deleteAchievement/${editedAchievementId}`;

        response1 = await fetch(method === 'POST' ? createAchievement : method === 'PUT' ? editAchievement : deleteAchievement, {
          method: method,
          credentials: 'include',
          ...(method !== 'DELETE' && { body: formData })
        });


        if(!response1.ok) {
          throw new Response(JSON.stringify({ message: 'Could not perform the operation.' }), {
            status: response1.status,
            statusText: response1.statusText || 'Internal Server Error.',
          });
        }

        // Changing the state for causing a re-render and rendering the default UI 
        setSetting('');
        
        // Causing a URL refresh to show the updated state.
        return navigate('/dashboard');
      } 


      // TYPE = SKILLS
      const createSkill = 'http://localhost:3000/createNewSkill';
      const editSkill = `http://localhost:3000/editSkill/${editedSkillId}`;
      const deleteSkill = `http://localhost:3000/deleteSkill/${editedSkillId}`;

      let text;
      method === 'POST' ? text = 'create' : method === 'PUT' ? text = 'edit' : text = 'delete';

      response1 = await fetch(method === 'POST' ? createSkill : method === 'PUT' ? editSkill : deleteSkill, {
        method: method,
        credentials: 'include',
        ...(method !== 'DELETE' && { body: JSON.stringify({ ...data, skillCategory }) }),
        headers: {
          "Content-Type": "application/json"
        }
      });

  
      if(!response1.ok) {
        throw new Response(JSON.stringify({ message: `Could not ${text} the skill.` }), {
          status: response1.status,
          statusText: response1.statusText || 'Internal Server Error.',
        });
      }

      // Changing the state for causing a re-render and rendering the default UI 
      setSetting('');
        
      // Causing a URL refresh to show the updated state.
      return navigate('/dashboard');
  
    } catch(err) {
      if (err instanceof Response) {
        // Parse the body
        const errorData = await err.json(); 

        console.error(`ERROR ${err.status}: ${errorData.message}`);
              
        setError({
          status: err.status,
          message: errorData.message
        });
      } else {
        console.error(err.message);
     
        setError({
          status: err.status,
          message: err.message, 
        });
      }
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
      
      {setting === '' ? (
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
              isError={error}
              submitFn = {handleSubmit}
              type = {type}
              handleFileChange = {handleFileChange}
              skillCategory = {skillCategory}
              handleSkillCategoryChange = {handleSkillCategoryChange}
            />
        ) : setting === 'Edit' ? (
            <EditForm 
              isError={error}
              submitFn = {handleSubmit}
              type = {type}
              handleFileChange = {handleFileChange}
              onEditedID={handleEditedID}
            />
        ) : setting === 'Delete' ? (
            <DeleteForm 
              isError={error}
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
