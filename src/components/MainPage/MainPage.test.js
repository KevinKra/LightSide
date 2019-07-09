import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import MainPage from "../MainPage/MainPage";
import { fetchData } from "../../utils/api/apiCalls";

const mockTarget = "C-3PO";
const mockTargetVehicle = "Sand Crawler";
const mockTargetPlanet = "Alderaan";

const mockVehicles = [
  {
    name: "Sand Crawler",
    model: "Digger Crawler",
    manufacturer: "Corellia Mining Corporation",
    cost_in_credits: "150000",
    length: "36.8",
    max_atmosphering_speed: "30",
    crew: "46",
    passengers: "30",
    cargo_capacity: "50000",
    consumables: "2 months",
    vehicle_class: "wheeled",
    pilots: [],
    films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
    created: "2014-12-10T15:36:25.724000Z",
    edited: "2014-12-22T18:21:15.523587Z",
    url: "https://swapi.co/api/vehicles/4/",
    favorited: false,
    id: "5097c2f0-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "T-16 skyhopper",
    model: "T-16 skyhopper",
    manufacturer: "Incom Corporation",
    cost_in_credits: "14500",
    length: "10.4",
    max_atmosphering_speed: "1200",
    crew: "1",
    passengers: "1",
    cargo_capacity: "50",
    consumables: "0",
    vehicle_class: "repulsorcraft",
    pilots: [],
    films: ["https://swapi.co/api/films/1/"],
    created: "2014-12-10T16:01:52.434000Z",
    edited: "2014-12-22T18:21:15.552614Z",
    url: "https://swapi.co/api/vehicles/6/",
    favorited: false,
    id: "5097c2f1-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "X-34 landspeeder",
    model: "X-34 landspeeder",
    manufacturer: "SoroSuub Corporation",
    cost_in_credits: "10550",
    length: "3.4",
    max_atmosphering_speed: "250",
    crew: "1",
    passengers: "1",
    cargo_capacity: "5",
    consumables: "unknown",
    vehicle_class: "repulsorcraft",
    pilots: [],
    films: ["https://swapi.co/api/films/1/"],
    created: "2014-12-10T16:13:52.586000Z",
    edited: "2014-12-22T18:21:15.583700Z",
    url: "https://swapi.co/api/vehicles/7/",
    favorited: false,
    id: "5097c2f2-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "TIE/LN starfighter",
    model: "Twin Ion Engine/Ln Starfighter",
    manufacturer: "Sienar Fleet Systems",
    cost_in_credits: "unknown",
    length: "6.4",
    max_atmosphering_speed: "1200",
    crew: "1",
    passengers: "0",
    cargo_capacity: "65",
    consumables: "2 days",
    vehicle_class: "starfighter",
    pilots: [],
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    created: "2014-12-10T16:33:52.860000Z",
    edited: "2014-12-22T18:21:15.606149Z",
    url: "https://swapi.co/api/vehicles/8/",
    favorited: false,
    id: "5097ea00-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "Snowspeeder",
    model: "t-47 airspeeder",
    manufacturer: "Incom corporation",
    cost_in_credits: "unknown",
    length: "4.5",
    max_atmosphering_speed: "650",
    crew: "2",
    passengers: "0",
    cargo_capacity: "10",
    consumables: "none",
    vehicle_class: "airspeeder",
    pilots: [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/18/"
    ],
    films: ["https://swapi.co/api/films/2/"],
    created: "2014-12-15T12:22:12Z",
    edited: "2014-12-22T18:21:15.623033Z",
    url: "https://swapi.co/api/vehicles/14/",
    favorited: false,
    id: "5097ea01-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "TIE bomber",
    model: "TIE/sa bomber",
    manufacturer: "Sienar Fleet Systems",
    cost_in_credits: "unknown",
    length: "7.8",
    max_atmosphering_speed: "850",
    crew: "1",
    passengers: "0",
    cargo_capacity: "none",
    consumables: "2 days",
    vehicle_class: "space/planetary bomber",
    pilots: [],
    films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/"],
    created: "2014-12-15T12:33:15.838000Z",
    edited: "2014-12-22T18:21:15.667730Z",
    url: "https://swapi.co/api/vehicles/16/",
    favorited: false,
    id: "50981110-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "AT-AT",
    model: "All Terrain Armored Transport",
    manufacturer: "Kuat Drive Yards, Imperial Department of Military Research",
    cost_in_credits: "unknown",
    length: "20",
    max_atmosphering_speed: "60",
    crew: "5",
    passengers: "40",
    cargo_capacity: "1000",
    consumables: "unknown",
    vehicle_class: "assault walker",
    pilots: [],
    films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/"],
    created: "2014-12-15T12:38:25.937000Z",
    edited: "2014-12-22T18:21:15.714673Z",
    url: "https://swapi.co/api/vehicles/18/",
    favorited: false,
    id: "50981111-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "AT-ST",
    model: "All Terrain Scout Transport",
    manufacturer: "Kuat Drive Yards, Imperial Department of Military Research",
    cost_in_credits: "unknown",
    length: "2",
    max_atmosphering_speed: "90",
    crew: "2",
    passengers: "0",
    cargo_capacity: "200",
    consumables: "none",
    vehicle_class: "walker",
    pilots: ["https://swapi.co/api/people/13/"],
    films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/"],
    created: "2014-12-15T12:46:42.384000Z",
    edited: "2014-12-22T18:21:15.761584Z",
    url: "https://swapi.co/api/vehicles/19/",
    favorited: false,
    id: "50981112-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "Storm IV Twin-Pod cloud car",
    model: "Storm IV Twin-Pod",
    manufacturer: "Bespin Motors",
    cost_in_credits: "75000",
    length: "7",
    max_atmosphering_speed: "1500",
    crew: "2",
    passengers: "0",
    cargo_capacity: "10",
    consumables: "1 day",
    vehicle_class: "repulsorcraft",
    pilots: [],
    films: ["https://swapi.co/api/films/2/"],
    created: "2014-12-15T12:58:50.530000Z",
    edited: "2014-12-22T18:21:15.783232Z",
    url: "https://swapi.co/api/vehicles/20/",
    favorited: false,
    id: "50981113-a24f-11e9-9f40-0705be2f0ea5"
  },
  {
    name: "Sail barge",
    model: "Modified Luxury Sail Barge",
    manufacturer: "Ubrikkian Industries Custom Vehicle Division",
    cost_in_credits: "285000",
    length: "30",
    max_atmosphering_speed: "100",
    crew: "26",
    passengers: "500",
    cargo_capacity: "2000000",
    consumables: "Live food tanks",
    vehicle_class: "sail barge",
    pilots: [],
    films: ["https://swapi.co/api/films/3/"],
    created: "2014-12-18T10:44:14.217000Z",
    edited: "2014-12-22T18:21:15.807906Z",
    url: "https://swapi.co/api/vehicles/24/",
    favorited: false,
    id: "50981114-a24f-11e9-9f40-0705be2f0ea5"
  }
];

const expectedVehicle = [
  {
    name: "Sand Crawler",
    model: "Digger Crawler",
    manufacturer: "Corellia Mining Corporation",
    cost_in_credits: "150000",
    length: "36.8",
    max_atmosphering_speed: "30",
    crew: "46",
    passengers: "30",
    cargo_capacity: "50000",
    consumables: "2 months",
    vehicle_class: "wheeled",
    pilots: [],
    films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
    created: "2014-12-10T15:36:25.724000Z",
    edited: "2014-12-22T18:21:15.523587Z",
    url: "https://swapi.co/api/vehicles/4/",
    favorited: true,
    id: "5097c2f0-a24f-11e9-9f40-0705be2f0ea5"
  }
];

const mockPeople = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.co/api/people/1/",
    favorited: false,
    id: "0f7aea00-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://swapi.co/api/people/2/",
    favorited: true,
    id: "0f7b1110-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/8/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "https://swapi.co/api/people/3/",
    favorited: false,
    id: "0f7b1111-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: ["https://swapi.co/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.co/api/people/4/",
    favorited: false,
    id: "0f7b1112-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    homeworld: "https://swapi.co/api/planets/2/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: ["https://swapi.co/api/vehicles/30/"],
    starships: [],
    created: "2014-12-10T15:20:09.791000Z",
    edited: "2014-12-20T21:17:50.315000Z",
    url: "https://swapi.co/api/people/5/",
    favorited: false,
    id: "0f7b1113-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:52:14.024000Z",
    edited: "2014-12-20T21:17:50.317000Z",
    url: "https://swapi.co/api/people/6/",
    favorited: false,
    id: "0f7b3820-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:53:41.121000Z",
    edited: "2014-12-20T21:17:50.319000Z",
    url: "https://swapi.co/api/people/7/",
    favorited: false,
    id: "0f7b3821-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/",
    films: ["https://swapi.co/api/films/1/"],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:57:50.959000Z",
    edited: "2014-12-20T21:17:50.321000Z",
    url: "https://swapi.co/api/people/8/",
    favorited: false,
    id: "0f7b3822-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: ["https://swapi.co/api/films/1/"],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: ["https://swapi.co/api/starships/12/"],
    created: "2014-12-10T15:59:50.509000Z",
    edited: "2014-12-20T21:17:50.323000Z",
    url: "https://swapi.co/api/people/9/",
    favorited: false,
    id: "0f7b3823-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/20/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: ["https://swapi.co/api/vehicles/38/"],
    starships: [
      "https://swapi.co/api/starships/48/",
      "https://swapi.co/api/starships/59/",
      "https://swapi.co/api/starships/64/",
      "https://swapi.co/api/starships/65/",
      "https://swapi.co/api/starships/74/"
    ],
    created: "2014-12-10T16:16:29.192000Z",
    edited: "2014-12-20T21:17:50.325000Z",
    url: "https://swapi.co/api/people/10/",
    favorited: false,
    id: "0f7b3824-a1ef-11e9-b947-31eb7b712f9c"
  }
];

const mockPeopleFalse = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [
      "https://swapi.co/api/vehicles/14/",
      "https://swapi.co/api/vehicles/30/"
    ],
    starships: [
      "https://swapi.co/api/starships/12/",
      "https://swapi.co/api/starships/22/"
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.co/api/people/1/",
    favorited: false,
    id: "0f7aea00-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://swapi.co/api/people/2/",
    favorited: false,
    id: "0f7b1110-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/8/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "https://swapi.co/api/people/3/",
    favorited: false,
    id: "0f7b1111-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: ["https://swapi.co/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "https://swapi.co/api/people/4/",
    favorited: false,
    id: "0f7b1112-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    homeworld: "https://swapi.co/api/planets/2/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/7/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: ["https://swapi.co/api/vehicles/30/"],
    starships: [],
    created: "2014-12-10T15:20:09.791000Z",
    edited: "2014-12-20T21:17:50.315000Z",
    url: "https://swapi.co/api/people/5/",
    favorited: false,
    id: "0f7b1113-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:52:14.024000Z",
    edited: "2014-12-20T21:17:50.317000Z",
    url: "https://swapi.co/api/people/6/",
    favorited: false,
    id: "0f7b3820-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:53:41.121000Z",
    edited: "2014-12-20T21:17:50.319000Z",
    url: "https://swapi.co/api/people/7/",
    favorited: false,
    id: "0f7b3821-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/",
    films: ["https://swapi.co/api/films/1/"],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:57:50.959000Z",
    edited: "2014-12-20T21:17:50.321000Z",
    url: "https://swapi.co/api/people/8/",
    favorited: false,
    id: "0f7b3822-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/",
    films: ["https://swapi.co/api/films/1/"],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: [],
    starships: ["https://swapi.co/api/starships/12/"],
    created: "2014-12-10T15:59:50.509000Z",
    edited: "2014-12-20T21:17:50.323000Z",
    url: "https://swapi.co/api/people/9/",
    favorited: false,
    id: "0f7b3823-a1ef-11e9-b947-31eb7b712f9c"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/20/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/1/"],
    vehicles: ["https://swapi.co/api/vehicles/38/"],
    starships: [
      "https://swapi.co/api/starships/48/",
      "https://swapi.co/api/starships/59/",
      "https://swapi.co/api/starships/64/",
      "https://swapi.co/api/starships/65/",
      "https://swapi.co/api/starships/74/"
    ],
    created: "2014-12-10T16:16:29.192000Z",
    edited: "2014-12-20T21:17:50.325000Z",
    url: "https://swapi.co/api/people/10/",
    favorited: false,
    id: "0f7b3824-a1ef-11e9-b947-31eb7b712f9c"
  }
];

const mockPlanets = [
  [
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ],
      films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.co/api/planets/2/",
      favorited: false,
      id: "bfa9a400-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      surface_water: "8",
      population: "1000",
      residents: [],
      films: ["https://swapi.co/api/films/1/"],
      created: "2014-12-10T11:37:19.144000Z",
      edited: "2014-12-20T20:58:18.421000Z",
      url: "https://swapi.co/api/planets/3/",
      favorited: false,
      id: "bfa9cb10-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Hoth",
      rotation_period: "23",
      orbital_period: "549",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra, ice caves, mountain ranges",
      surface_water: "100",
      population: "unknown",
      residents: [],
      films: ["https://swapi.co/api/films/2/"],
      created: "2014-12-10T11:39:13.934000Z",
      edited: "2014-12-20T20:58:18.423000Z",
      url: "https://swapi.co/api/planets/4/",
      favorited: false,
      id: "bfa9cb11-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      surface_water: "8",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      created: "2014-12-10T11:42:22.590000Z",
      edited: "2014-12-20T20:58:18.425000Z",
      url: "https://swapi.co/api/planets/5/",
      favorited: false,
      id: "bfa9cb12-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Bespin",
      rotation_period: "12",
      orbital_period: "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1.5 (surface), 1 standard (Cloud City)",
      terrain: "gas giant",
      surface_water: "0",
      population: "6000000",
      residents: ["https://swapi.co/api/people/26/"],
      films: ["https://swapi.co/api/films/2/"],
      created: "2014-12-10T11:43:55.240000Z",
      edited: "2014-12-20T20:58:18.427000Z",
      url: "https://swapi.co/api/planets/6/",
      favorited: false,
      id: "bfa9cb13-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Endor",
      rotation_period: "18",
      orbital_period: "402",
      diameter: "4900",
      climate: "temperate",
      gravity: "0.85 standard",
      terrain: "forests, mountains, lakes",
      surface_water: "8",
      population: "30000000",
      residents: ["https://swapi.co/api/people/30/"],
      films: ["https://swapi.co/api/films/3/"],
      created: "2014-12-10T11:50:29.349000Z",
      edited: "2014-12-20T20:58:18.429000Z",
      url: "https://swapi.co/api/planets/7/",
      favorited: false,
      id: "bfa9cb14-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: "12",
      population: "4500000000",
      residents: [
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/37/",
        "https://swapi.co/api/people/38/",
        "https://swapi.co/api/people/39/",
        "https://swapi.co/api/people/42/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/35/"
      ],
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      created: "2014-12-10T11:52:31.066000Z",
      edited: "2014-12-20T20:58:18.430000Z",
      url: "https://swapi.co/api/planets/8/",
      favorited: false,
      id: "bfa9cb15-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      surface_water: "unknown",
      population: "1000000000000",
      residents: [
        "https://swapi.co/api/people/34/",
        "https://swapi.co/api/people/55/",
        "https://swapi.co/api/people/74/"
      ],
      films: [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      created: "2014-12-10T11:54:13.921000Z",
      edited: "2014-12-20T20:58:18.432000Z",
      url: "https://swapi.co/api/planets/9/",
      favorited: false,
      id: "bfa9cb16-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Kamino",
      rotation_period: "27",
      orbital_period: "463",
      diameter: "19720",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "ocean",
      surface_water: "100",
      population: "1000000000",
      residents: [
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/72/",
        "https://swapi.co/api/people/73/"
      ],
      films: ["https://swapi.co/api/films/5/"],
      created: "2014-12-10T12:45:06.577000Z",
      edited: "2014-12-20T20:58:18.434000Z",
      url: "https://swapi.co/api/planets/10/",
      favorited: false,
      id: "bfa9cb17-a250-11e9-9c3a-07e9edf8981f"
    },
    {
      name: "Geonosis",
      rotation_period: "30",
      orbital_period: "256",
      diameter: "11370",
      climate: "temperate, arid",
      gravity: "0.9 standard",
      terrain: "rock, desert, mountain, barren",
      surface_water: "5",
      population: "100000000000",
      residents: ["https://swapi.co/api/people/63/"],
      films: ["https://swapi.co/api/films/5/"],
      created: "2014-12-10T12:47:22.350000Z",
      edited: "2014-12-20T20:58:18.437000Z",
      url: "https://swapi.co/api/planets/11/",
      favorited: false,
      id: "bfa9cb18-a250-11e9-9c3a-07e9edf8981f"
    }
  ]
];

const expectedPlanet = [
  {
    name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000",
    residents: [
      "https://swapi.co/api/people/5/",
      "https://swapi.co/api/people/68/",
      "https://swapi.co/api/people/81/"
    ],
    films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
    created: "2014-12-10T11:35:48.479000Z",
    edited: "2014-12-20T20:58:18.420000Z",
    url: "https://swapi.co/api/planets/2/",
    favorited: true,
    id: "bfa9a400-a250-11e9-9c3a-07e9edf8981f"
  }
];

const expectedPerson = [
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/",
    films: [
      "https://swapi.co/api/films/2/",
      "https://swapi.co/api/films/5/",
      "https://swapi.co/api/films/4/",
      "https://swapi.co/api/films/6/",
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/1/"
    ],
    species: ["https://swapi.co/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "https://swapi.co/api/people/2/",
    favorited: true,
    id: "0f7b1110-a1ef-11e9-b947-31eb7b712f9c"
  }
];

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
