import React from "react";
import "./Videoscard.css";

export default function Videoscard({ videoDetails }) {
  return (
    <div>
      <div class="container">
        <div
          class={videoDetails.isDark ? "dark-rectangle rectangle" : "rectangle_"}
        >
          {/* <div class="diagonal-fill"></div> */}

          <div className="card-footer-button-div">
            <a href={videoDetails.link} target="_" class="video-button">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
