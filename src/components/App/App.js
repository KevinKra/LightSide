import React from "react";
import "./App.scss";
import MainPage from "../MainPage/MainPage";
import Crawl from "../Crawl/Crawl";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Crawl} />
        <Route exact path="/main" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
