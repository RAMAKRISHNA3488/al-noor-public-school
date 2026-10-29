import React from 'react';

interface ManagementCardProps {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const ManagementCard: React.FC<ManagementCardProps> = ({ title, actions, children }) => {
  return (
    <div className="management-card">
      <div className="card-header-row">
        <h2 className="card-title">{title}</h2>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
};
