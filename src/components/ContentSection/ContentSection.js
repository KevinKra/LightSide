import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ContentSection.scss";
import Card from "../Card/Card";

export default class ContentSection extends Component {
  render() {
    const cards = () =>
      this.props.content.map(element => {
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
        }
        if (element.hasOwnProperty("terrain")) {
          return (
            <Card
              format="planet"
              element={element}
              addToFavorites={this.props.addToFavorites}
              removeFromFavorites={this.props.removeFromFavorites}
              key={element.id}
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
              key={element.id}
            />
          );
        }
      });

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
        <div className="carrot" />
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button onClick={this.props.returnToHero}>Back</button>
        </Link>

        {output()}

        {/* {this.props.content.length !== 0 && this.props.theme !== "favorites" ? (
          cards()
        ) : (
          <p>loading</p>
        )}
        {this.props.content.length !== 0 && this.props.theme === "favorites" ? (
          cards()
        ) : (
          <p>loading</p>
        )} */}

        {/* {this.props.content.length === 0 &&
          this.props.theme === "favorites" && <p>Currently No Favorites</p>} */}
      </section>
    );
  }
}
