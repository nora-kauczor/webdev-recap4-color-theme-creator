export function EditTheme({ onSaveTheme, theme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userTheme = Object.fromEntries(formData);
    onSaveTheme(userTheme);
  }

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
            defaultValue="#1DDA82"
          />
          <input
            type="color"
            className="theme-form-colors-input"
            name="secondary"
            defaultValue="#3867E0"
          />
          <input
            type="color"
            className="theme-form-colors-input"
            name="surface"
            defaultValue="#9BE5D2"
          />
          <input
            type="color"
            className="theme-form-colors-input"
            name="surface_on"
            defaultValue="#E1CB65"
          />
        </div>
        <button>Save Theme</button>
      </form>
    </div>
  );
}
