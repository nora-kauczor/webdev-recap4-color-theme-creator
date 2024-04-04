import "./ThemeDisplay.css";
import { ColorCardDetails, ColorCardPreview } from "../ColorCard/ColorCard.js";

import { useState } from "react";

export function ThemeDisplay({ theme, onDeleteTheme }) {
  const [showDetails, setShowDetails] = useState(true);

  function handleToggle() {
    setShowDetails(!showDetails);
  }
  function handleClick() {
    onDeleteTheme(theme);
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
      {showDetails && (
        <button className="card-container-deletebutton" onClick={handleClick}>
          Delete
        </button>
      )}
      {showDetails ? (
        <ul className="card-container-colors--details">
          {theme.colors.map((color) => (
            <ColorCardDetails key={color.value} color={color} />
          ))}{" "}
        </ul>
      ) : (
        <ul className="card-container-colors--preview">
          {theme.colors.map((color) => (
            <ColorCardPreview key={color.value} color={color} />
          ))}
        </ul>
      )}
    </section>
  );
}
