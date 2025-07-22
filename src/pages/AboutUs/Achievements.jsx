import React from "react";
import "./Achievements.css";
import award1 from "../../assets/AboutUs/Award1.png";
import award2 from "../../assets/AboutUs/Award2.png";
import award3 from "../../assets/AboutUs/Award3.png";
import award4 from "../../assets/AboutUs/Award4.png";

import press1 from "../../assets/AboutUs/img1.png";
import press2 from "../../assets/AboutUs/img2.png";
import press3 from "../../assets/AboutUs/img3.png";
import { motion } from "framer-motion";

const awards = [award1, award2, award3, award4];
const years = [2020, 2021, 2022, 2023];
const pressImages = [press1, press2, press3];

export default function Achievements() {
    return (
        <div className="achievements-wrapper">
            {/* Achievements & Awards */}
            <section className="py-5 bg-white text-center">
                <h2 className="fw-bold mb-4">
                    Our <span className="text-danger">Achievements & Awards</span>
                </h2>
                <div className="container">
                    <div className="row justify-content-center">
                        {awards.map((img, index) => (
                            <div
                                className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
                                key={index}
                            >
                                <motion.div
                                    className="card award-card p-3 text-center"
                                    whileHover={{
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h6 className="text-danger mb-2">{years[index]}</h6>
                                    <motion.img
                                        src={img}
                                        alt={`award-${years[index]}`}
                                        className="img-fluid mb-3 grayscale-img award-img"
                                        whileHover={{ filter: "grayscale(0%)", opacity: 1 }}
                                        initial={{ filter: "grayscale(100%)", opacity: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <p className="small mb-0">
                                        Barclays Start-up <br />
                                        Entrepreneur of the year
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div className="dots mt-2">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </section>

            {/* Press & Recognition */}
            <section className="py-5 bg-pink text-center">
                <h2 className="fw-bold mb-4">
                    Our <span className="text-danger">Press & Recognition</span>
                </h2>
                <div className="container">
                    <div className="row justify-content-center">
                        {pressImages.map((img, index) => (
                            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                                <motion.div
                                    className="press-card p-3 rounded h-100"
                                    whileHover={{
                                        backgroundColor: "#ffffff",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.img
                                        src={img}
                                        alt="press"
                                        className="img-fluid mb-3 rounded"
                                        initial={{ filter: "brightness(65%)" }}
                                        whileHover={{ filter: "brightness(100%)" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.p
                                        className="small mb-1 fw-semibold text-start text-muted"
                                        whileHover={{ color: "#27ae60" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        16 July 2023
                                    </motion.p>
                                    <p className="small mb-0 text-start">
                                        IUI Vs IVF | When, What & How To Choose Best Treatment To Get Pregnant
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div className="dots mt-2">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </section>
        </div>
    );
}
