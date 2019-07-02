import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      name,
      gender,
      hair_color,
      eye_color,
      birth_year,
      mass,
      height,
      climate,
      terrain,
      population,
      rotation_period,
      orbital_period,
      diameter,
      model,
      vehicle_class,
      manufacturer,
      cost_in_credits,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity
    } = this.props.element;

    if (this.props.format === "person") {
      return (
        <article>
          <h1>{name}</h1>
          <p>gender: {gender}</p>
          <p>hair: {hair_color}</p>
          <p>eye color: {eye_color}</p>
          <p>birth year: {birth_year}</p>
          <p>mass: {mass}</p>
          <p>height: {height}</p>
          {!this.props.element.favorited ? (
            <button onClick={() => this.props.addToFavorites(name)}>✓</button>
          ) : (
            <button onClick={() => this.props.removeFromFavorites(name)}>
              X
            </button>
          )}
        </article>
      );
    }
    if (this.props.format === "planet") {
      return (
        <article>
          <h1>{name}</h1>
          <p>climate: {climate}</p>
          <p>terrain: {terrain}</p>
          <p>population: {population}</p>
          <p>day length: {rotation_period} hours</p>
          <p>year length: {orbital_period} days</p>
          <p>diameter: {diameter}</p>
          {!this.props.element.favorited ? (
            <button onClick={() => this.props.addToFavorites(name)}>✓</button>
          ) : (
            <button onClick={() => this.props.removeFromFavorites(name)}>
              X
            </button>
          )}
        </article>
      );
    }
    if (this.props.format === "vehicle") {
      return (
        <article>
          <h1>{name}</h1>
          <p>model: {model}</p>
          <p>class: {vehicle_class}</p>
          <p>manufacturer: {manufacturer}</p>
          <p>cost: {cost_in_credits}</p>
          <p>maximum speed: {max_atmosphering_speed}</p>
          <p>crew capacity: {crew}</p>
          <p>passenger capacity: {passengers}</p>
          <p>cargo capacity: {cargo_capacity}</p>
          {!this.props.element.favorited ? (
            <button onClick={() => this.props.addToFavorites(name)}>✓</button>
          ) : (
            <button onClick={() => this.props.removeFromFavorites(name)}>
              X
            </button>
          )}
        </article>
      );
    }
  }
}

export default Card;
