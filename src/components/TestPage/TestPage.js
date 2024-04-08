import "./TestPage.css";
export function TestPage({ theme, onEscapePreview }) {
  const primaryColor = theme.colors[0];
  const secondaryColor = theme.colors[1];
  const surfaceColor = theme.colors[2];
  const surfaceOnColor = theme.colors[3];
  console.log(secondaryColor);
  function handleClick() {
    onEscapePreview();
  }
  return (
    <div className="testpage">
      <button className="testpage-closepreview_button" onClick={handleClick}>
        Close Preview
      </button>
      <h1 className="testpage-title" style={{ color: primaryColor.value }}>
        {theme.name}
      </h1>
      <article className="testpage-simple_paragraph">
        <h2 className="testpage-simple_paragraph-headline">A Headline</h2>
        <p className="testpage-simple_paragraph-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </article>
      <article
        className="testpage-hightlighted_paragraph"
        style={{ backgroundColor: secondaryColor.value }}
      >
        <h2 className="testpage-hightlighted_paragraph-headline">
          A Hightlight Box
        </h2>
        <p className="testpage-hightlighted_paragraph-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </article>
      <ul className="testpage-style_buttons">
        <button
          className="style_buttons-contained_button"
          style={{ backgroundColor: surfaceOnColor.value }}
        >
          Contained
        </button>

        <button
          className="testpage-style_buttons-outline_button"
          style={{ backgroundColor: surfaceColor.value }}
        >
          Outlined
        </button>
        <button
          className="testpage-style_buttons-primary_button"
          style={{ backgroundColor: primaryColor.value }}
        >
          {primaryColor.role}
        </button>
        <button
          className="testpage-style_buttons-secondary_button"
          style={{ backgroundColor: secondaryColor.value }}
        >
          {secondaryColor.role}
        </button>
      </ul>
    </div>
  );
}
