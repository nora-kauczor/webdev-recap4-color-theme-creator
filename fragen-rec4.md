## to do evtl.

### error catching beim fetchen? und bei inputs?

### user daran hindern, dass hex-feld zu leeren auf weniger als zwei zeichen (aber ohne, dass es auf etwas zurückspringt)

### form/colorpicker

- vielleicht im colorpicker field und hex vereinheitlichen (nur eine variable/state)
- warum wurde mir so ein komishces objekt ausgegeben, als ich zuest versucht habe, mir alle input-werte geben zu lassen mit der colorform? {field: black/undefined, hex: wert von onsurface, name: richtiger themename} gibt es da noch eine andere möglichkeit als dass man extra diese ganze states für jede farbe erstellt?

## fragen

### controlled/uncontrolled inputs ✅

- controlled: user kontrolliert quasi den value, onChange-method, die einen value direkt ändert, wenn der user im eingabefeld etwas ändert
- uncontrolled: bei eingabe passiert nichts, sondern erst wenn user submit klickt (z.b.)

### Wie kann man überhaupt damit umgehen, dass der Setter immer einen Re-render startet? Muss man dann nicht immer useEffect nutzen? Wird das Script dadrunter jemals ausgeführt? ...

- ohne state wurden doch die veränderungen auch angezeigt -> aber da handelte es sich um global scale und jetzt ist es immer innerhalb einer funktion, deswegen muss sie neu gecallt werden (mit der besonderheit, dass nur die änderungen durchgeführt werden und nicht einfach alles noch einmal gemacht) ?

### Könnte man die Aufgabe mit colorName auch ohne State (und useEffect) lösen? Wenn man colorName vorher als Variable mit let deklariert? -> nein, weil dann nur der wert geändert wird, aber user kann es nicht sehen. immer wenn etwas neues angezeigt/gerendered werden soll, braucht man dafür die setter-funktion ✅

```js
export function ColorCardDetails({ color }) {
  const [colorName, setColorName] = useState("");

  async function getName(color) {
    const indexToDelete = 0;
    const hexWithoutHashtag = color.value.slice(indexToDelete + 1);

    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
    );
    const data = await response.json();
    setColorName(data.name.value);

  }

  useEffect(() => {
    getName(color);
  }, [color])
  ....
}
```

das caust dann keinen re-render ???? und deswegen nicht?

```js
export function ColorCardDetails({ color }) {
  let colorName

  async function getName(color) {
    const indexToDelete = 0;
    const hexWithoutHashtag = color.value.slice(indexToDelete + 1);

    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${hexWithoutHashtag}`
    );
    const data = await response.json();
    colorName = data.name.value;
  return colorName;
  }

  ....
}
```

#### Können Konstanten/Variablen nie mit return aus Funktionen zurückgegeben werden?

### Was war bei mir jetzt der prinzipielle Unterschied zwischen den beiden Lösungen? Im Grunde wird doch beides mal einfach eine andere Klasse vergeben?

innerhalb von ThemeDisplay

#### Lösung mit der gleichen komponente (ColorCard)

    - in ThemeDisplay: abhängig von dem Wert von showDetails (boolean) wird der komponente ColorCard entweder die klasse "card-container-colors--details" oder "card-container-colors--preview" gegeben
    - in ColorCard: JSX-part die zur detailansicht gehören, werden nicht gerendered, wenn !showDetails
    - schlechte Lösung, weil es schwieriger zu stylen ist

#### Lösung mit zwei unterschiedlichen Komponenten und getrenntem Parent (<ul>) (richtige Lösung)

- auch hier werden den komponenten jeweils die unterschiedlichen style-klassen gegeben

´´´js
export function ThemeDisplay({ theme, onDeleteTheme }) {
...
return (

<section name="card-container" className="card-container">
....
{showDetails ? (
<ul className="card-container-colors--details">
{theme.colors.map((color) => (
<ColorCardDetails key={color.value} color={color} />
))}{" "}
</ul>
) : (
<ul className="card-container-colors--preview">
{theme.colors.map((color) => (
<ColorCardPreview key={color.value} color={color} />
))}
</ul>
)}
</section>
);
}
´´´
