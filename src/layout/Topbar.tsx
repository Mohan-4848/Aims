import React from 'react';
import './Navbar.css';

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div>
          <span>☎ <strong>Contact:</strong> 8055667888 / 906354147 / 0432</span>
          <span>🚑 <strong>Ambulance:</strong> 8179432491</span>
        </div>
        <div>
          <span>✉ <strong>Email:</strong> arundathihospital@gmail.com</span>
          <span>🎓 <strong>Admissions:</strong> 8055778999</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;