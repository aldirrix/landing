import React from 'react';
import PropTypes from 'prop-types';

import { EducationProps } from '../types/components';
import { H2Styled, H3Styled, PStyled } from '../styles';

const Education: React.FC<EducationProps> = ({ data }): JSX.Element => (
  <div className="Education">
    <H2Styled name="Education" />
    <div className="Education-container">
      {data.map((education, index) => (
        <div className="Education-item" key={`Education-${index}`}>
          <H3Styled>
            <div>
              {education.degree} {education.institution}{' '}
              <span>
                {education.startDate} - {education.endDate}
              </span>
            </div>
          </H3Styled>
          <PStyled name={education.description}></PStyled>
        </div>
      ))}
    </div>
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Education;
