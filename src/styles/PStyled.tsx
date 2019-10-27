import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Palette } from 'info';

const StyledP = styled.h3`
  color: ${(props): string => props.theme.contrast};
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
`;

const PStyled: React.FC<{ name: string; palette: Palette }> = ({ name, palette }): JSX.Element => (
  <ThemeProvider theme={palette}>
    <StyledP>{name}</StyledP>
  </ThemeProvider>
);

PStyled.propTypes = {
  name: PropTypes.string.isRequired,
  palette: PropTypes.shape({
    strong: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
    deep: PropTypes.string.isRequired,
    contrast: PropTypes.string.isRequired,
  }).isRequired,
};

export default PStyled;
