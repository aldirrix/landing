import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Social from './Social';
import { AboutProps } from '../types/components';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImage = styled.img`
  transition: transform 0.5s;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  border: 2px solid ${(props): string => props.theme.strong};
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const DownloadPrompt = styled.div`
  opacity: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const DownloadText = styled.div`
  color: white;
  background: black;
  font-size: 16px;
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: ${(props): string => props.theme.deep};
`;

const AboutProfession = styled.p`
  margin: 0.2em 0 1 em 0;
  letter-spacing: 1.6px;
  font-weight: 300px;
  color: ${(props): string => props.theme.deep};
`;

const AboutBio = styled.p`
  color: ${(props): string => props.theme.contrast};
  font-size: 1em;
  font-weight: 300;
`;

const AboutLocation = styled.p`
  color: ${(props): string => props.theme.contrast};
  font-size: 1em;
  font-weight: 300;
`;

const AboutFigure = styled.figure`
  position: relative;
  cursor: pointer;
  &:hover img {
    filter: grayscale(100%);
    transform: rotateY(180deg);
    transition: transform 0.5s;
  }
  &:hover div {
    opacity: 0.8;
    transition: opacity 0.8s ease-in-out;
  }
`;

const About: React.FC<AboutProps> = ({ avatar, name, profession, bio, address, social, palette, pdf }): JSX.Element => {
  function handleClick(): void {
    window.open(pdf);
  }

  return (
    <AboutStyle>
      <ThemeProvider theme={palette}>
        <div className="About-container">
          <AboutAvatar>
            <AboutFigure onClick={handleClick}>
              <AboutImage src={avatar} alt={name} />
              <DownloadPrompt>
                <DownloadText>DOWNLOAD PDF</DownloadText>
              </DownloadPrompt>
            </AboutFigure>
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
      </ThemeProvider>
    </AboutStyle>
  );
};

About.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  palette: PropTypes.shape({
    strong: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
    deep: PropTypes.string.isRequired,
    contrast: PropTypes.string.isRequired,
  }).isRequired,
  pdf: PropTypes.string.isRequired,
};

export default About;
