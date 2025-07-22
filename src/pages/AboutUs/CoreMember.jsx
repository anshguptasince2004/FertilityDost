import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CoreMember.css";
import ButtonWithHover from "../../assets/ButtonWithHover";
import CoreMember1 from "./CoreMember1.jsx";

import img1 from "../../assets/AboutUs/founder1.png";
import img2 from "../../assets/AboutUs/founder2.png";
import img3 from "../../assets/AboutUs/founder3.png";
import img4 from "../../assets/AboutUs/founder4.png";

const members = [
  {
    name: "Gitanjali Banerjee",
    title: "Founder Of Fertility Dost",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    image: img1,
  },
  {
    name: "Purnima Sood",
    title: "Founder Of Fertility Dost",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    image: img2,
  },
  {
    name: "Anjali Sharma",
    title: "Founder Of Fertility Dost",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    image: img3,
  },
  {
    name: "Riya Mehta",
    title: "Founder Of Fertility Dost",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    image: img4,
  },
];

const CoreMembers = () => {
  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cards = containerRef.current.querySelectorAll(".core-card");
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width/2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenterX - cardCenterX);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setVisibleIndex(closestIndex);
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="core-members-section">
      <h2 className="text-center mb-4">
        <span style={{ color: "#14294f", fontWeight: 700 }}>Fertility Dost</span>{" "}
        <span style={{ color: "#fa4b77", fontWeight: 700 }}>Core Members</span>
      </h2>

      <div className="scroll-wrapper position-relative">
        <div className="fade-left" />
        <div className="fade-right" />

        <div className="scroll-container" ref={containerRef}>
          {members.map((member, index) => (
            <motion.div
              key={index}
              className={`core-card ${index === visibleIndex ? "focused" : "blurred"}`}
            >
              <div className="card-inner d-flex">
                <img src={member.image} alt={member.name} className="member-img" />
                <div className="text-start ps-2">
                  <p className="mb-1 fw-bold text-danger">{member.title}</p>
                  <small className="text-muted d-block mb-1">Short Bio :</small>
                  <p className="small mb-0">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CoreMember1/>
      <br />
      <div className="text-center">
        <ButtonWithHover />
      </div>
    </div>
  );
};

export default CoreMembers;
