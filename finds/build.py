#!/usr/bin/env python3
"""My Finds generator.

  python3 finds/build.py                 build the live pages from finds/finds.json
  python3 finds/build.py --out _preview  build a preview copy only (live pages untouched)

Local files only. This script never touches git and never goes online.
"""
import html, json, re, sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://alexfbailey.com"

GA4_ID = "G-KN02B27QQV"  # Google Analytics: paste your Measurement ID here, e.g. "G-AB12CD34EF". Empty = off.

# Fixed rates to C$, only used to decide which link is "Cheapest".
RATES = {"C$": 1.0, "US$": 1.40, "€": 1.60}
RATES_DATE = "2026-11-10"

NOTE = ("Some links are affiliate links. If you buy through them I may earn a small "
        "commission, at no extra cost to you.")
BANNED = ["left behind", "never a dupe", "just found", "closest match", "best match"]
RESERVED = {"finds", "index", "item", "archive", "img", "fonts"}
SLUG = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
IMG = re.compile(r"^finds/img/[A-Za-z0-9_\-./]+\.(?:jpg|jpeg|png|webp)$")
OLD_PAGES = ["fall-thrift-haul-130-budget", "miu-miu-thrift-with-me-33-fall-haul",
             "lesportsac-leopard-bag-fall-thrift-budget", "miu-miu-18-thrift-haul",
             "fall-thrift-anne-klein-coat-157-budget", "vintage-art-easel-thrift-hunt"]

e = lambda s: html.escape(str(s), quote=True)


def fail(msg):
    sys.exit("build.py stopped: " + msg)


def https(u, what):
    p = urlparse(u or "")
    if p.scheme != "https" or not p.netloc or any(c in u for c in " \"'<>\\"):
        fail(f"{what} must be a plain https link, got: {u!r}")
    return u


def img(p, what):
    if not IMG.match(p or "") or ".." in p:
        fail(f"{what} must be a picture under finds/img/, got: {p!r}")
    if not (ROOT / p).is_file():
        fail(f"{what} is missing on disk: {p}")
    return "/" + p


def validate(d):
    if GA4_ID and not re.fullmatch(r"G-[A-Z0-9]{6,14}", GA4_ID):
        fail("GA4_ID does not look like a Measurement ID (G-XXXXXXXXXX)")
    vids = {}
    for v in d["videos"]:
        if not SLUG.match(v["id"]) or v["id"] in RESERVED or v["id"] in OLD_PAGES:
            fail(f"bad video id {v['id']!r}")
        img(v["card"], f"video {v['id']} card")
        if v.get("tiktok"):
            https(v["tiktok"], "tiktok link")
        if v.get("youtube"):
            https(v["youtube"], "youtube link")
        vids[v["id"]] = v
    seen = set()
    for it in d["items"]:
        if not SLUG.match(it["id"]) or it["id"] in seen:
            fail(f"bad or repeated item id {it['id']!r}")
        seen.add(it["id"])
        if it["video"] not in vids:
            fail(f"item {it['id']} points at unknown video {it['video']!r}")
        img(it["photo"], f"{it['id']} photo")
        img(it["card"], f"{it['id']} card")
        for l in it.get("links", []):
            if l["type"] not in ("secondhand", "new"):
                fail(f"{it['id']}: link type must be secondhand or new")
            if l.get("status", "live") not in ("live", "hidden"):
                fail(f"{it['id']}: link status must be live or hidden")
            https(l["url"], f"{it['id']} link")
            if l.get("affiliate_url"):
                https(l["affiliate_url"], f"{it['id']} affiliate link")
            if l["currency"] not in RATES:
                fail(f"{it['id']}: unknown currency {l['currency']!r}")
            float(l["price"])
            if l.get("photo"):
                img(l["photo"], f"{it['id']} listing photo")
    text = json.dumps(d, ensure_ascii=False).lower()
    for b in BANNED:
        if b in text:
            fail(f'finds.json contains a phrase you never use: "{b}"')
    return vids


def live(it, typ):
    ls = [l for l in it.get("links", []) if l["type"] == typ and l.get("status", "live") == "live"]
    return sorted(ls, key=lambda l: float(l["price"]) * RATES[l["currency"]])


def money(l):
    p = float(l["price"])
    return l["currency"] + (f"{int(p):,}" if p == int(p) else f"{p:,.2f}")


def places(n):
    return f"{n} place" + ("" if n == 1 else "s")


def csp():
    s = ["default-src 'self'", "base-uri 'self'", "form-action 'self'", "object-src 'none'",
         "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
         "font-src 'self' https://fonts.gstatic.com"]
    if GA4_ID:
        s += ["script-src 'self' https://www.googletagmanager.com",
              "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com "
              "https://www.googletagmanager.com"]
    else:
        s += ["script-src 'self'", "img-src 'self' data:", "connect-src 'self'"]
    return "; ".join(s)


def card(it):
    href = f"/finds/item/{it['id']}.html"
    sh, nw = live(it, "secondhand"), live(it, "new")
    pill = '<span class="pill">Alex thrifted</span>' if it.get("thrifted") else ""
    if sh or nw:
        cta = '<div class="cta">'
        if sh:
            cta += f'<a class="btn sh" href="{href}#secondhand">Shop secondhand · {len(sh)} ›</a>'
        if nw:
            cta += f'<a class="btn nw" href="{href}#new">Shop new · {len(nw)} ›</a>'
        cta += "</div>"
    else:
        cta = '<p class="none">Still searching for this, sorry!</p>'
    search = e(" ".join([it["name"], it["brand"], it["category"]]).lower())
    return (f'<article class="card" data-s="{search}" data-cat="{e(it["category"])}" '
            f'data-sh="{int(bool(sh))}" data-nw="{int(bool(nw))}">'
            f'<a class="ph" href="{href}"><img src="{img(it["card"], "card")}" alt="{e(it["brand"])} {e(it["name"])}" '
            f'width="400" height="500" loading="lazy">{pill}</a>'
            f'<h3 class="nm"><a href="{href}">{e(it["name"])}</a></h3>{cta}</article>')


def buy(it, l, cheapest):
    url = l.get("affiliate_url") or l["url"]
    rel = "sponsored nofollow noopener" if l.get("affiliate_url") else "nofollow noopener"
    tag = ('<span class="tag sh">Secondhand</span>' if l["type"] == "secondhand"
           else '<span class="tag nw">New</span>')
    if cheapest:
        tag += '<span class="cheap">Cheapest</span>'
    meta = []
    if l.get("size"):
        meta.append(("Size " if len(str(l["size"])) <= 3 else "Sizes ") + e(l["size"]))
    if l.get("condition"):
        meta.append(e(l["condition"]))
    if l.get("ships_from"):
        meta.append("Ships from " + e(l["ships_from"]))
    ph = (f'<img src="{img(l["photo"], "listing photo")}" alt="" width="64" height="80" loading="lazy">'
          if l.get("photo") else '<span class="noph"></span>')
    return (f'<a class="buy" href="{e(url)}" target="_blank" rel="{rel}" data-item="{e(it["id"])}" '
            f'data-store="{e(l["store"])}" data-type="{e(l["type"])}" data-net="{e(l.get("network") or "none")}">'
            f'{ph}<span class="mid"><span class="bt">Buy on {e(l["store"])}</span>'
            f'<span class="tags">{tag}</span><span class="meta">{" · ".join(meta)}</span></span>'
            f'<span class="pr">{e(money(l))}</span></a>')


def group(it, typ, label):
    ls = live(it, typ)
    if not ls:
        return ""
    rows = "".join(buy(it, l, i == 0 and len(ls) > 1) for i, l in enumerate(ls))
    return (f'<section class="grp" id="{typ}"><h2>{label} · {places(len(ls))}</h2>{rows}</section>')


def page_main(d, vids):
    items = d["items"]
    order = sorted(d["videos"], key=lambda v: v["sort"], reverse=True)
    rank = {v["id"]: i for i, v in enumerate(order)}
    items = sorted(items, key=lambda it: rank[it["video"]])
    cats = []
    for it in items:
        if it["category"] not in cats:
            cats.append(it["category"])
    chips = ['<button type="button" class="chip on" data-f="all">All</button>']
    if any(live(it, "secondhand") for it in items):
        chips.append('<button type="button" class="chip" data-f="secondhand">Secondhand</button>')
    if any(live(it, "new") for it in items):
        chips.append('<button type="button" class="chip" data-f="new">New</button>')
    chips += [f'<button type="button" class="chip" data-f="{e(c)}">{e(c)}</button>' for c in cats]
    m = ['<h1 class="ttl">My Finds</h1>',
         '<div class="search"><input id="q" type="search" placeholder="Search my finds" '
         'aria-label="Search my finds" autocomplete="off"></div>',
         f'<div class="chips" role="group" aria-label="Filter finds">{"".join(chips)}</div>']
    if not items:
        m.append('<p class="none pad">New finds are on the way.</p>')
    else:
        latest = [it for it in items if it["video"] == order[0]["id"]]
        if len({it["video"] for it in items}) > 1 and latest:
            m.append('<section id="latest-sec"><div class="rowhead"><h2>Latest finds</h2>'
                     f'<a class="viewall" href="/finds/{order[0]["id"]}.html">View all</a>'
                     '<span class="arrows"><button type="button" class="arr" data-dir="-1" aria-label="Previous">‹</button>'
                     '<button type="button" class="arr" data-dir="1" aria-label="Next">›</button></span></div>'
                     f'<div class="swipe" id="latest">{"".join(card(it) for it in latest)}</div></section>')
            m.append('<div class="rowhead"><h2>All finds</h2></div>')
        else:
            m.append('<div class="rowhead"><h2>Latest finds</h2></div>')
        m.append(f'<div class="grid" id="grid">{"".join(card(it) for it in items)}</div>')
        m.append('<p class="none pad" id="empty" hidden>Nothing matches that yet.</p>')
    used = [v for v in order if any(it["video"] == v["id"] for it in items)]
    if len(used) > 1:
        tiles = "".join(f'<a class="vt" href="/finds/{v["id"]}.html"><img src="{img(v["card"], "card")}" alt="" '
                        f'width="400" height="500" loading="lazy"><span>{e(v["title"])}</span></a>' for v in used)
        m.append(f'<h2 class="every">Every video</h2><div class="grid vids">{tiles}</div>')
    m.append(f'<p class="aff">{e(NOTE)}</p>')
    return "".join(m)


def page_item(it, v):
    pill = '<span class="pill">Alex thrifted</span>' if it.get("thrifted") else ""
    body = group(it, "secondhand", "Secondhand") + group(it, "new", "New")
    if not body:
        body = '<p class="none">Still searching for this, sorry!</p>'
    return (f'<div class="item"><a class="back" href="/finds.html">‹ My Finds</a>'
            f'<div class="itemph"><img src="{img(it["photo"], "photo")}" alt="{e(it["brand"])} {e(it["name"])}" '
            f'width="800" height="1000">{pill}</div>'
            f'<p class="brand">{e(it["brand"])}</p><h1 class="iname">{e(it["name"])}</h1>{body}'
            f'<p class="seen">Seen in <a href="/finds/{v["id"]}.html">{e(v["title"])}</a></p>'
            f'<p class="aff">{e(NOTE)}</p></div>')


def page_video(v, items):
    watch = ""
    if v.get("tiktok"):
        watch = f' · <a href="{e(v["tiktok"])}" target="_blank" rel="noopener">Watch on TikTok ›</a>'
    elif v.get("youtube"):
        watch = f' · <a href="{e(v["youtube"])}" target="_blank" rel="noopener">Watch on YouTube ›</a>'
    return (f'<a class="back pad" href="/finds.html">‹ My Finds</a><h1 class="ttl vttl">{e(v["title"])}</h1>'
            f'<p class="vmeta">{e(v["date"])}{watch}</p>'
            f'<div class="grid">{"".join(card(it) for it in items)}</div><p class="aff">{e(NOTE)}</p>')


def stub():
    return ('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">\n<title>My Finds • Alex Bailey</title>\n'
            f'<meta http-equiv="refresh" content="0; url={SITE}/finds.html">\n'
            f'<link rel="canonical" href="{SITE}/finds.html">\n<meta name="robots" content="noindex">\n'
            f'</head><body><p>This page has moved to <a href="{SITE}/finds.html">{SITE}/finds.html</a>.</p></body></html>\n')


def main():
    out = ROOT
    if "--out" in sys.argv:
        out = ROOT / sys.argv[sys.argv.index("--out") + 1]
    preview = out != ROOT
    d = json.loads((ROOT / "finds/finds.json").read_text(encoding="utf-8"))
    vids = validate(d)
    shell = (ROOT / "finds/_shell.html").read_text(encoding="utf-8")
    ver = e(d["updated"])
    head = (f'<meta http-equiv="Content-Security-Policy" content="{csp()}">\n'
            '    <meta name="referrer" content="strict-origin-when-cross-origin">\n'
            '    <link rel="preconnect" href="https://fonts.googleapis.com">\n'
            '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
            '    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gilda+Display&amp;'
            'family=Josefin+Sans:wght@400;600&amp;display=swap">\n'
            f'    <link rel="stylesheet" href="/finds/finds.css?v={ver}">')
    if preview:
        head += '\n    <meta name="robots" content="noindex">'
    body = ""
    if GA4_ID and not preview:
        body += f'<script async id="ga4" data-id="{GA4_ID}" src="https://www.googletagmanager.com/gtag/js?id={GA4_ID}"></script>\n'
    body += f'<script defer src="/finds/finds.js?v={ver}"></script>'

    def write(rel, title, og, desc, image, main_html):
        url = f"{SITE}/{rel}"
        page = shell
        for k, val in (("{{TITLE}}", e(title)), ("{{OGTITLE}}", e(og)), ("{{DESC}}", e(desc)), ("{{URL}}", url),
                       ("{{IMAGE}}", image), ("{{HEAD_EXTRA}}", head), ("{{BODY_EXTRA}}", body), ("{{MAIN}}", main_html)):
            page = page.replace(k, val)
        if "{{" in page:
            fail("a placeholder was left unfilled in " + rel)
        p = out / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(page, encoding="utf-8")
        return url

    urls = [write("finds.html", "My Finds | Alex Bailey – Shop My Thrift Finds", "My Finds • Alex Bailey",
                  "Shop the pieces from Alex Bailey's thrift videos: every exact secondhand and new listing "
                  "for each find, cheapest first.", f"{SITE}/images/og-image.jpg", page_main(d, vids))]
    for v in d["videos"]:
        its = [it for it in d["items"] if it["video"] == v["id"]]
        if not its:
            continue
        urls.append(write(f"finds/{v['id']}.html", f"{v['title']} | My Finds • Alex Bailey", v["title"],
                          f"Shop every find from Alex Bailey's video “{v['title']}”.",
                          SITE + img(v["card"], "card"), page_video(v, its)))
    for it in d["items"]:
        urls.append(write(f"finds/item/{it['id']}.html", f"{it['brand']} {it['name']} | My Finds • Alex Bailey",
                          f"{it['brand']} {it['name']}",
                          f"Where to buy the {it['brand']} {it['name']} from Alex Bailey's thrift video, "
                          "secondhand and new.", SITE + img(it["photo"], "photo"), page_item(it, vids[it["video"]])))
    if not preview:
        keep = {it["id"] for it in d["items"]}
        for p in (ROOT / "finds/item").glob("*.html"):  # retired item pages become redirects (nothing is deleted)
            if p.stem not in keep:
                p.write_text(stub(), encoding="utf-8")
        sm = ROOT / "sitemap.xml"
        s = sm.read_text(encoding="utf-8")
        block = "\n".join(
            f'  <url><loc>{u}</loc><lastmod>{ver}</lastmod>' +
            ('<changefreq>weekly</changefreq><priority>0.8</priority>' if u.endswith("/finds.html") else "") + "</url>"
            for u in urls)
        s2, n = re.subn(r"<!-- finds:start -->.*?<!-- finds:end -->",
                        lambda _: f"<!-- finds:start -->\n{block}\n  <!-- finds:end -->", s, flags=re.S)
        if n != 1:
            fail("sitemap.xml is missing the finds:start / finds:end markers")
        sm.write_text(s2, encoding="utf-8")
    print(f"Built {len(urls)} pages into {out}" + (" (preview only)" if preview else ""))


if __name__ == "__main__":
    main()
