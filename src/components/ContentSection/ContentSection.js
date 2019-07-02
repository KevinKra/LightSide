import React, { Component } from "react";
import "./ContentSection.scss";

export default class ContentPage extends Component {
  render() {
    return (
      <section className="content-section">
        <div className="carrot" />
        <p>CONTENT</p>
        <button onClick={this.props.returnToHero}>Back</button>
      </section>
    );
  }
}
