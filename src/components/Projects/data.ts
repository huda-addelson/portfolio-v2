import { Project, ProjectType } from './index.d';

export const projects: Project[] = [
  {
    name: 'Nurul Fata Web',
    description: 'a sholawat group website',
    type: ProjectType.WEB,
    tags: ['React', 'TailwindCSS', 'Redux', 'Framer Motion'],
    picture: 'nufa.png',
    repoLink: '',
    demo: 'https://www.nurulfata.com/',
  },
  {
    name: 'TeamFlow',
    description: 'slicing from figma to website',
    type: ProjectType.WEB,
    tags: ['Html', 'Tailwind CSs', 'Javascript', 'Next JS', 'Framer Motion'],
    picture: 'team-flow.png',
    repoLink: 'https://github.com/huda-addelson/slicing-teamflow',
    demo: 'https://teamflow-huda.vercel.app/',
  },
  {
    name: 'Resto Geprek',
    description: 'slicing from figma to website',
    type: ProjectType.WEB,
    tags: ['Html', 'CSS'],
    picture: 'resto-geprek.png',
    repoLink: 'https://github.com/huda-addelson/RestoGeprek',
    demo: 'https://huda-addelson.github.io/RestoGeprek/',
  },
  {
    name: 'Tes Mengetik',
    description: 'a website app to test typing speed',
    type: ProjectType.WEB,
    tags: ['Html', 'CSS', 'Javascript', 'API'],
    picture: 'test-mengetik.png',
    repoLink: 'https://github.com/huda-addelson/tes-mengetik',
    demo: 'https://huda-addelson.github.io/tes-mengetik/',
  },
  {
    name: 'Random Quote',
    description:
      'a program created with the JavaScript programming language. when the next quote button is clicked, a new quote will appear',
    type: ProjectType.WEB,
    tags: ['Html', 'CSS', 'Javascript'],
    picture: 'random-quote.png',
    repoLink: 'https://github.com/huda-addelson/random-quote',
    demo: 'https://huda-addelson.github.io/random-quote/',
  },
];
