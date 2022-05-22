import React from "react";

export default function SkillTab(props) {
  const imgPath = props.skillArray.iconPath;
  return (
    <div className="skill-tab">
      <img src={require(`../assets/img/icons/${imgPath}`)}></img>
      <p>{props.skillArray.skill}</p>
    </div>
  );
}
