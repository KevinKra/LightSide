import React from "react";
import "./Crawl.scss";

export default function Crawl(props) {
  const collapse = { height: "0vw", transition: "0.5s height ease-in" };
  return (
    <section className="Crawl" style={props.displayCrawl ? null : collapse}>
      <p>CRAWL</p>
      <button onClick={props.turnOffCrawl}>X</button>
    </section>
  );
}
