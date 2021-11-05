import "./App.css";
import AddIcon from "./components/AddIcon";
import { useState, createContext, useEffect } from "react";

import Element from "./components/Element";
// import Education from "./components/Education";
// import Skill from "./components/Skill";
// import Achievement from "./components/Achievement";
// import Project from "./components/Achievement";

import DialogBox from "./components/DialogBox";
import inputs, { emptyResumeData, sampleResumeData } from "./utils/inputUtil";
import DisplayResume from "./components/DisplayResume";
import ShowAlert from "./components/ShowAlert";
import { saveToLocalStorage } from "./utils/helperUtil";
const ResumeAlertContext = createContext();
export { ResumeAlertContext };
function App() {
  const [resumeData, setResumeData] = useState(emptyResumeData);
  const [showDialog, setShowDialog] = useState({
    show: false,
    field: "",
    index: -1,
    isEdit: false,
  });
  const sequence = [
    {
      name: "experiences",
      label: "Experience (Job/Internship)",
    },
    {
      name: "projects",
      label: "Projects",
    },
    {
      name: "educations",
      label: "Education",
    },
    { name: "skills", label: "Skills" },
    { name: "achievements", label: "Achievements" },
  ];
  const [showAlert, setShowAlert] = useState({
    message: "",
    duration: 0,
    color: "#000",
    isShow: false,
  });

  const [notIdeal, setNotIdeal] = useState(false);
  useEffect(() => {
    const newResumeData = JSON.parse(localStorage.getItem("resumeData"));
    console.log(newResumeData);
    if (newResumeData) setResumeData(newResumeData);
    else {
      setShowAlert({
        message:
          "No saved data found therefore a sample resume is loaded for you, if you want you can click on Start Blank Project to start empty project or you can edit this sample.",
        duration: 10000,
        isShow: true,
        color: "#2170bf",
      });
      setResumeData(sampleResumeData);
    }
  }, []);
  useEffect(() => {
    document.title = resumeData.fullName + " Resume";
  }, [resumeData]);
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
        <div className={"alert-box " + (notIdeal ? "show-alert" : "")}>
          Remainder: One Page Resume is ideal. Current resume length may exceed
          it.
        </div>
        <div className="distribute">
          <div className="form-container">
            <div className="nav-buttons">
              <div
                className="blank-project"
                onClick={() => {
                  setResumeData(emptyResumeData);
                }}
              >
                Start Blank Project
              </div>
              <div
                className="blank-project"
                onClick={() => {
                  setResumeData(sampleResumeData);
                }}
              >
                Load Sample Resume
              </div>
            </div>
            <div className="element personal-details-container">
              <h1>Enter Personal Info</h1>
              {inputs.personalInfoInputs.map((element, idx) => {
                return (
                  <input
                    placeholder={element.hintMessage}
                    type={element.fieldType}
                    className="input-name"
                    onChange={(e) => {
                      const newResumeData = resumeData;
                      newResumeData[element.fieldName] = e.target.value;
                      setResumeData({ ...newResumeData });
                    }}
                    onBlur={() => saveToLocalStorage(resumeData)}
                    value={resumeData[element.fieldName]}
                    key={idx}
                  />
                );
              })}
            </div>
            {sequence.map((obj, idx) => {
              const field = obj.name;
              return (
                <div key={idx} className="element-container">
                  <h1>Enter {field.substr(0, field.length - 1)}</h1>
                  {resumeData[field].map((element, i) => {
                    return (
                      <Element
                        element={element}
                        editElementSection={editElementSection}
                        key={i}
                        field={field}
                        idx={i}
                      />
                    );
                  })}
                  <AddIcon onClick={() => addElement(field)}>
                    Add {field.substr(0, field.length - 1)}
                  </AddIcon>
                </div>
              );
            })}

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
          <DisplayResume
            resumeData={resumeData}
            notIdeal={notIdeal}
            setNotIdeal={setNotIdeal}
            sequence={sequence}
          />
        </div>
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      </div>
    </ResumeAlertContext.Provider>
  );
}

export default App;
