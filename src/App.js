import "./App.css";
import AddIcon from "./components/AddIcon";
import { useState, createContext, useEffect } from "react";

import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Achievement from "./components/Achievement";

import DialogBox from "./components/DialogBox";
import inputs from "./utils/inputUtil";
import DisplayResume from "./components/DisplayResume";
import ShowAlert from "./components/ShowAlert";
import { saveToLocalStorage } from "./utils/helperUtil";
const ResumeAlertContext = createContext();
export { ResumeAlertContext };
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
    index: -1,
    isEdit: false,
  });

  const [showAlert, setShowAlert] = useState({
    message: "",
    duration: 0,
    color: "#000",
    isShow: false,
  });

  useEffect(() => {
    const newResumeData = JSON.parse(localStorage.getItem("resumeData"));
    if (newResumeData) setResumeData(newResumeData);
  }, []);
  function resetDialog() {
    setShowDialog({ show: false, field: "", index: -1, isEdit: false });
  }
  function addElement(fieldName) {
    let element = {};
    inputs[`${fieldName}Inputs`].map((input, idx) => {
      return (element[input.fieldName] = "");
    });
    const resultantData = JSON.parse(JSON.stringify(resumeData));
    resultantData[fieldName] = resultantData[fieldName].concat(element);
    setResumeData({
      ...resultantData,
    });

    setShowDialog({
      show: true,
      field: fieldName,
      index: resultantData[fieldName].length - 1,
      isEdit: false,
    });
  }
  function editElement(e, i, attribute, fieldName) {
    resumeData[fieldName][i][`${attribute}`] = e.target.value;
    setResumeData({ ...resumeData });
  }

  function editElementSection(fieldName, idx) {
    setShowDialog({ show: true, field: fieldName, index: idx, isEdit: true });
  }
  function deleteElement(fieldName, idx) {
    const resultantData = JSON.parse(JSON.stringify(resumeData));
    resultantData[fieldName] = resultantData[fieldName].filter((value, jdx) => {
      return idx !== jdx;
    });
    setResumeData({ ...resultantData });
  }
  return (
    <ResumeAlertContext.Provider value={setShowAlert}>
      <div className="App">
        <div className="distribute">
          <div className="form-container">
            <div className="element personal-details-container">
              <h1>Enter Personal Info</h1>
              <input
                placeholder="Enter your full name"
                type="name"
                className="input-name"
                onChange={(e) =>
                  setResumeData({ ...resumeData, fullName: e.target.value })
                }
                onBlur={() => saveToLocalStorage(resumeData)}
                value={resumeData.fullName}
              />
              <input
                placeholder="Enter your email"
                type="email"
                value={resumeData.email}
                onBlur={() => saveToLocalStorage(resumeData)}
                onChange={(e) =>
                  setResumeData({ ...resumeData, email: e.target.value })
                }
              />
              <input
                placeholder="Phone number"
                type="number"
                value={resumeData.phoneNo}
                onBlur={() => saveToLocalStorage(resumeData)}
                onChange={(e) =>
                  setResumeData({ ...resumeData, phoneNo: e.target.value })
                }
              />
            </div>
            <div className="experience-container">
              <h1>Enter Experience</h1>
              {resumeData.experiences.map((experience, i) => {
                return (
                  <Experience
                    element={experience}
                    editElementSection={editElementSection}
                    key={i}
                    idx={i}
                  />
                );
              })}
              <AddIcon onClick={() => addElement("experiences")}>
                Add Experience
              </AddIcon>
            </div>

            <div className="education-container">
              <h1>Enter Education</h1>
              {resumeData.educations.map((element, i) => {
                return (
                  <Education
                    element={element}
                    editElementSection={editElementSection}
                    key={i}
                    idx={i}
                  />
                );
              })}
              <AddIcon onClick={() => addElement("educations")}>
                Add Education
              </AddIcon>
            </div>
            <div className="skill-container">
              <h1>Enter Skills</h1>
              {resumeData.skills.map((element, i) => {
                return (
                  <Skill
                    element={element}
                    editElementSection={editElementSection}
                    key={i}
                    idx={i}
                  />
                );
              })}
              <AddIcon onClick={() => addElement("skills")}>Add Skill</AddIcon>
            </div>
            <div className="achievement-container">
              <h1>Enter Achievements</h1>
              {resumeData.achievements.map((element, i) => {
                return (
                  <Achievement
                    element={element}
                    editElementSection={editElementSection}
                    key={i}
                    idx={i}
                  />
                );
              })}
              <AddIcon onClick={() => addElement("achievements")}>
                Add Achievement
              </AddIcon>
            </div>
            {showDialog.show && showDialog.field !== "" && (
              <DialogBox
                element={resumeData[`${showDialog.field}`][showDialog.index]}
                editElement={editElement}
                elementInputs={inputs[`${showDialog.field}Inputs`]}
                resetDialog={resetDialog}
                showDialog={showDialog}
                deleteElement={deleteElement}
                resumeData={resumeData}
              />
            )}
          </div>
          <DisplayResume resumeData={resumeData} />
        </div>
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      </div>
    </ResumeAlertContext.Provider>
  );
}

export default App;
