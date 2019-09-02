import React from 'react';

const Sidebar: React.FC = ({ children }) => (
  <div className="Sidebar">
    <div className="Sidebar-container">{children}</div>
  </div>
);

export default Sidebar;
