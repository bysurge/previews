(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hoofdmenu');
  function setNav(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { setNav(toggle.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.menu-tabs [role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      if (search && search.value) { search.value = ''; runSearch(); }
      select(t);
    });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); n.focus(); select(n); }
    });
  });

  // search across all tabs
  var search = document.getElementById('menu-search');
  var panels = document.querySelector('.menu-panels');
  var result = document.getElementById('search-result');
  var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  function runSearch() {
    var q = norm(search.value.trim());
    panels.classList.toggle('searching', q.length > 0);
    var count = 0;
    document.querySelectorAll('.menu-group').forEach(function (g) {
      var any = false;
      g.querySelectorAll('.dish').forEach(function (d) {
        var hit = !q || norm(d.textContent).indexOf(q) > -1;
        d.classList.toggle('no-match', !hit);
        if (hit) { any = true; count++; }
      });
      g.classList.toggle('no-match', !any);
    });
    result.textContent = q ? (count ? count + (count === 1 ? ' gerecht gevonden' : ' gerechten gevonden') : 'Niets gevonden. Probeer een ander woord, of bel ons even.') : '';
  }
  if (search) search.addEventListener('input', runSearch);

  // highlight current season
  var m = new Date().getMonth() + 1;
  var cur = (m >= 5 && m <= 9) ? 'zomer' : 'winter';
  var el = document.querySelector('.season[data-season="' + cur + '"]');
  if (el) el.classList.add('is-now');
  var bar = document.getElementById('season-now');
  if (bar && cur === 'zomer') bar.innerHTML = '<strong>Mei t/m september:</strong> dinsdag t/m zondag vanaf 11.00 uur (keuken vanaf 12.00). Maandag gesloten.';

  // demo form
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Bel of mail De Strooppot gerust direct.';
  });
})();
