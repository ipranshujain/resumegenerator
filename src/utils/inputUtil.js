const experiencesInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Job/Internship Company Name and Location",
    hintMessage: "eg. Microsoft, Mumbai",
    fieldName: "title",
    fieldType: "text",
  },
  {
    inputUsed: "textarea",
    labelName: "Enter Job Description",
    hintMessage:
      "eg. Worked on Microsoft Teams to build smooth infrastruture for visual communication. Deployed several new features during development and build solid frontend for the application.",
    fieldName: "description",
    fieldType: "text",
  },
  {
    inputUsed: "input",
    labelName: "Enter Start date",
    hintMessage: "Enter Start date",
    fieldName: "from",
    fieldType: "date",
  },
  {
    inputUsed: "input",
    labelName: "Enter End date (leave black is currently ongoing)",
    hintMessage: "Enter End date",
    fieldName: "to",
    fieldType: "date",
  },
];
const educationsInputs = [
  {
    inputUsed: "input",
    labelName: "Enter School/University Name and Location",
    hintMessage: "ex. Indian Institute of Technology, Delhi",
    fieldName: "school",
    fieldType: "text",
  },
  {
    inputUsed: "input",
    hintMessage: "ex. B. Tech in CSE; 8.87 CGPA",
    labelName: "Enter Degree name, branch and CGPA/Percentage ",
    fieldName: "percentage",
    fieldType: "text",
  },
  {
    inputUsed: "input",
    hintMessage: "Enter Start Date",
    labelName: "Enter Start Date",
    fieldName: "from",
    fieldType: "date",
  },
  {
    inputUsed: "input",
    labelName: "Enter End Date (leave blank if currently doing)",
    hintMessage: "Enter End Date",
    fieldName: "to",
    fieldType: "date",
  },
];
const skillsInputs = [
  {
    inputUsed: "input",
    labelName: "Enter Skill Name",
    hintMessage:
      "eg. Web Development : HTML5, CSS3, React, JavaScript, NodeJS, Django",
    fieldName: "skill",
    fieldType: "text",
  },
  {
    inputUsed: "input",
    hintMessage: "Rate Your Skill from 0 to 100",
    fieldName: "rating",
    fieldType: "number",
  },
];
const achievementsInputs = [
  {
    inputUsed: "input",
    hintMessage: "Enter Achievement",
    fieldName: "achievement",
    fieldType: "text",
  },
  {
    inputUsed: "textarea",
    hintMessage: "Enter more information",
    fieldName: "description",
    fieldType: "text",
  },
];
const inputs = {
  experiencesInputs,
  skillsInputs,
  achievementsInputs,
  educationsInputs,
};
export default inputs;
export {
  experiencesInputs,
  skillsInputs,
  achievementsInputs,
  educationsInputs,
};
