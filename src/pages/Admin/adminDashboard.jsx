import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import doctorsData from "./doctors";
import feedbackData from "./feedbacks";
import AddProgramForm from "./AddProgramForm";
import AddVideoForm from "./AddVideoForm";
import AddDoctorForm from "./AddDoctorForm";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminDashboard.css";

function AppointmentsPage({ appointments, setView }) {
  return (
    <div>
      <h3 className="mb-3">Appointments</h3>
      {appointments.length ? (
        <div style={{ overflowY: "auto" }}>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Call Type</th>
                <th>Slot Date</th>
                <th>Slot Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a._id}>
                  <td>{a.firstName} {a.lastName}</td>
                  <td>{a.email}</td>
                  <td>{a.mobile}</td>
                  <td>{a.gender}</td>
                  <td>{a.callType}</td>
                  <td>{a.slotDate}</td>
                  <td>{a.slotTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <p>No appointments found.</p>}
      
      <button className="btn btn-danger mb-3" onClick={() => setView("home")}>
        ← Back
      </button>
    </div>
  );
}

function ProgramsPage({ enrollments, setView }) {
  return (
    <div>
      <h3 className="mb-3">Program Enrollments</h3>
      {enrollments.length ? (
        <div style={{ overflowY: "auto" }}>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((e) => (
                <tr key={e._id}>
                  <td>{e.firstName} {e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.gender}</td>
                  <td>{e.program || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <p>No enrollments found.</p>}
      
      <button className="btn btn-danger mb-3" onClick={() => setView("home")}>
        ← Back
      </button>
    </div>
  );
}

function DoctorsPage({ setView }) {
  return (
    <div>
      <h3 className="mb-3">Doctors List</h3>
      <div style={{ overflowY: "auto" }}>
        {doctorsData.map((doc) => (
          <motion.div
            key={doc.id}
            className="card shadow-sm mb-3 doctor-card"
            whileHover={{ backgroundColor: "#f8f9fa" }}
            transition={{ duration: 0.2 }}
          >
            <div className="row g-0">
              <div className="col-4">
                <img
                  src={doc.photo}
                  className="img-fluid rounded-start"
                  alt={doc.name}
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5>{doc.name}</h5>
                  <p className="mb-1">{doc.specialization}</p>
                  <small>Email: {doc.email}</small><br />
                  <small>Phone: {doc.phone}</small>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="btn btn-danger mb-3" onClick={() => setView("home")}>
        ← Back
      </button>
    </div>
  );
}

function FeedbackPage({ setView }) {
  return (
    <div>
      <h3 className="mb-3">User Feedbacks</h3>
      <div style={{ overflowY: "auto" }}>
        {feedbackData.map((fb, index) => (
          <motion.div
            key={index}
            className="card p-3 shadow-sm mb-3 feedback-card"
            whileHover={{ backgroundColor: "#f8f9fa" }}
            transition={{ duration: 0.2 }}
          >
            <h6>{fb.name}</h6>
            <p>"{fb.review}"</p>
            <div>{"⭐".repeat(fb.rating)}</div>
          </motion.div>
        ))}
      </div>
      <button className="btn btn-danger mb-3" onClick={() => setView("home")}>
        ← Back
      </button>
    </div>
  );
}


function AdminDashboard() {
  const [view, setView] = useState("home");
  const [appointments, setAppointments] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appRes, enrollRes] = await Promise.all([
          fetch("/api/admin/appointments", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("/api/admin/enrollments", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!appRes.ok || !enrollRes.ok) throw new Error("Failed to load data");

        setAppointments(await appRes.json());
        setEnrollments(await enrollRes.json());
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError("Failed to load admin data.");
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="dashboard-wrapper">
      <Sidebar setView={setView} activeView={view} />
      <div className="main-content p-4">
        {view === "home" && (
          <>
            <h2 className="mb-4">Welcome, Admin</h2>
            <div className="row g-4">
              {[
                { label: "Appointments", count: appointments.length, viewKey: "appointments" },
                { label: "Programs", count: enrollments.length, viewKey: "programs" },
                { label: "Doctors", count: doctorsData.length, viewKey: "doctors" },
                { label: "Feedbacks", count: feedbackData.length, viewKey: "feedback" },
              ].map((item, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <motion.div
                    className="dashboard-card text-center p-4 shadow-sm rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setView(item.viewKey)}
                  >
                    <h5>{item.label}</h5>
                    <h3>{item.count}</h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </>
        )}
        {view === "appointments" && <AppointmentsPage appointments={appointments} setView={setView} />}
        {view === "programs" && <ProgramsPage enrollments={enrollments} setView={setView} />}
        {view === "doctors" && <DoctorsPage setView={setView} />}
        {view === "feedback" && <FeedbackPage setView={setView} />}
        {view === "addProgram" && <AddProgramForm />}
        {view === "addVideo" && <AddVideoForm />}
        {view === "addDoctor" && <AddDoctorForm />}
      </div>
    </div>
  );
}

export default AdminDashboard;