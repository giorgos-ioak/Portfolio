import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import dataRoutes from './routes/data.js';
import authRoutes from './routes/auth.js';



const app = express();
dotenv.config();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use(express.json());
/* 
  For handling Form submissions where the data is sent using the POST method & where data is encoded using 
  application/x-www-form-urlencoded
*/
app.use(express.urlencoded({ extended: true }));

 





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
app.use('/auth', authRoutes);



// START SERVER
app.listen(3000, () => {
  console.log("Server started successfully");
});
