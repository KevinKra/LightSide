import React, { Component } from "react";
import "./Crawl.scss";

export default class Crawl extends Component {
  state = {
    title: "",
    crawl: ""
  };

  componentDidMount() {
    this.fetchCrawl();
    setTimeout(() => {
      this.goToMain();
    }, 160000);
  }

  goToMain = () => {
    this.props.history.push("/main");
  };

  fetchCrawl = async () => {
    const response = await fetch("https://swapi.co/api/films/1/");
    const parse = await response.json();
    this.setState({ title: parse.title, crawl: parse.opening_crawl });
  };
  render() {
    const crawl = (
      <React.Fragment>
        <div className="title">
          <h1>{this.state.title}</h1>
        </div>
        <p>{this.state.crawl}</p>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <div className="fade" />
        <button className="exit-crawl" onClick={this.goToMain}>
          X
        </button>
        <section className="Crawl">
          <div className="star-wars">
            <div className="crawl-content">{this.state.title && crawl}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
