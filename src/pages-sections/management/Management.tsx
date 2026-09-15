import React, { useEffect, useRef } from 'react';
import './Management.css';

// Data Arrays for clean mapping
const executiveCommittee = [
  { name: 'Marri Laxman Reddy', role: 'President', isBold: true },
  { name: 'M. Arundhathi', role: 'Vice-President', isBold: false },
  { name: 'M. Anushreya Reddy', role: 'Secretary', isBold: false },
  { name: 'M. Mamata Reddy', role: 'Treasurer', isBold: false },
  { name: 'M. Sunitha', role: 'Joint Secretary', isBold: false },
  { name: 'P. Indumathi', role: 'Member', isBold: false },
  { name: 'M. Dhiren Reddy', role: 'Member', isBold: false },
];

const principals = [
  { name: 'P. Vimala', dept: '(Bsc MLT)', contact: '9391912390' },
  { name: 'Mrs. Leena Deepthi', dept: '(Nursing)', contact: '9391859112' },
  { name: 'Dr. K. Madhavi', dept: '(Physiotherapy)', contact: '9391912105' },
];

export const Management: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section management-section" id="management" ref={sectionRef}>
      <div className="container">
        
        <div className="management-header reveal">
          <h1 className="section-title">Management</h1>
          <p className="section-subtitle">
            Meet the dedicated leadership driving Arundathi Institute of Medical Sciences toward excellence in healthcare education.
          </p>
        </div>

        <div className="management-grid">
          
          {/* Executive Committee Table */}
          <div className="table-card reveal delay-1">
            <h3 className="table-title">Members of the Executive Committee</h3>
            <div className="table-responsive">
              <table className="aims-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {executiveCommittee.map((member, index) => (
                    <tr key={index}>
                      <td className={member.isBold ? 'font-bold' : ''}>{member.name}</td>
                      <td className={member.isBold ? 'font-bold text-teal' : 'text-muted'}>
                        {member.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Principals Table */}
          <div className="table-card reveal delay-2">
            <h3 className="table-title">Principals</h3>
            <div className="table-responsive">
              <table className="aims-table">
                <thead>
                  <tr>
                    <th>Name & Department</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {principals.map((principal, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{principal.name}</strong> <span className="text-muted">{principal.dept}</span>
                      </td>
                      <td>
                        <a href={`tel:${principal.contact}`} className="contact-link">
                          ☎ {principal.contact}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Management;