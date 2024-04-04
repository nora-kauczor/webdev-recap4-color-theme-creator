import "./App.css";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes, themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";

import { v4 as uuid } from "uuid";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(userTheme) {
    // const userColors = userTheme.slice();
    // console.log(userColors);
    setThemes([
      {
        key: uuid(),
        name: userTheme.name,
        colors: [
          {
            role: "primary",
            value: userTheme.primary,
          },
          {
            role: "secondary",
            value: userTheme.secondary,
          },
          {
            role: "surface",
            value: userTheme.surface,
          },
          {
            role: "surface-on",
            value: userTheme.surface_on,
          },
        ],
      },

      ...initialThemes,
    ]);
  }

  function handleDeleteTheme(themeToDelete) {
    setThemes(themes.filter((theme) => theme.id != themeToDelete.id));
  }

  return (
    <main>
      <Header />
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <ThemeDisplay
          onDeleteTheme={handleDeleteTheme}
          key={theme.id}
          theme={theme}
        />
      ))}
    </main>
  );
}

export default App;
