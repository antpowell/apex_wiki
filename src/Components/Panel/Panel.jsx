import React from "react";
import "./Panel.css";

const Panel = ({ name, backgroundImg }) => {
  const bgImgCSS = { backgroundImage: `url(${backgroundImg})` };

  return (
    <section id="timeline">
      <div className="tl-item">
        <div className="tl-bg" style={bgImgCSS} />
        <div className="tl-year">
          <p className="f2 heading--sanSerif">{name}</p>
        </div>
        <div className="tl-content">
          <h1>{name}</h1>
          <p>selection</p>
        </div>
      </div>
    </section>
  );
};

export default Panel;
