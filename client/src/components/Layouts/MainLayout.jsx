import { Outlet } from "react-router-dom";
import { useLoaderData, useLocation } from "react-router-dom";
import { storeData } from "../../app/reducers/databaseData.js";
import { setState } from "../../app/reducers/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Navbar from "../Navbar/Navbar.jsx";




function MainLayout() {
  const { pathname } = useLocation();

  const { data, result } = useLoaderData();
  const dispatch = useDispatch();



  // USE-EFFECT HOOK
  useEffect(() => {
    // let loggedIn = null;

    // // If the token is invalid, the user is not logged in
    // verified.message === 'Unauthorized' ? loggedIn = false : loggedIn = true;


    dispatch(setState(result.loggedIn));
    dispatch(storeData(data));
    
    window.scrollTo(0, 0);
  }, [dispatch, data, result, pathname]);


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default MainLayout;





export const loader = async() => {
  try {
    // Fetch data from the database
    const response1 = await fetch('http://localhost:3000/dbData');
  
    if(!response1.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch DB data.' }), {
        status: response1.status,
        statusText: response1.statusText || 'Internal Server Error.',
      });
    }
  
    const data = await response1.json();


    // Verify token
    const response = await fetch("http://localhost:3000/auth/verifyToken", {
      method: "GET",
      credentials: "include", // Include cookies
    });

    const result = await response.json();


    return { data,result };
  } catch(err) {
    if(err instanceof Response) {
      throw err;
    }

    throw new Response(JSON.stringify({ message: 'Unexpected error occurred.' }), {
      status: 500,
    });
  }
};
