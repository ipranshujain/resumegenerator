import { useContext } from "react";
import { ResumeAlertContext } from "../App";
import { checkValidFields, saveToLocalStorage } from "../utils/helperUtil";

export default function DialogBox({
  element,
  editElement,
  elementInputs,
  resetDialog,
  showDialog,
  deleteElement,
  resumeData,
}) {
  const { field: fieldName, index, isEdit } = showDialog;
  const setShowAlert = useContext(ResumeAlertContext);
  function dialogDone(e) {
    if (checkValidFields(elementInputs, element, setShowAlert)) {
      resetDialog();
      saveToLocalStorage(resumeData);
    }
  }
  function dialogDelete(e) {
    resetDialog();
    deleteElement(fieldName, index);
  }
  return (
    <div className="dialog-box-container">
      <div className="dialog-box">
        {elementInputs.map((elementInput, idx) => {
          return (
            <div className="input-box" key={idx}>
              <label>
                {elementInput.labelName
                  ? `${elementInput.labelName} ${
                      elementInput.isRequired ? "(*)" : "(Optional)"
                    }`
                  : elementInput.fieldName}
              </label>
              {elementInput.inputUsed === "input" ? (
                <input
                  placeholder={elementInput.hintMessage}
                  value={element[elementInput.fieldName]}
                  onChange={(e) => {
                    editElement(e, index, elementInput.fieldName, fieldName);
                  }}
                  // required={elementInput.isRequired}
                  type={elementInput.fieldType}
                />
              ) : (
                <textarea
                  rows="3"
                  placeholder={elementInput.hintMessage}
                  value={element[elementInput.fieldName]}
                  onChange={(e) => {
                    editElement(e, index, elementInput.fieldName, fieldName);
                  }}
                  // required={elementInput.isRequired}
                  type={elementInput.fieldType}
                />
              )}
            </div>
          );
        })}
        <div className="dialog-button-container">
          {isEdit ? (
            <button
              onClick={dialogDelete}
              className="dialog-button"
              style={{ borderColor: "red" }}
            >
              Delete
            </button>
          ) : (
            <button onClick={dialogDelete} className="dialog-button">
              Cancel
            </button>
          )}
          <button onClick={dialogDone} className="dialog-button">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
