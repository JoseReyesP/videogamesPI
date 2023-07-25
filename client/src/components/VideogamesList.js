import React from "react";
import VideogameCard from "./VideogameCard";
import "./VideogameList.css";

let dummi = [
  { name: "super Mario 1", genero: "plataforma" },
  { name: "super Mario 2", genero: "plataforma" },
  { name: "super Mario 3", genero: "plataforma" },
  { name: "super Mario 4", genero: "plataforma" },
  { name: "super Mario 5", genero: "plataforma" },
  { name: "super Mario 6", genero: "plataforma" },
  { name: "super Mario 7", genero: "plataforma" },
  { name: "super Mario 8", genero: "plataforma" },
];
const VideogamesList = () => {
  return (
    <div className="wrapper">
      {dummi.map((d) => (
        <VideogameCard name={d.name} genero={d.genero} />
      ))}
    </div>
  );
};

export default VideogamesList;
