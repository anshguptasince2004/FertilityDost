import { useEffect } from "react";
import HeroSection from '../Home/HeroSection';
import ReasonsSection from '../Home/ReasonsSection';
import WhyChooseUs from '../Home/WhyChooseUs';
import ProgramsEvents from '../Home/ProgramsEvents';
import ExpertsBlogs from '../Home/ExpertsBlogs';
import MediaCommunity from '../Home/MediaCommunity';
import { heroSectionData } from '../../layout/HomeData';
import { useTheme } from "../../Context/ThemeContext";
import homeLogo from '../../assets/RedLogo.png';
import homoLogo1 from '../../assets/RedLogo1.png';
import { footer } from "framer-motion/client";

function Home({ language }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme({
      color: '#ffececff',
      logo: homeLogo,
      logo1: homoLogo1,
      footerColor: "#4B0000",
    });
  }, [setTheme]);

  return (
    <>
      <HeroSection data={heroSectionData} language={language} />
      <ReasonsSection />
      <WhyChooseUs />
      <ProgramsEvents />
      <ExpertsBlogs />
      <MediaCommunity />
    </>
  );
}

export default Home;
