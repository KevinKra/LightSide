import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Crawl.scss";

export default function Crawl() {
  //SetTimeout scroll to HeroContent (Upon completion of crawl)
  return (
    <section className="Crawl">
      <p>CRAWL</p>
      <Link to="hero-section" smooth={true} offset={0} duration={500}>
        X
      </Link>
    </section>
  );
}
