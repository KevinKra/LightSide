import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import * as apiCalls from "../../utils/api/apiCalls";
import * as mockData from "../../utils/data";
import "./MainPage.scss";
import Crawl from "../Crawl/Crawl";
import ContentSection from "../ContentSection/ContentSection";
import HeroSection from "../HeroSection/HeroSection";

export default class MainPage extends Component {
  state = {
    content: mockData.mockPeople.results
  };

  // componentDidMount() {
  //   scroll.scrollToTop();
  // }

  displayData = async type => {
    const response = await apiCalls.fetchData(type);
    this.setState({ content: response });
  };

  render() {
    return (
      <main className="MainPage">
        <Crawl />
        <HeroSection displayData={this.displayData} />
        <ContentSection content={this.state.content} />
      </main>
    );
  }
}
