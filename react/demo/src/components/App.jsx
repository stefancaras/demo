import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center">
        <Cards
          img="https://picsum.photos/id/237/200/300"
          title="dog"
          text="cute dog" />
        <Cards
          img="https://picsum.photos/id/238/200/300"
          title="skyscrapper"
          text="a nice day in New York" />
        <Cards
          img="https://picsum.photos/id/239/200/300"
          title="dandellion"
          text="the joy of life" />
        <Cards
          img="https://picsum.photos/id/240/200/300"
          title="wall"
          text="how not to drown" />
        <Cards
          img="https://picsum.photos/id/241/200/300"
          title="hill"
          text="far from the madding crowd" />
      </div>
    </div>
  );
}