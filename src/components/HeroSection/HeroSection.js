import React from "react";
import "./HeroSection.scss";

export default function HeroSection(props) {
  const collapse = { height: "0vw", transition: "0.5s height ease-in" };
  return (
    <section
      className="hero-section background-image"
      style={props.displayContent ? collapse : null}
    >
      <div className="hero-content">
        <h1>LIGHTSIDE</h1>
        <nav>
          <button onClick={props.displayPeople}>PEOPLE</button>
          <button onClick={props.displayPlanets}>PLANETS</button>
          <button onClick={props.displayVehicles}>VEHICLES</button>
        </nav>
      </div>
    </section>
  );
}
