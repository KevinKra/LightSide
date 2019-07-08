import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import ContentSection from "./ContentSection";

const mockContentArray = [
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

describe("<ContentSection />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ContentSection content={mockContentArray} theme="person" />
    );
  });
  it("should render without errors", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
