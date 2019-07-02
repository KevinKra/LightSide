import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./ContentSection.scss";
import Card from "../Card/Card";

export default class ContentSection extends Component {
  render() {
    return (
      <section className="content-section">
        <div className="carrot" />
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button onClick={this.props.returnToHero}>Back</button>
        </Link>
        {this.props.content.map(element => {
          if (element.hasOwnProperty("gender")) {
            return (
              <Card
                format="person"
                element={element}
                addToFavorites={this.props.addToFavorites}
                removeFromFavorites={this.props.removeFromFavorites}
              />
            );
          }
          if (element.hasOwnProperty("terrain")) {
            return (
              <Card
                format="planet"
                element={element}
                addToFavorites={this.props.addToFavorites}
                removeFromFavorites={this.props.removeFromFavorites}
              />
            );
          }
          if (element.hasOwnProperty("model")) {
            return (
              <Card
                format="vehicle"
                element={element}
                addToFavorites={this.props.addToFavorites}
                removeFromFavorites={this.props.removeFromFavorites}
              />
            );
          }
        })}
      </section>
    );
  }
}
