# certs-and-awards

Static site for awards and certifications. Hosted on GitHub Pages.

**Live:** https://goldenmaximo.github.io/certs-and-awards/

## Resume links

| Resume text | URL |
| --- | --- |
| 5 THD Awards | https://goldenmaximo.github.io/certs-and-awards/awards/ |
| THD A.I. Award | https://goldenmaximo.github.io/certs-and-awards/awards/ai.html |

## Adding an award

1. Drop the image in `img/` (JPEG, max 1600px wide):
   `sips -Z 1600 -s format jpeg -s formatOptions 85 new.png --out img/YYYY-MM-DD.jpg`
2. Copy a `<figure>` block in `awards/index.html`, update `src`, `alt`, dimensions and caption.

## Enabling Pages

Repo Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
