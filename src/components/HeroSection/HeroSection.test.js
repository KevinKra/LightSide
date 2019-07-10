import React from "react";
import HeroSection from "./HeroSection";
import { shallow } from "enzyme";
import { mockBackgroundImage } from "../../utils/mockData";

const mockTotalFavorites = 1;
const mockDisplayData = jest.fn();
const mockDisplayFavorites = jest.fn();

describe("HeroSection", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <HeroSection
        backgroundImage={mockBackgroundImage}
        totalFavorites={mockTotalFavorites}
        displayData={mockDisplayData}
        displayFavorites={mockDisplayFavorites}
      />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("Click Events", () => {
    it("should invoke 'displayData' when the people btn is clicked", () => {
      wrapper.find("[data-test='people-btn']").simulate("click");
      expect(mockDisplayData).toHaveBeenCalledWith("people");
    });

    it("should invoke 'displayData' when the people btn is clicked", () => {
      wrapper.find("[data-test='planets-btn']").simulate("click");
      expect(mockDisplayData).toHaveBeenCalledWith("planets");
    });

    it("should invoke 'displayData' when the people btn is clicked", () => {
      wrapper.find("[data-test='vehicles-btn']").simulate("click");
      expect(mockDisplayData).toHaveBeenCalledWith("vehicles");
    });

    it("should invoke 'displayData' when the people btn is clicked", () => {
      wrapper.find("[data-test='favorites-btn']").simulate("click");
      expect(mockDisplayFavorites).toHaveBeenCalled();
    });
  });
});
