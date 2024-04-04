import "./App.css";
import React, { useState } from "react";
import { initialThemes, themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";

import { v4 as uuid } from "uuid";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(userTheme) {
    setThemes([{ key: uuid(), ...userTheme }, ...initialThemes]);
  }

  return (
    <main>
      <Header />
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <ThemeDisplay key={theme.id} theme={theme} />
      ))}
    </main>
  );
}

export default App;
