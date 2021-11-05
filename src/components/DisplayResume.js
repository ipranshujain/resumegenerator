import { useEffect, useRef, useState } from "react";

import {
  downloadResume,
  transformDate,
  changeRootTheme,
} from "../utils/helperUtil";
import { PersonalInfoDisplay } from "./PersonalInfoDisplay";
import { HiExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { defaultTheme } from "../utils/inputUtil";
import { RESUME_HEIGHT, RESUME_WIDTH } from "../utils/constants";
import ChangeTheme from "./ChangeTheme";
export default function DisplayResume({
  resumeData,
  setNotIdeal,
  notIdeal,
  sequence,
}) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const resume = resumeRef.current;
    const currentHeight = resume.offsetHeight;
    console.log(currentHeight);
    if (currentHeight >= RESUME_HEIGHT) {
      setNotIdeal(true);
    } else if (notIdeal === true) {
      setNotIdeal(false);
    }
  }, [resumeData]);
  useEffect(() => {
    changeRootTheme(theme);
  }, [theme]);
  function handleThemeChange(color, field) {
    theme[
      field
    ] = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    console.log("RBG", color.rgb);
    setTheme({ ...theme });
  }
  function handleFontChange(e, field) {
    theme[field] = e.target.value;
    setTheme({ ...theme });
  }
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
      <ChangeTheme
        theme={theme}
        handleChange={handleThemeChange}
        handleFontChange={handleFontChange}
      />
      <div
        className="resume-container"
        ref={resumeRef}
        style={{ width: `${RESUME_WIDTH}px` }}
      >
        <PersonalInfoDisplay resumeData={resumeData} />
        {sequence.map((obj, index) => {
          const element = obj.name;
          const label = obj.label;
          return (
            <div
              key={index}
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
                        style={{ margin: 6 }}
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
