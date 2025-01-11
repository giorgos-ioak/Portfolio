import classes from './Navbar.module.css';

import WebhookIcon from '@mui/icons-material/Webhook';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={classes.nav}>
      <Link to='/' className={classes.logo}>
        <WebhookIcon fontSize='large'/>
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
        <Link to='/portfolio' className={classes.nav_link}>
          This Portfolio
        </Link>
        <Link to='/cv' className={classes.nav_link}>
          My CV
        </Link>
        {isLoggedIn ? (
          <Link to='/dashboard' className={classes.nav_link}>
            Dashboard
          </Link>
        ) : (
          <Link to='/contact' className={classes.nav_link}>
            Contact
          </Link>
        )}
        {!isLoggedIn ? (
          <Link to='/login' className={`${classes.nav_link} ${classes.login_button}`}>
            Login
          </Link>
        ) : (
          <Link to='/logout' className={`${classes.nav_link} ${classes.login_button}`}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
