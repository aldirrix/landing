import { Education, Certificate, Experience, Skill, Social, Palette } from './info';

export type AboutProps = {
  avatar: string;
  name: string;
  profession: string;
  bio: string;
  address: string;
  social: Social[];
  palette: Palette;
  pdf: string;
};

export type EducationProps = {
  data: Education[];
  palette: Palette;
};

export type CertificatesProps = {
  data: Certificate[];
  palette: Palette;
};

export type ExperienceProps = {
  data: Experience[];
  palette: Palette;
};

export type SkillProps = {
  data: Skill[];
  palette: Palette;
};

export type SocialProps = {
  data: Social[];
};
