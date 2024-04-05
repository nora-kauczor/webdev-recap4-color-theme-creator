import "./ColorPicker.css";
import { useState, useEffect } from "react";

// prevent that user empties the hex field completely bc it would cause an error
//

export function ColorPicker({ defaultValue, onChangeColor }) {
  const [field, setField] = useState(defaultValue);
  const [colorName, setColorName] = useState(() => {
    getColorName(defaultValue);
  });
  const [hex, setHex] = useState(defaultValue);

  function handleChangeField(event) {
    const submittedColor = event.target.value;
    setField(submittedColor);
    setHex(submittedColor);
    onChangeColor(submittedColor);
  }

  // to change hex when user changed field
  function handleChangeHex(event) {
    const submittedColor = event.target.value;
    setHex(submittedColor);
    onChangeColor(submittedColor);
  }

  //// eventuell auslagern in utils als hilfsfunktion
  async function getColorName(hex) {
    const indexToDelete = 0;
    const hexWithoutHashtag = hex.slice(indexToDelete + 1);
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
    );
    const data = await response.json();
    setColorName(data.name.value);
  }

  useEffect(() => {
    getColorName(hex);
  }, [hex]);

  return (
    <div>
      <input
        name="field"
        className="color-field"
        type="color"
        style={{ backgroundColor: field }}
        onChange={handleChangeHex}
      />
      <p name="name" className="color-name">
        {colorName}
      </p>
      <input
        name="hex"
        className="color-hex"
        type="text"
        value={hex}
        onChange={handleChangeField}
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
