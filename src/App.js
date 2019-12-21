import React from "react";
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
      name: "Crypto",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png"
    },
    {
      name: "Gibraltar",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-gibraltar.png.adapt.crop16x9.png"
    },
    {
      name: "Mirage",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png"
    },
    {
      name: "Octane",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png"
    },
    {
      name: "Pathfinder",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png"
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
    },
    {
      name: "Wraith",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png"
    },
    {
      name: "Wattson",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.png"
    },
    {
      name: "Bangalore",
      img:
        "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png"
    }
  ];

  return (
    <div className="App">
      <Panels list={list} />
    </div>
  );
}

export default App;
