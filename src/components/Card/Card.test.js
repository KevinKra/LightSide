import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import * as mockData from "../../utils/mockData";

describe("<Card />", () => {
  let mockAddToFavorites, mockRemoveFromFavorites;
  beforeEach(() => {
    mockAddToFavorites = jest.fn();
    mockRemoveFromFavorites = jest.fn();
  });

  it("should match the snapshot when 'person' is passed in as the format", () => {
    const wrapper = shallow(
      <Card
        format="person"
        element={mockData.mockPersonData}
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'planet' is passed in as the format", () => {
    const wrapper = shallow(
      <Card
        format="planet"
        element={mockData.mockPlanetData}
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'vehicle' is passed in as the format", () => {
    const wrapper = shallow(
      <Card
        format="vehicle"
        element={mockData.mockVehicleData}
        addToFavorites={mockAddToFavorites}
        removeFromFavorites={mockRemoveFromFavorites}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
