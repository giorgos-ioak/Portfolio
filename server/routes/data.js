import express from 'express';

import { 
  createNewProject,
  getDbData, 
  getProjectTech, 
  createNewSkill, 
  createNewAchievement, 
  postProjectTechnologies, 
  editProject, 
  editSkill, 
  editAchievement, 
  deleteSkill,
  deleteProject,
  deleteProjectTechnologies,
  deleteAchievement
} from '../controllers/data.js';

import { upload } from '../middleware/multerConfig.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();


/**********/


// GET - skills && projects && achievements data from the DB.
router.get('/dbData', getDbData);

// GET - individual project's technologies.
router.get('/projectTech/:projectId', getProjectTech);


/**********/



// POST - create new Project.
router.post('/createNewProject', isAuthenticated, upload.single('image'), createNewProject);

// POST - post new Project technologies.
router.post('/postProjectTechnologies/:projectId', isAuthenticated, postProjectTechnologies);

// POST - create new Skill.
router.post('/createNewSkill', isAuthenticated, createNewSkill);

// POST - create new Achievement.
router.post('/createNewAchievement', isAuthenticated, upload.single('image') ,createNewAchievement);


/**********/




// PUT - Edit Project.
router.put('/editProject/:projectId', isAuthenticated, upload.single('image'), editProject);

// PUT - Edit Skill.
router.put('/editSkill/:skillId', isAuthenticated, editSkill);

// PUT - Edit Achievement.
router.put('/editAchievement/:achievementId', isAuthenticated, upload.single('image'), editAchievement);



/**********/




// DELETE - Delete Project.
router.delete('/deleteProject/:projectId', isAuthenticated, deleteProject);
router.delete('/deleteProjectTechnologies/:projectId', isAuthenticated, deleteProjectTechnologies);

// DELETE - Delete Skill.
router.delete('/deleteSkill/:skillId', isAuthenticated, deleteSkill);

// DELETE - Delete Achievement.
router.delete('/deleteAchievement/:achievementId', isAuthenticated, deleteAchievement);


export default router;

