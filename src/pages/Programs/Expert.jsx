import React from "react";
import { motion } from "framer-motion";
// import "./Expert.css";
import img1 from "../../assets/Programs/expert1.png";
import img2 from "../../assets/Programs/expert2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Expert = () => {
  return (
    <section className="expert-section container">
      <motion.div
        className="text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        <h2 className="expert-title">
          What Does <span className="highlight">Fertility Dost Do</span>?
        </h2>
        <p className="expert-subtitle">
          We bring you hope & sunshine when everything seems <br />
          like endless days of despair.
        </p>
      </motion.div>

      <div className="expertise">
        <motion.div
          className="expert-row mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <div className="expert-col-img">
            <img
              src={img1}
              alt="Expert at home"
              className="expert-img img-fluid rounded shadow"
            />
            <div className="expertise-label left">EXPERTISE</div>
          </div>
          <div className="expert-col-text">
            <h5 className="expert-heading">
              Expert guidance at the <br /> comfort of your home
            </h5>
            <hr className="expert-underline" />
            <p className="expert-desc">
              Contrary to popular belief, Lorem <br />
              Ipsum is not simply random text.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="expert-row expert-row-reverse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          <div className="expert-col-img">
            <img
              src={img2}
              alt="Pregnancy success"
              className="expert-img img-fluid rounded shadow"
            />
            <div className="expertise-label left">EXPERTISE</div>
          </div>
          <div className="expert-col-text">
            <h5 className="expert-heading">
              Increase the overall <br />
              chance of pregnancy & <br />
              successful birth
            </h5>
            <hr className="expert-underline" />
            <p className="expert-desc">
              Contrary to popular belief, Lorem <br />
              Ipsum is not simply random text.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expert;
