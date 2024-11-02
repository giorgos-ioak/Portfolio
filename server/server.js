const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");


const app = express();
require('dotenv').config();
app.use(cors());



/// CONFIGURE MySQL CONNECTION
const db = mysql.createConnection({
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



app.get('/projects', (req,res) => {
  db.query('CALL getProjects()', (err, results) => {
    if(err) {
      res.status(500).send('Error fetching data');
      return;
    }
    return res.json(results[0]);
  })
});


app.listen(3000, () => {
  console.log("Server started successfully");
});
