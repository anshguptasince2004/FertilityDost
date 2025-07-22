import HeroSection from '../Programs/HeroSection';
import Expert from '../Programs/Expert';
import Highlights from '../Programs/Highlights';
import EnrollProgram from '../Programs/red';
import HowItWorks from '../Programs/HowItWorks';
import CommunitySection from '../Programs/CommunitySection';
import '../Programs/Programs.css';
import { useEffect } from "react";
import { useTheme } from "../../Context/ThemeContext";
import RedLogo from "../../assets/RedLogo.png";
import RedLogo1 from "../../assets/RedLogo1.png";

function Programs() {
    const { setTheme } = useTheme();
  
    useEffect(() => {
      setTheme({
        color: '#ffececff',
        logo: RedLogo,
        logo1: RedLogo1,
        footerColor: "#4B0000"
      });
    }, [setTheme]);
  return (
    <div>
      <HeroSection/>
      <Expert/>
      <Highlights/>
      <EnrollProgram/>
      <HowItWorks/>
      <CommunitySection/>
    </div>
  );
}

export default Programs;