import classes from './Navbar.module.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setState } from '../../app/reducers/auth.js';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  // const [isLogged, setisLogged] = useState(isLoggedIn);


  // useEffect(() => {
  //   setisLogged(isLoggedIn);
  // }, [isLoggedIn]);


  // console.log('Logged in:', isLoggedIn);  

  return (
    <nav className={classes.nav}>
      <Link to='/' className={classes.logo}>
        LOGO
      </Link>
      <input type="checkbox" id="sidebar-active" className={classes.checkbox}/>
      <label htmlFor="sidebar-active" className={classes.open_sidebar_button}>
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </label>

      <label id="overlay" htmlFor="sidebar-active" className={classes.overlay}></label>

      <div className={classes.links_container}>
        <label htmlFor="sidebar-active" className={classes.close_sidebar_button}>
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </label>

        <Link to='/projects' className={classes.nav_link}>
          Projects
        </Link>
        <Link to='/achievements' className={classes.nav_link}>
          Achievements
        </Link>
        <a className={classes.nav_link}>Get In Touch</a>
        {!isLoggedIn ? (
          <Link to='/login'>
            <button className={`${classes.nav_link} ${classes.login_button}`}>Login</button>
          </Link>
        ) : (
          <Link to='/logout'>
            <button className={`${classes.nav_link} ${classes.login_button}`}>Logout</button>
          </Link>
        )}
        
      </div>
    </nav>
  );
}

export default Navbar;
