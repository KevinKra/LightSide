import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ContentSection.scss";
import Card from "../Card/Card";
import carrot from "../../utils/images/caret-up-solid.svg";

export default class ContentSection extends Component {
  render() {
    const cards = () => {
      return this.props.content.map(element => {
        if (element.hasOwnProperty("gender")) {
          return (
            <Card
              format="person"
              element={element}
              addToFavorites={this.props.addToFavorites}
              removeFromFavorites={this.props.removeFromFavorites}
              key={element.id}
            />
          );
        } else if (element.hasOwnProperty("terrain")) {
          return (
            <Card
              format="planet"
              element={element}
              addToFavorites={this.props.addToFavorites}
              removeFromFavorites={this.props.removeFromFavorites}
              key={element.id}
            />
          );
        } else if (element.hasOwnProperty("model")) {
          return (
            <Card
              format="vehicle"
              element={element}
              addToFavorites={this.props.addToFavorites}
              removeFromFavorites={this.props.removeFromFavorites}
              key={element.id}
            />
          );
        } else {
          return <p>"Error in card rendering process"</p>;
        }
      });
    };

    const output = () => {
      if (this.props.content.length !== 0 && this.props.theme !== "favorites") {
        return cards();
      } else if (
        this.props.content.length !== 0 &&
        this.props.theme === "favorites"
      ) {
        return cards();
      } else if (
        this.props.content.length === 0 &&
        this.props.theme === "favorites"
      ) {
        return <p>Currently No Favorites</p>;
      } else {
        return <p>Loading</p>;
      }
    };

    return (
      <section className="content-section">
        <img className="carrot" src={carrot} alt="carrot icon" />
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button onClick={this.props.returnToHero}>Back</button>
        </Link>
        {output()}
      </section>
    );
  }
}
