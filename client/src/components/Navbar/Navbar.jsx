import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        LOGO
      </div>
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

        <a className={classes.nav_link}>Projects</a> 
        <a className={classes.nav_link}>Achievements</a> 
        <a className={classes.nav_link}>Get In Touch</a>
        <a className={`${classes.nav_link} ${classes.login_button}`}>Login</a> 
      </div>
    </nav>
  );
}

export default Navbar;
