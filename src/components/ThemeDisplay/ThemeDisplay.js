import "./ThemeDisplay.css";
import { ColorCard } from "../ColorCard/ColorCard.js";

// Create separate React components for preview and detail view of themes.
// Create a React component called Theme.
// Inside the Theme component, implement a toggle functionality between preview and detail view for themes.

// unten lösung für mehrere karten mit map()

export function ThemeDisplay({ theme }) {
  const primaryColor = theme.colors[0];
  const secondaryColor = theme.colors[1];
  const surfaceColor = theme.colors[2];
  const surfaceOnColor = theme.colors[3];

  let showDetails = true;

  function handleToggle() {
    showDetails = !showDetails;
    console.log(showDetails);
    return showDetails;
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
        <ColorCard colorObject={primaryColor} showDetails={showDetails} />
        <ColorCard colorObject={secondaryColor} showDetails={showDetails} />
        <ColorCard colorObject={surfaceColor} showDetails={showDetails} />
        <ColorCard colorObject={surfaceOnColor} showDetails={showDetails} />
      </div>
    </section>
  );
}
