import React, { useState, useEffect } from "react";
import testimonialImg1 from "../../assets/Programs/h1.png";
import testimonialImg2 from "../../assets/Programs/h2.png";
import testimonialImg3 from "../../assets/Programs/h3.png";
import testimonialImg4 from "../../assets/Programs/h4.png";
import clientImg1 from "../../assets/Programs/docter1.png";
import clientImg2 from "../../assets/Programs/docter2.png";
import clientImg3 from "../../assets/Programs/docter3.png";
import clientImg4 from "../../assets/Programs/docter1.png";

const testimonials = [
  {
    name: "Mrs. Shivani Arora, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: clientImg1,
    video: testimonialImg1,
  },
  {
    name: "Mrs. Shivani Arora1, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: clientImg2,
    video: testimonialImg2,
  },
  {
    name: "Mrs. Shivani Arora2, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: clientImg3,
    video: testimonialImg3,
  },
  {
    name: "Mrs. Shivani Arora3, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: clientImg4,
    video: testimonialImg4,
  },
];

const CommunitySection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="community-section container">
      <div className="community-header">
        <h2>
          Hear From Our<span className="highlight"><br />Community</span>
        </h2>
      </div>

      <div className="carousel-wrapper">
        <div className="community-content fade-in">
          <div className="testimonial-card">
            <div className="quote-bg">❝</div>
            <div className="client-info">
              <img src={testimonials[current].img} alt="Client" className="client-img" />
              <p className="client-name">{testimonials[current].name}</p>
            </div>
            <p className="testimonial-text">{testimonials[current].text}</p>
          </div>

          <div className="video-wrapper">
            <img
              src={testimonials[current].video}
              alt="Testimonial"
              className="video-embed"
            />
          </div>
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
