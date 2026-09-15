import React, { useEffect, useRef } from 'react';
import './SeatMatrix.css';

const seatData = [
  { id: 'cat-a', category: 'A-Category', intake: '50% of sanctioned intake (75 seats)' },
  { id: 'cat-b', category: 'B-Category', intake: '35% of sanctioned intake (52 seats)' },
  { id: 'cat-c', category: 'C-Category', intake: '15% of sanctioned intake (23 seats)' },
];

export const SeatMatrix: React.FC = () => {
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
    <section className="section seat-matrix-section" id="seat-matrix" ref={sectionRef}>
      <div className="container">
        
        <div className="matrix-header reveal">
          <h1 className="section-title">Seat Matrix</h1>
          <div className="title-underline-gradient"></div>
        </div>

        <div className="matrix-grid">
          
          {/* Table Card */}
          <div className="matrix-card reveal delay-1">
            <h2 className="card-title">General Information</h2>
            <div className="table-responsive">
              <table className="aims-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>No of Intake Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {seatData.map((row) => (
                    <tr key={row.id}>
                      <td className="font-bold">{row.category}</td>
                      <td className="text-muted">{row.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Card */}
          <div className="matrix-card info-card reveal delay-2">
            <div className="info-icon">ℹ️</div>
            <h2 className="card-title">Admission Criteria</h2>
            <div className="card-content">
              <p>
                All admissions are conducted strictly as per the regulations and guidelines issued by the <strong>National Medical Commission (NMC)</strong> and <strong>Kaloji Narayana Rao University of Health Sciences (KNRUHS)</strong>, Telangana State, Warangal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeatMatrix;