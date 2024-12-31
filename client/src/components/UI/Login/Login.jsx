import classes from './Login.module.css'; 

import Modal from "../Modal/Modal.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';  

import { login } from '../../../app/reducers/auth.js';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      if(!response.ok) {
        throw new Response(JSON.stringify({ message: `Failed to login.` }), {
          status: response.status,
          statusText: response.statusText || 'Internal Server Error.',
        });
      } 

      const result = await response.json();

      console.log(result);
      
      dispatch(login());
      navigate('/');
    } catch(err) {
      return {error: err.message};
    } 
  }



  return (
    <Modal>
      <form method='post' onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' name='username' required/>

        <label htmlFor='password'>Password</label>
        <input type="password" id='password' name='password' required/>

        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            Cancel
          </Link>
          <button className={classes.submitBtn}>Log In</button>
        </div>
      </form>
    </Modal>
  )
}

export default Login