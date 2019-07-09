import {
  expectedVehicle,
  mockVehicles,
  mockPlanets,
  mockPeople,
  expectedPerson,
  expectedPlanet
} from "../../utils/mockData";
import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import MainPage from "../MainPage/MainPage";
import { fetchData } from "../../utils/api/apiCalls";

const mockTarget = "C-3PO";
const mockTargetVehicle = "Sand Crawler";
const mockTargetPlanet = "Alderaan";

jest.mock("../../utils/api/apiCalls.js");
fetchData.mockImplementation(() => mockPeople);

describe("<MainPage />", () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<MainPage />);
    instance = wrapper.instance();
  });

  xit("should match the snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should have empty state initially", () => {
    expect(instance.state.people.length).toBe(0);
    expect(instance.state.planets.length).toBe(0);
    expect(instance.state.vehicles.length).toBe(0);
    expect(instance.state.content.length).toBe(0);
    expect(instance.state.favorites.length).toBe(0);
  });

  describe("loadNewBackground", () => {
    xit("should set the state of backgroundImage", () => {
      wrapper.setState({ backgroundImage: "" });
      expect(wrapper.state("backgroundImage")).toEqual("");
      instance.loadNewBackground();
      expect(wrapper.state("backgroundImage")).toContain("jpg");
    });
  });

  describe("componentDidMount", () => {
    it("should invoke 'loadNewBackground' on mount", () => {
      let mockFn = jest.spyOn(instance, "loadNewBackground");
      instance.componentDidMount();
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe("addToFavorites", () => {
    it("should set the state of favorites when invoked", () => {
      expect(wrapper.state("favorites")).toEqual([]);
      wrapper.setState({ content: mockPeople });
      instance.addToFavorites(mockTarget);
      expect(wrapper.state("favorites")).toEqual(expectedPerson);
    });
  });

  describe("removeFromFavorites", () => {
    it("should set that state of people when target is a person", () => {
      wrapper.setState({ favorites: expectedPerson, people: mockPeople });
      expect(wrapper.state("favorites")).toEqual(expectedPerson);
      instance.removeFromFavorites(mockTarget);
      expect(wrapper.state("favorites")).toEqual([]);
      // expect(wrapper.state("people")).toEqual(mockPeople); ???
    });

    it("should set that state of vehicles when target is a vehicle", () => {
      wrapper.setState({ favorites: expectedVehicle, planets: mockVehicles });
      expect(wrapper.state("favorites")).toEqual(expectedVehicle);
      instance.removeFromFavorites(mockTargetVehicle);
      expect(wrapper.state("favorites")).toEqual([]);
    });

    it("should set that state of planets when target is a planet", () => {
      wrapper.setState({ favorites: expectedPlanet, planets: mockPlanets });
      expect(wrapper.state("favorites")).toEqual(expectedPlanet);
      instance.removeFromFavorites(mockTargetPlanet);
      expect(wrapper.state("favorites")).toEqual([]);
    });

    it("should invoke 'updateFavorites' with the correct param", () => {
      wrapper.setState({ favorites: expectedPerson, people: mockPeople });
      let mockFn = jest.spyOn(instance, "updateFavorites");
      instance.removeFromFavorites(mockTarget);
      expect(mockFn).toHaveBeenCalledWith(mockTarget);
    });
  });

  describe("updateFavorites", () => {
    it("should only update favorites if theme state is not currently 'favorites'", () => {
      wrapper.setState({ favorites: mockPlanets });
      instance.updateFavorites(mockTargetPlanet);
      expect(wrapper.state("favorites")).toEqual([mockPlanets[0]]);
    });

    it("should update content and favorites state if theme is favorites", () => {
      wrapper.setState({ favorites: mockPlanets, theme: "favorites" });
      instance.updateFavorites(mockTargetPlanet);
      expect(wrapper.state("favorites")).toEqual([mockPlanets[0]]);
      expect(wrapper.state("content")).toEqual([mockPlanets[0]]);
    });
  });

  describe("displayData", () => {
    let mockResponse;
    let mockType;
    let mockTheme;

    mockResponse = {
      name: "Joe",
      gender: "Male",
      hair_color: "Green",
      eye_color: "Blue",
      birth_year: 1995,
      mass: 120,
      height: 72
    };

    it("should set the state of content to []", () => {
      wrapper.instance().setState({ content: mockResponse });
      instance.displayData([]);
      expect(wrapper.state("content")).toEqual([]);
    });

    it("should update content if the content's length is greater than 1", () => {
      wrapper
        .instance()
        .setState({ content: [], people: mockPeople, theme: "" });
      instance.displayData("people");
      expect(wrapper.state("content")).toEqual(mockPeople);
      expect(wrapper.state("theme")).toEqual("people");
    });

    it("should call async function if content length is less than 1", () => {
      wrapper.instance().setState({ content: [], people: [], theme: "" });
      instance.displayData("people");
      expect(wrapper.state("theme")).toEqual("people");
      expect(fetchData).toHaveBeenCalledWith("people");
    });

    it("should fetch the data from the endpoint", () => {});

    it("should update the state depending on the theme", () => {});
  });
});
