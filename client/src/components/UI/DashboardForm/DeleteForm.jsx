import classes from './Form.module.css';

import DeleteSkills from './DeleteTypes/DeleteSkills.jsx';
import DeleteProjects from './DeleteTypes/DeleteProjects.jsx';
import DeleteAchievements from './DeleteTypes/DeleteAchievements.jsx';

function DeleteForm({ submitFn, type, onEditedID, isError }) {
  return (
    <form 
        onSubmit={submitFn}
        className={classes.form}
      >
        <h3 
          className={classes.h3} 
          style={{textAlign: 'center'}}
        >
          Delete {type}
        </h3>

        {type === '' ? (
          <p 
            className={classes.label} 
            style={{textAlign: 'center'}}
          >
            Please select a Type
          </p> 
          ) : null 
        }

        {type === 'Skills' && (
          <DeleteSkills 
            isError={isError}
            onEditedID={onEditedID}
          />
        )}

        {type === 'Projects' && (
          <DeleteProjects 
            isError={isError}
            onEditedID={onEditedID}
          />
        )}

        {type === 'Achievements' && (
          <DeleteAchievements 
            isError={isError}
            onEditedID={onEditedID}
          />
        )} 
      </form>
  )
}

export default DeleteForm;