import { Outlet } from "react-router-dom";
import { useLoaderData, useLocation } from "react-router-dom";
import { storeData } from "../../app/reducers/databaseData.js";
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
    const response = await fetch('http://localhost:3000/dbData');
  
    if(!response.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch DB data.' }), {
        status: response.status,
        statusText: response.statusText || 'Internal Server Error.',
      });
    }
  
    const data = await response.json();
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
