import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import Navigation from "./components/Navigation"
import FirstSection from "./sections/FirstSection";
import SkillSection from "./sections/SkillSection";
import AboutSection from "./sections/AboutSection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm
          followMouse={false}
          snowColor={"#A3B1BC"}
          snowStick={false}
        />
        <Navigation />
        <FirstSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
