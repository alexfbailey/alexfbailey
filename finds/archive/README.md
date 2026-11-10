# Archive — the old My Finds (Roller Rabbit version), parked Nov 10, 2026

Nothing was deleted. This folder mirrors `finds/` so a restore is a move back.

- `finds-roller-rabbit.html` — the old main page (copy of finds.html as it was)
- `finds.json`, `index.json` — the old data (old format)
- six video pages + `img/<video>/` folders (seven, incl. ysl-tiger-karen-millen-goodwill)

These pages are `noindex` and `/finds/archive/` is blocked in robots.txt. They are not
meant to be browsed in place (their links assume they sit in `finds/`).

## Bring one old video back as it was
1. Move `archive/<video>.html` to `finds/<video>.html` (this replaces the redirect stub there).
2. Move `archive/img/<video>/` to `finds/img/<video>/`.
3. Remove the `<meta name="robots" content="noindex">` line near the top of the page.
4. Add its URL back to sitemap.xml (outside the finds:start/end block).

## Better: bring it back in the new format
Add the video and its items to `finds/finds.json` (new schema in `finds/README.md`),
move its img folder back, re-crop photos to 800x1000 / 400x500, then run `python3 finds/build.py`.
Note: a new-format video cannot reuse one of the six old page names while its redirect stub exists.
