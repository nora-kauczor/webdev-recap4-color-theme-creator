import "./ColorCard.css";

export function ColorCard({ colorObject, showDetails }) {
  if (showDetails) {
    return (
      <ul className="color-card">
        <li name="color-description" className="color-description">
          <h3 name="color-description-role" className="color-description-role">
            {colorObject.role}
          </h3>
          <p name="color-description-hex" className="color-description-hex">
            {colorObject.value}
          </p>
        </li>
        <li
          name="color-display"
          className="color-display"
          style={{ backgroundColor: colorObject.value }}
        ></li>
      </ul>
    );
  } else {
    return (
      <p
        name="color-display--preview"
        className="color-display--preview"
        style={{ backgroundColor: colorObject.value }}
      ></p>
    );
  }
}
