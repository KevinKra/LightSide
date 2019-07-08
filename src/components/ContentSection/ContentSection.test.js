import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import ContentSection from "./ContentSection";

const mockContentArrayPeople = [
  {
    name: "Joe",
    gender: "Male",
    hair_color: "Green",
    eye_color: "Blue",
    birth_year: 1995,
    mass: 120,
    height: 72,
    id: 1
  },
  {
    name: "Tony",
    gender: "Unknown",
    hair_color: "Orange",
    eye_color: "Yellow",
    birth_year: 1092,
    mass: 10,
    height: 150,
    id: 2
  }
];

const mockContentArrayPlanets = [
  {
    name: "Naboo",
    climate: "Moderate",
    terrain: "Grasslands",
    population: 5000000,
    rotation_period: 24,
    orbital_period: 375,
    diameter: 15,
    favorited: false,
    id: 1
  },
  {
    name: "Tatooine",
    climate: "Dry",
    terrain: "Desert",
    population: 50000,
    rotation_period: 34,
    orbital_period: 475,
    diameter: 9,
    favorited: false,
    id: 2
  }
];

const mockContentArrayVehicles = [
  {
    name: "Speeder",
    model: "Super",
    vehicle_class: "X12",
    manufacturer: "Toyota",
    const_in_credits: 15000,
    max_atmosphere_speed: 50,
    crew: 15,
    passengers: 30,
    cargo_capacity: 5,
    favorited: false,
    id: 1
  },
  {
    name: "Slowboy",
    model: "Sloweest",
    vehicle_class: "z12",
    manufacturer: "Yamaha",
    const_in_credits: 150000,
    max_atmosphere_speed: 1,
    crew: 1,
    passengers: 1,
    cargo_capacity: 0,
    favorited: false,
    id: 2
  }
];
describe("<ContentSection />", () => {
  let personTheme, planetTheme, vehicleTheme;
  const mockAddToFavorites = jest.fn();
  const mockRemoveFromFavorites = jest.fn();
  const mockLogError = jest.fn();
  beforeEach(() => {
    personTheme = shallow(
      <ContentSection
        content={mockContentArrayPeople}
        theme="person"
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
        logError={mockLogError}
      />
    );
    planetTheme = shallow(
      <ContentSection
        content={mockContentArrayPlanets}
        theme="planet"
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
        logError={mockLogError}
      />
    );
    vehicleTheme = shallow(
      <ContentSection
        content={mockContentArrayVehicles}
        theme="vehicle"
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
        logError={mockLogError}
      />
    );
  });

  it("should match the snapshot per each theme", () => {
    expect(toJSON(personTheme)).toMatchSnapshot();
    expect(toJSON(planetTheme)).toMatchSnapshot();
    expect(toJSON(vehicleTheme)).toMatchSnapshot();
  });
});
