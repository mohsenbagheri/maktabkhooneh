import React, { Component } from "react";
import "./CardsSkill.css";
class CardsSkill extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="colm-card">
        <div className="card">
          <div className="image-wrapper">
            <img src={skill.content.image} alt="skill" />
          </div>
          <div className="skill-title-wrapper">
            <h4>{skill.content.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default CardsSkill;
