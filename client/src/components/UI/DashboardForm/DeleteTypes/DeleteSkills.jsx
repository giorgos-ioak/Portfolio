import classes from '../Form.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';


function DeleteSkills({ onEditedID, isError}) {
  const skills = useSelector((state) => state.databaseData.value?.skills);

  const [skill, setSkill] = useState('');

  function handleSkillChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the skill value is the previous one.
    const selectedSkill = e.target.value;

    const currentSkill = skills.filter((item) => item.technology === selectedSkill);
    setSkill(selectedSkill);

    if (onEditedID) {
      onEditedID(currentSkill?.[0].skill_id);
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
        Skill:
      </label>

      <select 
        style={{ marginLeft: '0', marginTop: '1rem'}}
        onChange={handleSkillChange}
        defaultValue=''
      >
        <option value='' disabled>
          Choose an option
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

export default DeleteSkills