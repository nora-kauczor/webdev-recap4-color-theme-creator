import "./App.css";
import React, { useState } from "react";
import { themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import "./App.css";

function App() {
  const vividMeadow = themes[0];
  const duskAndDawn = themes[1];
  const portobello = themes[2];
  const [theme, setTheme] = useState(vividMeadow);

  return (
    <main>
      <Header />
      <ThemeDisplay theme={vividMeadow} />
      <ThemeDisplay theme={duskAndDawn} />
      <ThemeDisplay theme={portobello} />
    </main>
  );
}

export default App;
