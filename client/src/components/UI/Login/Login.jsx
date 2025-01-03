import classes from './Login.module.css'; 

import Modal from "../Modal/Modal.jsx";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  

import { login } from '../../../app/reducers/auth.js';

import { API_BASE_URL } from '../../../app/apiConfig.js';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if(!response.ok) {
        const error = await response.json();
        setError(error.message || 'Login failed.');
        return;
      } 
      
      dispatch(login());
      navigate('/');
    } catch(err) {
      setError('Something went wrong. Please try again.');
    } 
  }



  return (
    <Modal>
      <form method='post' onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' name='username' required/>

        <label htmlFor='password'>Password</label>
        <input type="password" id='password' name='password' required/>

        {error && (
          <div className={classes.error}>
            {error}
          </div>
        )}

        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>LogIn</button>
        </div>
      </form>
    </Modal>
  )
}

export default Login