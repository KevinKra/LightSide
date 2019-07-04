import uuidv1 from "uuid/v1";

export const fetchData = async data => {
  const response = await fetch(`https://swapi.co/api/${data}`);
  const parse = await response.json();
  const output = parse.results.map(element => {
    return { ...element, favorited: false, id: uuidv1() };
  });
  return output;
};
