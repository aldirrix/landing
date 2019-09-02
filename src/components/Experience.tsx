import React from 'react';
import PropTypes from 'prop-types';

import { ExperienceProps } from '../types/componentProps';

const Experience: React.FC<ExperienceProps> = ({ data }): JSX.Element => (
  <div className="Experience">
    <div className="Experience-container">
      {data.map((experience, index) => (
        <div className="Experience-item" key={`Experience-${index}`}>
          <h3>
            {experience.jobTitle} @ {experience.company}{' '}
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </h3>
          <p>{experience.jobDescription}</p>
        </div>
      ))}
    </div>
  </div>
);

Experience.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Experience;
