import "./ColorCard.css";
import { useState, useEffect } from "react";

export function ColorCardDetails({ color }) {
  // const [colorName, setColorName] = useState("");

  // async function getName(color) {
  //   const indexToDelete = 0;
  //   const hexWithoutHashtag = color.value.slice(indexToDelete + 1);
  //   try {
  //     const response = await fetch(
  //       `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
  //     );
  //     const data = await response.json();
  //     setColorName(data.name.value);
  //   } catch {
  //     console.error("An error occured while trying to fetch.");
  //   }
  // }

  // useEffect(() => {
  //   getName(color);
  // }, [color]);

  return (
    <li className="color-card">
      <div name="color-description" className="color-description">
        <h3 name="color-description-role" className="color-description-role">
          {color.role}
        </h3>
        <p name="color-description-name" className="color-description-name"></p>
        {color.name}
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
