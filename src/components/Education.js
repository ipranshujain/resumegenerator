import { AiTwotoneEdit } from "react-icons/ai";

import { checkIfAnyEmpty, transformDate } from "../utils/helperUtil";

export default function Education({ element, editElementSection, idx }) {
  if (checkIfAnyEmpty(element)) {
    return <div className="experience-loading">Inputting Experience</div>;
  }

  return (
    <div className="element">
      <div className="experience-title">{element.school}</div>
      <div className="experience-fromto">
        {transformDate(element.from) + " - " + transformDate(element.to)}
      </div>
      <div className="experience-description">{element.percentage}</div>
      <div
        className="edit-icon"
        onClick={() => editElementSection("educations", idx)}
      >
        <AiTwotoneEdit size={20} />
      </div>
    </div>
  );
}
