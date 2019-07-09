import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Card from "../Card/Card";

const mockPerson = {
  name: "Joe",
  gender: "Male",
  hair_color: "Green",
  eye_color: "Blue",
  birth_year: 1995,
  mass: 120,
  height: 72,
  favorited: false
};

export const mockVehicle = {
  name: "Speeder",
  model: "Super",
  vehicle_class: "X12",
  manufacturer: "Toyota",
  const_in_credits: 15000,
  max_atmosphere_speed: 50,
  crew: 15,
  passengers: 30,
  cargo_capacity: 5,
  favorited: false
};

const mockPlanet = {
  name: "Naboo",
  climate: "Moderate",
  terrain: "Grasslands",
  population: 5000000,
  rotation_period: 24,
  orbital_period: 375,
  diameter: 15,
  favorited: false
};

describe("<Card />", () => {
  let wrapperPerson, wrapperPlanet, wrapperVehicle;
  const mockAddToFavorites = jest.fn();
  const mockRemoveFromFavorites = jest.fn();
  beforeEach(() => {
    wrapperPerson = shallow(
      <Card
        format="person"
        element={mockPerson}
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    );
    wrapperPlanet = shallow(
      <Card
        format="planet"
        element={mockPlanet}
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    );
    wrapperVehicle = shallow(
      <Card
        format="vehicle"
        element={mockVehicle}
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    );
  });

  it("should render in the person format", () => {
    expect(toJSON(wrapperPerson)).toMatchSnapshot();
  });

  it("should render in the vehicle format", () => {
    expect(toJSON(wrapperVehicle)).toMatchSnapshot();
  });

  it("should render in the planet format", () => {
    expect(toJSON(wrapperPlanet)).toMatchSnapshot();
  });

  it("should trigger addToFavorites prop when button is clicked", () => {
    wrapperPerson.find("button.favorite").simulate("click");
    expect(mockAddToFavorites).toHaveBeenCalledTimes(1);
  });

  it("should trigger removeFromFavorites prop when button is clicked", () => {
    mockPerson.favorited = true;
    wrapperPerson.setProps({ element: mockPerson });
    wrapperPerson.find("button.unfavorite").simulate("click");
    expect(mockRemoveFromFavorites).toHaveBeenCalledTimes(1);
  });

  it("should render text '✓' if button's element.favorite is false", () => {
    [mockPerson, mockVehicle, mockPlanet].forEach(
      mockData => (mockData.favorited = true)
    );
    wrapperPerson.setProps({ element: mockPerson });
    wrapperVehicle.setProps({ element: mockVehicle });
    wrapperPlanet.setProps({ element: mockPlanet });
    expect(toJSON(wrapperPerson)).toMatchSnapshot();
    expect(toJSON(wrapperPlanet)).toMatchSnapshot();
    expect(toJSON(wrapperVehicle)).toMatchSnapshot();
  });
});
