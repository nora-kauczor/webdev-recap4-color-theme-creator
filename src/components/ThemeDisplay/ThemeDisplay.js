import "./ThemeDisplay.css";
import { ColorCard } from "../ColorCard/ColorCard.js";

export function ThemeDisplay({ theme }) {
  const primaryColor = theme.colors[0];
  const secondaryColor = theme.colors[1];
  const surfaceColor = theme.colors[2];
  const surfaceOnColor = theme.colors[3];

  let showDetails = true;
  function handleToggle() {
    return (showDetails = !showDetails);
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
