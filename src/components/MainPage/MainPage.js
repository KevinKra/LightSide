import React, { Component } from "react";
// import backgroundImage from "../../utils/images/sw-stormtroopers.jpg";
import "./MainPage.scss";

export default class MainPage extends Component {
  state = {
    displayCrawl: true,
    displayContent: false,
    content: "null"
  };

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

  render() {
    const collapse = { height: "0vw" };
    return (
      <main className="MainPage">
        <section
          className="crawl"
          style={this.state.displayCrawl ? null : collapse}
        >
          <p>CRAWL</p>
          <button onClick={this.turnOffCrawl}>X</button>
        </section>
        <section
          className="hero-section background-image"
          style={this.state.displayContent ? collapse : null}
        >
          <div className="hero-content">
            <h1>LIGHTSIDE</h1>
            <nav>
              <button onClick={this.displayPeople}>PEOPLE</button>
              <button onClick={this.displayPlanets}>PLANETS</button>
              <button onClick={this.displayVehicles}>VEHICLES</button>
            </nav>
          </div>
        </section>
        <section className="content-section">
          <p>CONTENT</p>
        </section>
      </main>
    );
  }
}
