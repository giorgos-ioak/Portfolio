import classes from './Form.module.css';

import EditSkills from './EditTypes/EditSkills.jsx';
import EditProjects from './EditTypes/EditProjects.jsx';
import EditAchievements from './EditTypes/EditAchievements.jsx';

function EditForm({ submitFn, type, onEditedID }) {
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
            onEditedID={onEditedID}
          />
        )}

        {type === 'Projects' && (
          <EditProjects 
            onEditedID={onEditedID}
          />
        )}

        {type === 'Achievements' && (
          <EditAchievements 
            onEditedID={onEditedID}
          />
        )} 
      </form>
  )
}

export default EditForm