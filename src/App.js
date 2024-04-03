import "./App.css";
import React, { useState } from "react";
import { themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(themes[0]);

  return (
    <main>
      <Header />
      {themes.map((theme) => (
        <ThemeDisplay theme={theme} />
      ))}
    </main>
  );
}

export default App;
