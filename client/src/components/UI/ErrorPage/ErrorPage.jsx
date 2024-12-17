import classes from './ErrorPage.module.css';

import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log('Error' , error);

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if(error.status === 500) {
    message = JSON.parse(error.data)?.message || 'Internal Server Error';
  } else if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  

  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.h2}>Error {error?.status}</h2>
      <p className={classes.p}>{message}</p>
      <button className={classes.btn}>
        <Link to='/' className={classes.link}>Back to Home</Link>
      </button>
    </div>
  )
}

export default Error