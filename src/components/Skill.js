import { AiTwotoneEdit } from "react-icons/ai";

import { checkIfAnyEmpty, getProgress } from "../utils/helperUtil";

export default function Skill({ element, editElementSection, idx }) {
  if (checkIfAnyEmpty(element)) {
    return <div className="experience-loading">Inputting Experience</div>;
  }

  return (
    <div className="element skill">
      <div className="skill-title">{element.skill}</div>
      <div
        className="skill-progress"
        style={{
          background: getProgress(element.rating),
        }}
      ></div>
      <div
        className="edit-icon"
        onClick={() => editElementSection("skills", idx)}
      >
        <AiTwotoneEdit size={20} />
      </div>
    </div>
  );
}
