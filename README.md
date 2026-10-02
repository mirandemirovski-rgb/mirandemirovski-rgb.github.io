# mirandemirovski-rgb.github.io

Interactive CV website for Miran Demirovski, published with GitHub Pages.

| File | What it is |
| --- | --- |
| `index.html` | The CV website (Blueprint style) |
| `compact/index.html` | A shorter version of the CV (skills first, older roles folded) at `/compact/` |
| `assets/cv-data.js` | All CV text. Edit it here once; both website versions and the PDF layout update |
| `print.html` | The one-page A4 layout used to make the PDF |
| `assets/Miran-Demirovski-CV.pdf` | The one-page PDF behind the "Download PDF" button |
| `assets/og-image.png` | The picture shown when the link is shared |

To add a certificate, copy one line in the `certificates` list in `cv-data.js` and change the text and link.

To view locally: `python3 -m http.server` in this folder, then open `http://localhost:8000`.
