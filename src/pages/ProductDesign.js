import React from "react";
import { Helmet } from "react-helmet-async";
import ui from "../assets/ui.svg"

export default function ProductDesign() {
  return (
    <main className="">
      <Helmet>
        <title>Product Design</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="track-container">
     <img src={ui} alt="ui-design" className="track-image"></img>
      <p className="track-details">
        Product design is crucial because it creates a unique and creative
        experience for the consumer. As a result, the product's design can
        attract new customers and create loyal ones. A product's design can go
        far in creating a memorable experience, which in turn will build strong
        brand loyalty
      </p>
      </div>
    </main>
  );
}
