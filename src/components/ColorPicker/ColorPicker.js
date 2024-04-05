import "./ColorPicker.css";
import { useState, useEffect } from "react";

export function ColorPicker({ defaultValue }) {
  const [field, setField] = useState(defaultValue);
  const [name, setName] = useState(() => {
    getName(defaultValue);
  });
  const [hex, setHex] = useState(defaultValue);

  function handleChangeField(event) {
    const submittedColor = event.target.value;
    console.log(submittedColor);
    setField(submittedColor);
  }

  // to change hex when user changed field
  function handleChangeHex(event) {
    const submittedColor = event.target.value;
    console.log(submittedColor);
    setHex(submittedColor);
  }

  //// eventuell auslagern in utils als hilfsfunktion
  async function getName(hex) {
    const indexToDelete = 0;
    const hexWithoutHashtag = hex.slice(indexToDelete + 1);
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
    );
    const data = await response.json();
    setName(data.name.value);
  }

  useEffect(() => {
    getName(hex);
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
        {name}
      </p>
      <input
        name="hex"
        className="color-hex"
        type="text"
        defaultValue={defaultValue}
        value={hex}
        onChange={handleChangeField}
      />
    </div>
  );
}
