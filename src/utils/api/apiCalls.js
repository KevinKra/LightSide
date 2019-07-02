export const fetchData = async data => {
  const response = await fetch(`https://swapi.co/api/${data}`);
  const parse = await response.json();
  return parse.results;
};
