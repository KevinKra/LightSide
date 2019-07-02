import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./ContentSection.scss";

export default class ContentPage extends Component {
  state = {
    hide: false
  };
  render() {
    return (
      <section className="content-section">
        <div className="carrot" />
        <p>CONTENT</p>
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button onClick={this.props.returnToHero}>Back</button>
        </Link>
      </section>
    );
  }
}
