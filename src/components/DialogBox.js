export default function DialogBox({
  element,
  editElement,
  i,
  elementInputs,
  setShowDialog,
  fieldName,
}) {
  return (
    <div className="dialog-box-container">
      <div className="dialog-box">
        {elementInputs.map((elementInput, idx) => {
          return elementInput.inputUsed === "input" ? (
            <div className="input-box">
              <label>{elementInput.fieldName} </label>

              <input
                placeholder={elementInput.hintMessage}
                value={element[elementInput.fieldName]}
                onChange={(e) => {
                  editElement(e, i, elementInput.fieldName, fieldName);
                }}
                type={elementInput.fieldType}
              />
            </div>
          ) : (
            <div className="input-box">
                <label>{elementInput.fieldName} </label>
              <textarea
                placeholder={elementInput.hintMessage}
                value={element[elementInput.fieldName]}
                onChange={(e) => {
                  editElement(e, i, elementInput.fieldName, fieldName);
                }}
                type={elementInput.fieldType}
              />
            </div>
          );
        })}
        <button onClick={() => setShowDialog({ show: false, field: "" })} className="dialog-button">
          Done
        </button>
      </div>
    </div>
  );
}
