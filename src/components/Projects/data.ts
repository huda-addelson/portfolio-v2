import { Project, ProjectType } from './index.d';

export const projects: Project[] = [
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
    name: 'Nurul Fata Web',
    description: 'a sholawat group website',
    type: ProjectType.WEB,
    tags: ['React', 'TailwindCSS', 'Redux', 'Framer Motion'],
    picture: 'nufa.png',
    repoLink: '',
    demo: 'https://www.nurulfata.com/',
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
  // {
  //   name: 'Portfolio Website',
  //   description: "You're here",
  //   type: ProjectType.WEB,
  //   tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
  //   picture: 'web-portfolio.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/web-portfolio',
  // },
  // {
  //   name: 'Gatotkaca',
  //   description: 'Metaseach-engine, based on SearXNG',
  //   type: ProjectType.WEB,
  //   tags: ['Python', 'SearXNG'],
  //   picture: 'gatotkaca.png',
  //   repoLink: 'https://github.com/tfkhdyt/gatotkaca',
  // },
  // {
  //   name: 'Random Quote Generator',
  //   description: 'A web app that will generate a random quote for you',
  //   type: ProjectType.WEB,
  //   tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
  //   picture: 'quotes.png',
  //   repoLink: 'https://github.com/tfkhdyt/random-quote-generator',
  // },
  // {
  //   name: 'Full Stack Roadmap',
  //   description: 'Roadmap to become a Full Stack Developer',
  //   type: ProjectType.WEB,
  //   tags: ['TypeScript', 'Next.js', 'NestJS'],
  //   picture: 'full-stack-roadmap.png',
  //   repoLink: 'https://github.com/tfkhdyt/full-stack-roadmap',
  // },
  // {
  //   name: 'LAM Final Project',
  //   description: 'Web app to solve some linear algebra and matrices problems',
  //   type: ProjectType.WEB,
  //   tags: ['JavaScript', 'Next.js', 'Tailwind CSS'],
  //   picture: 'aljabarlinear.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks',
  // },
  // {
  //   name: 'KBBI Bot',
  //   description: 'Indonesian Dictionary in Telegram using web scraping method',
  //   type: ProjectType.BOT,
  //   tags: ['TypeScript', 'Cheerio', 'Telegraf'],
  //   picture: 'kbbi.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/kbbi-bot',
  // },
  // {
  //   name: 'Movie Bot',
  //   description: 'Telegram Bot to search movies information',
  //   type: ProjectType.BOT,
  //   tags: ['Node.js', 'JavaScript', 'Telegraf'],
  //   picture: 'movie-bot.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/tfkhdyt-movie-bot',
  // },
  // {
  //   name: 'Bayarcoek',
  //   description: 'Automation script to encrypt all files inside a folder',
  //   type: ProjectType.CLI,
  //   tags: ['Node.js', 'JavaScript', 'Commander.js'],
  //   picture: 'bayarcoek.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/bayarcoek',
  // },
  // {
  //   name: '21 Cineplex API',
  //   description: 'REST API that scrape the data from 21Cineplex website',
  //   type: ProjectType.API,
  //   tags: ['TypeScript', 'NestJS', 'Cheerio'],
  //   picture: '21cineplex-api.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/21cineplex-api',
  // },
  // {
  //   name: 'Form to Telegram API',
  //   description:
  //     'REST API to send message from HTML form into Telegram Messages',
  //   type: ProjectType.API,
  //   tags: ['NestJS', 'TypeScript', 'Telegraf'],
  //   picture: 'message_form_to_telegram_api.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/message-form-to-telegram-api',
  // },
  // {
  //   name: 'Coursework',
  //   description: 'All of my college coursework',
  //   type: ProjectType.MISC,
  //   tags: ['Java', 'C++', 'Pascal'],
  //   picture: 'tugas-kuliah.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/tugas-kuliah',
  // },
  // {
  //   name: 'Anime Naon Ieu?',
  //   description: 'Telegram Bot to find anime details from a screenshot',
  //   type: ProjectType.BOT,
  //   tags: ['Node.js', 'JavaScript', 'Telegraf'],
  //   picture: 'anibot.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/anime-naon-ieu',
  // },
  // {
  //   name: 'MovieDB',
  //   description: 'Web app to search movie information',
  //   type: ProjectType.WEB,
  //   tags: ['JavaScript', 'Bootstrap'],
  //   picture: 'imdb.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/imdb',
  // },
  // {
  //   name: '30 Hari Jago JavaScript',
  //   description: 'Web app to learn JavaScript in 30 days',
  //   type: ProjectType.WEB,
  //   tags: ['JavaScript', 'Bootstrap'],
  //   picture: '30days.jpg',
  //   repoLink: 'https://github.com/tfkhdyt/30DaysJagoJavaScript',
  // },
];
