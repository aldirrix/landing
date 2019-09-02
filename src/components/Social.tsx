import React from 'react';
import PropTypes from 'prop-types';

import { SocialProps } from '../types/componentProps';

const Social: React.FC<SocialProps> = ({ data }): JSX.Element => (
  <div className="Social">
    <ul>
      {data.map((item, index) => (
        <li key={`Social-${index}`}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

Social.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Social;
