import React from "react";
import "./Basketballcard.css";

export default function Basketballcard({ basketballDetails }) {
  return (
        <div class="container">
        <img class={basketballDetails.isDark ? "dark-rectangle rectangle" : "rectangle_"}
        src={basketballDetails.image}/>
        </div>
  );
}
