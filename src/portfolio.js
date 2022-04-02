
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sakshi Sharma",
  title: "Hello! I am Sakshi Sharma",
  subTitle: emoji("I am a passionate Software Developer 🚀. My motivation is working on projects that provide utility to the masses. I recently started my journey in open source by completing Hacktoberfest 2020 and aiming to explore a lot and make many more contributions!"),
  resumeLink: "https://drive.google.com/drive/folders/1SpHyuiiOLrG7zmvuxPZ-aXDXGU1Cnlcd?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sakshi-s",
  linkedin: "https://linkedin.com/in/sakshi14/",
  gmail: "sakshis.1407@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100017867674714",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram : "https://www.instagram.com/sa_k_ssy/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "Tech stack I am familiar with",
  skills: [
    // emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: require("./assets/images/c++.png")
    },
    {
      skillName: "C",
      fontAwesomeClassname: require("./assets/images/c.png")
    },
    {
      skillName: "C#",
      fontAwesomeClassname: require("./assets/images/c#.jpg")
    },
    {
      skillName: "Python",
      fontAwesomeClassname: require("./assets/images/python.png")
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: require("./assets/images/matlab.jpg")
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: require("./assets/images/html.png")
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: require("./assets/images/css.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: require("./assets/images/js.png")
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: require("./assets/images/nodejs.png")
    },
    {
      skillName: "Express",
      fontAwesomeClassname: require("./assets/images/express.png")
    },
    {
      skillName: "React",
      fontAwesomeClassname: require("./assets/images/react.png")
    },
    {
      skillName: "Django",
      fontAwesomeClassname: require("./assets/images/django.png")
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: require("./assets/images/mysql.svg")
    },
    {
      skillName: "Azure Cosmos DB",
      fontAwesomeClassname: require("./assets/images/azurecosmosdb.png")
    },
    {
      skillName: "Git",
      fontAwesomeClassname: require("./assets/images/git.png")
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: require("./assets/images/linux.png")
    },
    {
      skillName: "ASP.NET Core",
      fontAwesomeClassname: require("./assets/images/asp.netcore.png")
    },
    {
      skillName: "Azure Active Directory",
      fontAwesomeClassname: require("./assets/images/azuread.png")
    },
    {
      skillName: "Latex",
      fontAwesomeClassname: require("./assets/images/latex.jpg")
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Indian Institute of Technology, Guwahati",
      logo: require("./assets/images/iitgLogo.png"),
      subHeader: "Bachelor of Technology in Mathematics and Computing",
      duration: "July 2017 - June 2021",
      desc: "Courses taken : Data Structures and Algorithms *, Operating Systems *, Databases *, Computer Networks *, Linear Algebra, Probability Theory & Random Processes, Discrete Mathematics, Portfolio Theory & Peformance Analysis (* With lab). \n I also took up some positions of responsibililties at college:",
      descBullets: [
        "Departmental Internship Representative: Aided actively in the smooth conduction of Placement Season 2019-20.",
        "City Representative, Pune, Technothlon 2018: Smoothly conducted the national level exam in Pune, with over 400 candidates.",
        "Head, Creatives team, Chalchitra 2019: Led a team of 20 members for the annual film festival of IITG.",
        "Mentor, Saathi Club, 2019-2020"
      ]
    }
  ]
}


const projectInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Tourism Website",
      logo: "https://github.com/sakshi-s/Campgrounds-Portal",
      subHeader: "The Web Developer BootCamp, Udemy",
      duration: "",
      desc: "Developed a website to enable users to add pictures with description, comments and ratings. Implemented user authentication features (signup, login, logout) using Passport.js. Used online database MongoDB Atlas.",
      descBullets: [
      ]
    },
    {
      schoolName: "Codeforces Crawler",
      logo: "https://github.com/sakshi-s/Codeforces-Crawler",
      subHeader: "Coding Club IITG",
      duration: "",
      desc: "Used Beautiful Soup and Selenium to scrape contests schedule and display it in a Django based website, with a discussion portal. It can extract the code of a user given a particular question and contest identifier. Backend database : SQLite.",
      descBullets: [
      ]
    },
    {
      schoolName: "Movie Search Website",
      logo: "https://github.com/sakshi-s/Movie-Search-App",
      subHeader: "",
      duration: "",
      desc: "Developed a website using Node.js and Express, that takes a search term as an input and returns movies with title containing that term, using the OMDb API.",
      descBullets: [
      ]
    },
    {
      schoolName: "Socket-Based Peer-to-Peer System",
      logo: "https://github.com/sakshi-s/Socket-Programming",
      subHeader: "CS 349 (Computer Networks Lab), Course Project",
      duration: "",
      desc: "Used socket programming concepts and C libraries to implement a relay based peer-to-peer system. The peer client, relay server and peer nodes communicate with each other based on TCP sockets.",
      descBullets: [
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer | Leads, Dynamics 365",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "June 2021 - Present",
      desc: "Working with the Leads team on Dynamics 365 (CRM)",
      descBullets: [
        "Developed a time triggered Azure function app using C# and ASP.NET Core, managing end-to-end SDLC, to trigger leads assignment rules periodically.",
        "Scaled it to onboard 600 sellers to the Sales Accelerator, increasing number of qualified leads per month by 22% and improving sellers' and seller managers' productivity."
      ]
    },
    {
      role: "Software Engineer Intern | MLX Family Safety",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "May 2020 - July 2020",
      desc: "Worked on building the Pattern Identification Service for iOS version of Microsoft Family Safety app",
      descBullets: [
        "Developed the core functionalities of the API from scratch, to store and manage mappings between URLs from network traffic and apps that generated them, using C# and ASP.NET Core",
        "Implemented authentication using Azure AD to allow only Microsoft members to use it, and authorization by maintaining a user policy for each user",
        "This service will be extensively used by the team as a base to create and validate rules and patterns for ML models for network activity attribution service"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "YantraAI Technologies",
      companylogo: require("./assets/images/yantraAI.PNG"),
      date: "May 2019 - June 2019",
      desc: "Worked on ground based people detection using RGB-depth images and Point Cloud Library.",
      descBullets: [
        "Obtained live RGB-D data from a Microsoft Kinect",
        "Used it to detect people standing or walking on a planar ground plane in real time with standard CPU computation."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Headkick Private Limited",
      companylogo: require("./assets/images/headkickLogo.png"),
      date: "Sep 2020 - Nov 2020",
      desc: "Worked on the wireframing (using Figma) and development of the login flow for the website of Headkick using MERN (MongoDB, Express, React, and Node.js) stack. Website link : https://www.headkick.co/",
      descBullets: [
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sakshi-s", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Consulting"),
  subtitle: "I have participated in case studies and explored my interest in consulting!",

  achievementsCards: [
    {
      title: "Creative Shock 2018  (International Rank 13)",
      subtitle: "Provided solution for a social business case study based on a hypothetical not-for-profit organisation Reach, aimed at community empowerment and employment creation in South Soweto region of Africa. Also provided a communication campaign video for a social initiative Stand4Socks. Secured an international rank of 13 from hundreds of teams and thousands of students that participated.",
      image: require("./assets/images/creativeshocklogo.PNG"),
      footerLink: [
        { name: "Reach Case Study Solution", url: "https://drive.google.com/drive/folders/1BGnvc0JhAKYLCm1aafELFmbdaOYuW8dG?usp=sharing" },
        { name: "Stand4Socks Communication Campaign", url: "https://www.youtube.com/watch?v=S6VwS54oIFU&ab_channel=NikunjAgrawal" }
      ]
    },
    {
      title: "Strategy Storm",
      subtitle: "Provided case study solution for 'Nurturing-Nation' to help them evaluate what would be the best way to set-up the supply chain for their new product for the upcoming 5 years period, aimed at curbing malnutrition.",
      image: require("./assets/images/strategystormlogo.PNG"),
      footerLink: [{ name: "Case Study Solution", url: "https://drive.google.com/drive/folders/198Fdl_CzxOFwStF3TytSnBoZqcMVKZWI?usp=sharing" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.youtube.com/watch?v=ud3QJKfTw84&ab_channel=IshanSharma"
    }
  ]
};

const videosSection = {
  title: "Featured Videos",
  subtitle: emoji("I've been a part of a podcast and have acted in few short films 🎥"),

  videos: [
    {
      img: require("./assets/images/MSPodcast.jpg"),
      link: "https://www.youtube.com/watch?v=ud3QJKfTw84&ab_channel=IshanSharma",
    },
    {
      img: require("./assets/images/theleftside.jpg"),
      link: "https://www.youtube.com/watch?v=w4l8WjiHh1U&ab_channel=Lumi%C3%A8reIITG",
    },
    {
      img: require("./assets/images/daman.jpg"),
      link: "https://www.youtube.com/watch?v=4WMJjLyU3I0&ab_channel=Lumi%C3%A8reIITG",
    }
  ]
};

const basketballSection = {
  title: "My Basketball Family",
  subtitle: emoji("Represented IITG in Basketball in Inter IIT Sports Meet 2017 🏀 and gained a family!"),

  videos: [
    {
      img: require("./assets/images/basketball.jpeg"),
      link: "https://www.youtube.com/watch?v=ud3QJKfTw84&ab_channel=IshanSharma",
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Drop me a Hi!",
  number: "+91-8087672151",
  email_address: "sakshis.1407@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, projectInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, videosSection, basketballSection, podcastSection, contactInfo , twitterDetails};
