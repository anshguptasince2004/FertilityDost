import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function AddVideoForm() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Video Data:", { url, file });
    setUrl("");
    setFile(null);
  };

  return (
    <motion.div
      className="card p-4 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="mb-3">Add New Video</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Video URL</label>
          <input
            type="url"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload MP4</label>
          <input
            type="file"
            accept="video/mp4"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Video
        </button>
      </form>
    </motion.div>
  );
}

export default AddVideoForm;
