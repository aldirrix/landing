import React from 'react';
import PropTypes from 'prop-types';

import { CertificatesProps } from '../types/components';
import { H2Styled, H3Styled, PStyled } from '../styles';

const Certificates: React.FC<CertificatesProps> = ({ data, palette }): JSX.Element => (
  <div className="Certificates">
    <H2Styled name="Certificates" palette={palette} />
    <div className="Certificates-container">
      {data.map((certificate, index) => (
        <div className="Certificates-item" key={`Certificates-${index}`}>
          <H3Styled>
            <div>
              {certificate.name} @ {certificate.institution}
              <span>{certificate.date}</span>
            </div>
          </H3Styled>
          <PStyled name={certificate.description} palette={palette}></PStyled>
        </div>
      ))}
    </div>
  </div>
);

Certificates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  palette: PropTypes.shape({
    strong: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
    deep: PropTypes.string.isRequired,
    contrast: PropTypes.string.isRequired,
  }).isRequired,
};

export default Certificates;
