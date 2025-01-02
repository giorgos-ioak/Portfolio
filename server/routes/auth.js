import express from 'express';

import { login, logout } from '../controllers/auth.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();  

// AUTH
router.post('/login', login);
router.get('/logout', logout);
router.get('/verifyToken', verifyToken);


export default router;