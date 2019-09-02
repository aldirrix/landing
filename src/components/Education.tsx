import React from 'react';
import PropTypes from 'prop-types';

import { EducationProps } from '../types/componentProps';

const Education: React.FC<EducationProps> = ({ data }): JSX.Element => (
  <div className="Education">
    <div className="Education-container">
      {data.map((education, index) => (
        <div className="Education-item" key={`Education-${index}`}>
          <h3>
            {education.degree} - {education.institution}
            <span>
              {education.startDate} - {education.endDate}
            </span>
          </h3>
          <p>{education.description}</p>
        </div>
      ))}
    </div>
  </div>
);

Education.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Education;
