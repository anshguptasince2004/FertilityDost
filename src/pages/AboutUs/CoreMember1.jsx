import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CoreMember1.css";

import img1 from "../../assets/AboutUs/founder1.png";
import img2 from "../../assets/AboutUs/founder2.png";
import img3 from "../../assets/AboutUs/founder3.png";
import img4 from "../../assets/AboutUs/founder4.png";

const bottomMembers = [
  {
    name: "Gitanjali Banerjee",
    title: "Founder Of Fertility Dost",
    image: img1,
  },
  {
    name: "Purnima Sood",
    title: "Founder Of Fertility Dost",
    image: img2,
  },
  {
    name: "Anjali Sharma",
    title: "Founder Of Fertility Dost",
    image: img3,
  },
  {
    name: "Riya Mehta",
    title: "Founder Of Fertility Dost",
    image: img4,
  },
];

const CoreMember1 = () => {
  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Track visible card
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const cards = container.querySelectorAll(".bottom-core-card");
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

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

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = containerRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;

    const scrollToCard = (index) => {
      const cards = container.querySelectorAll(".bottom-core-card");
      if (!cards[index]) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      const cardRect = cards[index].getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;

      const scrollOffset = cardCenterX - containerCenterX;
      container.scrollBy({ left: scrollOffset, behavior: "smooth" });
    };

    let intervalId;
    if (isInView && !isPaused) {
      intervalId = setInterval(() => {
        const nextIndex = (visibleIndex + 1) % bottomMembers.length;
        scrollToCard(nextIndex);
      }, 2000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [visibleIndex, isInView, isPaused]);

  return (
    <div className="bottom-members-wrapper position-relative px-3 py-4">
      <div className="fade-left" />
      <div className="fade-right" />

      <div
        className="scroll-container"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {bottomMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`bottom-core-card ${
              visibleIndex === index ? "focused" : "blurred"
            }`}
          >
            <div className="bottom-card-inner">
              <img
                src={member.image}
                alt={member.name}
                className="bottom-member-img"
              />
              <div className="bottom-text-overlay">
                <h6>{member.name}</h6>
                <p>{member.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreMember1;
