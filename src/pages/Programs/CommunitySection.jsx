import React, { useState } from "react";
import testimonialImg from "../../assets/Programs/h5.png";
import clientImg from "../../assets/Programs/docter1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mrs. Shivani Arora, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    img: clientImg,
    video: testimonialImg,
  },
  {
    name: "Mrs. Shivani Arora1, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    img: clientImg,
    video: testimonialImg,
  },
  {
    name: "Mrs. Shivani Arora2, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    img: clientImg,
    video: testimonialImg,
  },
  {
    name: "Mrs. Shivani Arora3, Gurugram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    img: clientImg,
    video: testimonialImg,
  },
];

const CommunitySection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="community-section container">
      <div className="community-header">
        <h2>
          Hear From Our<span className="highlight"><br/>Community</span>
        </h2>
      </div>

      <div className="carousel-wrapper">
        <button className="nav-arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

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

        <button className="nav-arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
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