import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import DownIcon from "../components/DownIcon";
import TopIcon from "../components/TopIcon";
import { Link, Element } from "react-scroll";
class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second-section">
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>
        <p>{data.sections[0].items[1].content}</p>
        <p>{data.sections[0].items[2].content}</p>
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
          <TopIcon icon={data.icons.topWhite} />
        </Link>
        {/* Go to first section */}
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={255}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.downWhite} />
        </Link>
        <Element name="skill" className="element" />
      </Fullpage>
    );
  }
}
export default AboutSection;
