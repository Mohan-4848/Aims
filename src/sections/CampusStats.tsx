import React from 'react';
import './CampusStats.css';

const CampusStats: React.FC = () => {
  const statsData = [
    { id: 1, number: "100+", label: "Doctors" },
    { id: 2, number: "350+", label: "Beds" },
    { id: 3, number: "3,500+", label: "Library Books" },
    { id: 4, number: "25+", label: "Acres Campus" }
  ];

  return (
    <section className="section stats-banner">
      <div className="container">
        <div className="stats-grid reveal show">
          {statsData.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <strong className="stat-number">{stat.number}</strong>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusStats;