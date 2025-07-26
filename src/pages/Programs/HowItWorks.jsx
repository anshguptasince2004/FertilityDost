import { useState, useEffect, useRef } from "react";
import coupleImg from "../../assets/Programs/couple.png";
import mobileImg from "../../assets/Programs/Mobile.png";
import mainDoctor from "../../assets/Programs/docterMain.png";
import doc1 from "../../assets/Programs/docter1.png";
import doc2 from "../../assets/Programs/docter2.png";
import doc3 from "../../assets/Programs/docter3.png";
import { FaMapMarkerAlt, FaCheckCircle, FaHeart } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h2 className="text-center">
        How It <span className="highlight">Works</span>
      </h2>

      <div className="container how-it-works-container">
        <div className="left-image-group">
          <div className="hiw-circle-bg"></div>
          <img src={coupleImg} alt="Couple" className="couple-img" />
          <img src={mobileImg} alt="Mobile" className="mobile-img" />
        </div>

        <div className="right-content mb-4">
          <span className="step">STEP 2</span>
          <h4>
            Get Personalised Treatment <br />
            Plan And Resources
          </h4>
          <p>
            It is a long established fact that a reader will <br />
            be distracted by the readable content
          </p>

          <div className="features-row">
            <div className="feature-card">
              <div className="feature-icon">🥣</div>
              <p>Fertility Ayurveda</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <p>Fertility Diet Chart</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧘‍♀️</div>
              <p>Fertility Yoga & Meditation</p>
            </div>
          </div>

          <button className="enroll-btn">Enroll Program Now</button>
        </div>
      </div>

      <TeamOfExperts />
    </section>
  );
};

export const TeamOfExperts = () => {
  const [hovered, setHovered] = useState("main");
  const [autoDoctor, setAutoDoctor] = useState("doc1");
  const intervalRef = useRef(null);

  const doctorData = {
    main: {
      name: "Dr. A Sharma",
      specialty: "Natural Pregnancy, +10 Years",
      location: "Noida, Uttar Pradesh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: mainDoctor,
    },
    doc1: {
      name: "Dr. R Mehta",
      specialty: "Fertility Ayurveda, +7 Years",
      location: "Delhi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: doc1,
    },
    doc2: {
      name: "Dr. P Iyer",
      specialty: "Diet & Nutrition, +5 Years",
      location: "Mumbai",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: doc2,
    },
    doc3: {
      name: "Dr. S Banerjee",
      specialty: "Yoga & Mindfulness, +6 Years",
      location: "Bangalore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: doc3,
    },
  };

  const doctorCycle = ["doc1", "doc2", "doc3"];

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setAutoDoctor((prev) => {
          const currentIndex = doctorCycle.indexOf(prev);
          const nextIndex = (currentIndex + 1) % doctorCycle.length;
          return doctorCycle[nextIndex];
        });
      }, 3000);
    };

    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = (id) => {
    setHovered(id);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setHovered("main");
    intervalRef.current = setInterval(() => {
      setAutoDoctor((prev) => {
        const currentIndex = doctorCycle.indexOf(prev);
        const nextIndex = (currentIndex + 1) % doctorCycle.length;
        return doctorCycle[nextIndex];
      });
    }, 3000);
  };

  const current = hovered === "main" ? doctorData[autoDoctor] : doctorData[hovered];

  return (
    <section className="experts-section">
      <h2 className="text-center experts-heading mb-0">
        A Team Of <span className="highlight">Experts Dosts</span>
      </h2>

      <div className="experts-container container">
        <div className="expert-left-text">
          <div key={hovered === "main" ? autoDoctor : hovered} className="fade-text fade-in">
            <h4>{current.name}</h4>
            <p className="specialty">{current.specialty}</p>
            <p className="location">
              <FaMapMarkerAlt className="location-icon" /> {current.location}
            </p>
            <p className="description">{current.description}</p>
          </div>
        </div>

        <div className="expert-right">
          <div key={hovered === "main" ? autoDoctor : hovered} className="main-doctor-image fade-in">
            <img src={current.image} alt={current.name} />
            <div className="badges">
              <FaCheckCircle className="badge-icon check" />
              <FaHeart className="badge-icon heart" />
            </div>
          </div>

          <div className="side-doctors">
            <img
              src={doc1}
              alt="Doctor 1"
              onMouseEnter={() => handleMouseEnter("doc1")}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={doc2}
              alt="Doctor 2"
              onMouseEnter={() => handleMouseEnter("doc2")}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={doc3}
              alt="Doctor 3"
              onMouseEnter={() => handleMouseEnter("doc3")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>

      <div className="cta-button-container">
        <button className="cta-button">Talk To Your Local Advisor</button>
      </div>
    </section>
  );
};

export default HowItWorks;
