# LightSide

Built in React, LightSide is an application that uses the StarWars API (SWAPI) to present information related to the famous people, noteworthy planets, and popular vehicles, of the StarWars universe. As a user you have the ability to seamlessly sift through the data and favorite those cards that interest you and built up a collection that can be modified as you find other elements of the universe that you are fond of.

![Imgur](https://i.imgur.com/NxyrhZa.jpg)
![Imgur](https://i.imgur.com/FVIEa3B.png)

`In action:`

![LightSide Gif](https://media.giphy.com/media/RNKtgXnkJjxqL4hZmQ/giphy.gif)

## Technology used

- React
- React Router
- JavaScript
- SCSS (CSS)
- Jest | Enzyme

## Challenges

### Design

One of the key design challenges stemmed from the limited data provided from the API. In short, no images of any sort existed in the database. Subsequently, I felt the most appropriate solution to this challenge was to design a sleek and streamlined UI/UX that pulled from a pool of illustrations that allowed for full screen images to accommodate the strict text data provided. The simplicity of the user interface allows for both images and text to display in parallel without clashing along with the added benefit of allowing off-screen image re-renders to seamlessly keep content transitions fresh and interesting.

### Functionality

An interesting problem occurred when I needed to determine a means to dynamically re-render the DOM without touching it directly. As a result, I wrote a function that allowed for `n` arguments, the state themes, to be iterated through and detected against the element, a card, that was being favorited or unfavorited. This provided for mutations to occur on copied arrays which then could be subsequently placed into the appropriate state container based on the shape of the data itself.

## Installation

Clone the repo - https://github.com/KevinKra/LightSide

Run `npm install` from the root directory

Run `npm start` and visit `localhost:3000` in your browser

## Future extensions

- Support pagination
- Local storage utilization
- Further refactoring

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Additionally, if anyone is familiar with the illustrators of these images please let me know.

## License

[MIT](https://choosealicense.com/licenses/mit/)
