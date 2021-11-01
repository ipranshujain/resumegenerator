import { AiTwotoneEdit } from "react-icons/ai";

import { checkIfAnyEmpty, transformDate } from "../utils/helperUtil";

export default function Achievement({ element, editElementSection, idx }) {
  if (checkIfAnyEmpty(element)) {
    return <div className="experience-loading">Inputting Experience</div>;
  }

  return (
    <div className="element">
      <div className="experience-title">{element.achievement}</div>
      <div className="experience-description">{element.description}</div>
      <div
        className="edit-icon"
        onClick={() => editElementSection("achievements", idx)}
      >
        <AiTwotoneEdit size={20} />
      </div>
    </div>
  );
}
