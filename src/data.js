export const WEATHER_DATA =
  "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=f2eb762353dd6b9f926b406db34c6ae1";

export const RESUME_DATA = [
  [
    {
      key: 0,
      title: "Södertörn University, Bachelor's degree",
      content: [
        "Program: It, Media and Design 2016-2019",
        "Subject: Media technology",
      ],
    },
    {
      key: 1,
      title: "KYH, Vocational university",
      content: [
        "Program: Front-end developer 2020-2022",
        "Subject: Front-end development",
      ],
    },
    {
      key: 3,
      title: "Nacka Gymnasium, secondary education",
      content: [
        "Program: Social and behavioral science 2012-2015",
        "Subject: Social and behavioral science",
      ],
    },
  ],
  [
    {
      key: 4,
      title: "Sigma Technology Cloud",
      content: [
        "Position: Intern  2021/10/04—2022/05",
        "Sigma Technology Cloud is a consulting firm in the IT-business primarily working with different cloud services such as Azure and Amazon Web Services. I built for them an event booking platform with React.js as front-end and Node.js, Express.js and MongoDB as Back-end Deploy genomfördes med Azure App Service.",
        "I also worked on creating a React.js front-end solution to visualize data from an Internet of Things hydroponics artefact, in this case I worked with AWS and in implementing an existing UX design.",
      ],
    },
    {
      key: 5,
      title: "Kairos Future",
      content: [
        "Position: Intern 2019/02/25—2019/03/28",
        "Took part in testing and UX-research for a Kairos Future Digitool called Co:Tunity Trendscan, a tool for monotoring different trends and analysis of markets.",
        "As part of my internship I also took part in design meetings and created a quick-start manual for use of Co:tunity",
      ],
    },
    {
      key: 6,
      title: "Postnord",
      content: [
        "Position: Mail Carrier, intermittenly 2018-present",
        "When I am not studying or working on polishing my skills as a developer I deliver mail in my hometown of Nacka.",
        "The work involves handling certain digital tools to do things like empty mailboxes and scan packages for delivery.",
      ],
    },
  ],
  [
    {
      key: 7,
      title: "Programming",
      content: [
        "I know how to develop web pages using HTML, CSS and Javascript.",
        "I am also experienced in working in javascript with object-oriented programming to control behavior of websites as well as javascript frameworks such as React.",
        "I also have experience working with Wordpress and PHP in building pages, as well as acreating themes and child-themes. Beyond this I also have experience in working with Bootstrap and Sass/SCSS.",
      ],
    },
    {
      key: 8,
      title: "Prototyping tools",
      content: [
        "I have experience with working in tools such as Figma, Adobe Experience Design and Sketch to create UX-prototypes.",
        "Though my I am most skilled and comfortable with Figma, which I have the most experience with.",
      ],
    },
    {
      key: 9,
      title: "Microsoft Office",
      content: [
        "I am experienced in working with the different tools available in Microsoft Office.",
      ],
    },
    {
      key: 10,
      title: "Adobe Creative Cloud",
      content: [
        "I have basic knowledge and experience in working with Adobe programs such as Adobe Illustrator, Photoshop, Indesign and Experience Design.",
      ],
    },
  ],
];
export const PROJECT_DATA = [
  {
    key: 0,
    title: "Sigma Events",
    content: [
      "A full-stack event booking platform for events for employees at the Sigma Technology group. The website features ability for users to create different events which are then displayed on the website letting users browse and choose wether or not to participate in them.",
      "The application also features email notifications for users as well as an administrative layer allowing admins to alter events, users and other contents.",
      "Sigma Events was built utlizing a MERN stack approach using React as front-end with a Node.js back-end utilizng express.js endpoints to communicate with a MongoDB database",
      "Other technologies used were the Material UI suite of react components to create a cohesive look for the applicationa as well as internationalization in the form of i18next both in the front-end and on the back-end.",
    ],
    img: "https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/sigmaeventsscreenshot.png",
    alt_text:
      "Three images showing different views of Sigma technology, the login page, the main dashboard and the profile page",
  },
  {
    key: 1,
    title: "Static website with locastorage functionality",
    content: [
      "A simple website made in 2020 as part of a student project",
      "Features a form utilizing localstorage as well as an interactive hamburger menu and responsive CSS.",
    ],
    img: "https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/ip1_screenshot1.png",
    alt_text:
      "An iamge show the index page of a static website with locastorage functionality",
    link: "https://github.com/Tanngrisnr/kyh_individuell_1",
  },
  {
    key: 2,
    title: "Quire - Web notes app",
    content: [
      "A group project from 2020 creating a javascript driven website for note taking online.",
      "Uses quill.js for the notes and saves them to local storage.",
    ],
    img: "https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/fe20_grupp1.png",
    alt_text: "A screenshot showing the Quire using interface",
    link: "https://github.com/Tanngrisnr/fe20tp1_Paper",
  },
  {
    key: 3,
    title: "Easy:bit",
    content: [
      "A group project from 2018 to teach Micro:bit, primarily to teachers who can in turn teach students.",
      "My part in the project was creating the website to hold the project.",
    ],
    img: "https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/easy_bit.png",
    alt_text: "A screenshot of the Easy:bit front-end style guide",
    link: "https://github.com/Tanngrisnr/easybit_front-style",
  },
  {
    key: 4,
    title: "Superpartiet",
    content: [
      "A student project from 2018 utilizing PHP and SQL to communicate with a database.",
      "As well as JQuery and javascript to display content of database",
    ],
    img: "https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/superpartiet.png",
    alt_text: "A screenshot of the Superpartiet front-end style guide",
    link: "https://github.com/Tanngrisnr/MTB_individ",
  },
  {
    key: 5,
    title: "Norm Form",
    content: [
      "A 2017 graphic design project utilizing constructivist design to create a poster advertising an exhibit at the Swedish Museum of Modern Art.",
    ],
    img: "https://raw.githubusercontent.com/Tanngrisnr/ip2_portfolio/main/src/images/Wintzell_Fredrik_Poster_Konstruktivismprint.png",
    alt_text:
      "A poster advertising the Arkdes exhibit at the swedish museum of modern art",
  },
];
