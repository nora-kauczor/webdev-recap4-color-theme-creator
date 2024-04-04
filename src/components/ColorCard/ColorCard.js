import "./ColorCard.css";
import { useState } from "react";

export function ColorCardDetails({ color }) {
  const [colorName, setColorName] = useState("");

  // warum entsteht hier ein loop???? ich calle ja innerhalb des fetchens hier keine setterfunktion (die ColorCardDetails neu starten würde)
  // async function getName(color) {
  //   const response = await fetch(
  //     `https://www.thecolorapi.com/id?hex=<${color.value}>`
  //   );
  //   const data = await response.json();
  //   const colorName = data.name.value;

  //   return colorName;
  // }

  // useEffect(() => {
  //   console.log("inside effect");
  //   fgetName();
  // }, [colorName]);

  return (
    <li className="color-card">
      <div name="color-description" className="color-description">
        <h3 name="color-description-role" className="color-description-role">
          {color.role}
        </h3>
        <p name="color-description-name" className="color-description-name"></p>
        <p name="color-description-hex" className="color-description-hex"></p>
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
