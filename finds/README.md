# My Finds — how it works (v2, Nov 2026)

Everything comes from `finds/finds.json`. Nobody edits HTML by hand.

    python3 finds/build.py                  # build the live pages
    python3 finds/build.py --out _preview   # preview copy only, live pages untouched

build.py writes `finds.html`, `finds/<video-id>.html`, `finds/item/<item-id>.html` and the
block between `<!-- finds:start -->` and `<!-- finds:end -->` in `sitemap.xml`.
It never pushes to GitHub and never deletes anything.

## Files
- `finds.json` — the data (schema below)
- `_shell.html` — the site frame (sidebar, menu); `{{MAIN}}` is filled in by build.py
- `finds.css`, `finds.js` — look and behaviour (search, chips, swipe arrows, analytics)
- `img/<video-id>/` — item photos (800x1000) and cards (400x500); `listings/` holds listing photos
- `archive/` — the old Roller Rabbit version, see `archive/README.md`

## Video
`id, title, date, sort (YYYY-MM-DD), tiktok or youtube, card`

## Item
`id, name, brand, category, video, photo, card, thrifted (true/false), timestamp, links[]`

## Link
`type (secondhand/new), store, url, affiliate_url, network, price, currency (C$/US$/€), size,
condition, ships_from, photo, checked (date), status (live/hidden)`

- Exact piece only. Every exact listing is shown, cheapest first (no cap).
- `status: "hidden"` takes a sold or dead link off the site without losing it.
- An item with no live links shows "Still searching for this, sorry!".
- No thrift prices anywhere. build.py refuses the phrases Alex never uses.

## Safety built in
- Every page has a content security policy: only this site's own files, Google Fonts,
  and Google Analytics when it is switched on. No inline scripts.
- All text from finds.json is escaped; links must be https; pictures must live in finds/img/.
- Shop links open with `rel="nofollow noopener"` (plus `sponsored` on affiliate links).

## Google Analytics
On since Nov 10, 2026: `GA4_ID = "G-KN02B27QQV"` (Google login hialexfbailey, Analytics account
"Alex Bailey blog", property "alexfbailey.com", web stream alexfbailey.com). Counting starts once
the site is published. To change it, edit `GA4_ID` at the top of build.py and rebuild; empty = off. Each shop button
sends a `shop_click` event (item, store, secondhand/new, network).

## Exchange rates
`RATES` in build.py are fixed rates to C$, used only to pick the "Cheapest" label.
