import React from "react";
import { Link } from "react-router-dom";
import "./Crawl.scss";

export default function Crawl() {
  //SetTimeout scroll to HeroContent (Upon completion of crawl)
  return (
    <section className="Crawl">
      <p>CRAWL</p>
      <Link to="/main">X</Link>
    </section>
  );
}
