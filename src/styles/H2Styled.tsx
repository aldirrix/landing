import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 0.8px;
  margin: 1em 0 0 0;
  color: #c2185b;
`;

const H2Styled: React.FC<{ name: string }> = ({ name }): JSX.Element => <StyledH2>{name}</StyledH2>;

H2Styled.propTypes = {
  name: PropTypes.string.isRequired,
};

export default H2Styled;
