import "./App.css";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes, themes } from "./db.js";
import { ThemeDisplay } from "./components/ThemeDisplay/ThemeDisplay.js";
import { Header } from "./components/Header/Header.js";
import { ThemeForm } from "./components/ThemeForm/ThemeForm.js";
import { TestPage } from "./components/TestPage/TestPage.js";
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

  // previewTheme soll folgende Werte annehmen: Positionen der einzelnen Themes innerhalb des themes-Arrays oder null
  // null soll heißen: show main page
  const [previewTheme, setPreviewTheme] = useState(null);
  /* diese funktion wird aus themedisplay heraus gecallt mit dem jeweiligen theme als input. es callt dann den setter von preview
Theme und ändert ihn zu dem jeweiligen theme (von dem aus gecallt wurde)*/
  function handlePreviewOfSpecifcThemeAndHideOtherThemes(theme) {
    setPreviewTheme(theme);
  }
  function handleEscapePreview() {
    setPreviewTheme(null);
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
          />
        ))}
      </main>
    );
  } else {
    return (
      <TestPage theme={previewTheme} onEscapePreview={handleEscapePreview} />
    );
  }

  // function handlePreviewOfSpecifcThemeAndHideOtherThemes(theme) {
  //   return <TestPage theme={theme} onEscapePreview={handleEscapePreview} />;
  // }
  // function handleEscapePreview() {
  //   return (
  //     <main>
  //       <Header />
  //       <ThemeForm onAddTheme={handleAddTheme} />
  //       {themes.map((theme) => (
  //         <ThemeDisplay
  //           onDeleteTheme={handleDeleteTheme}
  //           onRemovePrevThemeAndReplaceWithEditedTheme={
  //             handleRemovePrevThemeAndReplaceWithEditedTheme
  //           }
  //           onPreviewOfSpecifcThemeAndHideOtherThemes={
  //             handlePreviewOfSpecifcThemeAndHideOtherThemes
  //           }
  //           key={theme.id}
  //           theme={theme}
  //         />
  //       ))}
  //     </main>
  //   );
  // }
}

export default App;
