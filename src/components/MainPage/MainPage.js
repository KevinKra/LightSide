import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";
import * as helpers from "../../utils/helpers";
import image3 from "../../utils/images/x-wings.jpg";
import image4 from "../../utils/images/sw-crashedATAT.jpg";
import image5 from "../../utils/images/sw-crashedxwing.jpg";
import image6 from "../../utils/images/sw-ruinedship.jpg";
import image7 from "../../utils/images/sw-waiting.jpg";
import image8 from "../../utils/images/sw-walkers.jpg";
import image9 from "../../utils/images/sw-boba.jpg";
import "./MainPage.scss";

export default class MainPage extends Component {
  state = {
    theme: "people",
    backgroundImage: image6,
    content: [],
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  };

  componentDidMount() {
    scroll.scrollToTop();
    this.loadNewBackground();
  }

  loadNewBackground = () => {
    const images = [image3, image4, image5, image6, image7, image8, image9];
    const index = Math.floor(Math.random() * images.length);
    this.setState({ backgroundImage: images[index] });
  };

  addToFavorites = target => {
    const match = this.state.content.filter(element => {
      return element.name === target;
    });
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
      return element.name === target;
    });
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
    setTimeout(() => {
      this.loadNewBackground();
    }, 1000);
    this.setState({ content: [] });
    if (this.state[type].length > 1) {
      this.setState({ content: this.state[type], theme: type });
    } else {
      this.setState({ theme: type });
      const response = await helpers.fetchData(type);
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
          totalFavorites={this.state.favorites.length}
          backgroundImage={this.state.backgroundImage}
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
