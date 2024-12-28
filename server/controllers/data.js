import { getProjects, getSkills, getAchievements, getProjectTechnologies } from '../middleware/mySQL/index.js';

import { db } from "../server.js";
import fs from 'fs';  
import path from 'path';  
import { fileURLToPath } from 'url';

// Get the current filename and directory.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 




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
export async function postProjectTechnologies(req, res) {
  const { projectId } = req.params;
  const data = req.body;

  // Queries
  const sqlQuery ='INSERT INTO project_technologies (technology, project_id) VALUES ?';

  // For inserting multiple rows in the table, we need to create an array which includes sub-arrays whose number is the number of rows we want to insert.
  const values = data.map((technology) => [technology, projectId]);


  try {
    const [result] = await db.promise().query(sqlQuery, [values]);
    res.status(201).json({ message: 'Project Technologies inserted successfully', insertedRows: result.affectedRows })
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};



export async function createNewProject(req, res) {
  const { demo, demoInstructions, description, figma, github, title} = req.body;

  // File
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'File is required' });
  }

  const fileName = file.filename;
  

  // Query
  let sqlQuery = 'INSERT INTO projects (title, _description, projectImage';

  // Values
  let values = [title, description, fileName];

  // Placeholders 
  let placeholders = ['?', '?', '?'];


  // Adding Inputs WHETHER they are REQUIRED or NOT (From the form).
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


  // Closing the query string.
  sqlQuery += ') VALUES (' + placeholders.join(', ') + ')';


  try {
    // Inserting the project in the database.
    const [result] = await db.promise().query(sqlQuery, values);

    // Getting the projectId from the result object.
    const projectId = result.insertId;
  
    // Returning the projectId for inserting the project's technologies afterwards.
    res.status(201).json({ message: 'Data received successfully', projectId });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};  



export async function createNewSkill(req, res) {
  const data = req.body;

  const skills = data.skills.split(',');
  const category = data.skillCategory;
  
  // Query
  const sqlQuery = 'INSERT INTO skills (category, technology) VALUES ?;';

  // Values
  const values = skills.map((skill) => [category, skill]);

  try {
    // For inserting multiple rows in the table, we need to create an array which includes sub-arrays whose number is the number of rows we want to insert.
    await db.promise().query(sqlQuery, [values]);
    res.status(201).json({ message: 'Skills inserted successfully' });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};  



export async function createNewAchievement(req, res) {
  const { title, description, certificate } = req.body;

  // File
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'File is required' });
  }
  
  const fileName = file.filename;
  

  // Query
  let sqlQuery = 'INSERT INTO achievements (title, _description, achievementImage';
  
  // Values
  let values = [title, description, fileName];

  // Placeholders
  let placeholders = ['?', '?', '?'];

  // Adding Inputs WHETHER they are REQUIRED or NOT (From the form).
  if (certificate !== null && certificate !== undefined) {
    sqlQuery += ', certificate_btn'; // Add the column name
    placeholders.push('?'); // Add the placeholder
    values.push(certificate); // Add the value
  } 

  // Closing the query string.
  sqlQuery += ') VALUES (' + placeholders.join(', ') + ')';

  try {
    // For inserting multiple rows in the table, we need to create an array which includes sub-arrays whose number is the number of rows we want to insert.
    await db.promise().query(sqlQuery, values);
    res.status(201).json({ message: 'Achievement inserted successfully' });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};  



// PUT FUNCTIONS.
export async function editProject(req, res) {
  const { technologies, ...rest } = req.body;
  const { projectId } = req.params;

  // File
  const file = req.file || null;
  const fileName = file?.filename;

  // Columns and Values for dynamic query
  const projectColumns = Object.keys(rest);
  const projectColumnsValues = Object.values(rest);
  const technologiesColumnValues = technologies.split(',');

  const firstClause = projectColumns.map((col) => `${col} = ?`).join(', ');

  // File Queries
  const getImageNameQuery = `SELECT projectImage FROM projects WHERE project_id = ?`;
  const updateImageQuery = 'UPDATE projects SET projectImage = ? WHERE project_id = ?';

  // Other Queries  
  const sqlQuery1 = `UPDATE projects SET ${firstClause} WHERE project_id = ?`;

  try {
    if(fileName) {
      // STEP 1: Retrieve the existing image name.
      const [rows] = await db.promise().query(getImageNameQuery, [projectId]);

      if (rows.length === 0) {
        return res.status(404).json({ error: 'Project not found' });
      }

      const imageName = rows[0].projectImage; 

      // STEP 2 :  Deleting the image from the uploads folder.
      if(imageName) {
        const imagePath = path.join(__dirname, `../uploads`, imageName);
        fs.unlink(imagePath, (err) => {
          if(err) {
            console.error('Error deleting the image:', err.message);
          }
        });
      }


      // STEP 3: Update the database with the new image name.
      await db.promise().query(updateImageQuery, [fileName, projectId]);
    }
    


    // STEP 4 : Removing existing technologies from the project.
    const deleteQuery = `DELETE FROM project_technologies WHERE project_id = ?`;
    await db.promise().query(deleteQuery, [projectId]);


    // STEP 5 : Inserting new technologies to the project.
    const insertQuery = `INSERT INTO project_technologies (technology, project_id) VALUES ?`;
    const values = technologiesColumnValues.map((tech) => [tech, projectId]);
    await db.promise().query(insertQuery, [values]);


    // STEP 6 : Update other project details in the database.
    await db.promise().query(sqlQuery1, [...projectColumnsValues, projectId]);  

    res.status(200).json({ message: 'Project updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}

export async function editSkill(req ,res) {
  const { technology, category } = req.body;
  const { skillId } = req.params;

  // Queries
  const sqlQuery = `UPDATE skills SET category = ?, technology = ? WHERE skill_id = ?`;

  // Values
  const values = [category, technology, skillId];

  try {
    await db.promise().query(sqlQuery, values);
    res.status(200).json({ message: 'Skill updated successfully' });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}

export async function editAchievement(req ,res) {
  const { title, _description, certificate_btn } = req.body;
  const { achievementId } = req.params;

  // File
  const file = req.file || null;
  const fileName = file?.filename;

  // File Queries
  const getImageNameQuery = `SELECT achievementImage FROM achievements WHERE achievement_id = ?`;
  const updateImageQuery = 'UPDATE achievements SET achievementImage = ? WHERE achievement_id = ?';

  // Other Queries
  const sqlQuery = `UPDATE achievements SET title = ?, _description = ?, certificate_btn = ? WHERE achievement_id = ?`;

  // Query Values
  const values = [title, _description, certificate_btn, achievementId];


  try {
    if(fileName) {
      // STEP 1: Retrieve the existing image name.
      const [rows] = await db.promise().query(getImageNameQuery, [achievementId]);

      if (rows.length === 0) {
        return res.status(404).json({ error: 'Achievement not found' });
      }

      const imageName = rows[0].achievementImage; 

      // STEP 2 :  Deleting the image from the uploads folder.
      if(imageName) {
        const imagePath = path.join(__dirname, `../uploads`, imageName);
        fs.unlink(imagePath, (err) => {
          if(err) {
            console.error('Error deleting the image:', err.message);
          }
        });
      }


      // STEP 3 : Update the existing achievement Image name in the database.
      await db.promise().query(updateImageQuery, [fileName, achievementId]);
    }

    
    // STEP 4 : Update other achievement details in the database.
    await db.promise().query(sqlQuery, values);
    res.status(200).json({ message: 'Achievement updated successfully' });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}




// DELETE FUNCTIONS.
export async function deleteSkill(req ,res) {
  const { skillId } = req.params;

  // Query
  const sqlQuery = `DELETE FROM skills WHERE skill_id = ?`;

  // Values
  const values = [skillId];

  try {
    // Delete the skill from the database
    await db.promise().query(sqlQuery, values);

    res.status(200).json({ message: 'Skill deleted successfully', 'Skill ID: ' : skillId });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}


export async function   deleteProjectTechnologies (req ,res) {
  const { projectId } = req.params;

  // Query
  const sqlQuery = `DELETE FROM project_technologies WHERE project_id = ?`;

  // Values
  const values = [projectId];

  try {
    // Delete the project's technologies from the database
    await db.promise().query(sqlQuery, values);
    res.status(200).json({ message: `Project's technologies deleted successfully`, 'Project ID: ' : projectId });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}


export async function deleteProject(req ,res) {
  const { projectId } = req.params;

  // Queries
  const sqlQuery = `DELETE FROM projects WHERE project_id = ?`;
  const getImageNameQuery = `SELECT projectImage FROM projects WHERE project_id = ?`;

  // Values
  const values = [projectId];

  try {
    // Retrieve the image name of the project
    const [rows] = await db.promise().query(getImageNameQuery, values);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Get the image name from the result
    const imageName = rows[0].projectImage; 

    if(imageName) {
      // Construct the image path and Delete the image
      const imagePath = path.join(__dirname, `../uploads`, imageName);
      fs.unlink(imagePath, (err) => {
        if(err) {
          console.error('Error deleting the image:', err.message);
        }
      });
    }    


    // Delete the project from the database
    await db.promise().query(sqlQuery, values);
    res.status(200).json({ message: 'Project and image deleted successfully', 'Project ID: ' : projectId });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}

export async function deleteAchievement(req ,res) {
  const { achievementId } = req.params;

  // Queries
  const sqlQuery = `DELETE FROM achievements WHERE achievement_id = ?`;
  const getImageNameQuery = `SELECT achievementImage FROM achievements WHERE achievement_id = ?`;

  // Values
  const values = [achievementId];

  try {
    // Retrieve the image name of the project
    const [rows] = await db.promise().query(getImageNameQuery, values);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Achievement not found' });
    }

    // Get the image name from the result
    const imageName = rows[0].achievementImage; 

    if(imageName) {
      // Construct the image path and Delete the image
      const imagePath = path.join(__dirname, `../uploads`, imageName);
      fs.unlink(imagePath, (err) => {
        if(err) {
          console.error('Error deleting the image:', err.message);
        }
      });
    }  


    // Delete the achievement from the database
    await db.promise().query(sqlQuery, values);
    res.status(200).json({ message: 'Achievement and image deleted successfully', 'Achievement ID: ' : achievementId });
  } catch(err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
}