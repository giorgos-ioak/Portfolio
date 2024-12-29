import HeroSection from './sections/HeroSection/HeroSection.jsx';
import SummarySection from "./sections/SummarySection/SummarySection.jsx";
import SkillSection from "./sections/SkillSection/SkillSection.jsx";
import ProjectSection from "./sections/ProjectsSection/ProjectSection.jsx";
import AchievementsSection from "./sections/AchievementsSection/AchievementsSection.jsx";
import GetInTouchSection from "./sections/GetInTouchSection/GetInTouchSection.jsx";
import PortfolioInfo from './sections/PortfolioInfo/PortfolioInfo.jsx';




// Contains all the components used for the Home page at the '/' path.
function Home() {
  return (
    <>
      <HeroSection />
      <SummarySection />
      <SkillSection />
      <PortfolioInfo />
      <ProjectSection />
      <AchievementsSection />
      <GetInTouchSection />
    </>
  )
};

export default Home;
