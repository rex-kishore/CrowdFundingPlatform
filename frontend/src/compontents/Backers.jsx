// src/components/Backers.jsx
import React, { useState, useEffect } from "react";
import "./Backers.css";

const Backers = () => {
  // Sample campaigns data, you can replace this with API call
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Innovative Smart Home Device",
      description: "Make your home smarter with our AI-powered device.",
      goal: "50,000 USD",
      raised: "30,000 USD"
    },
    {
      id: 2,
      title: "Eco-Friendly Fashion Line",
      description: "Support sustainable fashion made from recycled materials.",
      goal: "20,000 USD",
      raised: "15,000 USD"
    },
    {
      id: 3,
      title: "Educational App for Kids",
      description: "An interactive learning app to enhance children's education.",
      goal: "10,000 USD",
      raised: "8,500 USD"
    }
  ]);

  return (
    <section className="backers-section">
      <div className="backers-content">
        <h1>Explore Campaigns</h1>
        <p>Discover ideas and support the projects you believe in.</p>
        <div className="campaigns-list">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <p><strong>Goal:</strong> {campaign.goal}</p>
              <p><strong>Raised:</strong> {campaign.raised}</p>
              <button className="cta-button">Support This Campaign</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Backers;
