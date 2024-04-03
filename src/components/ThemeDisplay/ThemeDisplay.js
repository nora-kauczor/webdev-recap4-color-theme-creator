import "./ThemeDisplay.css";
import { ColorCard } from "../ColorCard/ColorCard.js";
import { uid } from "uid";
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
      <div
        className={
          showDetails
            ? "card-container-colors--details"
            : "card-container-colors--preview"
        }
      >
        {theme.colors.map((color) => (
          <ColorCard
            colorObject={{ key: uid(), ...color }}
            showDetails={showDetails}
          />
        ))}
      </div>
    </section>
  );
}
