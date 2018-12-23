import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import CardsSkill from "../components/CardsSkill";
import TopIcon from "../components/TopIcon";
import { Link, Element } from "react-scroll";
import "./SkillSection.css";
class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third-section">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return (
                <CardsSkill skill= {eachskill} />
            );
          })}
          <div className="clearfix" />
        </div>
        {/* Go to first section */}
        <Link
          activeClass="active"
          to="First"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <TopIcon icon={data.icons.topBlue} />
        </Link>
        {/* Go to first section */}
      </Fullpage>
    );
  }
}
export default SkillSection;
