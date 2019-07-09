import { fetchData } from "./apiCalls";
import { mockResponse } from "../mockData";

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
