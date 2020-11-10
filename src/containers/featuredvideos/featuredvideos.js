import React, { useContext } from "react";
import "./featuredvideos.css";
import Videoscard from "../../components/videoscard/Videoscard";
import { videosSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Videos () {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      { <div className="main" id="videos">
        <div className="videos-header">
          <h1 className="videos-header-title">{videosSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode videos-header-subtitle"
                : "subTitle videos-header-subtitle"
            }
          >
            {videosSection.subtitle}
          </p>
          {videosSection.videos.map((video) => {
            return (
              <Videoscard
                videoDetails={{
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
