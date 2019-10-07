import React from 'react';
import PropTypes from 'prop-types';

const Info: React.FC = ({ children }) => (
  <div className="Info">
    <div className="Info-container">{children}</div>
  </div>
);

Info.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default Info;
