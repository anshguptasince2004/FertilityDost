import { motion } from "framer-motion";
import "../pages/AboutUs/BookAppointment.css";
import { useState } from "react";
import AppointmentModal from "./../components/AppointmentModel";

const ButtonWithHover = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <motion.button
        className="animated-btn"
        initial={{ backgroundPosition: "100% 0%" }}
        whileHover={{
          backgroundPosition: "0% 0%",
          transition: { duration: 0.4, ease: "easeInOut" }
        }}
        onClick={() => setShowModal(true)}
      >
        Book Your Appointment
      </motion.button>
      <AppointmentModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default ButtonWithHover;
