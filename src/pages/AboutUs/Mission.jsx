import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Mission.css";
import combinedImage from "../../assets/AboutUs/Hoomans.png";

const messages = [
  "It is a long established fact that a reader will be distracted by the readable.",
  "It is a long established fact that a reader will be distracted by the readable.",
  "It is a long established fact that a reader will be distracted by the readable.",
];

function Mission() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div className="mission-wrapper text-center" ref={ref}>
      <div className="container-lg">
        <h2 className="mission-heading mb-5">
          Fertility Dost - <span className="text-danger fw-bold">Mission</span>
        </h2>

        <motion.div
          className="speech-bubbles d-flex justify-content-center flex-wrap mb-5"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {messages.map((msg, index) => (
            <motion.div
              className="speech-bubble m-3"
              key={index}
              custom={index}
              variants={bubbleVariants}
            >
              {msg}
            </motion.div>

          ))}
        </motion.div>

        <div className="text-center">
          <img
            src={combinedImage}
            alt="Team"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>

  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, delay: 0.5, staggerChildren: 0.5},
  },
};

const bubbleVariants = {
  hidden: { y: 70, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut"},
  }),
};


export default Mission;
