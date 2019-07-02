import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Crawl.scss";

export default function Crawl(props) {
  // const collapse = { height: "0vw", transition: "0.5s height ease-in" };
  return (
    <section
      className="Crawl"
      // style={props.displayCrawl ? null : collapse}
    >
      <p>CRAWL</p>
      <Link to="hero-section" smooth={true} offset={0} duration={500}>
        X
      </Link>
    </section>
  );
}
