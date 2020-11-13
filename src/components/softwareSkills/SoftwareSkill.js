import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import {SiCplusplus} from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <SiCplusplus/>
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
