import "./ColorCard.css";

export function ColorCard({ colorObject }) {
  return (
    <ul className="color-card">
      <li name="color-description" className="color-description">
        <h3 name="color-description-role" className="color-description-role">
          {colorObject.name}
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
}
