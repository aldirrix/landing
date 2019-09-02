import { Education, Certificate, Experience, Skill, Social } from './info';

export type AboutProps = {
  avatar: string;
  name: string;
  profession: string;
  bio: string;
  address: string;
  social: Social[];
};

export type EducationProps = {
  data: Education[];
};

export type CertificatesProps = {
  data: Certificate[];
};

export type ExperienceProps = {
  data: Experience[];
};

export type SkillProps = {
  data: Skill[];
};

export type SocialProps = {
  data: Social[];
};
