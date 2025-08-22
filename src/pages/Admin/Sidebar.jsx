import { useState, useRef, useEffect } from "react";
import { FaHome, FaPlusCircle, FaVideo, FaUserMd, FaDatabase } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "./Sidebar.css";

const Sidebar = ({ setView, activeView, onClose }) => {
  const [openMenus, setOpenMenus] = useState({});
  const sidebarRef = useRef(null);

  const menuItems = [
    { label: "Dashboard", view: "home", icon: <FaHome /> },
    { label: "Add Program", view: "addProgram", icon: <FaPlusCircle /> },
    { label: "Doctors List", view: "doctors", icon: <FaUserMd /> },
    {
      label: "CMS Section",
      icon: <FaDatabase />,
      children: [{ label: "Add Video", view: "addVideo", icon: <FaVideo /> }],
    },
  ];

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isParentActive = (children) =>
    children?.some((child) => child.view === activeView);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="sidebar" ref={sidebarRef}>
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
                hasChildren ? toggleMenu(item.label) : setView(item.view)
              }
            >
              <div className="sidebar-item-left">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </div>
              {hasChildren && (
                <MdKeyboardArrowRight
                  className={`sidebar-arrow ${
                    openMenus[item.label] ? "rotate" : ""
                  }`}
                />
              )}
            </li>
          );
        })}

        {menuItems.map(
          (item) =>
            item.children && (
              <AnimatePresence key={`${item.label}-submenu`}>
                {openMenus[item.label] && (
                  <motion.ul
                    className={`sidebar-submenu ${
                      isParentActive(item.children) ? "active" : ""
                    }`}
                    initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                    exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
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
                          <span className="sidebar-label sidebar-sub-label text-truncate">
                            {child.label}
                          </span>
                        </div>
                        <MdKeyboardArrowRight className="sidebar-arrow" />
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;