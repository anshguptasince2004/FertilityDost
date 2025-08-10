import React from "react";

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { key: "home", label: "Home" },
    { key: "addProgram", label: "Add Program" },
    { key: "addVideo", label: "Add Video" },
  ];

  return (
    <div
      style={{
        width: "250px",
        background: "#343a40",
        color: "#fff",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginBottom: "30px" }}>Admin Panel</h3>
      {menuItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setActivePage(item.key)}
          style={{
            background: activePage === item.key ? "#495057" : "transparent",
            color: "#fff",
            textAlign: "left",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            marginBottom: "5px",
            cursor: "pointer",
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}