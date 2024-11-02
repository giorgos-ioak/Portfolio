import { db } from "../../server.js";

/*******

We are wrapping the db.query method inside a Promise, because it is an async function
and it's callback function gets executed before the query has been completed.
That causes it, to return a Promise instead of the query results..
Then we try to send this Promise in JSON format to the client and so we have an error.

Instead we wrap the method in a promise and wait for the results 
with the resolve function.

************/



export async function getProjects() {       
  return new Promise((resolve, reject) => {
    db.query('CALL getProjects()', (err, results) => {
      if(err) {
        reject('Error fetching projects');
      } 
      
      resolve(results[0]);
    }); 
  });
};



export async function getSkills() {
  return new Promise((resolve, reject) => {
    db.query('CALL getSkills()', (err, results) => {
      if(err) {
        reject('Error fetching projects');
      }

      resolve(results[0]);
    });
  });
};



export async function getAchievements() {
  return new Promise((resolve, reject) => {
    db.query('CALL getAchievements()', (err, results) => {
      if(err) {
        reject('Error fetching projects');
      }

      resolve(results[0]);
    });
  });
};
