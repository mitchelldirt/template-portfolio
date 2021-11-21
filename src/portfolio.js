const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mitchelldirt.github.io/template-portfolio',
  title: 'MM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mitchell Mudd',
  role: 'Front End Engineer',
  description:
    'I\'m a Michigan native who loves the outdoors. You\'ll usually find me rock climbing, mountain biking, or hiking with my dog! I always make an effort to continue learning by building side projects and exploring new technologies. Please feel free to reach out to me!',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/mitchell-mudd-96baa7204/',
    github: 'https://github.com/mitchelldirt',
    twitter: 'https://twitter.com/mitchelldirt'
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Calculator',
    description:
      'The calculator project was the last project in the javascript basics portion the The Odin Project. I used plain HTML, CSS, and javascript to create the entire project. Getting all of the functions to play nice with each other was definitely the hardest part. I felt the most satisfaction from this project after setting up the keyboard controls and getting the styles to work correctly!',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/mitchelldirt/calculator',
    livePreview: 'https://mitchelldirt.github.io/calculator/',
  },
  {
    name: 'Tic-Tac-Toe',
    description:
      'Building tic-tac-toe was a great introduction to factories, modules, and IIFE\'s in javascript! Object oriented programming has yet to be my strong suit, but after finishing this project I definitely feel a lot better about it. My biggest struggles with this project were getting the x\'s and o\'s to show up on the board and somehow getting the x\'s and o\'s to be centered on ios took me way too long to get working.',
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/mitchelldirt/tic-tac-toe',
    livePreview: 'https://mitchelldirt.github.io/tic-tac-toe/',
  },
  {
    name: 'Dungeon Donuts',
    description:
      'This is the first project that I\'ve done with a bundler. I used web pack to server side render all of the main content for this project. My biggest challenge with building this page was figuring out the best way to build and import my web components. I figured out that you can import pictures into the components rather than the index.js file. I\'m glad I built the site statically first and then ported it over to Javascript afterwards.',
    stack: ['Javascript', 'HTML', 'CSS', 'Webpack'],
    sourceCode: 'https://github.com/mitchelldirt/dungeon-donuts/',
    livePreview: 'https://mitchelldirt.github.io/Dungeon-Donuts/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Git',
  'JIRA',
  'Python',
  'NetSuite',
  'Liquid',
  'Webpack'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mitchellmudd@outlook.com',
}

export { header, about, projects, skills, contact }
