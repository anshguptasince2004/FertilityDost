import { FaHome, FaPlusCircle, FaVideo, FaUserMd } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ setView, activeView }) => {
  const menuItems = [
    { label: "Dashboard", view: "home", icon: <FaHome /> },
    { label: "Add Program", view: "addProgram", icon: <FaPlusCircle /> },
    { label: "Add Video", view: "addVideo", icon: <FaVideo /> },
    { label: "Add Doctor", view: "addDoctor", icon: <FaUserMd /> },
  ];

  return (
    <div className="sidebar">
      <h4 className="sidebar-title">Admin Panel</h4>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.view}
            onClick={() => setView(item.view)}
            className={`sidebar-item ${
              activeView === item.view ? "active" : ""
            }`}
          >
            <div className="sidebar-item-left">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </div>
            <MdKeyboardArrowRight className="sidebar-arrow" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;