import {
  Outlet,
  defer, 
  useLoaderData, 
  useLocation,
  Await
} from "react-router-dom";


import { storeData } from "../../app/reducers/databaseData.js";
import { setState } from "../../app/reducers/auth.js";  

import { useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";

import Navbar from "../Navbar/Navbar.jsx";
import Loading from "../UI/Loading/Loading.jsx";




function MainLayout() {
  const { pathname } = useLocation();

  const { data } = useLoaderData();
  const dispatch = useDispatch();



  // USE-EFFECT HOOK
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dispatch, data, pathname]);


  // Verify JWT token and update auth state
  useEffect(() => {
    async function verifyAuth() {
      try {
        const response = await fetch("http://localhost:3000/auth/verifyToken", {
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
      {/* Resolve deferred data with <Await> */}
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(resolvedData) => {
            // Dispatch resolved data to Redux
            useEffect(() => {
              dispatch(storeData(resolvedData));
            }, [dispatch, resolvedData]);

            // Render the Outlet
            return <Outlet />;
          }}
        </Await>
      </Suspense>
    </>
  )
};

export default MainLayout;





export const loader = async() => {
  try {
    // Fetch data from the database
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/dbData");
      if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch DB data.' }), {
          status: response.status,
          statusText: response.statusText || 'Internal Server Error.',
        });
      }
      return response.json();
    };

    return defer({
      data: fetchData(),
    });


  } catch(err) {
    if(err instanceof Response) {
      throw err;
    }

    throw new Response(JSON.stringify({ message: 'Unexpected error occurred.' }), {
      status: 500,
    });
  }
};
