import { of } from 'rxjs';

const projects = [
  {
    name: 'Portfolio Site',
    tags: '#angular, #backend, #fullstack',
    image: 'portfolio.png',
    description: ' Just another portfolio site',
    paragraphs: [
      ` My personal portfolio was not online. I decided to create one like many others developers.      
      Wherever the Turks go, Mujo will go too.`,
      `My goal was to create a simple presentation site. I wanted it in dark mode. A contact form was also a must.`,
      `Searches led me to this UI. The frontend was done in Angular. In order to implement the backend contact form, I created a simple server in NodeSs using the Gmail service.`,
      `Then I wrote a copy and here it is.`,
    ],
    githubUrl: 'https://github.com/horiv7/portfolio',
    liveUrl: 'https://portfolio-ce3b1.web.app',
  },
  {
    name: 'Bible App',
    tags: '#angular, #ui/ux',
    image: 'bibleApp.png',
    description: 'The beta version of Bible Reading App',
    paragraphs: [
      ` I had to do some research on the Scripture for my work. I read in pdf format, but it was slow and difficult to navigate either on a PC or a mobile device.
      I wanted to move fast and make it mobile. However, the solution I found on Google Store did not satisfy me.`,
      `I decided to make on my own. The tasks are fast navigation and a nice UI. I chose it to be PWA.`,
      `  I did the design in Figma. Then I took Angular and Ngrx to build the app. I had no data - the content of The Bible. So I made a script in Python to extract the content and transfer it to JSON.`,
      `Searches led me to this UI. The frontend was done in Angular. In order to implement the backend contact form, I created a simple server in NodeSs using the Gmail service.`,
      `This is a beta version.`,
    ],
    githubUrl: 'https://github.com/horiv7/bible-app',
    liveUrl: 'https://bibleapp-fcc5b.web.app/',
  },
  {
    name: 'Blog App',
    tags: '#angular, #ui/ux, #bootstrap',
    image: 'blogApp.png',
    description: ' If you want to see CRUD ops.',
    paragraphs: [
      ` I wanted to make an application with CRUD operations using Angular and NGRX. Additionally, I wanted Auth implemented. I searched Public Apis. I found a Realworld.io project.`,
      `I decided to use the realworld project as Rest Api to achive my goal. My task was to make something like a classic Blog. Therefore, it has a Home page with global feed, My posts page, New post, Delete post, and Auth pages`,
      ` I used Angular, Bootstrap 5, and NgRx for the project. Auth is made with simple Login / Sign up pages. Authentication was performed using JWT tokens.`,
      `I created a form for submitting and editing articles. I also build a page to list posts.`,
      `This is a prototype for CRUD operations. It's not a big app. It is possible to do a lot with this Rest Api. For now, I keep it simple, but I'll add features as time goes on.`,
    ],
    githubUrl: 'https://github.com/horiv7/blogApp',
    liveUrl: 'https://github.com/horiv7/portfolio',
  },
];
export function getData() {
  return of(projects);
}
