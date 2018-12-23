import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./FirstSection.css";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";
class FirstSection extends Component {
  render() {
    return (
      <Fullpage className="first-section">
        <Element name="First" className="element" />
        <h1 className="title">{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <div class="hashtags">{data.hashtags}</div>
        <div>
          {Object.keys(data.links).map(key => {
            return <SocialIcon url={data.links[key]} />;
          })}
        </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={255}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.downBlue} />
        </Link>
        <Element name="about" className="element" />
      </Fullpage>
    );
  }
}
export default FirstSection;
