import React from "react";
import "./Videoscard.css";

export default function Videoscard({ videoDetails }) {
  return (
      
        <a href={videoDetails.link} target="_blank">
        <img class={videoDetails.isDark ? "dark-rectangle rectangle" : "rectangle_"}
        src={videoDetails.image} width="300" height="300"/>
        </a>
  );
}
