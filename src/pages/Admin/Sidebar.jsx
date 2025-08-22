import { useState } from "react";
import { FaHome, FaPlusCircle, FaVideo, FaUserMd, FaDatabase } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ setView, activeView }) => {
  const [openMenus, setOpenMenus] = useState({});

  const menuItems = [
    { label: "Dashboard", view: "home", icon: <FaHome /> },
    { label: "Add Program", view: "addProgram", icon: <FaPlusCircle /> },
    { label: "Add Doctor", view: "addDoctor", icon: <FaUserMd /> },
    {
      label: "CMS",
      icon: <FaDatabase />,
      children: [
        { label: "Add Video", view: "addVideo", icon: <FaVideo /> },
      ],
    },
  ];

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isParentActive = (children) => {
    return children?.some((child) => child.view === activeView);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/src/assets/RedLogo1.png" alt="Fertility Dost Logo" />
      </div>

      <h4 className="sidebar-title">Admin Panel</h4>

      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const hasChildren = !!item.children;
          const parentActive = hasChildren && isParentActive(item.children);

          return (
            <li
              key={item.label}
              className={`sidebar-item ${
                activeView === item.view || parentActive ? "active" : ""
              }`}
              onClick={() =>
                hasChildren
                  ? toggleMenu(item.label)
                  : setView(item.view)
              }
            >
              <div className="sidebar-item-left">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </div>
              <MdKeyboardArrowRight
                className={`sidebar-arrow ${
                  hasChildren && openMenus[item.label] ? "rotate" : ""
                }`}
              />
            </li>
          );
        })}
        {menuItems.map(
          (item) =>
            item.children &&
            openMenus[item.label] && (
              <ul key={`${item.label}-submenu`} className="sidebar-submenu">
                {item.children.map((child) => (
                  <li
                    key={child.view}
                    onClick={() => setView(child.view)}
                    className={`sidebar-subitem ${
                      activeView === child.view ? "active" : ""
                    }`}
                  >
                    <div className="sidebar-item-left">
                      <span className="sidebar-icon">{child.icon}</span>
                      <span className="sidebar-label">{child.label}</span>
                    </div>
                    <MdKeyboardArrowRight className="sidebar-arrow" />
                  </li>
                ))}
              </ul>
            )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;