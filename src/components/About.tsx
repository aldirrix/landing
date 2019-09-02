import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AboutProps } from '../types/componentProps';
import Social from './Social';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImage = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #e91e63;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #c2185b;
`;

const AboutProfession = styled.p`
  margin: 0.2em 0 1 em 0;
  letter-spacing: 1.6px;
  ont-weight: 300px;
  color: #c2185b;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;

const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;

const About: React.FC<AboutProps> = ({ avatar, name, profession, bio, address, social }): JSX.Element => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImage src={avatar} alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-bio">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social data={social} />
      </div>
    </div>
  </AboutStyle>
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
