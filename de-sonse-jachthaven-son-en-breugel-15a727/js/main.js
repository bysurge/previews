(function () {
  var top = document.getElementById('top');
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || document.body.classList.contains('menu-open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); onScroll(); }
  });

  // render the cards
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  var wide = window.matchMedia('(min-width: 821px)').matches;
  document.querySelectorAll('[data-kaart]').forEach(function (panel) {
    var cats = window.KAART[panel.getAttribute('data-kaart')] || [];
    panel.innerHTML = cats.map(function (c) {
      var items = c.items.map(function (it) {
        // "glas 4,90 · fles 24,50" -> "glas € 4,90<br>fles € 24,50"
        var parts = it[1].split(' · ').map(function (p) { return esc(p).replace(/(\S+)$/, '€&nbsp;$1'); });
        var pr = '<span class="pr' + (it[1].indexOf(' ') > -1 ? ' long' : '') + '">' + parts.join('<br>') + '</span>';
        return '<li><b>' + esc(it[0]) + (it[3] ? '<span class="leaf" title="vegetarisch" aria-label="vegetarisch"></span>' : '') + '</b>' + pr + (it[2] ? '<small>' + esc(it[2]) + '</small>' : '') + '</li>';
      }).join('');
      return '<details class="cat"' + (wide || c.open ? ' open' : '') + '><summary>' + esc(c.t) + '</summary>' + (c.n ? '<p class="cat-n">' + esc(c.n) + '</p>' : '') + '<ul>' + items + '</ul></details>';
    }).join('');
  });

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on ? 'true' : 'false');
      o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var nt = tabs[(n + d + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });

  // season + today status
  var now = new Date();
  var m = now.getMonth(); // 0 = jan
  var hoog = m >= 3 && m <= 9; // 1 april tot 1 november
  var card = document.querySelector('.seizoen[data-season="' + (hoog ? 'hoog' : 'laag') + '"]');
  if (card) card.classList.add('is-nu');
  var openH = hoog ? 9 : 10, closeH = 22;
  if (m === 11 && now.getDate() === 31) closeH = 17;
  var h = now.getHours() + now.getMinutes() / 60;
  var st = document.getElementById('status');
  var pad = function (x) { return (x < 10 ? '0' : '') + x + ':00'; };
  if (h >= openH && h < closeH) {
    st.textContent = 'Nu open tot ' + pad(closeH) + (h < 20 && closeH > 20 ? ', keuken tot 20:00' : '');
  } else {
    st.textContent = 'Vandaag open ' + pad(openH) + ' – ' + pad(closeH) + ', elke dag van het jaar';
    if (h >= closeH) { st.textContent = 'Morgen weer open vanaf ' + pad(openH); }
    st.classList.add('dicht');
  }

  // demo form
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
