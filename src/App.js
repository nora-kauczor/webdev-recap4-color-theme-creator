import "./App.css";
import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";
import { TestPage } from "./components/TestPage/TestPage.js";
import { themeRightStructure } from "./utils/themeRightStructure.js";
import { fetchName } from "./utils/fetchName.js";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [previewTheme, setPreviewTheme] = useState(null);

  async function handleAddTheme(userTheme) {
    const userThemeRightStructure = themeRightStructure(userTheme);
    await fetchName(userThemeRightStructure);

    setThemes([userThemeRightStructure, ...themes]);
  }

  function handleDeleteTheme(themeToDelete) {
    setThemes(themes.filter((theme) => theme.id != themeToDelete.id));
  }

  async function handleRemovePrevThemeAndReplaceWithEditedTheme(
    editedTheme,
    prevTheme
  ) {
    const themesWithoutPrevTheme = themes.filter(
      (theme) => theme.id != prevTheme.id
    );
    const editedThemeRightStructure = themeRightStructure(editedTheme);
    await fetchName(editedThemeRightStructure);
    setThemes([editedThemeRightStructure, ...themesWithoutPrevTheme]);
  }

  function handlePreviewOfSpecifcThemeAndHideOtherThemes(theme) {
    setPreviewTheme(theme);
  }

  // allerdings hiernach müsste die view auf details zurückgesetzt werden aber view muss im einzelnen theme drin sein (theme-weise)
  function handleEscapePreview() {
    setPreviewTheme(null);
  }

  if (previewTheme === null) {
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
            onPreviewOfSpecifcThemeAndHideOtherThemes={
              handlePreviewOfSpecifcThemeAndHideOtherThemes
            }
            key={theme.id}
            theme={theme}
          />
        ))}
      </main>
    );
  } else {
    return (
      <TestPage theme={previewTheme} onEscapePreview={handleEscapePreview} />
    );
  }
}

export default App;
