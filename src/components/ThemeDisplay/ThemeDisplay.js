import "./ThemeDisplay.css";
import { ColorCardDetails, ColorCardPreview } from "../ColorCard/ColorCard.js";
import { EditTheme } from "../EditTheme/EditTheme.js";
import { useState } from "react";

export function ThemeDisplay({ theme, onDeleteTheme }) {
  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleToggle() {
    setShowDetails(!showDetails);
  }
  function handleClick() {
    onDeleteTheme(theme);
  }
  function handleSwitchToEditMode() {
    setEditMode(!editMode);
  }

  // ThemeDisplay bübergibt handleSaveTheme an sein child EditTheme. EditTheme ruft die Inputdaten ab und macht ein Objekt daraus. Dieses Objekt ist der Input von handleSaveTheme, die wiederum handleAddTheme in der app-componente callt. handleAddTheme callt die Setter-funktion des themes-arrays, der diesen array aktualisiert.
  function handleSaveTheme(editedTheme) {
    onAddTheme(editedTheme);
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
          {showDetails ? "🙈" : "👀"}
        </button>
      </h2>
      {showDetails && !editMode && (
        <button className="card-container-editbutton">Edit</button>
      )}
      {showDetails && !editMode && (
        <button className="card-container-deletebutton" onClick={handleClick}>
          Delete
        </button>
      )}
      {showDetails && !editMode && (
        <ul className="card-container-colors--details">
          {theme.colors.map((color) => (
            <ColorCardDetails key={color.value} color={color} />
          ))}
        </ul>
      )}
      {!showDetails && !editMode && (
        <ul className="card-container-colors--preview">
          {theme.colors.map((color) => (
            <ColorCardPreview key={color.value} color={color} />
          ))}
        </ul>
      )}
      {showDetails && editMode && (
        <EditTheme theme={theme} onSaveTheme={handleSaveTheme} />
      )}
    </section>
  );
}
