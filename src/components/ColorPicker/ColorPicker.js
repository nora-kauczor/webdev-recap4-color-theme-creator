import "./ColorPicker.css";
import { useState, useEffect } from "react";

export function ColorPicker({ defaultValue, onChangeColor }) {
  const [color, setColor] = useState(defaultValue);
  const [colorName, setColorName] = useState(() => {
    getColorName(defaultValue);
  });

  function handleChangeColor(event) {
    const submittedColor = event.target.value;
    setColor(submittedColor);
    onChangeColor(submittedColor);
  }

  async function getColorName(color) {
    const indexToDelete = 0;
    const hexWithoutHashtag = color.slice(indexToDelete + 1);
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
      );
      const data = await response.json();
      setColorName(data.name.value);
    } catch {
      console.error("An error occured while trying to fetch.");
    }
  }

  useEffect(() => {
    getColorName(color);
  }, [color]);

  // function handleLessThanTwoCharacters(event) {
  //   console.log(event.target.value.length());
  //   if (event.target.value.length() < 2) {
  //     event.target.value = defaultValue;
  //   }
  // }

  return (
    <div className="colorpicker">
      <input
        name="field"
        className="colorpicker-field"
        type="color"
        style={{ backgroundColor: color }}
        onChange={handleChangeColor}
      />
      <p name="name" className="colorpicker-name">
        {colorName}
      </p>
      <input
        name="hex"
        className="colorpicker-hex"
        type="text"
        value={color}
        onChange={handleChangeColor}
      />
    </div>
  );
}

/*A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
    at input
    at div
    at ColorPicker (http://localhost:3000/main.86d083301ce6f00f31f7.hot-update.js:27:3)
    at div
    at form
    at ThemeForm (http://localhost:3000/static/js/bundle.js:1083:3)
    at main
    at App (http://localhost:3000/static/js/bundle.js:45:78)*/
