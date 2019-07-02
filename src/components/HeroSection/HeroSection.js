import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./HeroSection.scss";

export default function HeroSection(props) {
  // const collapse = { height: "0vw", transition: "0.5s height ease-in" };
  return (
    <section
      className="hero-section background-image"
      // style={props.displayContent ? collapse : null}
    >
      <div className="hero-content">
        <h1>LIGHTSIDE</h1>
        <nav>
          <Link to={"content-section"} smooth={true} offset={0} duration={500}>
            <button onClick={props.displayPeople}>PEOPLE</button>
            <button onClick={props.displayPlanets}>PLANETS</button>
            <button onClick={props.displayVehicles}>VEHICLES</button>
          </Link>
        </nav>
      </div>
    </section>
  );
}
