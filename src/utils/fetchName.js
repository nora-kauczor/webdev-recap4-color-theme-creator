// input ist ein theme, in dessen color-array die objekte kein name-item haben
export async function fetchName(theme) {
  // promise ist der neue array, den wir zurückbekommen. in dem array haben die color-objekte jetzt ein item mehr als vorher: den name
  const promise = theme.colors.map(async (color) => {
    const indexToDelete = 0;
    const hexWithoutHashtag = color.value.slice(indexToDelete + 1);
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
    );
    const data = await response.json();
    return { ...color, name: data.name.value };
  });
  // auf das gefetchte muss gewartet werden (denn da es async fkt ist, läuft das script schon weiter)
  // fetch-fkt returned erstmal promises, die später zu Anderem werden. setter-funktion unten kann aber keine promises verarbeiten. deshalb muss gewartet werden, bis das fetching fertig ist.
  const colorsWithNames = await Promise.all(promise);
  // map verändert den ausgangs-array an sich nicht, aber hier wurde eine kopie vom ausgangs-array gemacht. daher muss der alte array durch den neuen ersetzt werden:

  let keyOfItemToReplace = "colors";
  theme[keyOfItemToReplace] = colorsWithNames;
  return theme;
}
