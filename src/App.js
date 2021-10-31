import "./App.css";
import AddIcon from "./components/AddIcon";
import { useState } from "react";
import Experience from "./components/Experience";
import DialogBox from "./components/DialogBox";
import { experienceInputs } from "./utils/inputUtil";
import inputs from "./utils/inputUtil";

function App() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    experiences: [],
    educations: [],
    skills: [],
    achievements: [],
  });
  const [showDialog, setShowDialog] = useState({
    show: false,
    field: "",
  });
  function addElement(fieldName) {
    // let exp = resumeData[fieldName];
    // let lastexp = resumeData[fieldName][exp.length - 1];
    // if (
    //   exp.length !== 0 &&
    //   (lastexp.title.length === 0 ||
    //     lastexp.from.length === 0 ||
    //     lastexp.to.length === 0 ||
    //     lastexp.description.length === 0)
    // ) {
    //   alert("Please fill correct value first");
    //   return;
    // }
    let element = {};
    inputs[`${fieldName}Inputs`].map((input, idx) => {
      return (element[input.fieldName] = "");
    });
    console.log("Successfully set ", fieldName, "equal to  ", element);
    const resultantData = JSON.parse(JSON.stringify(resumeData));
    resultantData[fieldName] = resultantData[fieldName].concat(element);
    setResumeData({
      ...resultantData,
    });
    setShowDialog({ show: true, field: fieldName });
  }
  function editElement(e, i, attribute, fieldName) {
    console.log(e.target.value, i, attribute, fieldName);
    resumeData[fieldName][i][`${attribute}`] = e.target.value;
    setResumeData({ ...resumeData });
  }
  return (
    <div className="App">
      <div className="form-container">
        <h1>Enter Personal Info</h1>
        <input
          placeholder="Enter your full name"
          type="name"
          value={resumeData.fullName}
        />
        <input
          placeholder="Enter your email"
          type="email"
          value={resumeData.email}
        />
        <input
          placeholder="Phone number"
          type="tel"
          value={resumeData.phoneNo}
        />
        <h1>Enter Experience</h1>
        {resumeData.experiences.map((experience, i) => {
          return (
            <Experience
              experience={experience}
              editExperience={editElement}
              key={i}
              i={i}
            />
          );
        })}
        {}
        <AddIcon onClick={() => addElement("experiences")}>
          Add Experience
        </AddIcon>

        <h1>Enter Education</h1>
        <AddIcon>Add Education</AddIcon>

        <h1>Enter Skills</h1>
        <AddIcon>Add Skills</AddIcon>
        <h1>Enter Achievements</h1>
        <AddIcon>Add Achievements</AddIcon>
        {showDialog.show && showDialog.field !== "" && (
          <DialogBox
            element={resumeData[`${showDialog.field}`]}
            editElement={editElement}
            elementInputs={inputs[`${showDialog.field}Inputs`]}
            setShowDialog={setShowDialog}
            fieldName={showDialog.field}
            i={resumeData[showDialog.field].length - 1}
          />
        )}
      </div>
    </div>
  );
}

export default App;
