import React from "react";
import "./Videoscard.css";

export default function Videoscard({ videoDetails }) {
  return (
    <div>
      <div class="container">
        <div
          class={videoDetails.isDark ? "dark-rectangle rectangle" : "rectangle_"}
        >
        <a href={videoDetails.link} target="_blank"></a>
      </div>
      </div>
    </div>
  );
}
