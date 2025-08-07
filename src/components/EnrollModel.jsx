import { useState, useEffect } from "react";
import "./EnrollModel.css";
import FormCouple from "../assets/Programs/FormCouple.png";
import enrollService from "../services/enrollService";
import authService from "../services/authService";
import { useAuth } from "../Context/AuthContext";


const EnrollModal = ({ isOpen, onClose }) => {
    const { user, login } = useAuth();
    const [flash, setFlash] = useState({ message: "", type: "" });

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        gender: "",
    });

    useEffect(() => {
        if (user) {
            const [firstName, lastName = ""] = user.name.split(" ");
            setFormData({
                firstName,
                lastName,
                email: user.email,
                mobile: user.mobile || "",
                gender: "",
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleGenderSelect = (gender) => {
        setFormData((prev) => ({ ...prev, gender }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = `${formData.firstName} ${formData.lastName}`;
        const signupData = {
            name: fullName,
            email: formData.email,
            password: formData.mobile,
        };

        const enrollData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            mobile: formData.mobile,
            gender: formData.gender,
            program: "Natural Pregnancy Program",
        };

        try {
            let token = localStorage.getItem("token");


            if (!token) {
                const signupRes = await authService.signup(signupData);
                token = signupRes.token;
                localStorage.setItem("token", token);
                login(token);
            }


            await enrollService.enroll(enrollData, token);
            setFlash({ message: "Enrolled successfully!", type: "success" });
            setTimeout(() => {
                setFlash({ message: "", type: "" });
                onClose();
            }, 2000);
        } catch (err) {
            const errorMsg = err.response?.data?.error || "Enrollment failed.";
            setFlash({ message: errorMsg, type: "danger" });
            console.error(err);
        }
    };

    if (!isOpen) return null;

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

                        {flash.message && (
                            <div className={`alert alert-${flash.type} mt-3`} role="alert">
                                {flash.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollModal;
