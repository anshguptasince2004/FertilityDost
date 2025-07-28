import logo from '../../assets/FertilityDostLogo1.png';
import './WhyChooseUs.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { id: '01.', title: 'Consult With Expert Coaches' },
    { id: '02.', title: 'Support Via Audio & Video Call' },
    { id: '03.', title: 'Personalized Care Plans & Goal Tracking' },
    { id: '04.', title: 'Get Specialised Resources / Treatment' },
  ];

  return (
    <div className="why-choose-us-section py-5 position-relative bg-light-blue">
      <div className="angled-top"></div>

      <div className="container text-center">
        <h6 className="text-info fw-semibold">WHY CHOOSE US</h6>
        <br />
        <h3 className="fw-semibold mt-2">
          Did You Know? <span className="text">33 Million People</span> Suffer From Infertility
        </h3>

        <p className="friend mt-3">
          You Have a Friend :
          <img src={logo} alt="Fertility Dost Logo" style={{ height: '35px', marginLeft: '15px' }} />
        </p>

        <div className="row mt-5 g-4">
          {cards.map((card, index) => (
            <div className="col-md-6" key={index}>
              <motion.div
                className="p-4 bg-white rounded shadow-sm h-100 text-start card-hover"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 28px rgba(0, 0, 0, 1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h2 className={`${hoveredIndex === index ? 'text-dark' : 'text-muted'} fw-bold mb-2`}>
                  {card.id}
                </h2>
                <h6 className="fw-semibold">{card.title}</h6>
                <p className="text-muted small">
                  It is extremely difficult to pin-point a single cause for failed conception since there are many factors
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;