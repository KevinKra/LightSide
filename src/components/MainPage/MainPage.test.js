import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import MainPage from "../MainPage/MainPage";

describe("<MainPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainPage />);
  });
  it("should match the snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
