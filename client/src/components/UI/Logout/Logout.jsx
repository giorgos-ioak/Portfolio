import classes from "../Login/Login.module.css";
import Modal from "../Modal/Modal.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../../../app/reducers/auth.js';

import { BACKEND_URL } from '../../../app/apiConfig.js';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await fetch(`${BACKEND_URL}/auth/logout`, {
        credentials: 'include'
      });

      if(!response.ok) {
        throw new Response(JSON.stringify({ message: `Failed to logout.` }), {
          status: response.status,
          statusText: response.statusText || 'Internal Server Error.',
        });
      } 

      dispatch(logout());
      navigate('/');
      
    } catch(err) {
      return {error: err.message};
    }
  }


  return (
    <Modal>
      <form method='post' onSubmit={handleSubmit} className={classes.form}>
        <label style={{marginBottom: '2rem'}}>
          Are you sure you want to Log Out?
        </label>

        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to=".." type="button">
            No
          </Link>
          <button className={classes.submitBtn}>Yes</button>
        </div>
      </form>
    </Modal>
  )
}

export default Logout;