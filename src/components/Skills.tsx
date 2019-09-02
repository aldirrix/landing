import React from 'react';
import PropTypes from 'prop-types';

import { SkillProps } from '../types/componentProps';

const Skills: React.FC<SkillProps> = ({ data }): JSX.Element => (
  <div className="Skills">
    <div className="Skills-container">
      {data.map((skill, index) => (
        <div className="Skills-item" key={`Skills-${index}`}>
          <h5>{skill.name}</h5>
          <div className="Skills-line">
            <span>{skill.percentage}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
