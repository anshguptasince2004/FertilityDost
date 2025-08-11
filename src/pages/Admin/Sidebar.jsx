import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaVideo, FaUserMd } from "react-icons/fa";
// import "./Sidebar.css";

function Sidebar({ onSelect }) {
  return (
    <div className="sidebar text-light vh-100 p-3" style={{backgroundColor: '#4B0000'}}>
      <h3 className="text-center mb-4">Admin Panel</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button className="btn btn-link text-light w-100 text-start" onClick={() => onSelect("home")}>
            <FaHome className="me-2" /> Home
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="btn btn-link text-light w-100 text-start" onClick={() => onSelect("addProgram")}>
            <FaPlus className="me-2" /> Add Program
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="btn btn-link text-light w-100 text-start" onClick={() => onSelect("addVideo")}>
            <FaVideo className="me-2" /> Add Video
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-link text-light w-100 text-start" onClick={() => onSelect("addDoctor")}>
            <FaUserMd className="me-2" /> Add Doctor
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;