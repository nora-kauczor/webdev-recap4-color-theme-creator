export function ColorCard({ colorObject }) {
  return (
    <ul class="color-card-wrapper">
      <li name="color-description" class="color-description">
        <h3 name="color-description-name" class="color-description-name">
          {colorObject.name}
        </h3>
        <p name="color-description-hex" class="color-description-hex">
          {colorObject.value}
        </p>
      </li>
      <li
        name="color-display"
        class="color-display"
        style={{background-color: colorObject.value}}
      ></li>
    </ul>
  );
}
