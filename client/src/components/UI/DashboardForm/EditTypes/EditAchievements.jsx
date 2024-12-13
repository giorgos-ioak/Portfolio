import classes from '../Form.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import FormInput from '../FormInput/FormInput.jsx';

function EditAchievements() {
  const achievements = useSelector((state) => state.databaseData.value?.achievements);

  const [achievement, setAchievement] = useState('');
  const [editedAchievement, setEditedAchievement] = useState({});

  console.log(achievements)


  function handleAchievementChange(e) {
    // Setting the selectedSkill variable because state changes after the fuction's execution and therefor the skill value is the previous one.
    const selectedAchievement = e.target.value;
    setAchievement(selectedAchievement);

    const currentAchievement = achievements.filter((item) => item.title === selectedAchievement);
    setEditedAchievement(currentAchievement?.[0]);
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
        </>
      ) : null}
    </>
  )
}

export default EditAchievements