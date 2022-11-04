import React from "react";
import { Helmet } from "react-helmet-async";
import pm from "../assets/pm.svg";

export default function ProductManagement() {
  return (
    <main className="">
      <Helmet>
        <title>Product Management</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="track-container">
        <img src={pm} alt="product-manager" className="track-image"></img>
        <p className="track-details">
          Product management is an organizational function that guides every
          step of a product’s lifecycle — from development to positioning and
          pricing — by focusing on the product and its customers first and
          foremost. To build the best possible product, product managers
          advocate for customers within the organization and make sure the voice
          of the market is heard and heeded.
        </p>
      </div>
    </main>
  );
}
