import { motion } from "framer-motion";
import "../pages/AboutUs/BookAppointment.css";

const ButtonWithHover = () => {
  return (
    <motion.button
      className="animated-btn"
      initial={{ backgroundPosition: "100% 0%" }} 
      whileHover={{
        backgroundPosition: "0% 0%",          
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
    >
      Book Your Appointment
    </motion.button>
  );
};

export default ButtonWithHover;
