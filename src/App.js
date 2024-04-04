import "./App.css";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes, themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";

import { v4 as uuid } from "uuid";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [view, setView] = useState("preview");

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

      ...themes,
    ]);
  }

  function handleDeleteTheme(themeToDelete) {
    setThemes(themes.filter((theme) => theme.id != themeToDelete.id));
  }

  function handleSaveTheme(editedTheme, prevTheme) {
    const themesWithoutPrevTheme = themes.filter(
      (theme) => theme.id != prevTheme.id
    );
    setThemes(editedTheme, themesWithoutPrevTheme);
    setView("preview");
  }

  return (
    <main>
      <Header />
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <ThemeDisplay
          onDeleteTheme={handleDeleteTheme}
          handleSaveTheme={handleSaveTheme}
          key={theme.id}
          theme={theme}
          view={view}
        />
      ))}
    </main>
  );
}

export default App;
