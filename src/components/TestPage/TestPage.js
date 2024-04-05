export function TestPage({ theme, onEscapePreview }) {
  const primaryColor = theme.colors[0];
  const secondaryColor = theme.colors[1];
  function handleClick() {
    onEscapePreview();
  }
  return (
    <div>
      <button className="closepreview_button" onClick={handleClick}>
        Close Preview
      </button>
      ;
      <h1 className="title" style={{ primaryColor }}>
        {theme.name}
      </h1>
      <article className="simple_paragraph">
        <h2 className="simple_paragraph-headline">A Headline</h2>
        <p className="simple_paragraph-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </article>
      <article className="hightlighted_paragraph">
        <h2 className="hightlighted_paragraph-headline">A Hightlight Box</h2>
        <p className="hightlighted_paragraph-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </article>
      <ul className="style_buttons">
        <button className="style_buttons-contained_button"></button>
        <button className="style_buttons-outline_button"></button>
        <button
          className="style_buttons-primary_button"
          style={{ primaryColor }}
        ></button>
        <button
          className="style_buttons-secondary_button"
          style={{ secondaryColor }}
        ></button>
      </ul>
    </div>
  );
}
