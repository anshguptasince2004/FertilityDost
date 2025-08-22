import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import initialDoctors from "./doctors";
import feedbackData from "./feedbacks";
import appointmentsData from "./appointments.json";
import programsData from "./programs.json";
import AddProgramForm from "./AddProgramForm";
import AddVideoForm from "./AddVideoForm";
import AddDoctorForm from "./AddDoctorForm";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminDashboard.css";
import { FaCalendarAlt, FaBook, FaUserMd, FaComments, FaUser, FaPlus } from "react-icons/fa";

function TableWrapper({ title, children, setView, addBtn }) {
  return (
    <div className="card page-card shadow p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="m-0">{title}</h3>
        {addBtn && (
          <button
            className="btn btn-success btn-sm d-flex align-items-center"
            onClick={addBtn.onClick}
          >
            <FaPlus className="me-2" /> {addBtn.label}
          </button>
        )}
      </div>

      <div className="table-area flex-grow-1 d-flex flex-column">
        {children}
      </div>

      <div className="mt-auto">
        <button className="btn btn-danger mt-4" onClick={() => setView("home")}>
          ← Back
        </button>
      </div>
    </div>
  );
}

function PaginatedTable({ data, columns, renderRow }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const pageData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(Math.max(1, data.length) / itemsPerPage);

  return (
    <>
      <div className="table-scroll">
        <table className="table table-bordered table-hover align-middle custom-table">
          <thead className="bg-light">
            <tr className="table-header text-center">
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, idx) => renderRow(item, startIndex + idx + 1))}
            {pageData.length < itemsPerPage &&
              Array.from({ length: itemsPerPage - pageData.length }).map((_, i) => (
                <tr key={`pad-${i}`} className="invisible-row">
                  {columns.map((_, ci) => (
                    <td key={ci}>&nbsp;</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {data.length > itemsPerPage && (
        <div className="d-flex justify-content-end align-items-center mt-2">
          <button
            className="btn btn-light btn-sm me-2"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            ← Prev
          </button>
          <span className="me-2">Page {page} of {totalPages}</span>
          <button
            className="btn btn-light btn-sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
}

function AppointmentsPage({ appointments, setView }) {
  return (
    <TableWrapper title="Appointments" setView={setView}>
      <PaginatedTable
        data={appointments}
        columns={[
          "Sr no.",
          "Name",
          "Email",
          "Phone",
          "Gender",
          "Call Type",
          "Doctor Assigned",
          "Slot Date",
          "Slot Time",
        ]}
        renderRow={(a, sr) => (
          <tr key={a.SrNo || sr} className="text-center">
            <td>{sr}</td>
            <td>{a.Name}</td>
            <td>{a.Email}</td>
            <td>{a.Phone}</td>
            <td>{a.Gender}</td>
            <td>{a.CallType}</td>
            <td>{a.DoctorAssigned}</td>
            <td>{a.SlotDate}</td>
            <td>{a.SlotTime}</td>
          </tr>
        )}
      />
    </TableWrapper>
  );
}

function ProgramsPage({ enrollments, setView }) {
  return (
    <TableWrapper
      title="Program Enrollments"
      setView={setView}
      addBtn={{ label: "Add Program", onClick: () => setView("addProgram") }}
    >
      <PaginatedTable
        data={enrollments}
        columns={[
          "Sr no.",
          "Name",
          "Email",
          "Phone",
          "Gender",
          "Program Section",
        ]}
        renderRow={(e, sr) => (
          <tr key={e.SrNo || sr} className="text-center">
            <td>{sr}</td>
            <td>{e.Name}</td>
            <td>{e.Email}</td>
            <td>{e.Phone}</td>
            <td>{e.Gender}</td>
            <td>{e.ProgramSection}</td>
          </tr>
        )}
      />
    </TableWrapper>
  );
}


function DoctorsPage({ setView }) {
  const [doctors, setDoctors] = useState(
    initialDoctors.map((d) => ({ ...d, status: d.status || "unset" }))
  );
  const [editDoctor, setEditDoctor] = useState(null);

  const updateDoctorStatus = async (id, status) => {
    const updated = doctors.map((doc) => (doc.id === id ? { ...doc, status } : doc));
    setDoctors(updated);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const updated = doctors.map((doc) => (doc.id === editDoctor.id ? editDoctor : doc));
    setDoctors(updated);
    setEditDoctor(null);
  };

  return (
    <TableWrapper
      title="Doctors List"
      setView={setView}
      addBtn={{ label: "Add Doctor", onClick: () => setView("addDoctor") }}
    >
      <PaginatedTable
        data={doctors}
        columns={["Sr no.", "Photo", "Name", "Specialization", "Email", "Phone", "Status", "Actions"]}
        renderRow={(doc, sr) => (
          <motion.tr
            key={doc.id || sr}
            className="text-center"
            whileHover={{ backgroundColor: "#f8f9fa" }}
            transition={{ duration: 0.2 }}
          >
            <td>{sr}</td>
            <td>
              <img
                src={doc.photo}
                alt={doc.name}
                style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
              />
            </td>
            <td>{doc.name}</td>
            <td>{doc.specialization}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>
              {doc.status === "active" && <span className="text-success">Active</span>}
              {doc.status === "inactive" && <span className="text-danger">Inactive</span>}
              {doc.status === "unset" && <span className="text-muted">Not Set</span>}
            </td>
            <td>
              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ⋮
                </button>
                <ul className="dropdown-menu" style={{ minWidth: "6rem", fontSize: "0.9rem" }}>
                  <li>
                    <button className="dropdown-item text-success" onClick={() => updateDoctorStatus(doc.id, "active")}>
                      Active
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={() => updateDoctorStatus(doc.id, "inactive")}>
                      Inactive
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item text-warning" onClick={() => setEditDoctor({ ...doc })}>
                      Edit Details
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </motion.tr>
        )}
      />

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
                  onChange={(e) => setEditDoctor({ ...editDoctor, name: e.target.value })}
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
                  onChange={(e) => setEditDoctor({ ...editDoctor, email: e.target.value })}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editDoctor.phone}
                  onChange={(e) => setEditDoctor({ ...editDoctor, phone: e.target.value })}
                  placeholder="Phone"
                />
                <div className="d-flex justify-content-end mt-3">
                  <button type="button" className="btn btn-secondary me-2" onClick={() => setEditDoctor(null)}>
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
    </TableWrapper>
  );
}

function FeedbackPage({ setView }) {
  const [reviews, setReviews] = useState(feedbackData);
  const [editReview, setEditReview] = useState(null);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updated = reviews.map((r, i) =>
      i === editReview.index ? { ...r, review: editReview.review } : r
    );
    setReviews(updated);
    setEditReview(null);
  };

  return (
    <TableWrapper title="User Feedbacks" setView={setView}>
      <PaginatedTable
        data={reviews}
        columns={["Sr no.", "Name", "Review", "Rating", "Actions"]}
        renderRow={(fb, sr) => (
          <motion.tr
            key={sr}
            className="text-center"
            whileHover={{ backgroundColor: "#f8f9fa" }}
            transition={{ duration: 0.2 }}
          >
            <td>{sr}</td>
            <td>{fb.name}</td>
            <td>"{fb.review}"</td>
            <td>{"⭐".repeat(fb.rating)}</td>
            <td>
              <button
                className="btn btn-sm text-primary"
                onClick={() => setEditReview({ ...fb, index: sr - 1 })}
              >
                Edit Review
              </button>
            </td>
          </motion.tr>
        )}
      />

      {editReview && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content p-3">
              <h5>Edit Review</h5>
              <form onSubmit={handleEditSubmit}>
                <label className="form-label">Review</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={editReview.review}
                  onChange={(e) =>
                    setEditReview({ ...editReview, review: e.target.value })
                  }
                />
                <div className="text-muted small mt-2">
                  Rating: {"⭐".repeat(editReview.rating)} (read-only)
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => setEditReview(null)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </TableWrapper>
  );
}

// Commented out backend fetch logic
/*
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
*/

function AdminDashboard() {
  const [view, setView] = useState("home");
  const [appointments, setAppointments] = useState(appointmentsData);
  const [enrollments, setEnrollments] = useState(programsData);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dashboardItems = [
    { label: "Appointments", count: appointments.length, viewKey: "appointments", icon: <FaCalendarAlt />, color: "#007bff" },
    { label: "Programs", count: enrollments.length, viewKey: "programs", icon: <FaBook />, color: "#28a745" },
    { label: "Doctors", count: initialDoctors.length, viewKey: "doctors", icon: <FaUserMd />, color: "#ffc107" },
    { label: "Feedbacks", count: feedbackData.length, viewKey: "feedback", icon: <FaComments />, color: "#dc3545" },
  ];

  return (
    <div className="dashboard-wrapper">

      <div className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}>
        <Sidebar
          setView={setView}
          activeView={view}
          onClose={() => setSidebarOpen(false)}
        />
      </div>



      <div className="main-content p-0">
        <header className="d-flex justify-content-between align-items-center px-4 py-2 bg-white shadow-sm">

          <button
            className="btn btn-outline-dark d-md-none me-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <span className="ms-auto me-3">Hello, Admin</span>
          <button className="btn btn-light rounded-circle">
            <FaUser />
          </button>
        </header>

        <div className="p-4">
          {view === "home" && (
            <>
              <h2 className="mb-4">Welcome to Dashboard!</h2>
              <div className="row g-4">
                {dashboardItems.map((item, idx) => (
                  <div key={idx} className="col-6 col-md-3">
                    <motion.div
                      className="dashboard-card d-flex align-items-center p-3 shadow-sm rounded"
                      style={{ borderLeft: `4px solid ${item.color}` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setView(item.viewKey)}
                    >
                      <div className="dashboard-card-icon me-3" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <div className="text-start">
                        <h6 className="card-label mb-1">{item.label}</h6>
                        <h3 className="mb-0">{item.count}</h3>
                      </div>
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