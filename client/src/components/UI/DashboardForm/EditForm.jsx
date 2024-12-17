import classes from './Form.module.css';

import EditSkills from './EditTypes/EditSkills.jsx';
import EditProjects from './EditTypes/EditProjects.jsx';
import EditAchievements from './EditTypes/EditAchievements.jsx';

function EditForm({ submitFn, type, onEditedID, isError }) {
  return (
      <form 
        onSubmit={submitFn}
        className={classes.form}
      >
        <h3 
          className={classes.h3} 
          style={{textAlign: 'center'}}
        >
          Edit {type}
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
          <EditSkills 
            isError={isError}
            onEditedID={onEditedID}
          />
        )}

        {type === 'Projects' && (
          <EditProjects 
            isError={isError}
            onEditedID={onEditedID}
          />
        )}

        {type === 'Achievements' && (
          <EditAchievements 
            isError={isError}
            onEditedID={onEditedID}
          />
        )} 
      </form>
  )
}

export default EditForm