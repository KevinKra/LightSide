import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
// import uuidv1 from "uuid/v1";
// import * as apiCalls from "../../utils/api/apiCalls";
import uuidv1 from "uuid/v1";
// import * as mockData from "../../utils/data";
import "./MainPage.scss";
// import Crawl from "../Crawl/Crawl";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";

export default class MainPage extends Component {
  state = {
    theme: "people",
    content: [{ name: "steve", gender: "dog" }],
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  };

  // componentDidMount() {
  //   scroll.scrollToTop();
  // }

  fetchData = async data => {
    const response = await fetch(`https://swapi.co/api/${data}`);
    const parse = await response.json();
    const output = parse.results.map(element => {
      return { ...element, favorited: false, id: uuidv1() };
    });
    // console.log("output", output);
    return output;
  };

  addToFavorites = target => {
    const match = this.state.content.filter(element => {
      return element.name === target;
    });
    console.log(match[0]);
    const newElement = match[0];
    newElement.favorited = true;
    const detection = this.state.favorites.filter(
      element => element.name === newElement.name
    );
    if (detection.length < 1) {
      this.setState({ favorites: [...this.state.favorites, newElement] });
    }
  };

  removeFromFavorites = target => {
    const element = this.state.favorites.find(element => {
      return (element.name = target);
    });
    element.favorited = false;
    console.log("element", element);
    const updatedFavorites = this.state.favorites.filter(element => {
      return element.name !== target;
    });
    {
      this.state.theme === "favorites" &&
        this.setState({
          favorites: updatedFavorites,
          content: updatedFavorites
        });
    }
    this.setState({ favorites: updatedFavorites });
  };

  displayData = async type => {
    this.setState({ content: [] });
    if (this.state[type].length > 1) {
      // console.log("local state");
      this.setState({ content: this.state[type], theme: type });
    } else {
      // console.log("fetching");
      this.setState({ theme: type });
      const response = await this.fetchData(type);
      if (this.state.theme === type) {
        console.log("theme", this.state.theme);
        console.log("type", type);
        this.setState({ content: response, [type]: response, theme: type });
      } else {
        console.log("theme", this.state.theme);
        console.log("type", type);
        this.setState({ [type]: response });
      }
    }
  };

  displayFavorites = () => {
    this.setState({ content: this.state.favorites, theme: "favorites" });
  };

  render() {
    return (
      <main className="MainPage">
        <HeroSection
          displayData={this.displayData}
          displayFavorites={this.displayFavorites}
        />
        <ContentSection
          content={this.state.content}
          theme={this.state.theme}
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
        />
      </main>
    );
  }
}
