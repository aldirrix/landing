import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Palette } from 'info';

const StyledH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 0.8px;
  margin: 1em 0 0 0;
  color: ${(props): string => props.theme.deep};
`;

const H2Styled: React.FC<{ name: string; palette: Palette }> = ({ name, palette }): JSX.Element => (
  <ThemeProvider theme={palette}>
    <StyledH2>{name}</StyledH2>
  </ThemeProvider>
);

H2Styled.propTypes = {
  name: PropTypes.string.isRequired,
  palette: PropTypes.shape({
    strong: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
    deep: PropTypes.string.isRequired,
    contrast: PropTypes.string.isRequired,
  }).isRequired,
};

export default H2Styled;
