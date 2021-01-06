export const myProjects = [
  {
    name: "Plazon",
    description: `Plazon is a social network inspired by Twitter and Reddit, developed as the final project for the [Odin Project](https://www.theodinproject.com) curriculum.
    
    It implements authentication, user configuration, image uploads, linkage to videos (youtube or vimeo), ability to like posts or comments, threaded comment section, user pages, search box and more.
    
    It is currently deployed as a heroku app, so the demo may take a bit longer to load!`,
    gifUrl: "/gifs/plazon.gif",
    codeUrl: "https://github.com/tulio-vieira/plazon-backend",
    demoUrl: "https://plazon.herokuapp.com/feed",
    stack: [
      "react",
      "nodejs",
      "mongodb",
      "material ui"
    ]
  },
  {
    name: "Shortest Path Visualizer",
    description: `This is a java Path finder that implements both the A* and Dijkstra's algorithms. Walls are displayed with the Marching Squares algorithm.`,
    gifUrl: "/gifs/shortest-path-visualizer.gif",
    codeUrl: "https://github.com/tulio-vieira/shortest-path-visualizer",
    downloadUrl: "https://github.com/tulio-vieira/shortest-path-visualizer/raw/master/Shortest%20Path%20Visualizer.jar",
    stack: [
      "java",
      "java swing"
    ]
  },
  {
    name: "Concrete Crack Detector",
    description: `This app was developed as part of my graduation project. It is an implementation of a Convolutional Neural Network trained for classifing images of cracked and non-cracked concrete images.

    It works like this: the user selects an image of a concrete surface with cracks, and then the model predicts the presence or absence of concrete cracks in each position of a sliding window that passes over the selected image.
    
    The notebooks used for training the neural network can be found [here](https://github.com/tulio-vieira/concrete-crack-detector-train). The net was then converted into a tensorflowjs model, which can run in the browser.
    
    However, due to bugs of tensorflowjs, the app won't work on mobile or weaker machines. It is also recommended to run it on Google Chrome.`,
    gifUrl: "/gifs/concrete-crack-detector.gif",
    codeUrl: "https://github.com/tulio-vieira/concrete-crack-detector-frontend",
    demoUrl: "https://tulio-vieira.github.io/concrete-crack-detector-app/",
    stack: [
      "keras",
      "tensorflowjs",
      "react",
      "material ui"
    ]
  },
  {
    name: "Chess Coordinates Trainer",
    description: `This app helps you learn the chess board coordinates! You can also choose a quadrant of the board to boost your learning.`,
    gifUrl: "/gifs/chess-coordinates-trainer.gif",
    codeUrl: "https://github.com/tulio-vieira/chess-coordinates-trainer",
    demoUrl: "https://tulio-vieira.github.io/chess-coordinates-trainer",
    stack: [
      "html",
      "css",
      "javascript"
    ]
  },
  {
    name: "Members Only Project",
    description: `This is a very simple app that allows users to post messages. It was developed as a project for the [Odin Project](https://www.theodinproject.com) curriculum.
    
    Logged in users can see messages, but only members can post them. Members can see the names of the authors, and only admins can delete any content. 
    
    It is currently deployed as a heroku app, so the demo may take a bit longer to load!`,
    gifUrl: "/gifs/members-only-project.gif",
    codeUrl: "https://github.com/tulio-vieira/members-only-project",
    demoUrl: "https://membersonlyproject.herokuapp.com",
    stack: [
      "nodejs",
      "mongodb",
      "ejs"
    ]
  },
  {
    name: "Battleships",
    description: `This is a BattleShip game in Javascript!`,
    gifUrl: "/gifs/battleship.gif",
    codeUrl: "https://github.com/tulio-vieira/battleship",
    demoUrl: "https://tulio-vieira.github.io/battleship",
    stack: [
      "html",
      "css",
      "javascript"
    ]
  }
];

export const contacts = [
  { type: 'resume', url: process.env.PUBLIC_URL + '/resume.pdf', text: 'Resumé' },
  { type: 'github', url: 'https://github.com/tulio-vieira', text: '/tulio-vieira' },
  { type: 'linkedin', url: 'https://www.linkedin.com/in/tulio-vieira', text: '/in/tulio-vieira' },
  { type: 'email', url: 'mailto: vieira.tulio@gmail.com', text: 'vieira.tulio@gmail.com' }
];

export const backgrounds = [
  {url: process.env.PUBLIC_URL + '/images/code_background_01.jpg', style: {filter: 'brightness(0.5) hue-rotate(-10deg) blur(2px)'}},
  {url: process.env.PUBLIC_URL + '/images/vaporwave_blue.jpg', style: {filter: 'brightness(0.4) grayscale(0.7) blur(2px)'}},
  {url: process.env.PUBLIC_URL + '/images/cropped_mountain.jpg', style: {filter: 'brightness(0.5) hue-rotate(-14deg) grayscale(0.2) blur(3px)'}}
];