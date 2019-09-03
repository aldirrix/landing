import React from 'react';
import PropTypes from 'prop-types';

const Sidebar: React.FC = ({ children }) => (
  <div className="Sidebar">
    <div className="Sidebar-container">{children}</div>
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Sidebar;
