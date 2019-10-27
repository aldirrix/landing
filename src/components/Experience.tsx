import React from 'react';
import PropTypes from 'prop-types';

import { ExperienceProps } from '../types/components';
import { H2Styled, H3Styled, PStyled } from '../styles';

const Experience: React.FC<ExperienceProps> = ({ data, palette }): JSX.Element => (
  <div className="Experience">
    <H2Styled name="Experience" palette={palette} />
    <div className="Experience-container">
      {data.map((experience, index) => (
        <div className="Experience-item" key={`Experience-${index}`}>
          <H3Styled>
            <div>
              {experience.jobTitle} @ {experience.company}{' '}
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </H3Styled>
          <PStyled name={experience.jobDescription} palette={palette} />
        </div>
      ))}
    </div>
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      jobDescription: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  palette: PropTypes.shape({
    strong: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
    deep: PropTypes.string.isRequired,
    contrast: PropTypes.string.isRequired,
  }).isRequired,
};

export default Experience;
