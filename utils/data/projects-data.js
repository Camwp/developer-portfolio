import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SeshSeeker',
        description: "I created a community oriented app dedicated to mapping routes and locations specifically tested for onewheels. This WebApp was developed using JavaScript, NodeJS, SQLite, MapBox, OpenStreetMaps, and HTML/CSS. Users can plot points on a map anywhere in the world to create an auto-generated route, or mark a single lcoation on the map to show their community members the best spots to ride in the area. There are other features such as an 'Availability to ride' status that can let your friends know you are ready to ride for the day. There is also a feature that allows you to live-track your location to record the route and share it with the public.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: 'https://www.seshseeker.app/home',
        image: crefin,
    },
    {
        id: 2,
        name: 'FFMWheel',
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
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://discvault.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Home Recipe Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: 'OFFLINE',
        image: ayla,
        role: 'Backend & Frontend Dev',
    },
    {
        id: 5,
        name: 'JM Civil Engineering',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: 'https://jmcivileng.com/',
        image: ayla,
        role: 'Project Manager / Sole Backend & Frontend Dev',
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