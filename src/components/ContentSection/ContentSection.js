import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./ContentSection.scss";

export default class ContentPage extends Component {
  state = {
    hide: false
  };
  render() {
    // const collapse = { height: "0vw", transition: "0.5s height ease-in" };
    return (
      <section
        className="content-section"
        // style={this.state.hide ? collapse : null}
      >
        <div className="carrot" />
        <p>CONTENT</p>
        <Link to={"hero-section"} smooth={true} offset={0} duration={350}>
          <button onClick={this.props.returnToHero}>Back</button>
        </Link>
      </section>
    );
  }
}
