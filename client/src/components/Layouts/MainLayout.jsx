import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { storeData } from "../../app/reducers/databaseData.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Navbar from "../Navbar/Navbar.jsx";




function MainLayout() {
  const data = useLoaderData();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(storeData(data));
    // console.log('UseEffect executed');
  }, [dispatch, data]);

  // const db = useSelector((state) => state.databaseData.value);
  // console.log('Main Layout', db);




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
      throw new Error(`There was an HTTP error with a status of: ${response.status}.`);
    }

    const data = await response.json();
    return data;

  } catch(err) {
    return {error: true,message: err.message};
  }
};
