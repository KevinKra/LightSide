import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import uuidv1 from "uuid/v1";
import * as apiCalls from "../../utils/api/apiCalls";
import * as mockData from "../../utils/data";
import "./MainPage.scss";
import Crawl from "../Crawl/Crawl";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";

export default class MainPage extends Component {
  state = {
    theme: "people",
    content: mockData.mockPeople.results,
    favorites: []
  };

  // componentDidMount() {
  //   scroll.scrollToTop();
  // }

  addToFavorites = target => {
    const match = this.state.content.filter(element => {
      return element.name === target;
    });
    const newElement = { ...match[0], id: uuidv1() };
    const detection = this.state.favorites.filter(
      element => element.name === newElement.name
    );
    if (detection.length < 1) {
      this.setState({ favorites: [...this.state.favorites, newElement] });
    }
  };

  removeFromFavorites = target => {
    const updatedFavorites = this.state.favorites.filter(element => {
      return element.name !== target;
    });
    this.setState({ favorites: updatedFavorites });
  };

  displayData = async type => {
    const response = await apiCalls.fetchData(type);
    this.setState({ content: response, theme: type });
  };

  displayFavorites = () => {
    this.setState({ content: this.state.favorites });
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
