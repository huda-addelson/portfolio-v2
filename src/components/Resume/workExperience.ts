import { IEducation, IWorkExperience } from '.';

const workExperience: IWorkExperience[] = [
  {
    name: 'Refactory - Yogyakarta, Indonesia.',
    type: 'Junior Software Engineer • Full-time',
    tasks: [
      '• Develop Front End Web using framework React, Next & Vue.',
      '• Develop Admin Dashboard, added new features',
    ],
    timePeriod: 'Nov 2022 - Jan 2023',
  },
  {
    name: 'Refactory - Yogyakarta, Indonesia.',
    type: 'Software Engineer Intern • Full-time',
    tasks: [
      '•  Develop Front End Web using framework React, Next & Vue.',
      '•	Develop Point of Sales System, fixed bugs in features',
    ],
    timePeriod: 'Aug 2022 - Nov 2022',
  },
];

const education: IEducation[] = [
  {
    title: 'University',
    univ: 'University of Muria Kudus',
    type: 'Bachelor Degree, Informatics Engineering',
    timePeriod: '2017 - 2022',
  },
  {
    title: 'Senior High School',
    univ: 'SMK NU Alhidayah',
    type: 'Computer and Network Engineering',
    timePeriod: '2014 - 2017',
  },
];

export { workExperience, education };
