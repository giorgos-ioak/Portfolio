import { useState } from 'react';
import classes from '../Form.module.css';

import { useSelector } from 'react-redux';



function EditProjects({ onEditedID, isError }) {
  const projects = useSelector((state) => state.databaseData.value?.projects);

  const [project, setProject] = useState('');


  function handleProjectChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the project value is the previous one.
    const selectedProject = e.target.value;

    const currentProject = projects.filter((item) => item.title === selectedProject);
    setProject(currentProject?.[0]); 

    if (onEditedID) {
      onEditedID(currentProject?.[0]?.project_id);
    }
  };


  return (
    <>
      <label 
        className={classes.label} 
        style={{
          alignSelf: 'center',
          marginBottom: '0',
          fontWeight: 'bold',
          opacity: '1'
        }}
      >
        Project:
      </label>

      <select 
        style={{ marginLeft: '0', marginTop: '1rem'}}
        onChange={handleProjectChange}
        defaultValue=''
      >
        <option value='' disabled>
          Choose an option
        </option>
        {projects.map((project) => (
          <option 
            key={project?.project_id}
            value={project?.title}
          >
            {project?.title}
          </option>
        ))}
      </select>


      {project ? (
        <>
          <div className={classes.submitForm_container}>
            <button 
              type="submit" 
              className={classes.btn}
            >
              Delete
            </button>
          </div>

          {isError && 
            <p 
              style={{
                fontFamily: 'Montserrat',
                color: 'red',
                fontWeight: '500'
              }}
            >
              {isError.status} - {isError.message}
            </p>
          }
        </>
      ) : null}
    </>
  )
}

export default EditProjects