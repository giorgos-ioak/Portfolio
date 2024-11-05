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

function App() {
  const data = useLoaderData();
  const dispatch = useDispatch();


  const values = useSelector((state) => state.databaseData.value);
  console.log('Values', values);


  useEffect(() => {
    dispatch(storeData(data));
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

export default App;




export const loader = async() => {
  const response = await fetch('http://localhost:3000/dbData');

  if(!response.ok) {
    console.log('There was an error fetching the Database Data.')
  } 

  const data = await response.json();
  return data;
};
