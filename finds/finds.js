/* My Finds v2: menu, search, filter chips, swipe arrows, optional GA4. No inline scripts anywhere. */
(function () {
  'use strict';
  // mobile menu (same behaviour as the rest of the site)
  var t = document.querySelector('.menu-toggle'), o = document.querySelector('.menu-overlay');
  var x = document.querySelector('.menu-overlay .close-btn');
  function menu(open) {
    if (!t || !o) return;
    o.classList.toggle('active', open); t.classList.toggle('active', open);
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (t) t.addEventListener('click', function () { menu(true); });
  if (x) x.addEventListener('click', function () { menu(false); });
  [].forEach.call(document.querySelectorAll('.menu-overlay nav a'), function (a) {
    a.addEventListener('click', function () { menu(false); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menu(false); });

  // Google Analytics 4 (only when build.py has a Measurement ID)
  var ga = document.getElementById('ga4');
  if (ga && ga.dataset.id) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ga.dataset.id);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.buy');
    if (a && window.gtag) {
      window.gtag('event', 'shop_click', {
        item_id: a.dataset.item, store: a.dataset.store, link_type: a.dataset.type,
        network: a.dataset.net, transport_type: 'beacon'
      });
    }
  });

  // search + filter chips
  var grid = document.getElementById('grid'), q = document.getElementById('q');
  if (grid && q) {
    var cards = [].slice.call(grid.querySelectorAll('.card'));
    var chips = [].slice.call(document.querySelectorAll('.chip'));
    var latest = document.getElementById('latest-sec'), empty = document.getElementById('empty'), f = 'all';
    var run = function () {
      var words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean), n = 0;
      cards.forEach(function (c) {
        var ok = words.every(function (w) { return c.dataset.s.indexOf(w) > -1; });
        if (ok && f !== 'all') {
          ok = f === 'secondhand' ? c.dataset.sh === '1' : f === 'new' ? c.dataset.nw === '1' : c.dataset.cat === f;
        }
        c.hidden = !ok; if (ok) n++;
      });
      if (empty) empty.hidden = n > 0;
      if (latest) latest.hidden = f !== 'all' || words.length > 0;
    };
    q.addEventListener('input', run);
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        f = c.dataset.f;
        chips.forEach(function (k) { k.classList.toggle('on', k === c); });
        run();
      });
    });
    var u = new URLSearchParams(location.search).get('q');
    if (u) { q.value = u.slice(0, 80); run(); }
  }

  // swipe row arrows
  var row = document.getElementById('latest');
  [].forEach.call(document.querySelectorAll('.arr'), function (b) {
    b.addEventListener('click', function () {
      if (row) row.scrollBy({ left: row.clientWidth * Number(b.dataset.dir), behavior: 'smooth' });
    });
  });
})();
