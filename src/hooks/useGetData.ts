import { useState, useEffect } from 'react';

import { Certificate, Education, Experience, Skill, Social } from '../types/info';

const landingInfoUrl = 'https://landing-info.s3.eu-central-1.amazonaws.com/landingInfo.json';

type ProfileInfo = {
  avatar: string;
  name: string;
  profession: string;
  bio: string;
  address: string;
  social: Social[];
  education: Education[];
  experience: Experience[];
  certificate: Certificate[];
  skills: Skill[];
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
  certificate: [],
  skills: [],
};

const useGetData = (): ProfileInfo => {
  const [myData, setData] = useState(profileInfo);
  const headers = {
    'Cache-Control': 'no-cache',
  };

  useEffect(() => {
    fetch(landingInfoUrl, { headers })
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return myData;
};

export default useGetData;
