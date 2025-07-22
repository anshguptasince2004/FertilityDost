import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import m1 from "../Assets/Experts/GoogleBadge.png";
import m2 from "../Assets/Experts/AppStore.png";

import "./Footer.css";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="text-light pt-5 pb-4" style={{ backgroundColor: theme.footerColor }}>
      <div className="container">
        <div className="row mb-4">

          <div className="col-md-3 mb-4">
            <img src={theme.logo1} alt="Fertility Dost" className="logo mb-3" />
            <div className="d-flex gap-3 mt-3">
              <a href="#"><FaFacebookF className="footer-icon" /></a>
              <a href="#"><FaInstagram className="footer-icon" /></a>
              <a href="#"><FaTwitter className="footer-icon" /></a>
              <a href="#"><FaLinkedinIn className="footer-icon" /></a>
              <a href="#"><FaYoutube className="footer-icon" /></a>
            </div>
          </div>

         
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-1"><a href="#" className="footer-link">Contact Us</a></li>
              <li className="mb-1"><a href="#" className="footer-link">Videos</a></li>
              <li className="mb-1"><a href="#" className="footer-link">E- Books</a></li>
              <li className="mb-1"><a href="#" className="footer-link">IVF Books</a></li>
              <li className="mb-1"><a href="#" className="footer-link">Success Stories</a></li>
            </ul>
          </div> 
          
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Help & Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-1"><a href="#" className="footer-link">Cancellation Policy</a></li>
              <li className="mb-1"><a href="#" className="footer-link">Refund Policy</a></li>
              <li className="mb-1"><a href="#" className="footer-link">Privacy Policy</a></li>
              <li className="mb-1"><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li className="mb-1"><a href="#" className="footer-link">Need Help?</a></li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start mb-2">
                <HiOutlineLocationMarker className="me-2 mt-1 footer-icon" />
                <span>Sector 109, Near Dwarka <br /> Expressway, Gurugram, <br />Haryana 122017</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <IoLogoWhatsapp className="me-2 footer-icon" />
                <span>Whatsapp Us</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <MdEmail className="me-2 footer-icon" />
                <span>support@fertilitydost.com</span>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Download The App</h6>
            <img src={m1} alt="Google Play" className="google img-fluid mb-2" />
            <img src={m2} alt="App Store" className="apple img-fluid" />
          </div>
        </div>


        <hr className="border-secondary" />
        <div className="text-center small">
          © 2023 Copyright Fertility Dost. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
