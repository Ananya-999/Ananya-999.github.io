# ananya-999.github.io

My portfolio site. I'm a software engineer working across frontend, iOS and DevOps.

Live site: https://ananya-999.github.io

## Tech

- **Plain HTML, CSS and JavaScript.** It's one page with a small amount of interactivity, so a
  framework or build step would add weight without adding anything. GitHub Pages serves the files
  as they are.
- **CSS custom properties** for colour, spacing and type. The light and dark themes are two sets of
  the same tokens, and the contact section reuses the dark set on its own.
- **Self-hosted fonts** (Geist, Geist Mono and Instrument Serif, latin subsets only). No requests go
  to a third-party font service, which is faster and keeps visitors private.
- **Modern CSS for motion.** Scroll reveals use `animation-timeline: view()` where the browser
  supports it, so there's no animation library. All motion is off for anyone who prefers reduced
  motion.
- **No analytics, trackers, cookies or forms.** The only thing stored is the visitor's theme choice,
  in their own browser.
- **Prettier, ESLint, html-validate and linkinator** check formatting, JavaScript, markup and links.
  They run locally and on every push through GitHub Actions.

## Run locally

The site needs nothing to run. Node.js 22 or later is only needed for the checks.

```sh
npm install      # installs the dev tools
npx serve .      # serves the site at http://localhost:3000
npm run check    # formatting, JS lint, HTML validation and link check
npm run format   # fixes formatting
```

Use a local server rather than opening `index.html` directly, because asset paths start at the site
root (`/assets/...`) so they also work on the 404 page.

## Project structure

```
index.html              the page
404.html                served by GitHub Pages for unknown URLs
assets/css/styles.css   design tokens, layout and components
assets/js/main.js       theme toggle and copy-email button
assets/fonts/           self-hosted fonts and their licences
favicon.svg             site icon
og-image.png            preview image for link sharing
robots.txt, sitemap.xml
.github/workflows/      runs the checks on every push and pull request
```

## Deployment

GitHub Pages publishes the root of the `main` branch. There is no build step and no generated
output in the repository. The empty `.nojekyll` file tells Pages to serve the files as they are
instead of running Jekyll.

## License

The code is MIT licensed, so you're welcome to learn from it or reuse it. The content is not: my
name, the text, project descriptions, the "av." mark, the favicon and the preview image are all
rights reserved. See [LICENSE](LICENSE) for the details and [CREDITS.md](CREDITS.md) for the
third-party fonts.
