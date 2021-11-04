import { AiTwotoneEdit } from "react-icons/ai";

import { checkIfAnyEmpty, transformDate } from "../utils/helperUtil";
import { editIconTitle } from "../utils/constants";

export default function Project({ element, editElementSection, idx }) {
  if (checkIfAnyEmpty(element)) {
    return <div className="experience-loading"></div>;
  }

  return (
    <div className="element">
      <div className="experience-title">{element.title}</div>
      <div className="experience-fromto">
        {transformDate(element.from) + " - " + transformDate(element.to)}
      </div>
      <div className="experience-description">{element.description}</div>
      <div
        className="edit-icon"
        title={editIconTitle}
        onClick={() => editElementSection("projects", idx)}
      >
        <AiTwotoneEdit size={20} />
      </div>
    </div>
  );
}
