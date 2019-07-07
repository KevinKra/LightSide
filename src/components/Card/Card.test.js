import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Card from "../Card/Card";

const mockPerson = {
  name: "Joe",
  gender: "Male",
  hair_color: "Green",
  eye_color: "Blue",
  birth_year: 1995,
  mass: 120,
  height: 72
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
  cargo_capacity: 5
};

const mockPlanet = {
  name: "Naboo",
  climate: "Moderate",
  terrain: "Grasslands",
  population: 5000000,
  rotation_period: 24,
  orbital_period: 375,
  diameter: 15
};

describe("<Card />", () => {
  it("should render in the person format", () => {
    const wrapper = shallow(<Card format="person" element={mockPerson} />);
    // console.log(wrapper.debug());
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should render in the vehicle format", () => {
    const wrapper = shallow(<Card format="vehicle" element={mockVehicle} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should render in the planet format", () => {
    const wrapper = shallow(<Card format="planet" element={mockPlanet} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
