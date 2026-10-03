# certs-and-awards

Static site for awards and certifications. GitHub Pages serves `main` from the repo root; push to deploy.

**Live:** https://goldenmaximo.github.io/certs-and-awards/

## Resume links

| Resume text | URL |
| --- | --- |
| 4 THD Awards | https://goldenmaximo.github.io/certs-and-awards/awards/ |
| THD A.I. Award | https://goldenmaximo.github.io/certs-and-awards/awards/ai.html |

## Adding an award

1. Resize into `img/` (JPEG, longest side 1600px):
   ```sh
   sips -Z 1600 -s format jpeg -s formatOptions 85 new.png --out img/YYYY-MM-DD.jpg
   ```
   `-Z` also upscales: drop it when the image is already under 1600px.
2. Copy a `<figure>` block in `awards/index.html`, update `href`, `src`, `alt`, `width`/`height` and caption.
3. Bump the counts in the `.tally` line on both award pages.
