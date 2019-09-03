import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  padding: 1em;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  grid-row-gap: 0.5em;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Main: React.FC = ({ children }) => (
  <MainStyle>
    <MainContainer>{children}</MainContainer>
  </MainStyle>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
