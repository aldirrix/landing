import { useState, useEffect } from 'react';

import { Certificate, Education, Experience, Skill, Social, Palette } from '../types/info';
import { getPalette } from '../styles';

const landingInfoUrl = 'https://landing-info.s3.eu-central-1.amazonaws.com/cv.json';

type ProfileInfo = {
  avatar: string;
  name: string;
  profession: string;
  bio: string;
  address: string;
  social: Social[];
  education: Education[];
  experience: Experience[];
  certificates: Certificate[];
  skills: Skill[];
  palette: Palette;
};

const profileInfo = {
  avatar: '',
  name: '',
  profession: '',
  bio: '',
  address: '',
  social: [],
  education: [],
  experience: [],
  certificates: [],
  skills: [],
  palette: getPalette(undefined),
};

const useGetData = (): ProfileInfo => {
  const [myData, setData] = useState(profileInfo);
  const headers = {
    'Cache-Control': 'no-cache',
  };

  useEffect(() => {
    fetch(landingInfoUrl, { headers })
      .then(response => response.json())
      .then(data => {
        const appData = {
          ...data,
          palette: getPalette(data.theme),
        };

        return setData(appData);
      });
  }, []);

  return myData;
};

export default useGetData;
