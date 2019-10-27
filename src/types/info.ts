export type Education = {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Certificate = {
  date: string;
  description: string;
  institution: string;
  name: string;
};

export type Experience = {
  company: string;
  endDate: string;
  jobDescription: string;
  jobTitle: string;
  startDate: string;
};

export type Skill = {
  name: string;
  percentage: string;
};

export type Social = {
  name: string;
  url: string;
};

export type Palette = {
  strong: string;
  light: string;
  deep: string;
  contrast: string;
};
