function linkInputs(name = " ") {
  if (name !== " ") {
    name += " ";
    name = " " + name;
  }
  return [
    {
      inputUsed: "input",
      labelName: `Enter${name}Github URL`,
      hintMessage: "",
      fieldName: "githubLink",
      fieldType: "text",
      isRequired: false,
    },
    {
      inputUsed: "input",
      labelName: `Enter deployed${name}URL`,
      hintMessage: "",
      fieldName: "deployedLink",
      fieldType: "text",
      isRequired: false,
    },
  ];
}

const personalInfoInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Full Name",
    hintMessage: "Enter Name eg. Rohit Sharma",
    fieldName: "fullName",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "input",
    labelName: "Enter Email",
    hintMessage: "Enter Email eg. rohitsharma@gmail.com",
    fieldType: "text",
    fieldName: "email",
    isRequired: false,
  },
  {
    inputUsed: "input",
    labelName: "Enter Phone Number",
    fieldType: "text",
    hintMessage: "Phone Number eg. +91 9999999999",
    fieldName: "phoneNo",
    isRequired: false,
  },
  {
    inputUsed: "input",
    labelName: "Enter Github url",
    hintMessage: "Enter Github url",
    fieldType: "text",
    fieldName: "github",
    isRequired: false,
  },
  {
    inputUsed: "input",
    labelName: "Enter LinkedIn url",
    hintMessage: "Enter LinkedIn url",
    fieldName: "linkedin",
    fieldType: "text",
    isRequired: false,
  },
  {
    inputUsed: "input",
    labelName: "Enter Twitter url",
    hintMessage: "Enter Twitter url",
    fieldName: "twitter",
    fieldType: "text",
    isRequired: false,
  },
  {
    inputUsed: "input",
    labelName: "Enter Portfolio url",
    hintMessage: "Enter Portfolio url",
    fieldName: "portfolio",
    fieldType: "text",
    isRequired: false,
  },
];

const experiencesInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Job/Internship Company Name and Location",
    hintMessage: "eg. Microsoft, Mumbai",
    fieldName: "title",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "textarea",
    labelName: "Enter Job Description",
    hintMessage:
      "eg. Worked on Microsoft Teams to build smooth infrastruture for visual communication. Deployed several new features during development and build solid frontend for the application.",
    fieldName: "description",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "input",
    labelName: "Enter Start date",
    hintMessage: "Enter Start date",
    fieldName: "from",
    fieldType: "date",
    isRequired: true,
  },
  {
    inputUsed: "input",
    labelName: "Enter End date",
    hintMessage: "Enter End date",
    fieldName: "to",
    fieldType: "date",
    isRequired: false,
  },
  ...linkInputs("Experience"),
];
const educationsInputs = [
  {
    inputUsed: "input",
    labelName: "Enter School/University Name and Location",
    hintMessage: "ex. Indian Institute of Technology, Delhi",
    fieldName: "title",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "input",
    hintMessage: "ex. B. Tech in CSE; 8.87 CGPA",
    labelName: "Enter Degree name, branch and CGPA/Percentage ",
    fieldName: "description",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "input",
    hintMessage: "Enter Start Date",
    labelName: "Enter Start Date",
    fieldName: "from",
    fieldType: "date",
    isRequired: true,
  },
  {
    inputUsed: "input",
    labelName: "Enter End Date (leave blank if currently doing)",
    hintMessage: "Enter End Date",
    fieldName: "to",
    fieldType: "date",
    isRequired: false,
  },
];
const skillsInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Skill Name",
    hintMessage:
      "eg. Web Development : HTML5, CSS3, React, JavaScript, NodeJS, Django",
    fieldName: "title",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "input",
    hintMessage: "Rate Your Skill from 0 to 100",
    fieldName: "rating",
    fieldType: "number",
    isRequired: false,
  },
];
const achievementsInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Acheivement Name",
    hintMessage: "eg. Codeforces contest winner",
    fieldName: "title",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "textarea",
    labelName: "Enter More Information",
    hintMessage: "eg. Ranked first in one of codeforces competition",
    fieldName: "description",
    fieldType: "text",
    isRequired: false,
  },
  ...linkInputs("Achievement"),
];
const projectsInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Project Title and Tech Used",
    hintMessage: "eg. E-Commerce Site, MERN Stack",
    fieldName: "title",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "textarea",
    labelName: "Enter Project Description",
    hintMessage:
      "eg. Used ReactJS to build the frontend of this application, NodeJS to build the backend, mongo for database, and GraphQL from querying data. This e-commerce site mimics some behavior of other sites but is unique in a way that allows users to negotiate prices with the client.",
    fieldName: "description",
    fieldType: "text",
    isRequired: true,
  },
  {
    inputUsed: "input",
    labelName: "Enter Start date",
    hintMessage: "Enter Start date",
    fieldName: "from",
    fieldType: "date",
    isRequired: false,
  },
  {
    inputUsed: "input",
    labelName: "Enter End date (leave black is currently ongoing)",
    hintMessage: "Enter End date",
    fieldName: "to",
    fieldType: "date",
    isRequired: false,
  },
  ...linkInputs("Project"),
];
const sampleResumeData = {
  fullName: "Rohit Sharma",
  email: "rahul.sharma109@gmail.com",
  phoneNo: "+91 9999999999",
  github: "https://github.com/ipranshujain",
  twitter: "https://twitter.com/PranshuJain04",
  linkedin: "https://www.linkedin.com/in/pranshujain4/",
  portfolio: "https://pranshujain.vercel.app/",
  experiences: [
    {
      title: "Google, Hyderabad",
      description:
        "I have worked at google android team to build scalable sdks and apis and deployed various modules for proper use case.",
      from: "2021-10-05",
      to: "2021-11-10",
      githubLink: "",
      deployedLink: "https://www.google.com",
    },
    {
      title: "Amazon, Pune",
      description:
        "Worked with AWS Cloud to build ML based models for solving problems related to cyber security and threats accompying mislicious attacks.",
      from: "2021-11-25",
      to: "",
      githubLink: "",
      deployedLink: "https://www.amazon.com",
    },
  ],
  educations: [
    {
      title: "Indian Institute of Technology, Delhi",
      description: "B. Tech, CSE, 9.29 SPGA",
      from: "2019-08-19",
      to: "",
    },
    {
      title: "Navodaya Higher Secondary School, Bhopal",
      description: "12th in PCM, 95%",
      from: "2019-02-01",
      to: "2019-12-20",
    },
  ],
  skills: [
    {
      title: "Web Development : HTML5, CSS3, React, JavaScript, NodeJS, Django",
      rating: "99",
    },
    {
      title: "Programming Languages: C++, Java, Python.",
      rating: "90",
    },
    {
      title: "Machine Learning: Pandas, Tenserflow, Numpy, PyTorch",
      rating: "99",
    },
  ],
  achievements: [
    {
      title: "CodeChef CookOff Winner",
      description: "Winner of 3hr. long codechef competition.",
    },
    {
      title: "HackHarvard Winner",
      description:
        "Participated in hackathon by Harvard and won the 1st price in the environment category.",
    },
  ],
  projects: [
    {
      title: "E-Commerce Site",
      description:
        "Used ReactJS to build the frontend of this application, NodeJS to build the backend, mongo for database, and GraphQL from querying data. This e-commerce site mimics some behavior of other sites but is unique in a way that allows users to negotiate prices with the client.",
      from: "2021-10-02",
      to: "2021-11-09",
      githubLink: "https://github.com/ipranshujain",
      deployedLink: "https://pranshujain.vercel.app/",
    },
    {
      title: "Decentralized Twitter, (Algorand, Web3) ",
      description:
        "In this project, I have created a small decentralized version of Twitter which means that no one owns it and all the history about users is immutable and therefore it is trustless.",
      from: "2021-11-02",
      to: "2021-11-30",
      githubLink: "https://github.com/ipranshujain",
      deployedLink: "https://pranshujain.vercel.app/",
    },
  ],
};
const emptyResumeData = {
  fullName: "",
  email: "",
  phoneNo: "",
  github: "",
  twitter: "",
  linkedin: "",
  portfolio: "",
  experiences: [],
  educations: [],
  skills: [],
  achievements: [],
  projects: [],
};
// font: italic small-caps bold 12px/30px Georgia, serif;
const defaultTheme = {
  primaryColor: "rgba(70, 88, 250, 1)",
  secondaryColor: "rgba(0, 0, 0,1)",
  backgroundColor: "rgba(255, 255, 255,1)",
  primaryFont: `monospace`,
  secondaryFont: `monospace`,
};
const fonts = [
  "monospace",
  `'Open Sans', sans-serif`,
  `'Zen Antique Soft', serif`,
  `'Noto Sans', sans-serif`,
];
const inputs = {
  personalInfoInputs,
  experiencesInputs,
  skillsInputs,
  achievementsInputs,
  educationsInputs,
  projectsInputs,
};
export default inputs;

export {
  personalInfoInputs,
  experiencesInputs,
  skillsInputs,
  achievementsInputs,
  educationsInputs,
  sampleResumeData,
  emptyResumeData,
  defaultTheme,
  fonts,
};
