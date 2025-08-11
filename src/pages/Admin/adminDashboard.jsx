import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import doctorsData from "./doctors";
import feedbackData from "./feedbacks";
import AddProgramForm from "./AddProgramForm";
import AddVideoForm from "./AddVideoForm";
import AddDoctorForm from "./AddDoctorForm"; // NEW
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminDashboard.css";

function AdminDashboard() {
  const [view, setView] = useState("home");
  const [appointments, setAppointments] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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

        const appointmentsData = await appRes.json();
        const enrollmentsData = await enrollRes.json();

        setAppointments(appointmentsData);
        setEnrollments(enrollmentsData);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError("Failed to load admin data.");
      }
    };

    fetchData();
  }, [token]);

  const openModal = (type) => {
    let content = null;
    const scrollableStyle = {
      maxHeight: "70vh",
      overflowY: "auto",
      overflowX: "hidden",
    };

    if (type === "appointments") {
      content = (
        <>
          <h3 className="mb-3">Appointments</h3>
          {appointments.length ? (
            <div style={scrollableStyle}>
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
        </>
      );
    } 
    else if (type === "programs") {
      content = (
        <>
          <h3 className="mb-3">Program Enrollments</h3>
          {enrollments.length ? (
            <div style={scrollableStyle}>
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
        </>
      );
    } 
    else if (type === "doctors") {
      content = (
        <>
          <h3 className="mb-3">Doctors List</h3>
          <div style={scrollableStyle}>
            {doctorsData.map((doc) => (
              <motion.div
                key={doc.id}
                className="card shadow-sm mb-3"
                whileHover={{ scale: 1.03 }}
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
        </>
      );
    } 
    else if (type === "feedback") {
      content = (
        <>
          <h3 className="mb-3">User Feedbacks</h3>
          <div style={scrollableStyle}>
            {feedbackData.map((fb, index) => (
              <motion.div
                key={index}
                className="card p-3 shadow-sm mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h6>{fb.name}</h6>
                <p>"{fb.review}"</p>
                <div>{"⭐".repeat(fb.rating)}</div>
              </motion.div>
            ))}
          </div>
        </>
      );
    }

    setModalContent(content);
    setShowModal(true);
  };

  return (
    <div className="d-flex flex-column flex-md-row">
      <Sidebar setView={setView} activeView={view} /> {/* updated */}
      <div className="flex-grow-1 p-4">
        {view === "home" && (
          <>
            <h2 className="mb-4">Welcome, Admin</h2>
            <div className="row g-4">
              {[
                { label: "Appointments", count: appointments.length, type: "appointments" },
                { label: "Programs", count: enrollments.length, type: "programs" },
                { label: "Doctors", count: doctorsData.length, type: "doctors" },
                { label: "Feedbacks", count: feedbackData.length, type: "feedback" },
              ].map((item, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <motion.div
                    className="dashboard-card text-center p-4 shadow-sm rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => openModal(item.type)}
                  >
                    <h5>{item.label}</h5>
                    <h3>{item.count}</h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </>
        )}
        {view === "addProgram" && <AddProgramForm />}
        {view === "addVideo" && <AddVideoForm />}
        {view === "addDoctor" && <AddDoctorForm />} {/* NEW */}
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-content bg-white p-4 rounded shadow"
              style={{ maxWidth: "90%", width: "800px" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {modalContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminDashboard;
