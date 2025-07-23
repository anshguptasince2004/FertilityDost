import React from "react";
// import "./red.css";
import { motion } from "framer-motion";
import enrollImg from "../../assets/Programs/RectangleImage.png";
import bgPattern from "../../assets/Programs/red.png";

const EnrollProgram = () => {
  return (
    <section
      className="enroll-section d-flex align-items-center"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className=" py-5">
        <div className="row align-items-center justify-content-between">
          <motion.div
            className="col-lg-5 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={enrollImg} alt="Happy couple" className="img-fluid" />
          </motion.div>

          <motion.div
            className="col-lg-6 text-white"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="offer-text">Get 10% Off On Enroll Now</p>
            <h2 className="program-title">Natural Pregnancy Program</h2>
            <p className="program-desc">
              We bring you hope & sunshine when everything <br />
              seems like endless days of despair.
            </p>
            <div className="price-box mb-3">
              <span className="original-price">Rs 7999/-</span>
              <span className="discounted-price ms-3">Rs 6999/-</span>
            </div>
            <button className="btn btn-success px-4 py-2 fw-semibold rounded-pill shadow-sm">
              Enroll Program Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnrollProgram;
