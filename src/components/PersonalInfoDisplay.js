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
        <div className="person-social">
          <div>{email.length ? <MdEmail fontSize={20} /> : ""}</div>
          <div>{email}</div>
        </div>
        <div className="person-social">
          <div>{phoneNo.length ? <AiFillPhone fontSize={20} /> : ""}</div>
          <div>{phoneNo}</div>
        </div>

        <div className="person-social">
          {github.length ? (
            <a href={github} className="social-icon">
              <AiFillGithub size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="person-social">
          {twitter.length ? (
            <a href={twitter} className="social-icon">
              <AiFillTwitterCircle size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="person-social">
          {linkedin.length ? (
            <a href={linkedin} className="social-icon">
              <AiFillLinkedin size={SOCIAL_ICON_SIZE} />
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="person-social">
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
