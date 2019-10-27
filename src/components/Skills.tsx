import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, ThemeProvider } from 'styled-components';

import { SkillProps } from '../types/components';

const SKillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
  margin: 0.5em 0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: ${(props): string => props.theme.light};
`;

const move = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const SkillsSPan = styled.span`
  display: block;
  height: 100%;
  width: ${(props: { width: string }): string => props.width};
  border-radius: 8px;
  background-color: ${(props): string => props.theme.deep};
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
    overflow: hidden;
  }
`;

const Skills: React.FC<SkillProps> = ({ data, palette }): JSX.Element => (
  <div className="Skills">
    <SKillsContainer className="Skills-container">
      {data.map((skill, index) => (
        <ThemeProvider theme={palette} key={`Skills-${index}`}>
          <div className="Skills-item">
            <SkillsH5>{skill.name}</SkillsH5>
            <SkillsLine className="Skills-line">
              <SkillsSPan width={skill.percentage} />
            </SkillsLine>
          </div>
        </ThemeProvider>
      ))}
    </SKillsContainer>
  </div>
);

Skills.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  palette: PropTypes.shape({
    strong: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
    deep: PropTypes.string.isRequired,
    contrast: PropTypes.string.isRequired,
  }).isRequired,
};

export default Skills;
