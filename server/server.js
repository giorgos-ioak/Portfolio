import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';


import dataRoutes from './routes/data.js';



const app = express();
dotenv.config();
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json());




/// CONFIGURE mySQL CONNECTION
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





// ROUTES
app.use('/', dataRoutes);






app.listen(3000, () => {
  console.log("Server started successfully");
});
