import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdEmail, MdPages } from "react-icons/md";
import { SOCIAL_ICON_SIZE } from "../utils/constants";
export function PersonalInfoDisplay({ resumeData }) {
  const { fullName, email, phoneNo, linkedin, github, twitter, portfolio } =
    resumeData;
  return (
    <div className="personal-info">
      <div className="person-name">{fullName}</div>
      <div className="person-other-info">
        <div className="person-email">
          <div>{email.length ? <MdEmail fontSize={17} /> : ""}</div>
          <div>{email}</div>
        </div>
        <div className="person-phone-no">
          <div>{phoneNo.length ? <AiFillPhone fontSize={17} /> : ""}</div>
          <div>{phoneNo}</div>
        </div>

        <div className="person-github">
          {github.length ? (
            <a href={github} className="social-icon">
              <AiFillGithub size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="person-twitter">
          {twitter.length ? (
            <a href={twitter} className="social-icon">
              <AiFillTwitterCircle size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="person-linkedin">
          {linkedin.length ? (
            <a href={linkedin} className="social-icon">
              <AiFillLinkedin size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="person-portfolio">
          {portfolio.length ? (
            <a href={portfolio} className="social-icon">
              <BsPersonCircle size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
