import "./App.css";
import React, { useState } from "react";
import { themes } from "./db.js";
import { ColorCard } from "./components/ColorCard/ColorCard";
import { Header } from "./components/Header/Header.js";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(themes[0]);

  const themeName = theme.name;
  const primaryColorObject = theme.colors[0];
  const secondaryColorObject = theme.colors[1];
  const surfaceColorObject = theme.colors[2];
  const surfaceOnColorObject = theme.colors[3];

  return (
    <main>
      <Header />
      <section name="card-container" className="card-container">
        <h2
          name="card-container-theme_name"
          className="card-container-theme_name"
        >
          {themeName}
        </h2>
        <ColorCard colorObject={primaryColorObject} />
        <ColorCard colorObject={secondaryColorObject} />
        <ColorCard colorObject={surfaceColorObject} />
        <ColorCard colorObject={surfaceOnColorObject} />
      </section>
    </main>
  );
}

export default App;
