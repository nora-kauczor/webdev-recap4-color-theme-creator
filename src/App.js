import "./App.css";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes, themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";
import { TestPage } from "./components/TestPage/TestPage.js";
import { themeRightStructure } from "./utils/themeRightStructure.js";

function App() {
  // const [themes, setThemes] = useLocalStorageState("themes", {
  //   defaultValue: initialThemes,
  // });
  const [themes, setThemes] = useState(initialThemes);
  const [view, setView] = useState("preview");

  function handleAddTheme(userTheme) {
    const userThemeRightStructure = themeRightStructure(userTheme);
    setThemes([userThemeRightStructure, ...themes]);
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

    const editedThemeRightStructure = themeRightStructure(editedTheme);
    setThemes([editedThemeRightStructure, ...themesWithoutPrevTheme]);
  }

  const [previewTheme, setPreviewTheme] = useState(null);

  function handlePreviewOfSpecifcThemeAndHideOtherThemes(theme) {
    setPreviewTheme(theme);
  }
  function handleEscapePreview() {
    setPreviewTheme(null);
    setView("details");
  }

  // JSX PART
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
            view={view}
            setView={setView}
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
