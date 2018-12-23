import React, { Component } from "react";
import "./TopIcon.css"
const TopIcon = (props) => {
  return (
    <div className="top-icon">
      <img src={props.icon} alt="Top" />
      To Top
    </div>
  );
};
export default TopIcon
