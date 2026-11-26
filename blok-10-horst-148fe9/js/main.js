(function () {
  var btn = document.querySelector('.menu-toggle');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.getElementById('nav').addEventListener('click', function (e) {
    if (e.target.closest('a')) { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var tabs = document.getElementById('kaart-tabs'), panels = document.getElementById('kaart-panels');
  var lijst = window.KAART.map(function (k) { return { id: k.id, tab: k.tab, html: kaartHtml(k) }; });
  lijst.push({ id: 'wijn', tab: 'wijn', html: wijnHtml() });

  function kaartHtml(k) {
    var h = k.tijd ? '<p class="pan-tijd">' + esc(k.tijd) + '</p>' : '';
    h += '<div class="pan-grid">';
    k.groepen.forEach(function (g) {
      h += '<section class="groep"><h3>' + esc(g.kop) + '</h3>' + (g.sub ? '<p class="groep-sub">' + esc(g.sub) + '</p>' : '') + '<ul>';
      g.items.forEach(function (it) {
        var tag = it[3] === 'v' ? '<span class="tag">vega</span>' : it[3] === 'vm' ? '<span class="tag tag-licht">vega mogelijk</span>' : '';
        h += '<li><div class="r"><span class="naam">' + esc(it[0]) + tag + '</span><span class="prijs">' + esc(it[2]) + '</span></div>' +
          (it[1] ? '<p class="oms">' + esc(it[1]).replace(/ \| /g, ' <i>·</i> ') + '</p>' : '') + '</li>';
      });
      h += '</ul></section>';
    });
    return h + '</div>';
  }
  function wijnHtml() {
    var h = '<p class="pan-tijd">per glas en per fles</p><div class="pan-grid">';
    window.WIJN.forEach(function (g) {
      h += '<section class="groep"><h3>' + esc(g.kop) + '</h3><ul class="wijnen">';
      g.wijnen.forEach(function (w) {
        h += '<li><details><summary><span class="r"><span class="naam">' + esc(w[0]) + '</span><span class="prijs">' + esc(w[1]) + '</span></span>' +
          '<span class="oms">' + esc(w[2]) + ', ' + esc(w[5]) + '</span></summary>' +
          '<div class="wijn-in"><p><b>druif</b> ' + esc(w[3]) + ' &nbsp; <b>alcohol</b> ' + esc(w[4]) + '</p><p>' + esc(w[6]) + '</p></div></details></li>';
      });
      h += '</ul></section>';
    });
    return h + '</div>';
  }
  lijst.forEach(function (k, i) {
    var t = document.createElement('button');
    t.type = 'button'; t.setAttribute('role', 'tab'); t.id = 'tab-' + k.id;
    t.setAttribute('aria-controls', 'pan-' + k.id); t.setAttribute('aria-selected', i ? 'false' : 'true');
    t.tabIndex = i ? -1 : 0; t.textContent = k.tab; tabs.appendChild(t);
    var p = document.createElement('div');
    p.className = 'pan'; p.id = 'pan-' + k.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', t.id); p.tabIndex = 0;
    if (i) p.hidden = true;
    p.innerHTML = k.html; panels.appendChild(p);
  });
  var all = function () { return [].slice.call(tabs.querySelectorAll('[role=tab]')); };
  function kies(t, f) {
    all().forEach(function (x) {
      var on = x === t; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (f) t.focus();
  }
  tabs.addEventListener('click', function (e) { var t = e.target.closest('[role=tab]'); if (t) kies(t); });
  tabs.addEventListener('keydown', function (e) {
    var l = all(), i = l.indexOf(document.activeElement); if (i < 0) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); kies(l[(i + 1) % l.length], true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); kies(l[(i - 1 + l.length) % l.length], true); }
  });
  [].forEach.call(document.querySelectorAll('[data-kaart]'), function (a) {
    a.addEventListener('click', function () { var t = document.getElementById('tab-' + a.getAttribute('data-kaart')); if (t) kies(t); });
  });

  // vandaag open
  var v = document.getElementById('vandaag');
  if (v) {
    var d = new Date().getDay();
    v.textContent = 'vandaag open van ' + (d === 2 ? '10.00' : '11.30') + ' tot 00.00 uur';
  }

  [].forEach.call(document.querySelectorAll('form[data-voorbeeld]'), function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.form-msg').hidden = false; });
  });
  var dt = document.getElementById('datum');
  if (dt) dt.min = new Date().toISOString().slice(0, 10);
})();
