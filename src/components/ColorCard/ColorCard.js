import "./ColorCard.css";

export function ColorCard({ colorObject, showDetails }) {
  return (
    <ul className="color-card">
      {showDetails && (
        <li name="color-description" className="color-description">
          <h3 name="color-description-role" className="color-description-role">
            {colorObject.role}
          </h3>
          <p name="color-description-hex" className="color-description-hex">
            {colorObject.value}
          </p>
        </li>
      )}
      <li
        style={{ backgroundColor: colorObject.value }}
        className={
          showDetails ? "color-display--details" : "color-display--preview"
        }
      ></li>
    </ul>
  );
}
