import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Panels from "./Components/Panels/Panels";

function App() {
  const list = [
    {
      name: "Lifeline",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.png"
    },
    {
      name: "Bloodhound",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.png"
    },
    {
      name: "Caustic",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.png"
    }
  ];
  return (
    <div className="App">
      <Panels list={list} />
    </div>
  );
}

export default App;
