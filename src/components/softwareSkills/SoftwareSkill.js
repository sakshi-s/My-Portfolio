import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import Icon from "react-multiple-icons";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <img height="90" width="90" src={skills.fontAwesomeClassname}/>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
