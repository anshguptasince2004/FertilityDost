import './ReasonsSection.css';
import r1 from '../../assets/Reasons/r1.png';
import r2 from '../../assets/Reasons/r2.png';
import r3 from '../../assets/Reasons/r3.png';
import r4 from '../../assets/Reasons/r4.png';
import r5 from '../../assets/Reasons/r5.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedReason({ imgSrc, badgeClass, badgeText, title, desc, reverse }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <div ref={ref} className={`row align-items-center mb-5 ${reverse ? 'flex-md-row-reverse' : ''}`}>
      <motion.div
        className="col-md-6 position-relative"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <img src={imgSrc} alt="reason" className="img-fluid rounded reason-image" />
        <div className={badgeClass}>{badgeText}</div>
      </motion.div>

      <motion.div
        className="col-md-6"
        variants={textVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h5
          className="fw-bold reason-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </motion.div>
    </div>
  );
}

function ReasonsSection() {
  return (
    <>
      <div className="struggle-text text-center pt-5">
        <h4 className="fw-semibold text-dark">
          Are You Struggling With<span className="highlight">Infertility?</span>
        </h4>
      </div>

      <section className="infertility-reasons-section py-5">
        <div className="container-lg">
          <div className="inner-content mx-auto px-3 px-md-5" style={{ maxWidth: '1000px' }}>
            <AnimatedReason
              imgSrc={r1}
              badgeClass="reason-badge1"
              badgeText="01"
              title="Problems Conceiving <br />& Late Pregnancy"
              desc="It is extremely difficult to pin-point a single cause <br /> for failed conception since there are so many <br /> factors at play. Risk of Low AMH or premature <br />ovarian failure increases with age."
              reverse={false}
            />
            <AnimatedReason
              imgSrc={r2}
              badgeClass="reason-badge"
              badgeText="02"
              title="Weight Gaining &<br /> Loosing Issue"
              desc="Weight issues might lead to delayed <br />pregnancy or hormonal fluctuations leading <br />to infertility. Manage it with Fertility Diet <br />and Yoga Exercises."
              reverse={true}
            />
            <AnimatedReason
              imgSrc={r3}
              badgeClass="reason-badge1"
              badgeText="03"
              title="Lack of Awareness <br />Regarding IUI or IVF"
              desc="It is extremely difficult to pin-point a single cause <br /> for failed conception since there are so many <br />factors at play. Risk of Low AMH or premature <br />ovarian failure increases with age."
              reverse={false}
            />
            <AnimatedReason
              imgSrc={r4}
              badgeClass="reason-badge"
              badgeText="04"
              title="PCOS Related Issues"
              desc="1/6 women suffer from PCOS. Natural <br /> pregnancy is possible with guided planner <br />and lifestyle changes. Manage it with our <br /> PCOS Support Program."
              reverse={true}
            />
            <AnimatedReason
              imgSrc={r5}
              badgeClass="reason-badge1"
              badgeText="05"
              title="Male Infertility"
              desc="It is extremely difficult to pin-point a single cause <br />for failed conception since there are so many <br />factors at play. Risk of Low AMH or premature <br />ovarian failure increases with age."
              reverse={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ReasonsSection;