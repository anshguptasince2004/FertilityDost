import React from "react";

const Sidebar = ({ setView, activeView }) => {
  const menuItems = [
    { label: "Home", view: "home" },
    { label: "Add Program", view: "addProgram" },
    { label: "Add Video", view: "addVideo" },
    { label: "Add Doctor", view: "addDoctor" },
  ];

  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#610e0eff",
        color: "#fff",
        height: "100vh",
        paddingTop: "20px",
      }}
    >
      <h4 style={{ textAlign: "center", marginBottom: "30px" }}>Admin Panel</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item.view}
            onClick={() => setView(item.view)}
            style={{
              padding: "12px 20px",
              cursor: "pointer",
              backgroundColor:
                activeView === item.view ? "#840303ff" : "transparent",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#840303ff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                activeView === item.view ? "#840303ff" : "transparent")
            }
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;