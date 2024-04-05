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
  const [onSurface, setOnSurface] = useState(onSurfaceDefaultValue);

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

  // falls hier reset dann muss auch name (in color picker) wissen, dass der name wieder zu dem namen der default-farbe zurückgeändert wird. das passiert hier nicht, weil wir hier ....
  function handleSubmit(event) {
    event.preventDefault();
    const themeName = event.target.elements.name.value;
    console.log(onSurface);
    onAddTheme({ themeName, primary, secondary, surface, onSurface });
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="theme-form">
      <label className="theme-form-name-label" htmlFor="input_theme-name">
        Add a Theme
      </label>
      <input
        className="theme-form-name-input"
        id="input_theme_name"
        placeholder="Name"
        name="name"
        required
      />
      <div className="theme-form-colors">
        <ColorPicker
          className="theme-form-colors-input"
          name="primary"
          defaultValue={primaryDefaultValue}
          onChangeColor={handleChangePrimary}
        />
        <ColorPicker
          className="theme-form-colors-input"
          name="secondary"
          defaultValue={secondaryDefaultValue}
          onChangeColor={handleChangeSecondary}
        />
        <ColorPicker
          className="theme-form-colors-input"
          name="surface"
          defaultValue={surfaceDefaultValue}
          onChangeColor={handleChangeSurface}
        />
        <ColorPicker
          className="theme-form-colors-input"
          name="surface_on"
          defaultValue={onSurfaceDefaultValue}
          onChangeColor={handleChangeOnSurface}
        />
      </div>
      <button>Add Theme</button>
    </form>
  );
}
