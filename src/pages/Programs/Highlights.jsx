import React from "react";
import { motion } from "framer-motion";
// import "./Highlights.css";
import img1 from "../../assets/Programs/h1.png";
import img2 from "../../assets/Programs/h2.png";
import img3 from "../../assets/Programs/h3.png";
import img4 from "../../assets/Programs/h4.png";
import img5 from "../../assets/Programs/h5.png";
import img6 from "../../assets/Programs/h6.png";

const cards = [
  {
    img: img1,
    text: "Consultation & diagnosis by senior Ayurveda Doctors",
  },
  {
    img: img2,
    text: "5 live Fertility Yoga, Meditation online sessions",
    highlight: true,
  },
  {
    img: img3,
    text: "Weekly Review Call with Fertility Coach",
  },
  {
    img: img4,
    text: "Lorem Ipsum is not simply random text.",
  },
  {
    img: img5,
    text: "It has roots in a piece of classical Latin literature",
  },
  {
    img: img6,
    text: "Lorem Ipsum is not simply random text.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Highlights = () => {
  return (
    <section className="highlight-section py-5">
      <motion.div
        className="text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <h2 className="highlight-heading">
          <span className="highlighted-text">Highlights</span> Of Fertility Coach Program
        </h2>
      </motion.div>

      <div className="row g-1">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="col-md-4 d-flex justify-content-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 1}
          >
            <div className= 'highlight-card' >
              <img src={card.img} alt={`card-${index}`} className="img-fluid rounded mb-3" />
              <p className="highlight-text">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
