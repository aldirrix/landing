import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { SocialProps } from '../types/components';

type SocialMediaColor = {
  color: string;
};

const SocialStyle = styled.div`
  margin: 0 auto;
  display: block;
`;

const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`;

const SocialIcon = styled.i`
  color: ${(props): string => props.theme.color};
`;

const facebook = {
  color: '#3b5998',
};

const twitter = {
  color: '#38a1f3',
};

const linkedin = {
  color: '#0e76a8',
};

const github = {
  color: '#333',
};

const getColor = (name: string): SocialMediaColor | void => {
  if (name === 'facebook') return facebook;
  else if (name === 'twitter') return twitter;
  else if (name === 'linkedin') return linkedin;
  else if (name === 'github') return github;
};

const Social: React.FC<SocialProps> = ({ data }): JSX.Element => (
  <SocialStyle className="Social">
    <SocialUl>
      {data.map((item, index) => (
        <SocialLi key={`Social-${index}`}>
          <SocialAnchor href={item.url} target="_blank">
            <ThemeProvider theme={getColor(item.name)}>
              <SocialIcon className={`fa fa-${item.name}`} />
            </ThemeProvider>
          </SocialAnchor>
        </SocialLi>
      ))}
    </SocialUl>
  </SocialStyle>
);

Social.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Social;
