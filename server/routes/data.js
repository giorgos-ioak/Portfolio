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

const router = express.Router();


/*****   ENDPOINTS  *****/

// GET - skills && projects && achievements data from the DB.
router.get('/dbData', getDbData);

// GET - individual project's technologies.
router.get('/projectTech/:projectId', getProjectTech);




// POST - create new Project.
router.post('/createNewProject', upload.single('image'), createNewProject);

// POST - post new Project technologies.
router.post('/postProjectTechnologies/:projectId', postProjectTechnologies);

// POST - create new Skill.
router.post('/createNewSkill', createNewSkill);

// POST - create new Achievement.
router.post('/createNewAchievement', createNewAchievement);




// PUT - Edit Project.
router.put('/editProject/:projectId', upload.single('image'), editProject);

// PUT - Edit Skill.
router.put('/editSkill/:skillId', editSkill);

// PUT - Edit Achievement.
router.put('/editAchievement/:achievementId', editAchievement);




// DELETE - Delete Project.
router.delete('/deleteProject/:projectId', deleteProject);
router.delete('/deleteProjectTechnologies/:projectId', deleteProjectTechnologies);


// DELETE - Delete Skill.
router.delete('/deleteSkill/:skillId', deleteSkill);

// DELETE - Delete Achievement.
router.delete('/deleteAchievement/:achievementId', deleteAchievement);

export default router;