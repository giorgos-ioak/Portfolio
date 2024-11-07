import HeroSection from "../sections/HeroSection/HeroSection.jsx";
import SummarySection from "../sections/SummarySection/SummarySection.jsx";
import SkillSection from "../sections/SkillSection/SkillSection.jsx";
import ProjectSection from "../sections/ProjectsSection/ProjectSection.jsx";
import AchievementsSection from "../sections/AchievementsSection/AchievementsSection.jsx";
import GetInTouchSection from "../sections/GetInTouchSection/GetInTouchSection.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

import { useLoaderData } from "react-router-dom";
import { storeData } from "../app/reducers/databaseData.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Home() {
  const data = useLoaderData();
  const dispatch = useDispatch();


  /*** This useSelector causes a re-render every time the 'state' object changes.... ***/
  // const values = useSelector((state) => state.databaseData.value);
  // console.log('Values', values);



  useEffect(() => {
    dispatch(storeData(data));
    // console.log('UseEffect Executed');
  }, [dispatch, data]);




  return (
    <>
      <Navbar />
      <HeroSection />
      <SummarySection />
      <SkillSection />
      <ProjectSection />
      <AchievementsSection />
      <GetInTouchSection />
    </>
  )
};

export default Home;




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
