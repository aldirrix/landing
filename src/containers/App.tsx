import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App: React.FC = (): JSX.Element => {
  const data = useGetData();

  return (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
          palette={data.palette}
        />
      </Sidebar>
      <Info>
        <Experience data={data.experience} palette={data.palette} />
        <Education data={data.education} palette={data.palette} />
        <Certificates data={data.certificates} palette={data.palette} />
        <Skills data={data.skills} palette={data.palette} />
      </Info>
    </Main>
  );
};

export default App;
