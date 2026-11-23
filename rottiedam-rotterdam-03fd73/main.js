(function () {
  // mobile menu
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  // open now (Europe/Amsterdam): ma-za 15:30-21:00
  var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
  var day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var st = document.getElementById('status');
  if (day === 0) { st.dataset.state = 'closed'; st.textContent = 'Vandaag gesloten · morgen open vanaf 15:30'; }
  else if (mins < 930) { st.dataset.state = 'closed'; st.textContent = 'Vandaag open van 15:30 tot 21:00'; }
  else if (mins < 1260) { st.dataset.state = 'open'; st.textContent = 'Nu open tot 21:00'; }
  else { st.dataset.state = 'closed'; st.textContent = day === 6 ? 'Gesloten · maandag weer open vanaf 15:30' : 'Gesloten · morgen open vanaf 15:30'; }
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');

  // menu tabs + filters
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  var photo = document.getElementById('menuPhoto');
  var photos = {
    'p-gerechten': ['img/eigen-bord-kip.jpg', 'Roti met kippendijen-filet, aardappel, kousenband, ei en sambal op een bord van Rottiedam'],
    'p-rollen': ['img/eigen-tafel.jpg', 'Roti rollen en roti gerechten op tafel, met ginger beer']
  };
  var filter = 'alles';
  function apply() {
    var panel = document.querySelector('.panel:not([hidden])');
    var shown = 0;
    panel.querySelectorAll('.dishes li').forEach(function (li) {
      var ok = filter === 'alles' || li.dataset.k === filter;
      li.hidden = !ok; if (ok) shown++;
    });
    document.getElementById('empty').hidden = shown > 0;
  }
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    var p = photos[tab.getAttribute('aria-controls')];
    if (photo.getAttribute('src') !== p[0]) { photo.src = p[0]; photo.alt = p[1]; }
    apply();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        n.focus(); select(n);
      }
    });
  });
  document.querySelectorAll('.chip').forEach(function (c) {
    c.addEventListener('click', function () {
      filter = c.dataset.f;
      document.querySelectorAll('.chip').forEach(function (o) {
        o.classList.toggle('on', o === c); o.setAttribute('aria-pressed', o === c);
      });
      apply();
    });
  });

  // demo form
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').hidden = false;
  });
})();
