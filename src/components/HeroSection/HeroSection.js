import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.scss";

export default function HeroSection(props) {
  return (
    <section className="hero-section background-image">
      <div className="hero-content">
        <header className="primary-header">
          <h1>LIGHTSIDE</h1>
          <p>The go-to resource for all things STARWARS</p>
        </header>
        <nav>
          {/* <Link to={"content-section"} smooth={true} offset={0} duration={500}> */}
          <div className="primary-btns">
            <Link
              to={"content-section"}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => props.displayData("people")}
            >
              PEOPLE
            </Link>
            <Link
              to={"content-section"}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => props.displayData("planets")}
            >
              PLANETS
            </Link>
            <Link
              to={"content-section"}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => props.displayData("vehicles")}
            >
              VEHICLES
            </Link>
          </div>
          <Link
            to={"content-section"}
            smooth={true}
            className={`favorites-btn ${!props.totalFavorites && "hidden"}`}
            disabled={!props.totalFavorites && true}
            onClick={props.displayFavorites}
          >
            FAVORITES <span>[{props.totalFavorites}]</span>
          </Link>
          {/* </Link> */}
          {/* <Link to={"content-section"} smooth={true} offset={0} duration={500}>
            <div className="primary-btns">
              <button onClick={() => props.displayData("people")}>
                PEOPLE
              </button>
              <button onClick={() => props.displayData("planets")}>
                PLANETS
              </button>
              <button onClick={() => props.displayData("vehicles")}>
                VEHICLES
              </button>
            </div>
            <button
              className={`favorites-btn ${!props.totalFavorites && "hidden"}`}
              disabled={!props.totalFavorites && "true"}
              onClick={props.displayFavorites}
            >
              FAVORITES <span>[{props.totalFavorites}]</span>
            </button>
          </Link> */}
        </nav>
      </div>
    </section>
  );
}
