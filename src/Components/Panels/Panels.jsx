import React from "react";
import Panel from "../Panel/Panel";
import "./Panels.css";

const Panels = ({ list }) => {
  const createPanels = list.map((item, index) => {
    return <Panel name={item.name} backgroundImg={item.img} />;
  });

  return <section id="timeline">{createPanels}</section>;
};

export default Panels;
