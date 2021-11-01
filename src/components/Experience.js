import { AiTwotoneEdit } from "react-icons/ai";

import { checkIfAnyEmpty, transformDate } from "../utils/helperUtil";

export default function Experience({ element, editElementSection, idx }) {
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
        onClick={() => editElementSection("experiences", idx)}
      >
        <AiTwotoneEdit size={20} />
      </div>
    </div>
  );
}
