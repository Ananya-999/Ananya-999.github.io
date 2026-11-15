# Credits

Every third-party asset used on the site, with its licence. All of them are free to use and none
require attribution on the site itself.

## Fonts

| Font             | Author                               | Licence                                             | Files                                                                  |
| ---------------- | ------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------- |
| Geist            | The Geist Project Authors            | [SIL OFL 1.1](assets/fonts/OFL-Geist.txt)           | `assets/fonts/geist.woff2`                                             |
| Geist Mono       | The Geist Project Authors            | [SIL OFL 1.1](assets/fonts/OFL-Geist.txt)           | `assets/fonts/geist-mono.woff2`                                        |
| Instrument Serif | The Instrument Serif Project Authors | [SIL OFL 1.1](assets/fonts/OFL-InstrumentSerif.txt) | `assets/fonts/instrument-serif.woff2`, `instrument-serif-italic.woff2` |

Sources: [vercel/geist-font](https://github.com/vercel/geist-font) and
[Instrument/instrument-serif](https://github.com/Instrument/instrument-serif). The latin subsets
come from the [Fontsource](https://fontsource.org) packages.

## Everything else

- **Icons** (mail, external link, copy, check, sun, moon) are simple SVG paths drawn for this site.
- **Paper texture** is generated in the browser by an SVG noise filter in `assets/css/styles.css`.
- **Project previews** are drawn with CSS. There are no screenshots, stock photos or logos.
- **Company and product names** (for example Microsoft, Vantiva, Samsung) appear as plain text only.

## Development tools

Used only for local checks and CI, never shipped to visitors: Prettier (MIT), ESLint (MIT),
html-validate (MIT) and linkinator (MIT).
