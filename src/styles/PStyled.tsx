import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.h3`
  color: #757575;
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
`;

const PStyled: React.FC<{ name: string }> = ({ name }): JSX.Element => <StyledP>{name}</StyledP>;

PStyled.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PStyled;
