import "./ThemeForm.css";

// Design the form layout with appropriate input fields for title and colors.
// Use uncontrolled inputs and give the input fields a defaultValue.
// Make the name input required.

export function ThemeForm({ onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userTheme = Object.fromEntries(formData);
    event.target.reset();
    onAddTheme(userTheme);
  }

  return (
    <form className="theme-form">
      <label htmlFor="input_theme-name">Add a Theme</label>
      <input id="input_theme-name" placeholder="Name"></input>
      <div className="theme-form-colors">
        <input
          type="color"
          className="color-input"
          name="input-primary_color"
        />
        <input
          type="color"
          className="color-input"
          name="input-secondary_color"
        />
        <input
          type="color"
          className="color-input"
          name="input-surface_color"
        />
        <input
          type="color"
          className="color-input"
          name="input-surface_on_color"
        />
      </div>
      <button onSubmit={handleSubmit}>Add Theme</button>
    </form>
  );
}
