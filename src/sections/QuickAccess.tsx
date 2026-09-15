import React from 'react';
import { QUICK_ACCESS_ITEMS } from '../data/quickAccess';

export const QuickAccess: React.FC = () => {
  return (
    <section className="quick">
      <div className="container quick-grid reveal">
        {QUICK_ACCESS_ITEMS.map((item) => (
          <div key={item.id} className="quick-item">
            <div className="qicon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
