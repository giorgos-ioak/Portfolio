import { db } from '../server.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { username, password } = req.body;

  try {
    // Query
    const sqlQuery = `SELECT * FROM users WHERE username = ?`;

    // Values
    const values = [username];

    const [user] = await db.promise().query(sqlQuery, values);

    if(user.length === 0) {
      return res.status(401).json({ message: 'Invalid username.' });
    }


    // Compare the password
    const isValid = await bcrypt.compare(password, user[0].password);

    if(!isValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Create a token
    const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the cookie
    res.cookie('jwt', token, {
      httpOnly: true, // Prevent access via JavaScript (secure against XSS)
      secure: true,  // Set to `true` in production (requires HTTPS)
      sameSite: 'Lax', // Helps prevent CSRF attacks
      maxAge: 2 * 60 * 60 * 1000
    });

    res.status(200).json({ message: 'Logged in.' });

  } catch(err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};





export async function logout(req, res) {
  // Clear the cookie
  res.clearCookie('jwt');

  res.status(200).json({ message: 'Logged out.' });
};




