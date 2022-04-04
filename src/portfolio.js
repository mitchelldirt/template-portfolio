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
    name: 'Windmill Weather',
    description:
      'Windmill weather is my first project that deals with the handling of APIs. Originally I only planned to use the OpenWeather API, but found that searching and hoping for a result was clunky. After learning that I implemented the TomTom fuzzy search and auto complete API with the search box package. I also tried parcel and tailwindcss for the first time in a project. This is my personal favorite project on my portfolio :)',
    stack: ['Typescript', 'HTML', 'TailWindCSS', 'Parcel', 'OpenWeatherAPI', 'TomTomAPI'],
    sourceCode: 'https://github.com/mitchelldirt/windmill-weather',
    livePreview: 'https://windmill-weather.vercel.app/',
  },
  {
    name: 'to.do',
    description:
      'This was my first project that felt like a true project. I\'ve seen many variations of the todo list project and sought to go beyond the most basic functionality. Something I learned while doing this is the importance of planning how your app will function ahead of time and keeping your code base clean. I definitely cluttered everything up at the start and spent a good two to three hours reorganizing. After finishing this project I feel way more confident applying types using Typescript.',
    stack: ['Typescript', 'HTML', 'CSS', 'Webpack'],
    sourceCode: 'https://github.com/mitchelldirt/todo-list/',
    livePreview: 'https://mitchelldirt.github.io/todo-list/',
  },
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
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'Git',
  'Jira',
  'Python',
  'NetSuite',
  'Liquid',
  'Webpack',
  'Vite',
  'Regex'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mitchellmudd@outlook.com',
}

export { header, about, projects, skills, contact }
