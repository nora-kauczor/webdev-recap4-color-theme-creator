import "./ThemeDisplay.css";
import { ColorCardDetails, ColorCardPreview } from "../ColorCard/ColorCard.js";
import { EditTheme } from "../EditTheme/EditTheme.js";
import { useState } from "react";

export function ThemeDisplay({
  theme,
  onRemovePrevThemeAndReplaceWithEditedTheme,
  onPreviewOfSpecifcThemeAndHideOtherThemes,
  onDeleteTheme,
}) {
  const [view, setView] = useState("preview");
  function handleToggle() {
    view === "preview" ? setView("details") : setView("preview");
  }

  function handleClick() {
    onDeleteTheme(theme);
  }

  function handleSwitchToEditMode() {
    setView("edit");
  }

  function handleSaveTheme(editedTheme) {
    onRemovePrevThemeAndReplaceWithEditedTheme(editedTheme, theme);
    setView("preview");
  }

  // Callt die Funktion in der App, die dafür zuständig ist, den Wert des States "previewTheme" zu ändern und gibt ihr als Input das eigene Theme (also aus demjenigen Theme, in dem geklickt wird)
  function handleGoToPreviewOfTheme() {
    onPreviewOfSpecifcThemeAndHideOtherThemes(theme);
  }

  return (
    <section name="card-container" className="card-container">
      <h2 className="card-container-header">
        <p
          name="card-container-header-name"
          className="card-container-header-name"
        >
          {theme.name}
        </p>
        <button
          name="card-container-header-button"
          className="card-container-header-button"
          onClick={handleToggle}
        >
          {view === "preview" ? "👀" : "🙈"}
        </button>
      </h2>
      {view === "preview" && (
        <ul className="card-container-colors--preview">
          {theme.colors.map((color) => (
            <ColorCardPreview key={color.value} color={color} />
          ))}
        </ul>
      )}
      {view === "details" && (
        <div>
          <button
            className="card-container-trybutton"
            onClick={handleGoToPreviewOfTheme}
          >
            Try
          </button>
          <button
            className="card-container-editbutton"
            onClick={handleSwitchToEditMode}
          >
            Edit
          </button>
          <button className="card-container-deletebutton" onClick={handleClick}>
            Delete
          </button>
          <ul className="card-container-colors--details">
            {theme.colors.map((color) => (
              <ColorCardDetails key={color.value} color={color} />
            ))}
          </ul>
        </div>
      )}

      {view === "edit" && (
        <EditTheme theme={theme} onSaveTheme={handleSaveTheme} />
      )}
    </section>
  );
}
