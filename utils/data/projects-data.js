import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SeshSeeker',
        description: "I created a community oriented app dedicated to mapping routes and locations specifically tested for onewheels. This WebApp was developed using JavaScript, NodeJS, SQLite, MapBox, OpenStreetMaps, and HTML/CSS. Users can plot points on a map anywhere in the world to create an auto-generated route, or mark a single lcoation on the map to show their community members the best spots to ride in the area. There are other features such as an 'Availability to ride' status that can let your friends know you are ready to ride for the day. There is also a feature that allows you to live-track your location to record the route and share it with the public.",
        tools: ['SQLite', 'NodeJS', 'HTML', 'CSS', 'A2 Hosting', 'Multer', 'Express'],
        role: 'Backend Developer',
        code: '',
        demo: 'https://www.seshseeker.app/home',
        image: crefin,
    },
    {
        id: 2,
        name: 'FFM-Wheel',
        description: 'I have assisted in the development of few features for this application. One of the many features is remote-tilt usng a gamepad/xbox/playstation controller via trigger pulls for a onewheel GT. I have brought the repositorry to a safe location on the blockchain for ease of use during local access on a raspberry pi. The app was then hosted using a variety of domain providers, hosting services, and blockchain ipfs pins to bring it all together.',
        tools: ['React', 'JavaScript', "HTML", "Pinata", "Fleek", "WebBLE", "Assembly"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://www.ffmwheel.com/',
        image: travel,
    },
    {
        id: 3,
        name: 'Disc Vault',
        description: 'My goal was to develop a library app using node and a local sql database to manage discs and bags. We used Express, and SQLite to develop the API. I utilized HTML, CSS, Bootstrap, and other libraries for the UI.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'Ubuntu', 'SQLite', 'SwiftUI', 'NodeMailer', 'Multer'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://discvault.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Home Recipe Management',
        description: "I developed a recipe management dashboard application for my family to manage our home recipes. I used python, tkinter, and other libraries to create the application. This application was tailored to our needs as a family for storing and reading home recipes.",
        tools: ['Python', 'TKinter'],
        code: '',
        demo: 'OFFLINE',
        image: ayla,
        role: 'Backend & Frontend Dev',
    },
    {
        id: 5,
        name: 'JM Civil Engineering',
        description: "I have developed a static HTML site for one of my clients that requested a simple site that displays information about their business as well as some forms for contact / business proposals. This also provided a way to post job listings on other sites and bring them in automatically to the site.",
        tools: ['HTML', 'CSS', 'Netlify'],
        code: '',
        demo: 'https://jmcivileng.com/',
        image: ayla,
        role: 'Project Manager / Backend & Frontend Dev',
    },
    {
        id: 6,
        name: 'AaronPrentice.Fitness',
        description: "Static website to serve as an information area about personal training services offered as well as a consultation and checkout section to complete the monthly / weekly services.",
        tools: ['HTML', 'CSS', 'Github', 'JavaScript'],
        code: '',
        demo: 'https://aaronprentice.fitness/',
        image: ayla,
        role: 'Project Manager / Backend & Frontend Dev',
    },
    {
        id: 7,
        name: 'Green Spaces Landscaping Final',
        description: "BYU-Idaho web development final.",
        tools: ['HTML', 'CSS', 'Github', 'JavaScript'],
        code: '',
        demo: 'https://camwp.github.io/wdd131/final/final.html',
        image: ayla,
        role: 'Project Manager / Backend & Frontend Dev',
    },
    {
        id: 8,
        name: 'Shift4 Internal Lead Management CRM',
        description: "I have developed a dynamic JS webapp for one of my clients that requested a simple internal crm that displays information about their clients business as well as automatically schedules their daily work flow for each employee. This app also autogenerates routes based on lead distance. It can handle callbacks, visits, and notes for each restaurant.",
        tools: ['HTML', 'CSS', 'SQLite3', 'NodeJS', 'Express', 'Ubuntu'],
        code: '',
        demo: 'OFFLINE',
        image: ayla,
        role: 'Project Manager / Full Stack Dev',
    },
    {
        id: 9,
        name: 'TruPump Daily Exercise Routine Planner',
        description: "Custom app that will take the users set question preferences and generate a new daily schedule to tune to each users desired workout schedule.",
        tools: ['HTML', 'CSS', 'SQLite3', 'NodeJS', 'Express', 'Ubuntu'],
        code: '',
        demo: 'https://casualhorizons.com',
        image: ayla,
        role: 'Project Manager / Full Stack Dev',
    },
    {
        id: 10,
        name: 'Anonymous Thought Posting PWA',
        description: "Custom app that will allow users to make posts without logging in and while staying anonymous. Including a moderator dashboard to manage and flag certain posts. Blocking certain words from showing in posts.",
        tools: ['HTML', 'CSS', 'SQLite3', 'NodeJS', 'Express', 'React', 'Ubuntu'],
        code: '',
        demo: 'https://wallwhisper.netlify.app',
        image: ayla,
        role: 'Full Stack Dev',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },