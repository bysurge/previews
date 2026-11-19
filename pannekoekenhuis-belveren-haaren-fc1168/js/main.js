(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  });

  // open today (ma gesloten, di-zo 12:00-19:00 keuken; 15 dec t/m 1 jan gesloten)
  var now = new Date(), d = now.getDay(), m = now.getMonth(), day = now.getDate();
  var winter = (m === 11 && day >= 15) || (m === 0 && day === 1);
  var el = document.querySelector('[data-today]');
  var rows = document.querySelectorAll('.hours tr');
  rows[(d + 6) % 7].classList.add('is-today');
  if (el) {
    if (winter) el.textContent = 'Gesloten van 15 december t/m 1 januari';
    else if (d === 1) el.textContent = 'Vandaag gesloten, morgen vanaf 12:00 open';
    else { el.textContent = 'Vandaag open, binnenkomen tot 19:00'; el.classList.add('open'); }
  }

  // tabs
  var tabs = document.querySelectorAll('[role=tab]');
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (j === null) return;
      j = (j + tabs.length) % tabs.length; tabs[j].focus(); select(tabs[j]);
    });
  });

  // pancake finder
  var cats = Array.prototype.slice.call(document.querySelectorAll('.pk-cat'));
  var input = document.getElementById('zoek'), chips = document.querySelectorAll('.chip');
  var countEl = document.querySelector('[data-count]'), empty = document.querySelector('[data-empty]');
  var filter = 'alles', phone = window.matchMedia('(max-width: 640px)');
  function applyDefaultOpen() { cats.forEach(function (c, i) { c.open = !phone.matches || i === 0; }); }
  applyDefaultOpen();
  function run() {
    var q = input.value.trim().toLowerCase(), total = 0;
    cats.forEach(function (c) {
      var typeOk = filter === 'alles' || c.dataset.type.split(' ').indexOf(filter) > -1;
      var name = c.querySelector('.pk-name').textContent.toLowerCase(), shown = 0;
      c.querySelectorAll('li').forEach(function (li) {
        var txt = li.textContent.toLowerCase(), nr = li.querySelector('.nr').textContent;
        var ok = typeOk && (!q || nr === q || (isNaN(q) && (txt.indexOf(q) > -1 || name.indexOf(q) > -1)));
        li.hidden = !ok; if (ok) shown++;
      });
      c.hidden = shown === 0; total += shown;
      if (q || filter !== 'alles') c.open = shown > 0;
    });
    if (!q && filter === 'alles') applyDefaultOpen();
    countEl.textContent = (q || filter !== 'alles') ? total + (total === 1 ? ' pannenkoek' : ' pannenkoeken') : '';
    empty.hidden = total !== 0;
  }
  input.addEventListener('input', run);
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.classList.toggle('is-on', x === c); x.setAttribute('aria-pressed', x === c); });
      filter = c.dataset.filter; run();
    });
  });

  // demo form
  var form = document.querySelector('[data-demo]');
  form.addEventListener('submit', function (e) { e.preventDefault(); form.querySelector('.form-msg').hidden = false; });
})();
