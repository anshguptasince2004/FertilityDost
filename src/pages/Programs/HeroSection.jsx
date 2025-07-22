
import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="program-hero-section d-flex flex-column flex-md-row align-items-center justify-content-center custom-gap">
      <div className="circle-col position-relative">
        <div className="circle-bg" />

        <motion.div className="floating-card top-left" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: 0.2 }}>
          Science - based solution for infertility concerns.
        </motion.div>

        <motion.div className="floating-card top-right" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: 0.4 }}>
          <span className="highlight-text-red">Reduce 50%<br />Cost Of Treatment.</span>
        </motion.div>

        <motion.div className="floating-card bottom-left" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: 0.6 }}>
          Specialised Fertility Coach Program
        </motion.div>

        <motion.div className="floating-card bottom-right" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ delay: 0.8 }}>
          Science - based solution for infertility concerns.
        </motion.div>
      </div>


      <div className="title text-col text-center text-md-start mt-4 mt-md-0">
        <h1 className="hero-title">Natural Pregnancy</h1>
        <div className="underline-bar" />
        <p className="hero-subtext">
          Program that increases your<br />chance of pregnancy.
        </p>
        <button className="btn btn-success rounded-pill px-4 py-2 fw-bold">
          Know More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
