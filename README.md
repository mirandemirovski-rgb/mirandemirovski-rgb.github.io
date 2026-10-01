# mirandemirovski-rgb.github.io

Interactive CV website for Miran Demirovski, published with GitHub Pages.

## Previews (choose a style)

`previews/` holds five test versions of the CV. All five use the same content.

| Page | What it is |
| --- | --- |
| `previews/index.html` | Showcase of the five styles, with videos and notes |
| `previews/styles/*.html` | The five live previews: Blueprint, Darkroom, Ink, Live Ops, Swiss Grid |
| `previews/print.html` | The one-page A4 layout used for the PDF |
| `previews/assets/cv-data.js` | The CV content. Edit text here once and every style updates |
| `previews/assets/Miran-Demirovski-CV.pdf` | The one-page PDF |

Text in `[[double brackets]]` inside `cv-data.js` is information that is still missing. Pages show it with a dashed box.

To view locally, serve the folder (for example `python3 -m http.server --directory previews`) and open `http://localhost:8000`.
