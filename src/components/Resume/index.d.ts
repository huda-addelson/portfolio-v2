import { ReactNode } from 'react';

export interface ICardProps {
  title: string;
  location: string;
  time: string;
  jurusan?: string;
  children: ReactNode;
}

export interface IWorkExperience {
  name: string;
  type: string;
  tasks: string[];
  timePeriod: string;
}

export interface IEducation {
  title: string;
  type: string;
  univ: string;
  timePeriod: string;
}
