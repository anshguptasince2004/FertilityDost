
import { useState } from "react";
import "./EnrollModel.css";
import FormCouple from "../assets/Programs/FormCouple.png";
import axios from "axios";

const EnrollModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        gender: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleGenderSelect = (gender) => {
        setFormData((prev) => ({ ...prev, gender }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/enroll", formData);
            alert(response.data.message || "Form submitted successfully!");
            onClose();
        } catch (err) {
            alert("Submission failed. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-body">
                    <div className="modal-image">
                        <img src={FormCouple} alt="Couple" />
                    </div>
                    <div className="modal-form">
                        <h2>
                            Enroll For <span className="highlight">Natural Pregnancy Program</span>
                        </h2>
                        <p className="sub-text">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

                            <div className="gender-group">
                                <p>Select Gender</p>
                                <div className="gender-buttons">
                                    <button type="button" className={formData.gender === "Female" ? "active" : ""} onClick={() => handleGenderSelect("Female")}>Female</button>
                                    <button type="button" className={formData.gender === "Male" ? "active" : ""} onClick={() => handleGenderSelect("Male")}>Male</button>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">Enroll Program Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollModal;
