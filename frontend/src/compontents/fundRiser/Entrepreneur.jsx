// src/components/Entrepreneur.jsx
import React, { useState } from "react";
import "./Entrepreneur.css";

const Entrepreneur = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [goalAmount, setGoalAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Project:", { projectName, description, goalAmount });
    // Add your form submission logic here
  };

  return (
    <section className="entrepreneur-section">
      <div className="entrepreneur-content">
        <h1>Start Your Campaign</h1>
        <p>Turn your idea into reality by launching a campaign on FioraFund.</p>
        <form onSubmit={handleSubmit} className="entrepreneur-form">
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Goal Amount (Rupees)"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">
            Launch Campaign
          </button>
        </form>
      </div>
    </section>
  );
};

export default Entrepreneur;
