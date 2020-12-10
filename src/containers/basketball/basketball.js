import React, { useContext } from "react";
import "./basketball.css";
import Basketballcard from "../../components/basketballcard/Basketballcard";
import { basketballSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Basketball () {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      { <div className="main" id="basketball">
        <div className="videos-header">
          <h1 className="videos-header-title">{basketballSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode videos-header-subtitle"
                : "subTitle videos-header-subtitle"
            }
          >
            {basketballSection.subtitle}
          </p>
          {basketballSection.videos.map((video) => {
            return (
              <Basketballcard
                basketballDetails={{
                  image: video.img,
                  link: video.link,
                  isDark,
                }}
              />
            );
          })}
        </div>
      </div> }
    </Fade>
  );
}
