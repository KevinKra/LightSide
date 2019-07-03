import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import "./MainPage.scss";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";

export default class MainPage extends Component {
  state = {
    theme: "people",
    content: [],
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
    return output;
  };

  addToFavorites = target => {
    const match = this.state.content.filter(element => {
      return element.name === target;
    });
    // in the process of detecting why favorites collapses once two forms
    // data appear, adds, remove, adds, collapse
    console.log("match", match[0]);
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
    //the bug is here, upon removing a second time this dumps all the content and wipes the array
    //perhaps bug is because element order is changed upon second addition
    const element = this.state.favorites.find(element => {
      return element.name === target;
    });
    console.log("element found", element);
    // console.log("target", target);
    element.favorited = false;
    const updatedFavorites = this.state.favorites.filter(element => {
      return element.name !== target;
    });

    this.state.theme === "favorites" &&
      this.setState({
        favorites: updatedFavorites,
        content: updatedFavorites
      });

    this.setState({ favorites: updatedFavorites });
  };

  displayData = async type => {
    this.setState({ content: [] });
    if (this.state[type].length > 1) {
      this.setState({ content: this.state[type], theme: type });
    } else {
      this.setState({ theme: type });
      const response = await this.fetchData(type);
      if (this.state.theme === type) {
        this.setState({ content: response, [type]: response, theme: type });
      } else {
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
