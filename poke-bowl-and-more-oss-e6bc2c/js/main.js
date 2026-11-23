(function () {
  // Mobile menu
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      document.body.classList.toggle('nav-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
    });
  }

  // Menu tabs
  var data = window.POKE_MENU || [];
  var tabs = document.getElementById('menu-tabs');
  var panels = document.getElementById('menu-panels');
  if (!tabs || !panels) return;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  data.forEach(function (cat, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.id = 'tab-' + cat.id;
    b.setAttribute('aria-controls', 'panel-' + cat.id);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.tabIndex = i === 0 ? 0 : -1;
    b.textContent = cat.tab;
    tabs.appendChild(b);

    var p = document.createElement('div');
    p.setAttribute('role', 'tabpanel');
    p.id = 'panel-' + cat.id;
    p.setAttribute('aria-labelledby', b.id);
    if (i !== 0) p.hidden = true;
    var html = '<h3>' + esc(cat.tab) + '</h3>';
    if (cat.intro) html += '<p class="panel-intro">' + esc(cat.intro) + '</p>';
    html += '<ul class="dishes">';
    cat.items.forEach(function (it) {
      html += '<li><div class="dish-top"><span class="dish-name">' + esc(it[0]) +
        (it[3] ? ' <span class="tag">' + esc(it[3]) + '</span>' : '') +
        '</span><span class="dots" aria-hidden="true"></span><span class="price">&euro;&nbsp;' + esc(it[2]) + '</span></div>' +
        (it[1] ? '<p>' + esc(it[1]) + '</p>' : '') + '</li>';
    });
    html += '</ul>';
    p.innerHTML = html;
    panels.appendChild(p);
  });

  function select(btnEl) {
    tabs.querySelectorAll('[role=tab]').forEach(function (t) {
      var on = t === btnEl;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.addEventListener('click', function (e) {
    var t = e.target.closest('[role=tab]');
    if (t) select(t);
  });
  tabs.addEventListener('keydown', function (e) {
    var list = Array.prototype.slice.call(tabs.querySelectorAll('[role=tab]'));
    var i = list.indexOf(document.activeElement);
    if (i < 0) return;
    var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
    if (n === null) return;
    n = (n + list.length) % list.length;
    list[n].focus(); select(list[n]);
  });
})();
