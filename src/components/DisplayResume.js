import { useEffect, useRef } from "react";

import { downloadResume, transformDate } from "../utils/helperUtil";
import { PersonalInfoDisplay } from "./PersonalInfoDisplay";
import { HiExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
export default function DisplayResume({
  resumeData,
  setNotIdeal,
  notIdeal,
  sequence,
}) {
  useEffect(() => {
    const resume = resumeRef.current;

    const resumeHeight = resume.offsetHeight;

    console.log(resumeHeight);
    if (resumeHeight > 1030) {
      setNotIdeal(true);
    } else if (notIdeal === true) {
      setNotIdeal(false);
    }
  }, [resumeData]);
  function applyBorder(name) {
    if (
      resumeData[name].length !== 0 &&
      sequence[sequence.length - 1].name !== name
    ) {
      return "0px solid black";
    }
    return "0px solid black";
  }
  const resumeRef = useRef();
  return (
    <div className="display-resume" style={{ paddingBottom: 20 }}>
      <div className="display-resume-head">Resume Preview</div>
      <div className="resume-container" ref={resumeRef}>
        <PersonalInfoDisplay resumeData={resumeData} />
        {sequence.map((obj, index) => {
          const element = obj.name;
          const label = obj.label;
          return (
            <div
              className={`person-elements person-${element}`}
              style={{ borderBottom: applyBorder(element) }}
            >
              {resumeData[element].length !== 0 && (
                <div className="person-elements-head">{label}</div>
              )}
              {resumeData[element].map((element, idx) => {
                return (
                  <div key={idx} className="person-elements-element">
                    <div className="person-elements-box">
                      {element.title && (
                        <div className="person-elements-element-title">
                          <div>{element.title}</div>
                          <div className="resume-link">
                            {element.githubLink && (
                              <div>
                                <a
                                  className="social-icon"
                                  href={element.githubLink}
                                >
                                  <AiFillGithub size={17} />
                                </a>
                              </div>
                            )}
                            {element.deployedLink && (
                              <div>
                                <a
                                  className="social-icon"
                                  href={element.deployedLink}
                                >
                                  <HiExternalLink size={17} />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {element.from && typeof element.to !== "undefined" && (
                        <div className="person-elements-element-startend">
                          {transformDate(element.from) +
                            " - " +
                            transformDate(element.to)}
                        </div>
                      )}
                    </div>
                    {element.description && (
                      <div
                        className="person-element-description"
                        style={{ margin: 5 }}
                      >
                        {element.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button
        className="resume-save"
        onClick={() => downloadResume(resumeRef, resumeData)}
      >
        Download Resume PDF or Print
      </button>
    </div>
  );
}
