import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import initialDoctors from "./doctors";
import feedbackData from "./feedbacks";
import AddProgramForm from "./AddProgramForm";
import AddVideoForm from "./AddVideoForm";
import AddDoctorForm from "./AddDoctorForm";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminDashboard.css";
import { FaUser } from "react-icons/fa";

function AppointmentsPage({ appointments, setView }) {
  return (
    <div>
      <h3 className="mb-3">Appointments</h3>
      {appointments.length ? (
        <div style={{ overflowY: "auto" }}>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Sr no.</th>
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
              {appointments.map((a, index) => (
                <tr key={a._id}>
                  <td>{index + 1}</td>
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
                <th>Sr no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((e, index) => (
                <tr key={e._id}>
                  <td>{index + 1}</td>
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
  const [doctors, setDoctors] = useState(
    initialDoctors.map(d => ({ ...d, status: d.status || "unset" }))
  );
  const [editDoctor, setEditDoctor] = useState(null);

  const updateDoctorStatus = async (id, status) => {
    const updated = doctors.map(doc =>
      doc.id === id ? { ...doc, status } : doc
    );
    setDoctors(updated);

    await fetch(`/api/admin/doctors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const updated = doctors.map(doc =>
      doc.id === editDoctor.id ? editDoctor : doc
    );
    setDoctors(updated);
    setEditDoctor(null);

    await fetch(`/api/admin/doctors/${editDoctor.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editDoctor),
    });
  };

  const borderColor = (status) => {
    if (status === "active") return "2.5px solid green";
    if (status === "inactive") return "2.5px solid red";
    return "2.5px solid gray";
  };

  return (
    <div>
      <h3 className="mb-3">Doctors List</h3>
      <div style={{ overflowY: "auto" }}>
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr no.</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, index) => (
              <motion.tr
                key={doc.id}
                whileHover={{ backgroundColor: "#f8f9fa" }}
                transition={{ duration: 0.2 }}
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      border: borderColor(doc.status),
                    }}
                  />
                </td>
                <td>{doc.name}</td>
                <td>{doc.specialization}</td>
                <td>{doc.email}</td>
                <td>{doc.phone}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ⋮
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item text-success"
                          onClick={() => updateDoctorStatus(doc.id, "active")}
                        >
                          Active
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => updateDoctorStatus(doc.id, "inactive")}
                        >
                          Inactive
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-warning"
                          onClick={() => setEditDoctor({ ...doc })}
                        >
                          Edit Details
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {editDoctor && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content p-3">
              <h5>Edit Doctor</h5>
              <form onSubmit={handleEditSubmit}>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editDoctor.name}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editDoctor.specialization}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, specialization: e.target.value })
                  }
                  placeholder="Specialization"
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  value={editDoctor.email}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, email: e.target.value })
                  }
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editDoctor.phone}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, phone: e.target.value })
                  }
                  placeholder="Phone"
                />
                <div className="d-flex justify-content-end mt-3">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => setEditDoctor(null)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <button className="btn btn-danger mb-3 mt-3" onClick={() => setView("home")}>
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
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Sr no.</th>
              <th>Name</th>
              <th>Review</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((fb, index) => (
              <motion.tr
                key={index}
                whileHover={{ backgroundColor: "#f8f9fa"}}
                transition={{ duration: 0.2 }}
              >
                <td>{index + 1}</td>
                <td>{fb.name}</td>
                <td>"{fb.review}"</td>
                <td>{"⭐".repeat(fb.rating)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
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
      <div className="main-content p-0">
        <header className="d-flex justify-content-end align-items-center px-4 py-2 bg-white shadow-sm">
          <span className="me-3">Hello, Admin</span>
          <button className="btn btn-light rounded-circle">
            <FaUser />
          </button>
        </header>
        <div className="p-4">
          {view === "home" && (
            <>
              <h2 className="mb-4">Welcome to Dashboard!</h2>
              <div className="row g-4">
                {[
                  { label: "Appointments", count: appointments.length, viewKey: "appointments" },
                  { label: "Programs", count: enrollments.length, viewKey: "programs" },
                  { label: "Doctors", count: initialDoctors.length, viewKey: "doctors" },
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
    </div>
  );
}

export default AdminDashboard;