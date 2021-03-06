import React from "react";
import { Link } from "react-scroll";
import "./ContentSection.scss";
import Card from "../Card/Card";
import carrot from "../../utils/images/caret-up-solid.svg";
import PropTypes from "prop-types";
import LoadingIcon from "../../utils/images/Eclipse-1s-200px.svg";

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
        props.logError("Error in rendering cards.");
        return <p>Error</p>;
      }
    });
  };

  const output = () => {
    if (props.content.length !== 0 && props.theme !== "favorites") {
      return cards();
    } else if (props.content.length !== 0 && props.theme === "favorites") {
      return cards();
    } else if (props.content.length === 0 && props.theme === "favorites") {
      return <p className="no-favorites-msg">No Favorites Currently Saved</p>;
    } else {
      return <img className="loading-icon" src={LoadingIcon} alt="loading" />;
    }
  };

  return (
    <section className="content-section">
      <img className="carrot" src={carrot} alt="carrot icon" />
      <nav className="navigation">
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button className="return-btn" onClick={props.returnToHero}>
            Back
          </button>
        </Link>
      </nav>
      <section className={`card-section ${props.theme}`}>{output()}</section>
    </section>
  );
}

ContentSection.propTypes = {
  content: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  logError: PropTypes.func.isRequired
};
