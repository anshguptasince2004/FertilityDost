import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8f9fa" }}>
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {activePage === "home" && <HomePage />}
        {activePage === "addProgram" && <AddProgramForm />}
        {activePage === "addVideo" && <AddVideoForm />}
      </div>
    </div>
  );
}

// ==========================
// Home Page
// ==========================
function HomePage() {
  const stats = [
    { title: "Total Appointments", value: 120 },
    { title: "Programs Enrolled", value: 85 },
    { title: "Videos Uploaded", value: 42 },
  ];

  return (
    <div>
      <h2>Admin Home</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              flex: 1,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h4>{stat.title}</h4>
            <h2 style={{ marginTop: "10px", color: "#007bff" }}>{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================
// Add Program Form
// ==========================
function AddProgramForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Program Added: ${name} - ₹${price}`);
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Program</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px" }}>
        <div className="mb-3">
          <label className="form-label">Program Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add Program
        </button>
      </form>
    </div>
  );
}

// ==========================
// Add Video Form
// ==========================
function AddVideoForm() {
  const [videoUrl, setVideoUrl] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoUrl) {
      alert(`Video URL Added: ${videoUrl}`);
    } else if (file) {
      alert(`Video File Uploaded: ${file.name}`);
    } else {
      alert("Please provide a video URL or upload a file.");
    }
    setVideoUrl("");
    setFile(null);
  };

  return (
    <div>
      <h2>Add Video</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px" }}>
        <div className="mb-3">
          <label className="form-label">Video URL</label>
          <input
            type="url"
            className="form-control"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Or Upload Video</label>
          <input
            type="file"
            className="form-control"
            accept="video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add Video
        </button>
      </form>
    </div>
  );
}