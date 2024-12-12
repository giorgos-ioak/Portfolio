import { useState } from 'react';
import classes from '../Form.module.css';

import { useSelector } from 'react-redux';

import FormInput from '../FormInput/FormInput.jsx';
import FormTextArea from '../FormTextArea/FormTextArea.jsx';
import Divider from '../../Divider/Divider.jsx';

function EditProjects() {
  const projects = useSelector((state) => state.databaseData.value?.projects);

  const [project, setProject] = useState('');
  const [editedProject, setEditedProject] = useState({});

  // console.log('project: ', project);
  console.log(editedProject);
  

  function handleProjectChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the project value is the previous one.
    const selectedProject = e.target.value;

    const currentProject = projects.filter((item) => item.title === selectedProject);
    setProject(currentProject?.[0]); 
    setEditedProject(currentProject?.[0]);
  };


  function handleChange(e) {
    const { name, value } = e.target;

    setEditedProject((prev) => ({
      ...prev,
      [name]: value
    }))
  }

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
        Choose a Project:
      </label>

      <select 
        onChange={handleProjectChange}
        defaultValue=''
      >
        <option value='' disabled>
          Choose a project
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
          <div 
            className={classes.box_container}
            style={{marginTop: '2rem'}}
          >
            <div className={classes.formInput_container}>
              <FormInput
                label='Title'
                name='title'
                onChange={handleChange}
                value={editedProject?.title}
                required={true}
              />
              <FormTextArea
                label='Description'
                name='_description'
                onChange={handleChange}
                value={editedProject?._description}
                required={true}
              />

              <div style={{display: 'flex' , justifyContent: 'center'}}>
                <Divider black/>
              </div>

              <FormInput
                label='Technologies (,)'
                name='technologies'
                onChange={handleChange}
                value={editedProject?.technologies}
                required={true}
              />
              <FormTextArea
                label='DemoInstructions'
                name='demo_instructions'
                onChange={handleChange}
                value={editedProject?.demo_instructions}
                required={false}
              />

              <div style={{display: 'flex' , justifyContent: 'center'}}>
                <Divider black/>
              </div>

              <FormInput
                label='Demo'
                name='demo_button'
                onChange={handleChange}
                value={editedProject?.demo_button}
                required={false}
              />
              <FormInput
                label='Github'
                name='github_button'
                onChange={handleChange}
                value={editedProject?.github_button}
                required={false}
              />
              <FormInput
                label='Figma'
                name='figma_button'
                onChange={handleChange}
                value={editedProject?.figma_button}
                required={false}
              />
            </div>
          </div>

          <div className={classes.submitForm_container}>
            <button 
              type="submit" 
              className={classes.btn}
            >
              Edit
            </button>
          </div>
        </>
      ) : null}
    </>
  )
}

export default EditProjects