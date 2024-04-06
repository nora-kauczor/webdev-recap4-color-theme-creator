import "./EditTheme.css";
export function EditTheme({ onSaveTheme, theme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userTheme = Object.fromEntries(formData);
    onSaveTheme(userTheme);
  }
  console.log(theme);
  return (
    <div>
      <form onSubmit={handleSubmit} className="theme-form">
        <label className="theme-form-name-label" htmlFor="input_theme-name">
          Edit Theme
        </label>
        <input
          className="theme-form-name-input"
          id="input_theme_name"
          defaultValue={theme.name}
          name="name"
          required
        />
        <div className="theme-form-colors">
          <input
            type="color"
            className="theme-form-colors-input"
            name="primary"
            defaultValue={theme.colors[0].value}
          />
          <input
            type="color"
            className="theme-form-colors-input"
            name="secondary"
            defaultValue={theme.colors[1].value}
          />
          <input
            type="color"
            className="theme-form-colors-input"
            name="surface"
            defaultValue={theme.colors[2].value}
          />
          <input
            type="color"
            className="theme-form-colors-input"
            name="surfaceon"
            defaultValue={theme.colors[3].value}
          />
        </div>
        <button>Save Theme</button>
      </form>
    </div>
  );
}
