import React from "react";
import "./sass/Sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const SidebarOption = ({ Icon, title, number, selected }) => {
  //   const pColor = {
  //     // color: "#c04b37",
  //   };
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>
        {title} <span>{number}</span>
      </h3>
      {/* <p>{number}</p> */}
    </div>
  );
};

export default SidebarOption;
