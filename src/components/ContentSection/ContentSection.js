import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ContentSection.scss";
import Card from "../Card/Card";
import carrot from "../../utils/images/caret-up-solid.svg";

export default function ContentSection(props) {
  const cards = () => {
    return props.content.map(element => {
      if (element.hasOwnProperty("gender")) {
        return (
          <Card
            format="person"
            element={element}
            addToFavorites={props.addToFavorites}
            removeFromFavorites={props.removeFromFavorites}
            key={element.id}
          />
        );
      } else if (element.hasOwnProperty("terrain")) {
        return (
          <Card
            format="planet"
            element={element}
            addToFavorites={props.addToFavorites}
            removeFromFavorites={props.removeFromFavorites}
            key={element.id}
          />
        );
      } else if (element.hasOwnProperty("model")) {
        return (
          <Card
            format="vehicle"
            element={element}
            addToFavorites={props.addToFavorites}
            removeFromFavorites={props.removeFromFavorites}
            key={element.id}
          />
        );
      } else {
        return <p>"Error in card rendering process"</p>;
      }
    });
  };

  const output = () => {
    if (props.content.length !== 0 && props.theme !== "favorites") {
      return cards();
    } else if (props.content.length !== 0 && props.theme === "favorites") {
      return cards();
    } else if (props.content.length === 0 && props.theme === "favorites") {
      return <p>Currently No Favorites</p>;
    } else {
      return <p>Loading</p>;
    }
  };

  return (
    <section className="content-section">
      <img className="carrot" src={carrot} alt="carrot icon" />
      <div className="navigation">
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button className="return-btn" onClick={props.returnToHero}>
            Back
          </button>
        </Link>
      </div>
      <section className={`card-section ${props.theme}`}>{output()}</section>
    </section>
  );
}
