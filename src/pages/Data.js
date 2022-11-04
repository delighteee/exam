import React from "react";
import { Helmet } from "react-helmet-async";
import data from "../assets/data.svg";

export default function Data() {
  return (
    <main className="">
      <Helmet>
        <title>Data Analysis</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="track-container">
        <img src={data} alt="codingr" className="track-image"></img>
        <p className="track-details">
          Data analysis a process of inspecting, cleansing, transforming, and modeling data
          with the goal of discovering useful information, informing
          conclusions, and supporting decision-making. Data analysis has
          multiple facets and approaches, encompassing diverse techniques under
          a variety of names, and is used in different business, science, and
          social science domains. In today's business world, data analysis
          plays a role in making decisions more scientific and helping
          businesses operate more effectively
        </p>
      </div>
    </main>
  );
}
