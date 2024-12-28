import classes from '../Form.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import FormInput from '../FormInput/FormInput.jsx';

function EditAchievements({ onEditedID, isError, handleFileChange }) {
  const achievements = useSelector((state) => state.databaseData.value?.achievements);

  const [achievement, setAchievement] = useState('');
  const [editedAchievement, setEditedAchievement] = useState({});


  function handleAchievementChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the skill value is the previous one.
    const selectedAchievement = e.target.value;
    const currentAchievement = achievements.filter((item) => item.title === selectedAchievement);

    setAchievement(selectedAchievement);
    setEditedAchievement(currentAchievement?.[0]);

    if (onEditedID) {
      onEditedID(currentAchievement?.[0].achievement_id);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setEditedAchievement((prev) => ({
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
          <div 
            className={classes.box_container}
            style={{marginTop: '2rem'}}
          >
            <div className={classes.formInput_container}>
            <FormInput
              label='Title'
              name='title'
              value={editedAchievement?.title}
              onChange={handleChange}
              required={true}
            />
            <FormInput
              label='Description'
              name='_description'
              value={editedAchievement?._description}
              onChange={handleChange}
              required={true}
            />
            <div className={classes.imageContainer}>
              Image
              <input type='file' name='image' onChange={handleFileChange}></input>
            </div>
            <FormInput
              label='Certificate'
              name='certificate_btn'
              value={editedAchievement?.certificate_btn}
              onChange={handleChange}
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