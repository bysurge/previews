(function () {
  // Mobile menu
  var header = document.querySelector('.top');
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Menukaart
  var data = window.SIRTAKI_MENU || [];
  var tabs = document.getElementById('tabs');
  var panels = document.getElementById('panels');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  data.forEach(function (sec, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.id = 'tab-' + sec.id;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'panel-' + sec.id);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.tabIndex = i === 0 ? 0 : -1;
    b.textContent = sec.tab;
    tabs.appendChild(b);

    var p = document.createElement('div');
    p.className = 'panel';
    p.id = 'panel-' + sec.id;
    p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', b.id);
    if (i !== 0) p.hidden = true;
    p.innerHTML = sec.groups.map(function (g) {
      return '<div class="group"><h3>' + esc(g.title) + '</h3>' +
        (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') +
        '<ul class="dishes">' + g.items.map(function (d) {
          return '<li><div class="dish-top"><span class="dish-name">' + esc(d[0]) + '</span><span class="dots" aria-hidden="true"></span><span class="dish-price">' + esc(d[3]) + '</span></div>' +
            (d[1] ? '<p class="dish-nl">' + esc(d[1]) + '</p>' : '') +
            (d[2] ? '<p class="dish-en" lang="en">' + esc(d[2]) + '</p>' : '') + '</li>';
        }).join('') + '</ul></div>';
    }).join('');
    panels.appendChild(p);
  });

  function select(btn, focus) {
    tabs.querySelectorAll('.tab').forEach(function (t) {
      var on = t === btn;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) btn.focus();
    btn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.addEventListener('click', function (e) {
    var t = e.target.closest('.tab');
    if (t) select(t);
  });
  tabs.addEventListener('keydown', function (e) {
    var list = Array.prototype.slice.call(tabs.querySelectorAll('.tab'));
    var i = list.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); select(list[(i + 1) % list.length], true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); select(list[(i - 1 + list.length) % list.length], true); }
  });
})();
