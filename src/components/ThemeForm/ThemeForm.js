import "./ThemeForm.css";
import { ColorPicker } from "../ColorPicker/ColorPicker.js";
import { useState } from "react";

// Use uncontrolled inputs and give the input fields a defaultValue.
// error catching ?

export function ThemeForm({ onAddTheme }) {
  const primaryDefaultValue = "#1DDA82";
  const secondaryDefaultValue = "#3867E0";
  const surfaceDefaultValue = "#9BE5D2";
  const onSurfaceDefaultValue = "#E1CB65";
  const [primary, setPrimary] = useState(primaryDefaultValue);
  const [secondary, setSecondary] = useState(secondaryDefaultValue);
  const [surface, setSurface] = useState(surfaceDefaultValue);
  const [surfaceon, setOnSurface] = useState(onSurfaceDefaultValue);

  function handleChangePrimary(color) {
    setPrimary(color);
  }
  function handleChangeSecondary(color) {
    setSecondary(color);
  }
  function handleChangeSurface(color) {
    setSurface(color);
  }
  function handleChangeOnSurface(color) {
    setOnSurface(color);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    onAddTheme({ name, primary, secondary, surface, surfaceon });
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="theme-form">
      <h2 className="theme-form-headline">Add a Theme</h2>
      <input
        className="theme-form-name-input"
        placeholder="Name"
        name="name"
        required
      />
      <div className="theme-form-color_container">
        <ColorPicker
          name="primary"
          defaultValue={primaryDefaultValue}
          onChangeColor={handleChangePrimary}
        />
        <ColorPicker
          name="secondary"
          defaultValue={secondaryDefaultValue}
          onChangeColor={handleChangeSecondary}
        />
        <ColorPicker
          name="surface"
          defaultValue={surfaceDefaultValue}
          onChangeColor={handleChangeSurface}
        />
        <ColorPicker
          name="surfaceon"
          defaultValue={onSurfaceDefaultValue}
          onChangeColor={handleChangeOnSurface}
        />
      </div>
      <button className="theme-form-button">Add Theme</button>
    </form>
  );
}

/*   Lösungsversuch ohne einzelne States..
  set [theme, setTheme] = useState(["", "#1DDA82", "#3867E0", "#9BE5D2", "#E1CB65"])
  function handleChange(event) {
    const role = event.target; 
    const color = event.target.value;
    role === "primary" && setTheme....
  }*/
