import React from "react";

export default function CertCard(props) {
  return (
    <div className="cert-card">
      <img
        className="cert-img"
        src="../assets/img/about-me-cover.JPG"
        alt="certification image"
      ></img>
      <div className="cert-info">
        <h4 className="cert-name">{props.certName}</h4>
        <p className="cert-issuer">{props.issuer}</p>
        <p className="cert-issue-date">{props.issueDate}</p>
        <button className="cred-btn">Credentials link</button>
      </div>
    </div>
  );
}
