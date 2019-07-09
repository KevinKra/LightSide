import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import ContentSection from "./ContentSection";
import {
  mockContentArrayPeople,
  mockContentArrayPlanets,
  mockContentArrayVehicles
} from "../../utils/mockData";

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
