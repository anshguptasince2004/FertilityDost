import React, { useState } from "react";

const placeholder = "https://via.placeholder.com/150";

export default function AddDoctorForm({ onAddDoctor }) {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhotoFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setName("");
    setSpecialization("");
    setPhone("");
    setEmail("");
    setDescription("");
    setPhotoFile(null);
    setPreview("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !specialization || !phone || !email || !description) {
      setMsg("Please fill all required fields.");
      return;
    }

    const finalPhoto = preview || placeholder;
    const newDoctor = {
      id: Date.now(),
      name,
      specialization,
      phone,
      email,
      description,
      photo: finalPhoto,
    };

    onAddDoctor(newDoctor);
    setMsg("Doctor added successfully.");
    resetForm();
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div className="card p-4 shadow-sm" style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
      <h3 className="mb-3">Add Doctor</h3>
      {msg && <div className="alert alert-success">{msg}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md-6 mb-2">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-2">
            <label className="form-label">Specialization</label>
            <input
              className="form-control"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-2">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="col-12 mb-2">
            <label className="form-label">Doctor Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="col-12 mb-2">
            <label className="form-label">Upload Doctor Photo</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleFile}
            />
          </div>

          <div className="col-12 mb-3 d-flex align-items-center gap-3">
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #ddd",
              }}
            >
              <img
                src={preview || placeholder}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="text-muted">Preview</div>
          </div>

          <div className="col-12">
            <button className="btn btn-success">Add Doctor</button>
          </div>
        </div>
      </form>
    </div>
  );
}