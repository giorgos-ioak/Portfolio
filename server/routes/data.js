import express from 'express';

import { createNewData } from '../controllers/data.js';

const router = express.Router();

// ENDPOINTS 
router.post('/createNewData', createNewData);


export default router;