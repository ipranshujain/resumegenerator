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
            <input
              placeholder={elementInput.hintMessage}
              value={element[elementInput.fieldName]}
              onChange={(e) => {
                editElement(e, i, elementInput.fieldName, fieldName);
              }}
              type={elementInput.fieldType}
            />
          ) : (
            <textarea
              placeholder={elementInput.hintMessage}
              value={element[elementInput.fieldName]}
              onChange={(e) => {
                editElement(e, i, elementInput.fieldName, fieldName);
              }}
              type={elementInput.fieldType}
            />
          );
        })}
        <button onClick={() => setShowDialog({ show: false, field: "" })}>
          Done
        </button>
      </div>
    </div>
  );
}
