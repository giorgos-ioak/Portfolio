import { getProjects, getSkills, getAchievements, getProjectTechnologies } from '../middleware/mySQL/index.js';

import { db } from "../server.js";


// GET FUNCTIONS.
export async function getDbData(req, res) {
  try {
    const projects = await getProjects();
    const skills = await getSkills();
    const achievements = await getAchievements();

    res.json({ projects, skills, achievements });
  } catch(err) {
    res.status(500).json({error: err});
  }
};


export async function getProjectTech(req, res) {
  try {
    const { projectId } = req.params;
    const technologies = await getProjectTechnologies(projectId);

    res.json({ technologies });
  } catch(err) {
    res.status(500).json({ error: err });
  }
};



// POST FUNCTIONS.
export function createNewProject(req, res) {
  const { demo, demoInstructions, description, figma, github, title } = req.body;

  let sqlQuery = 'INSERT INTO projects (title, _description';
  

  let values = [title, description];
  let placeholders = ['?', '?'];

  if (demoInstructions !== null && demoInstructions !== undefined) {
    sqlQuery += ', demo_instructions'; // Add the column name
    placeholders.push('?'); // Add the placeholder
    values.push(demoInstructions); // Add the value
  } 
  
  if(demo !== null && demo !== undefined) {
    sqlQuery += ', demo_button'; // Add the column name
    placeholders.push('?'); // Add the placeholder
    values.push(demo); // Add the value
  }

  if(github !== null && github !== undefined) {
    sqlQuery += ', github_button'; // Add the column name
    placeholders.push('?'); // Add the placeholder
    values.push(github); // Add the value
  }

  if(figma !== null && figma !== undefined) {
    sqlQuery += ', figma_button'; // Add the column name
    placeholders.push('?'); // Add the placeholder
    values.push(figma); // Add the value
  }


  sqlQuery += ') VALUES (' + placeholders.join(', ') + ')';





  db.query(sqlQuery, values, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data inserted successfully');
  });
  
  res.status(201).json({ message: 'Data received successfully' });
};  








export function createNewSkill(req, res) {

};  






export function createNewAchievement(req, res) {

};  