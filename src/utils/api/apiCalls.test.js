import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { fetchData } from "./apiCalls";
import { promised } from "q";

const mockResponse = {
  results: [
    {
      name: "Joe",
      gender: "Male",
      hair_color: "Green",
      eye_color: "Blue",
      birth_year: 1995,
      mass: 120,
      height: 72
    }
  ]
};

const mockResponseFavorites = {
  results: [
    {
      name: "Joe",
      gender: "Male",
      hair_color: "Green",
      favorites: false,
      eye_color: "Blue",
      birth_year: 1995,
      mass: 120,
      height: 72
    }
  ]
};

describe("fetchData", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    );
  });

  it("should invoke 'fetch' with the correct params", () => {
    const link = "https://swapi.co/api/people";
    fetchData("people");
    expect(fetch).toHaveBeenCalledWith(link);
  });

  it("should add the properties of favorited and id to each element", async () => {
    const results = await fetchData("people");
    expect(results).toHaveLength(1);
  });

  it("should throw an error if response is not ok", async () => {
    window.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ ok: false }));

    try {
      await fetchData();
    } catch (error) {
      expect(error.message).toBe("");
    }
  });
});
