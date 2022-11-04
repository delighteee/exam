import React from "react";
import { Helmet } from "react-helmet-async";

export default function ProductManagement() {
  return (
    <main className="">
       <Helmet>
        <title>Product Management</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <img></img>
      <p>
        This is the route of product Management.<br></br> 
        We provide an outside of the job learning experience for entry level
        professionals across industries.
      </p>
    </main>
  );
}
