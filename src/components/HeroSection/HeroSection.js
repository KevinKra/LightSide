import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.scss";

export default function HeroSection(props) {
  const background = {
    backgroundImage: `url(${props.backgroundImage})`
  };
  return (
    <section className="hero-section">
      <div className="background-image" style={background} />
      <div className="background-gradient" />
      <div className="hero-content">
        <header className="primary-header">
          <h1>LIGHTSIDE</h1>
          <p>The go-to resource for all things STARWARS</p>
        </header>
        <nav>
          <div className="primary-btns">
            <Link
              to={"content-section"}
              smooth={true}
              offset={50}
              duration={500}
              data-test="people-btn"
              onClick={() => props.displayData("people")}
            >
              PEOPLE
            </Link>
            <Link
              to={"content-section"}
              smooth={true}
              offset={50}
              duration={500}
              data-test="planets-btn"
              onClick={() => props.displayData("planets")}
            >
              PLANETS
            </Link>
            <Link
              to={"content-section"}
              smooth={true}
              offset={50}
              duration={500}
              data-test="vehicles-btn"
              onClick={() => props.displayData("vehicles")}
            >
              VEHICLES
            </Link>
          </div>
          <Link
            to={"content-section"}
            smooth={true}
            offset={50}
            data-test="favorites-btn"
            className={`favorites-btn ${!props.totalFavorites && "hidden"}`}
            disabled={!props.totalFavorites && true}
            onClick={props.displayFavorites}
          >
            FAVORITES <span>[{props.totalFavorites}]</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}
