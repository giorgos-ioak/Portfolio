import classes from '../Form.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';

function EditAchievements({ onEditedID, isError }) {
  const achievements = useSelector((state) => state.databaseData.value?.achievements);

  const [achievement, setAchievement] = useState('');


  function handleAchievementChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the skill value is the previous one.
    const selectedAchievement = e.target.value;

    const currentAchievement = achievements.filter((item) => item.title === selectedAchievement);

    setAchievement(selectedAchievement);

    if (onEditedID) {
      onEditedID(currentAchievement?.[0].achievement_id);
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
        Achievement:
      </label>

      <select 
        style={{ marginLeft: '0', marginTop: '1rem'}}
        onChange={handleAchievementChange}
        defaultValue=''
      >
        <option value='' disabled>
          Choose an option
        </option>
        {achievements.map((achievement) => (
          <option 
            key={achievement.achievement_id}
            value={achievement.title}
          >
            {achievement.title}
          </option>
        ))}
      </select>

      {achievement ? (
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

export default EditAchievements