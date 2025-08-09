import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./AdminDashboard.css";

function AdminDashboard() {
  console.log("Admin Dashboard rendered")
  const [enrollments, setEnrollments] = useState([]);
  const [appointments, setAppointments] = useState([]);
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

        if (!appRes.ok || !enrollRes.ok) {
          throw new Error("Failed to load data");
        }

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

  if (error)
    return <p className="text-danger text-center mt-4">{error}</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Enrollments</h2>
      {enrollments.length ? (
        <div className="table-responsive mb-5">
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
      ) : (
        <p className="text-muted">No enrollments found.</p>
      )}

      <h2 className="mb-4">Appointments</h2>
      {appointments.length ? (
        <div className="table-responsive">
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
      ) : (
        <p className="text-muted">No appointments found.</p>
      )}
    </div>
  );
}

export default AdminDashboard;
