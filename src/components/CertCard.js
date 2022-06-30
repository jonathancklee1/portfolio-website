import React from "react";

export default function CertCard(props) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer"); //Explanation for "noopener,noreferrer" https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/

    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="cert-card">
      <img
        className="cert-img"
        src={require(`../assets/img/${props.certImgPath}`)}
        alt="certification"
      ></img>
      <div className="cert-info">
        <h4 className="cert-name">{props.certName}</h4>
        <p className="cert-issuer">{props.issuer}</p>
        <p className="cert-issue-date">{props.issueDate}</p>
        <button
          className="cred-btn"
          onClick={() => openInNewTab(props.credLink)}
        >
          Credentials link
        </button>
      </div>
    </div>
  );
}
