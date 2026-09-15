import React from 'react';

export interface SectionHeaderProps {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`section-head reveal ${className}`.trim()}>
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
};
