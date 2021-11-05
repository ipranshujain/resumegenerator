import { AiTwotoneEdit } from "react-icons/ai";

import { checkIfAnyEmpty, transformDate } from "../utils/helperUtil";
import { editIconTitle } from "../utils/constants";

export default function Experience({
  element,
  editElementSection,
  idx,
  field,
}) {
  return (
    <div className={`element ${field}`}>
      {element.title && <div className="element-title">{element.title}</div>}
      {element.from && (
        <div className="element-fromto">
          {transformDate(element.from) + " - " + transformDate(element.to)}
        </div>
      )}
      {element.description && (
        <div className="element-description">{element.description}</div>
      )}

      <div
        className="edit-icon"
        title={editIconTitle}
        onClick={() => editElementSection(field, idx)}
      >
        <AiTwotoneEdit size={20} />
      </div>
    </div>
  );
}
