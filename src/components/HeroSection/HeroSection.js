import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.scss";

export default function HeroSection(props) {
  return (
    <section className="hero-section background-image">
      <div className="hero-content">
        <h1>LIGHTSIDE</h1>
        <nav>
          <Link to={"content-section"} smooth={true} offset={0} duration={500}>
            <button onClick={() => props.displayData("people")}>PEOPLE</button>
            <button onClick={() => props.displayData("planets")}>
              PLANETS
            </button>
            <button onClick={() => props.displayData("vehicles")}>
              VEHICLES
            </button>
            <button onClick={props.displayFavorites}>Favorites</button>
          </Link>
        </nav>
      </div>
    </section>
  );
}
