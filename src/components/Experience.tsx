import React from 'react';
import PropTypes from 'prop-types';

import { ExperienceProps } from '../types/components';
import { H2Styled, H3Styled, PStyled } from '../styles';

const Experience: React.FC<ExperienceProps> = ({ data }): JSX.Element => (
  <div className="Experience">
    <H2Styled name="Experience" />
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
          <PStyled name={experience.jobDescription} />
        </div>
      ))}
    </div>
  </div>
);

Experience.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Experience;
