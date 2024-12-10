import express from 'express';

import { createNewProject, getDbData, getProjectTech, createNewSkill, createNewAchievement, postProjectTechnologies } from '../controllers/data.js';

const router = express.Router();


/*****   ENDPOINTS  *****/

// GET - skills && projects && achievements data from the DB.
router.get('/dbData', getDbData);

// GET - individual project's technologies.
router.get('/projectTech/:projectId', getProjectTech);

// POST - create new Project.
router.post('/createNewProject', createNewProject);

// POST - post new Project technologies.
router.post('/postProjectTechnologies/:projectId', postProjectTechnologies);

// POST - create new Skill.
router.post('/createNewSkill', createNewSkill);

// POST - create new Achievement.
router.post('/createNewAchievement', createNewAchievement);


export default router;