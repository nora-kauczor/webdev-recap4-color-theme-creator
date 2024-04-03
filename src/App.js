import "./App.css";
import React, { useState } from "react";
import { themes } from "./db.js";
import { ColorCard } from "./components/ColorCard/ColorCard";
import "./App.css";

function App() {
  //
  const [theme, setTheme] = useState(themes[0]);

  const themeName = theme.name;
  const primaryColorObject = theme.colors[0];
  const secondaryColorObject = theme.colors[1];
  const surfaceColorObject = theme.colors[2];

  return (
    <main style={{ borderColor: theme.colors[3].value }}>
      <header>
        <h1>Theme Creator</h1>
      </header>
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
      </section>
    </main>
  );
}

export default App;
