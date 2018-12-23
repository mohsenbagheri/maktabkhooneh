import React, { Component } from "react";
import "./Navigation.css";
import data from "../data.json";
import { Link, Element } from "react-scroll";
class Navigation extends Component {
  state = {
    color: "#163d6f",
  };
  changeColor = () => {
    this.setState({
      color:
        this.state.color === "#163d6f"
          ? "red"
          : "#163d6f" && this.state.color === "red"
          ? "green"
          : "red" && this.state.color === "green"
          ? "#163d6f"
          : "green"
    });
  };
  render() {
    return (
      <div className="navigation" style={{ color: this.state.color }}>
        <div className="menu">
          <ul>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={219}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li>About</li>
            </Link>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={219}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li>Skills</li>
            </Link>
          </ul>
        </div>
        <div className="magic" onClick={this.changeColor}>
          <img src={data.icons.magic} alt="Magic" />
          <p>Change Color</p>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
export default Navigation;
