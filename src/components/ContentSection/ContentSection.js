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
                <p>eye: {element.eye_color}</p>
                <p>birth: {element.birth_year}</p>
                <p>mass: {element.mass}</p>
                <p>height: {element.height}</p>
                <button>✓</button>
              </article>
            );
          }
          if (this.props.theme === "planets") {
            return (
              <article>
                <h1>name: {element.name}</h1>
                <p>gender: {element.gender}</p>
                <p>hair: {element.hair_color}</p>
                <p>eye: {element.eye_color}</p>
                <p>birth: {element.birth_year}</p>
                <p>mass: {element.mass}</p>
                <p>height: {element.height}</p>
                <button>✓</button>
              </article>
            );
          }
          if (this.props.theme === "vehicles") {
            return (
              <article>
                <h1>name: {element.name}</h1>
                <p>gender: {element.gender}</p>
                <p>hair: {element.hair_color}</p>
                <p>eye: {element.eye_color}</p>
                <p>birth: {element.birth_year}</p>
                <p>mass: {element.mass}</p>
                <p>height: {element.height}</p>
                <button>✓</button>
              </article>
            );
          }
        })}
      </section>
    );
  }
}
