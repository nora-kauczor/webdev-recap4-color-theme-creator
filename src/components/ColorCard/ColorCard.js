import "./ColorCard.css";

export function ColorCardDetails({ color }) {
  return (
    <li className="color-card">
      <div name="color-description" className="color-description">
        <h3 name="color-description-role" className="color-description-role">
          {color.role}
        </h3>
        <p name="color-description-hex" className="color-description-hex">
          {color.value}
        </p>
      </div>

      <div
        style={{ backgroundColor: color.value }}
        className="color-display--details"
      ></div>
    </li>
  );
}

export function ColorCardPreview({ color }) {
  return (
    <li className="color-card">
      <div
        style={{ backgroundColor: color.value }}
        className="color-display--preview"
      ></div>
    </li>
  );
}
