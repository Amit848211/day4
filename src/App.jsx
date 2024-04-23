import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Props1 from "./components/Props1";
import Props2 from "./components/Props2";
import img1 from "./image/B1.jpg";
import img2 from "./image/B2.jpg";
import img3 from "./image/T1.webp";
import img4 from "./image/T2.jpeg";

function App() {
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Lime", hex: "#00FF00" },
    { name: "Teal", hex: "#008080" },
    { name: "Brown", hex: "#A52A2A" },
  ];

  const movies = [
    {
      image1: img1,
      image2: img2,
      title: "Bright",
      year: "2017",
      actor: "David Ayer",
      time: "117 min",
      type: "Action,Crime,Fantasy",
      content:
        "Set in a world where fantsy creatures live side by side with humans.A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
    },
    {
      image1: img3,
      image2: img4,
      title: "Tomb Raider",
      year: "2018",
      actor: "Roar Uthaug",
      time: "125 min",
      type: "Action,Fantasy",
      content:
        "Lara Croft, the flercely independent daughter of a missing adventurer, must push harself beyond her limits when she finds herself on the island where her father disappeared.",
    },
  ];

  return (
    <>
      <div className="mt-10">
        <div className="w-full h-auto px-20 flex flex-wrap justify-between gap-5 ">
          {colors.map((color, index) => (
            <Props1 key={index} name={color.name} hex={color.hex} />
          ))}
        </div>
      </div>
      <div>
        <Props2 movies={movies} />
      </div>
    </>
  );
}

export default App;
