import React, { Component } from "react";
// import backgroundImage from "../../utils/images/sw-stormtroopers.jpg";
import "./MainPage.scss";

export default class MainPage extends Component {
  state = {
    displayCrawl: true,
    displayContent: false
  };
  turnOffCrawl = () => {
    this.setState({ displayCrawl: false });
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
        <section className="background-image">
          <div className="hero-content">
            <h1>LIGHTSIDE</h1>
            <nav>
              <button>PEOPLE</button>
              <button>PLANETS</button>
              <button>VEHICLES</button>
            </nav>
          </div>
        </section>
      </main>
    );
  }
}
