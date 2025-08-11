import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProgramForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Program:", { name, price });
    setName("");
    setPrice("");
  };

  return (
    <motion.div
      className="card p-4 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="mb-3">Add New Program</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Program Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Program
        </button>
      </form>
    </motion.div>
  );
}

export default AddProgramForm;