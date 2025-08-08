import { useEffect, useState } from "react";

function AdminDashboard() {
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

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Enrollments</h2>
      {enrollments.length ? (
        <ul>
          {enrollments.map((e) => (
            <li key={e._id}>{e.firstName} {e.lastName} — {e.email}</li>
          ))}
        </ul>
      ) : (
        <p>No enrollments found.</p>
      )}

      <h2>Appointments</h2>
      {appointments.length ? (
        <ul>
          {appointments.map((a) => (
            <li key={a._id}>
              {a.firstName} {a.lastName} — {a.email} ({a.slotDate} at {a.slotTime})
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

export default AdminDashboard;
