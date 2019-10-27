import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: black;
  font-weight: 400;
  margin: 0.5em 0;
`;

const H3Styled: React.FC<{ children: JSX.Element }> = ({ children }): JSX.Element => <StyledH3>{children}</StyledH3>;

H3Styled.propTypes = {
  children: PropTypes.element.isRequired,
};

export default H3Styled;
