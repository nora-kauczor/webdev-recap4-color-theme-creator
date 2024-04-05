import "./App.css";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes, themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";

import { v4 as uuid } from "uuid";

function App() {
  // const [themes, setThemes] = useLocalStorageState("themes", {
  //   defaultValue: initialThemes,
  // });
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(userTheme) {
    // const copyOfUserThemeWithoutName = { ...userTheme };
    // delete copyOfUserThemeWithoutName.name;
    setThemes([
      {
        key: uuid(),
        name: userTheme.name,
        // colors: [
        //   Object.entries(copyOfUserThemeWithoutName).map(([key, value]) => ({
        //     role: key,
        //     value: value,
        //   })),
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

  function handleRemovePrevThemeAndReplaceWithEditedTheme(
    editedTheme,
    prevTheme
  ) {
    const themesWithoutPrevTheme = themes.filter(
      (theme) => theme.id != prevTheme.id
    );

    setThemes([
      {
        key: uuid(),
        name: editedTheme.name,
        colors: [
          {
            role: "primary",
            value: editedTheme.primary,
          },
          {
            role: "secondary",
            value: editedTheme.secondary,
          },
          {
            role: "surface",
            value: editedTheme.surface,
          },
          {
            role: "surface-on",
            value: editedTheme.surface_on,
          },
        ],
      },

      ...themesWithoutPrevTheme,
    ]);
  }

  return (
    <main>
      <Header />
      <ThemeForm onAddTheme={handleAddTheme} />
      {themes.map((theme) => (
        <ThemeDisplay
          onDeleteTheme={handleDeleteTheme}
          onRemovePrevThemeAndReplaceWithEditedTheme={
            handleRemovePrevThemeAndReplaceWithEditedTheme
          }
          key={theme.id}
          theme={theme}
        />
      ))}
    </main>
  );
}

export default App;
