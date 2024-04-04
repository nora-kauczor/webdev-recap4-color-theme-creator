import "./ThemeDisplay.css";
import { ColorCardDetails, ColorCardPreview } from "../ColorCard/ColorCard.js";

import { useState } from "react";

export function ThemeDisplay({ theme }) {
  const [showDetails, setShowDetails] = useState(true);

  function handleToggle() {
    setShowDetails(!showDetails);
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
      <ul>
        {theme.colors.map((color) =>
          showDetails ? (
            <ColorCardDetails key={color.value} color={color} />
          ) : (
            <ColorCardPreview key={color.value} color={color} />
          )
        )}
      </ul>
    </section>
  );
}
