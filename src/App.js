import "./App.css";
import React, { useState } from "react";
import { themes } from "./db.js";
import { ColorCard } from "./components/ColorCard/ColorCard";

function App() {
  //
  const [theme, setTheme] = useState(themes[0]);

  const themeName = theme.name;
  const primaryColorObject = theme.colors[0];
  const secondaryColorObject = theme.colors[1];
  const surfaceColorObject = theme.colors[2];

  return (
    <body style={{ borderColor: theme.colors[3].value }}>
      <h1>Theme Creator</h1>
      <section>
        <h2>{themeName}</h2>

        <ColorCard colorObject={primaryColorObject} />
        <ColorCard colorObject={secondaryColorObject} />
        <ColorCard colorObject={surfaceColorObject} />
      </section>
    </body>
  );
}

export default App;
