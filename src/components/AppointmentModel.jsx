import { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import "./AppointmentModel.css";

const AppointmentModal = ({ show, handleClose }) => {
  const { user, login } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    gender: "",
    callType: "",
    slotDate: "",
    slotTime: "",
  });

  const [flashMessage, setFlashMessage] = useState("");
  const [currentMonthOffset, setCurrentMonthOffset] = useState(0);

  const getDisplayedMonth = (offset) => {
    const date = new Date();
    date.setMonth(date.getMonth() + offset);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };


  useEffect(() => {
    if (user) {
      const nameParts = user.name.split(" ");
      setFormData((prev) => ({
        ...prev,
        firstName: nameParts[0],
        lastName: nameParts[1] || "",
        email: user.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/appointments/book", formData);

      if (!user) {
        login(response.data.token);
      }

      setFlashMessage("Your appointment is booked!");
      setTimeout(() => {
        setFlashMessage("");
        handleClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setFlashMessage("Something went wrong. Please try again.");
    }
  };
  const generateSlotDates = () => {
    const today = new Date();
    return Array.from({ length: 6 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
      const day = date.getDate();
      return { label: weekday, value: day.toString().padStart(2, "0") };
    });
  };

  const slotDates = generateSlotDates();

  const slotTimes = ["10:00 AM", "10:30 AM", "11:00 AM"];

  return (
    <Modal show={show} onHide={handleClose} centered className="blurred-modal">
      <Modal.Header closeButton>
        <Modal.Title>Book Your Appointment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {flashMessage && <Alert variant="success">{flashMessage}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={user}
            />
          </Form.Group>

          <h6>Select Gender:</h6>
          <div className="d-flex gap-2 mb-3 justify-content-between">
            <Button
              variant={formData.gender === "Female" ? "success" : "outline-success"}
              onClick={() => handleSelect("gender", "Female")}
            >
              Female
            </Button>
            <Button
              variant={formData.gender === "Male" ? "success" : "outline-success"}
              onClick={() => handleSelect("gender", "Male")}
            >
              Male
            </Button>
          </div>

          <h6>Call Type:</h6>
          <div className="d-flex gap-2 mb-3 justify-content-between">
            <Button
              variant={formData.callType === "Audio" ? "success" : "outline-success"}
              onClick={() => handleSelect("callType", "Audio")}
            >
              Audio
            </Button>
            <Button
              variant={formData.callType === "Video" ? "success" : "outline-success"}
              onClick={() => handleSelect("callType", "Video")}
            >
              Video
            </Button>
          </div>

          <h6>Select Slot Date</h6>
          <div className="d-flex justify-content-between align-items-center rounded-pill bg-light px-3 py-2 mb-2">
            {currentMonthOffset > 0 ? (
              <span
                role="button"
                onClick={() => setCurrentMonthOffset((prev) => prev - 1)}
                className="text-success fw-bold"
              >
                &laquo;
              </span>
            ) : (
              <span style={{ visibility: "hidden" }}>&laquo;</span>
            )}

            <strong>{getDisplayedMonth(currentMonthOffset)}</strong>

            {currentMonthOffset < 3 ? (
              <span
                role="button"
                onClick={() => setCurrentMonthOffset((prev) => prev + 1)}
                className="text-success fw-bold"
              >
                &raquo;
              </span>
            ) : (
              <span style={{ visibility: "hidden" }}>&raquo;</span>
            )}
          </div>


          <div className="d-flex gap-2 mb-3 overflow-auto">
            {slotDates.map(({ label, value }, idx) => (
              <div
                key={idx}
                className={`text-center px-2 py-1 rounded ${formData.slotDate === value ? 'bg-success text-white' : 'border'}`}
                style={{ minWidth: '48px', cursor: 'pointer' }}
                onClick={() => handleSelect("slotDate", value)}
              >
                <div style={{ fontSize: '0.8rem' }}>{label}</div>
                <div style={{ fontWeight: 'bold' }}>{value}</div>
              </div>
            ))}
          </div>


          <h6>Select Time Slot</h6>
          <div className="d-flex gap-2 mb-4 flex-wrap">
            {slotTimes.map((time, idx) => (
              <Button
                key={idx}
                variant={formData.slotTime === time ? "dark" : "outline-dark"}
                onClick={() => handleSelect("slotTime", time)}
              >
                {time}
              </Button>
            ))}
          </div>

          <div className="d-grid">
            <Button type="submit" className="btn-success py-2">
              Book Now
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentModal;