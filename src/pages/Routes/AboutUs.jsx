import { useEffect } from "react";
import HeroSection from "../AboutUs/HeroSection";
import BookAppointment from "../AboutUs/BookAppointment";
import Mission from "../AboutUs/Mission";
import { useTheme } from "../../Context/ThemeContext";
import RedLogo from "../../assets/RedLogo.png";
import RedLogo1 from "../../assets/RedLogo1.png";
import CoreMembers from "../AboutUs/CoreMember";
import Achievements from "../AboutUs/Achievements";

function AboutUs() {
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
    <>
      <HeroSection />
      <BookAppointment />
      <Mission />
      <CoreMembers />
      <Achievements />
    </>
  );
}

export default AboutUs;
