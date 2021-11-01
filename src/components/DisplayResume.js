import { useRef } from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  downloadResume,
  getProgress,
  transformDate,
} from "../utils/helperUtil";
export default function DisplayResume({ resumeData }) {
  const {
    fullName,
    email,
    phoneNo,
    experiences,
    skills,
    educations,
    achievements,
  } = resumeData;
  const resumeRef = useRef();
  return (
    <div className="display-resume">
      <div className="display-resume-head">Resume Preview</div>
      <div className="resume-container" ref={resumeRef}>
        <div className="personal-info">
          <div className="person-name">{fullName}</div>
          <div className="person-other-info">
            <div className="person-email">
              <div>
                <MdEmail fontSize={17} />
              </div>
              <div>{email}</div>
            </div>
            <div className="person-phone-no">
              <div>
                <AiFillPhone fontSize={17} />
              </div>
              <div>+91 {phoneNo}</div>
            </div>
          </div>
        </div>
        <div className="person-experiences">
          {experiences.length !== 0 && (
            <div className="person-experiences-head">
              Experience (Job/Internship)
            </div>
          )}
          {experiences.map((experience, idx) => {
            return (
              <div key={idx} className="person-experiences-element">
                <div className="person-experiences-box">
                  <div className="person-experiences-element-title">
                    {experience.title}
                  </div>
                  <div className="person-experiences-element-startend">
                    {transformDate(experience.from) +
                      " - " +
                      transformDate(experience.to)}
                  </div>
                </div>
                <div className="person-experiences-element-description">
                  {experience.description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="person-experiences">
          {educations.length !== 0 && (
            <div className="person-experiences-head">Education</div>
          )}
          {educations.map((education, idx) => {
            return (
              <div key={idx} className="person-experiences-element">
                <div className="person-experiences-box">
                  <div className="person-experiences-element-title">
                    {education.school}
                  </div>
                  <div className="person-experiences-element-startend">
                    {transformDate(education.from) +
                      " - " +
                      transformDate(education.to)}
                  </div>
                </div>
                <div className="person-experiences-element-description">
                  {education.percentage}
                </div>
              </div>
            );
          })}
        </div>
        <div className="person-experiences">
          {skills.length !== 0 && (
            <div className="person-experiences-head">Skills</div>
          )}
          <div className="person-experiences-element skills-title">
            {skills.map((skill, idx) => {
              return <div key={idx}>{skill.skill}</div>;
            })}
          </div>
        </div>
        <div className="person-experiences">
          {achievements.length !== 0 && (
            <div className="person-experiences-head">Achievements</div>
          )}
          {achievements.map((achievement, idx) => {
            return (
              <div key={idx} className="person-experiences-element">
                <div className="person-experiences-box">
                  <div className="person-experiences-element-title">
                    {achievement.achievement}
                  </div>
                </div>
                <div className="person-achievements-element-description">
                  {achievement.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="resume-save"
        onClick={() => downloadResume(resumeRef, resumeData)}
      >
        Download Resume PDF
      </button>
    </div>
  );
}
