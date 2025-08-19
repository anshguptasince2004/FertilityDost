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
import { FaCalendarAlt, FaBook, FaUserMd, FaComments, FaUser, FaPlus } from "react-icons/fa";

function TableWrapper({ title, children, setView, addBtn }) {
  return (
    <div className="card shadow p-4 mb-4" style={{ borderRadius: "10px" }}>
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
      {children}
      <button
        className="btn btn-danger mt-4"
        onClick={() => setView("home")}
      >
        ← Back
      </button>
    </div>
  );
}

function PaginatedTable({ data, columns, renderRow }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const pageData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="bg-light">
            <tr className="fw-bold text-secondary">
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, idx) => renderRow(item, startIndex + idx + 1))}
          </tbody>
        </table>
      </div>
      {data.length > itemsPerPage && (
        <div className="d-flex justify-content-end align-items-center mt-2">
          <button
            className="btn btn-light btn-sm me-2"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ← Prev
          </button>
          <span className="me-2">Page {page} of {totalPages}</span>
          <button
            className="btn btn-light btn-sm"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
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
      {appointments.length ? (
        <PaginatedTable
          data={appointments}
          columns={[
            "Sr no.", "Name", "Email", "Phone", "Gender",
            "Call Type", "Slot Date", "Slot Time"
          ]}
          renderRow={(a, sr) => (
            <tr key={a._id}>
              <td>{sr}</td>
              <td>{a.firstName} {a.lastName}</td>
              <td>{a.email}</td>
              <td>{a.mobile}</td>
              <td>{a.gender}</td>
              <td>{a.callType}</td>
              <td>{a.slotDate}</td>
              <td>{a.slotTime}</td>
            </tr>
          )}
        />
      ) : (
        <p>No appointments found.</p>
      )}
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
      {enrollments.length ? (
        <PaginatedTable
          data={enrollments}
          columns={["Sr no.", "Name", "Email", "Phone", "Gender", "Program"]}
          renderRow={(e, sr) => (
            <tr key={e._id}>
              <td>{sr}</td>
              <td>{e.firstName} {e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.gender}</td>
              <td>{e.program || "N/A"}</td>
            </tr>
          )}
        />
      ) : (
        <p>No enrollments found.</p>
      )}
    </TableWrapper>
  );
}

function DoctorsPage({ setView }) {
  const [doctors, setDoctors] = useState(
    initialDoctors.map((d) => ({ ...d, status: d.status || "unset" }))
  );
  const [editDoctor, setEditDoctor] = useState(null);

  const updateDoctorStatus = async (id, status) => {
    const updated = doctors.map((doc) =>
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
    const updated = doctors.map((doc) =>
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
    <TableWrapper
      title="Doctors List"
      setView={setView}
      addBtn={{ label: "Add Doctor", onClick: () => setView("addDoctor") }}
    >
      <PaginatedTable
        data={doctors}
        columns={["Sr no.", "Photo", "Name", "Specialization", "Email", "Phone", "Actions"]}
        renderRow={(doc, sr) => (
          <motion.tr
            key={doc.id}
            whileHover={{ backgroundColor: "#f8f9fa" }}
            transition={{ duration: 0.2 }}
          >
            <td>{sr}</td>
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
                    setEditDoctor({
                      ...editDoctor,
                      specialization: e.target.value,
                    })
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
    </TableWrapper>
  );
}

function FeedbackPage({ setView }) {
  return (
    <TableWrapper title="User Feedbacks" setView={setView}>
      <PaginatedTable
        data={feedbackData}
        columns={["Sr no.", "Name", "Review", "Rating"]}
        renderRow={(fb, sr) => (
          <motion.tr
            key={sr}
            whileHover={{ backgroundColor: "#f8f9fa" }}
            transition={{ duration: 0.2 }}
          >
            <td>{sr}</td>
            <td>{fb.name}</td>
            <td>"{fb.review}"</td>
            <td>{"⭐".repeat(fb.rating)}</td>
          </motion.tr>
        )}
      />
    </TableWrapper>
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

  const dashboardItems = [
    {
      label: "Appointments",
      count: appointments.length,
      viewKey: "appointments",
      icon: <FaCalendarAlt />,
      color: "#007bff",
    },
    {
      label: "Programs",
      count: enrollments.length,
      viewKey: "programs",
      icon: <FaBook />,
      color: "#28a745",
    },
    {
      label: "Doctors",
      count: initialDoctors.length,
      viewKey: "doctors",
      icon: <FaUserMd />,
      color: "#ffc107",
    },
    {
      label: "Feedbacks",
      count: feedbackData.length,
      viewKey: "feedback",
      icon: <FaComments />,
      color: "#dc3545",
    },
  ];

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
                {dashboardItems.map((item, idx) => (
                  <div key={idx} className="col-6 col-md-3">
                    <motion.div
                      className="dashboard-card d-flex align-items-center p-3 shadow-sm rounded"
                      style={{ borderLeft: `4px solid ${item.color}` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setView(item.viewKey)}
                    >
                      <div
                        className="dashboard-card-icon me-3"
                        style={{ color: item.color }}
                      >
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
          {view === "appointments" && (
            <AppointmentsPage appointments={appointments} setView={setView} />
          )}
          {view === "programs" && (
            <ProgramsPage enrollments={enrollments} setView={setView} />
          )}
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