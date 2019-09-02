import React from 'react';
import PropTypes from 'prop-types';

import { CertificatesProps } from '../types/componentProps';

const Certificates: React.FC<CertificatesProps> = ({ data }): JSX.Element => (
  <div className="Certificates">
    <div className="Certificates-container">
      {data.map((certificate, index) => (
        <div className="Certificates-item" key={`Certificates-${index}`}>
          <h3>
            {certificate.name} @ {certificate.institution}
            <span>{certificate.date}</span>
          </h3>
          <p>{certificate.description}</p>
        </div>
      ))}
    </div>
  </div>
);

Certificates.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Certificates;
