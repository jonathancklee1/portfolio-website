import React from "react";

export default function SkillTab(props) {
  return (
    <div className="skill-tab">
      <img src={require("../assets/img/icons/react.png")}></img>
      <p>{props.skill}</p>
    </div>
  );
}
