import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProgramForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [subImages, setSubImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    if (video) formData.append("video", video);
    subImages.forEach((img, i) => formData.append(`subImage_${i}`, img));

    console.log("Form Data to send:", {
      name,
      price,
      description,
      video,
      subImages,
    });

    setName("");
    setPrice("");
    setDescription("");
    setVideo(null);
    setSubImages([]);
  };

  return (
    <motion.div
      className="card p-4 shadow-sm"
      style={{ borderRadius: "12px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="mb-3">Add New Program</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Program Name<span className="text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Price<span className="text-danger">*</span></label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Enter description..."
          ></textarea>
        </div>


        <div className="mb-3">
          <label className="form-label">Upload Program Video</label>
          <input
            type="file"
            className="form-control"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Sub-heading Images</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            multiple
            onChange={(e) => setSubImages([...e.target.files])}
          />
        </div>

        <button type="submit" className="btn btn-danger px-4">
          Add Program
        </button>
      </form>
    </motion.div>
  );
}

export default AddProgramForm;