import React from 'react';
import PropTypes from 'prop-types';

import { AboutProps } from '../types/componentProps';
import Social from './Social';

const About: React.FC<AboutProps> = ({ avatar, name, profession, bio, address, social }): JSX.Element => (
  <div className="About">
    <div className="About-container">
      <div className="About-avatar">
        <figure>
          <img src={avatar} alt={name} />
        </figure>
      </div>
      <div className="About-name">
        <h2>{name}</h2>
      </div>
      <div className="About-profession">
        <p>{profession}</p>
      </div>
      <div className="About-bio">
        <p>{bio}</p>
      </div>
      <div className="About-location">
        <p>{address}</p>
      </div>
      <div className="About-social">
        <Social data={social} />
      </div>
    </div>
  </div>
);

About.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  social: PropTypes.array.isRequired,
};

export default About;
