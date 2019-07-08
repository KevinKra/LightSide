import React from "react";
import "./Card.scss";

export default function Card(props) {
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
  } = props.element;

  if (props.format === "person") {
    return (
      <article className="Card">
        <section className="card-primary">
          <h1>{name}</h1>
          <p>gender: {gender}</p>
          <p>hair: {hair_color}</p>
          <p>eye color: {eye_color}</p>
          <p>birth year: {birth_year}</p>
          <p>mass: {mass}</p>
          <p>height: {height}</p>
        </section>
        <div className="card-bg person-bg" />
        {!props.element.favorited ? (
          <button
            className="favorite"
            onClick={() => props.addToFavorites(name)}
          >
            Favorite
          </button>
        ) : (
          <button
            className="unfavorite"
            onClick={() => props.removeFromFavorites(name)}
          >
            ✓
          </button>
        )}
      </article>
    );
  }
  if (props.format === "planet") {
    return (
      <article className="Card">
        <section className="card-primary">
          <h1>{name}</h1>
          <p>climate: {climate}</p>
          <p>terrain: {terrain}</p>
          <p>population: {population}</p>
          <p>day length: {rotation_period} hours</p>
          <p>year length: {orbital_period} days</p>
          <p>diameter: {diameter}</p>
        </section>
        <div className="card-bg planet-bg" />
        {!props.element.favorited ? (
          <button
            className="favorite"
            onClick={() => props.addToFavorites(name)}
          >
            Favorite
          </button>
        ) : (
          <button
            className="unfavorite"
            onClick={() => props.removeFromFavorites(name)}
          >
            ✓
          </button>
        )}
      </article>
    );
  }
  if (props.format === "vehicle") {
    return (
      <article className="Card">
        <p className="card-primary">
          <h1>{name}</h1>
          <p>model: {model}</p>
          <p>class: {vehicle_class}</p>
          <p>manufacturer: {manufacturer}</p>
          <p>cost: {cost_in_credits}</p>
          <p>maximum speed: {max_atmosphering_speed}</p>
          <p>crew capacity: {crew}</p>
          <p>passenger capacity: {passengers}</p>
          <p>cargo capacity: {cargo_capacity}</p>
        </p>
        <div className="card-bg vehicle-bg" />
        {!props.element.favorited ? (
          <button
            className="favorite"
            onClick={() => props.addToFavorites(name)}
          >
            Favorite
          </button>
        ) : (
          <button
            className="unfavorite"
            onClick={() => props.removeFromFavorites(name)}
          >
            ✓
          </button>
        )}
      </article>
    );
  }
}
