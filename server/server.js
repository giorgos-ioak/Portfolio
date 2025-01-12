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
app.use(cors({ origin: 'https://www.giorgosio.dev', credentials: true }));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use(express.json());
/* 
  For handling Form submissions where the data is sent using the POST method & where data is encoded using 
  application/x-www-form-urlencoded
*/
app.use(express.urlencoded({ extended: true }));

 


/// CONFIGURE mySQL CONNECTION
export const db = mysql.createConnection({ uri: process.env.MYSQL_URL });



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



const PORT = process.env.PORT || 3000;


// START SERVER
app.listen(PORT, () => {
  console.log("Server started successfully ");
});
