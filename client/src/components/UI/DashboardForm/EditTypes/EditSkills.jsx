import classes from '../Form.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import FormInput from '../FormInput/FormInput.jsx';

function EditSkills() {
  const skills = useSelector((state) => state.databaseData.value?.skills);

  const [skill, setSkill] = useState('');
  const [editedSkill, setEditedSkill] = useState({});

  console.log(editedSkill);


  function handleSkillChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the skill value is the previous one.
    const selectedSkill = e.target.value;
    setSkill(selectedSkill);

    const currentSkill = skills.filter((item) => item.technology === selectedSkill);
    setEditedSkill(currentSkill?.[0]);
  };


  function handleChange(e) {
    const { name, value } = e.target;

    setEditedSkill((prev) => ({
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
        Choose a Skill:
      </label>

      <select 
        onChange={handleSkillChange}
        defaultValue=''
      >
        <option value='' disabled>
          Choose a skill
        </option>
        {skills.map((skill) => (
          <option 
            key={skill.skill_id}
            value={skill.technology}
          >
            {skill.technology}
          </option>
        ))}
      </select>

      {skill ? (
        <>
          <div 
            className={classes.box_container}
            style={{marginTop: '2rem'}}
          >
            <div className={classes.formInput_container}>
              <FormInput
                label='Technology'
                name='technology'
                value={editedSkill?.technology}
                onChange={handleChange}
                required={true}
              />
              <FormInput
                label='Category'
                name='category'
                value={editedSkill?.category}
                onChange={handleChange}
                required={true}
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

export default EditSkills