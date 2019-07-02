import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./MainPage.scss";
import Crawl from "../Crawl/Crawl";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";

export default class MainPage extends Component {
  state = {
    displayCrawl: true,
    displayContent: false,
    content: "null"
  };

  componentDidMount() {
    scroll.scrollToTop();
  }

  turnOffCrawl = () => {
    this.setState({ displayCrawl: false });
  };

  displayPeople = () => {
    this.setState({ displayContent: true, content: "People" });
  };
  displayPlanets = () => {
    this.setState({ displayContent: true, content: "Planets" });
  };
  displayVehicles = () => {
    this.setState({ displayContent: true, content: "Vehicles" });
  };

  returnToHero = () => {
    this.setState({ displayContent: false });
  };

  render() {
    return (
      <main className="MainPage">
        <Crawl
          turnOffCrawl={this.turnOffCrawl}
          displayCrawl={this.state.displayCrawl}
        />
        <HeroSection
          displayContent={this.state.displayContent}
          revert={this.state.revert}
          displayPeople={this.displayPeople}
          displayPlanets={this.displayPlanets}
          displayVehicles={this.displayVehicles}
        />
        <ContentSection returnToHero={this.returnToHero} />
      </main>
    );
  }
}
