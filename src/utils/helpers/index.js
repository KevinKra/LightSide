import uuidv1 from "uuid/v1";
import image3 from "../../utils/images/x-wings.jpg";
import image4 from "../../utils/images/sw-crashedATAT.jpg";
import image5 from "../../utils/images/sw-crashedxwing.jpg";
import image6 from "../../utils/images/sw-ruinedship.jpg";
import image7 from "../../utils/images/sw-waiting.jpg";
import image8 from "../../utils/images/sw-walkers.jpg";
import image9 from "../../utils/images/sw-boba.jpg";

export const fetchData = async data => {
  const response = await fetch(`https://swapi.co/api/${data}`);
  const parse = await response.json();
  const output = parse.results.map(element => {
    return { ...element, favorited: false, id: uuidv1() };
  });
  return output;
};

export function updateAssociatedArray(element, ...args) {
  let output = [];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i].includes(element)) {
      let copy = [...arguments[i]];
      const index = copy.indexOf(element);
      copy[index].favorited = false;
      output = copy;
    }
  }
  return output;
}

export function selectImage() {
  const images = [image3, image4, image5, image6, image7, image8, image9];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}
