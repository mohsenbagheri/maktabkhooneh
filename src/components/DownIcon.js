import React, { Component } from "react";
import "./DownIcon.css"
const DownIcon = (props) => {
  return (
    <div className="down-icon">
      Click Me!
      <img src={props.icon} alt="Down" />
    </div>
  );
};
export default DownIcon
