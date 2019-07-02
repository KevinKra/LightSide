import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./ContentSection.scss";

export default class ContentSection extends Component {
  state = {
    hide: false
  };
  render() {
    return (
      <section className="content-section">
        <div className="carrot" />
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button onClick={this.props.returnToHero}>Back</button>
        </Link>
        {this.props.content.map(element => {
          if (this.props.theme === "people") {
            return (
              <article>
                <h1>name: {element.name}</h1>
                <p>gender: {element.gender}</p>
                <p>hair: {element.hair_color}</p>
                <p>eye color: {element.eye_color}</p>
                <p>birth year: {element.birth_year}</p>
                <p>mass: {element.mass}</p>
                <p>height: {element.height}</p>
                <button onClick={() => this.props.addToFavorites(element.name)}>
                  ✓
                </button>
              </article>
            );
          }
          if (this.props.theme === "planets") {
            return (
              <article>
                <h1>name: {element.name}</h1>
                <p>climate: {element.climate}</p>
                <p>terrain: {element.terrain}</p>
                <p>population: {element.population}</p>
                <p>day length: {element.rotation_period} hours</p>
                <p>year length: {element.orbital_period} days</p>
                <p>diameter: {element.diameter}</p>
                <button onClick={() => this.props.addToFavorites(element.name)}>
                  ✓
                </button>
              </article>
            );
          }
          if (this.props.theme === "vehicles") {
            return (
              <article>
                <h1>name: {element.name}</h1>
                <p>model: {element.model}</p>
                <p>class: {element.vehicle_class}</p>
                <p>manufacturer: {element.manufacturer}</p>
                <p>cost: {element.cost_in_credits}</p>
                <p>maximum speed: {element.max_atmosphering_speed}</p>
                <p>crew capacity: {element.crew}</p>
                <p>passenger capacity: {element.passengers}</p>
                <p>cargo capacity: {element.cargo_capacity}</p>
                <button onClick={() => this.props.addToFavorites(element.name)}>
                  ✓
                </button>
              </article>
            );
          }
        })}
      </section>
    );
  }
}
