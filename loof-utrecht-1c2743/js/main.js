(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var header = document.querySelector('.site-header');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Menu openen' : 'Menu sluiten');
    document.body.classList.toggle('nav-open', !open);
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menu openen');
      document.body.classList.remove('nav-open');
    });
  });

  // Header turns solid after the hero
  function onScroll() { header.classList.toggle('solid', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu
  var data = window.LOOF_MENU;
  var panel = document.getElementById('panel');
  var note = document.getElementById('kaart-note');
  var jump = document.getElementById('kaart-jump');
  var veg = document.getElementById('veg-toggle');
  var tabs = document.querySelectorAll('[role=tab]');
  var current = 'lunch';
  var leaf = '<svg class="leaf" viewBox="0 0 32 32" aria-label="vegetarisch" role="img"><path d="M5 27C5 14 13 5 27 5c0 14-9 22-22 22z"/></svg>';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function render() {
    var m = data[current];
    var vegOnly = veg.getAttribute('aria-pressed') === 'true';
    note.textContent = m.note;
    veg.hidden = !!m.wine || current === 'borrel';
    var html = '', nav = '';
    m.groups.forEach(function (g, gi) {
      var items = g.items.filter(function (it) { return m.wine || !vegOnly || it[4] === 1; });
      if (!items.length) return;
      var id = 'g-' + current + '-' + gi;
      nav += '<a href="#' + id + '">' + esc(g.t) + '</a>';
      html += '<section class="group" id="' + id + '"><h3>' + esc(g.t) + '</h3>' + (g.s ? '<p class="group-sub">' + esc(g.s) + '</p>' : '') + '<ul class="dishes">';
      items.forEach(function (it) {
        if (m.wine) {
          var price = (it[3] ? '<span>fles ' + it[3] + '</span>' : '') + (it[4] ? '<span>glas ' + it[4] + '</span>' : '');
          html += '<li class="dish wine"><div class="dish-main"><p class="dish-name">' + esc(it[0]) + '</p><p class="dish-place">' + esc(it[1]) + '</p><p class="dish-desc">' + esc(it[2]) + '</p></div><p class="dish-price">' + price + '</p></li>';
        } else {
          html += '<li class="dish"><div class="dish-main"><p class="dish-name">' + esc(it[0]) + (it[4] === 1 ? ' ' + leaf : '') + '</p>' + (it[1] ? '<p class="dish-place">' + esc(it[1]) + '</p>' : '') + '<p class="dish-desc">' + esc(it[2]) + '</p></div><p class="dish-price">' + esc(it[3]) + '</p></li>';
        }
      });
      html += '</ul></section>';
    });
    panel.innerHTML = html;
    jump.innerHTML = nav;
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (o) { o.setAttribute('aria-selected', String(o === t)); o.tabIndex = o === t ? 0 : -1; });
      panel.setAttribute('aria-labelledby', t.id);
      current = t.dataset.menu;
      render();
    });
    t.addEventListener('keydown', function (e) {
      var list = Array.prototype.slice.call(tabs), i = list.indexOf(t);
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
        n.focus(); n.click();
      }
    });
  });
  veg.addEventListener('click', function () {
    veg.setAttribute('aria-pressed', String(veg.getAttribute('aria-pressed') !== 'true'));
    render();
  });
  render();

  // Example form
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
