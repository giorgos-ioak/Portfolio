import { Outlet } from "react-router-dom";
import { useLoaderData, useLocation } from "react-router-dom";

import { API_BASE_URL } from "../../app/apiConfig.js"; 

import { storeData } from "../../app/reducers/databaseData.js";
import { setState } from "../../app/reducers/auth.js";  

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "../Navbar/Navbar.jsx";




function MainLayout() {
  const { pathname } = useLocation();

  const data = useLoaderData();
  const dispatch = useDispatch();



  // USE-EFFECT HOOK
  useEffect(() => {
    dispatch(storeData(data));
    
    window.scrollTo(0, 0);
  }, [dispatch, data, pathname]);


  // Verify JWT token and update auth state
  useEffect(() => {
    async function verifyAuth() {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/verifyToken`, {
          credentials: "include",
        });

        if (response.ok) {
          dispatch(setState(true));
        } else {
          dispatch(setState(false));
        }
      } catch (err) {
        console.error("Error verifying authentication:", err);
        dispatch(setState(false)); 
      }
    }

    verifyAuth();
  }, [dispatch]);


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
    const response1 = await fetch(`${API_BASE_URL}/dbData`);
  
    if(!response1.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch DB data.' }), {
        status: response1.status,
        statusText: response1.statusText || 'Internal Server Error.',
      });
    }
  
    const data = await response1.json();


    return data;
  } catch(err) {
    if(err instanceof Response) {
      throw err;
    }

    throw new Response(JSON.stringify({ message: 'Unexpected error occurred.' }), {
      status: 500,
    });
  }
};
