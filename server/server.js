import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

import { getProjects, getSkills, getAchievements } from './middleware/mySQL/index.js';



const app = express();
dotenv.config();
app.use(cors());



/// CONFIGURE MySQL CONNECTION
export const db = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});



/// CONNECT TO MySQL
db.connect((err) => {
  if(err) {
    console.error('Error connecting to the database:', err);
    return
  }
  console.log('Connected to the MySQL database.');
});






app.get('/dbData', async(req,res) => {
  try {
    const projects = await getProjects();
    const skills = await getSkills();
    const achievements = await getAchievements();

    res.json({ projects, skills, achievements });
  } catch(err) {
    res.status(500).json({error: err});
  }
});






app.listen(3000, () => {
  console.log("Server started successfully");
});
