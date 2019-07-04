import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import image6 from "../../utils/images/sw-ruinedship.jpg";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";
import * as helpers from "../../utils/helpers";
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
    const image = helpers.selectImage();
    this.setState({ backgroundImage: image });
  };

  addToFavorites = target => {
    const { content, favorites } = this.state;
    const match = content.filter(element => {
      return element.name === target;
    });
    const newElement = match[0];
    newElement.favorited = true;
    const detection = favorites.filter(
      element => element.name === newElement.name
    );
    detection.length < 1 &&
      this.setState({ favorites: [...favorites, newElement] });
  };

  removeFromFavorites = target => {
    const { favorites, people, vehicles, planets } = this.state;
    const element = favorites.find(element => {
      return element.name === target;
    });
    const copy = helpers.updateAssociatedArray(
      element,
      people,
      vehicles,
      planets
    );

    if (element.hasOwnProperty("gender")) this.setState({ people: copy });
    if (element.hasOwnProperty("terrain")) this.setState({ planets: copy });
    if (element.hasOwnProperty("model")) this.setState({ vehicles: copy });

    this.updateFavorites(target);
  };

  updateFavorites = target => {
    const { favorites, theme } = this.state;
    const newFavorites = favorites.filter(element => {
      return element.name !== target;
    });
    theme === "favorites"
      ? this.setState({
          favorites: newFavorites,
          content: newFavorites
        })
      : this.setState({ favorites: newFavorites });
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
      this.state.theme === type
        ? this.setState({ content: response, [type]: response, theme: type })
        : this.setState({ [type]: response });
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
