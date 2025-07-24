import {useState} from "react";
import "./EnrollModel.css";
import FormCouple from "../assets/Programs/FormCouple.png";

const EnrollModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [selectedGender, setSelectedGender] = useState("");

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

                        <form>
                            <div className="input-group">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <input type="tel" placeholder="Mobile Number" />
                            <input type="email" placeholder="Email Address" />

                            <div className="gender-group">
                                <p>Select Gender</p>
                                <div className="gender-buttons">
                                    <button
                                        type="button"
                                        className={selectedGender === "Female" ? "active" : ""}
                                        onClick={() => setSelectedGender("Female")}
                                    >
                                        Female
                                    </button>
                                    <button
                                        type="button"
                                        className={selectedGender === "Male" ? "active" : ""}
                                        onClick={() => setSelectedGender("Male")}
                                    >
                                        Male
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                Enroll Program Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollModal;
