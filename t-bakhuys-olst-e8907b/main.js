(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // tabs
  function select(tab) {
    var list = tab.closest('[role=tablist]');
    list.querySelectorAll('[role=tab]').forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    var l = list.getBoundingClientRect(), r = tab.getBoundingClientRect();
    if (r.left < l.left || r.right > l.right) list.scrollLeft += r.left - l.left - 20;
  }
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    list.addEventListener('click', function (e) {
      var t = e.target.closest('[role=tab]'); if (t) select(t);
    });
    list.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
      var i = tabs.indexOf(document.activeElement); if (i < 0) return;
      var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      n.focus(); select(n); e.preventDefault();
    });
  });
  // day cards open the matching tab
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-tab').replace(/^k-/, 'k-t-'));
      if (t) select(t);
    });
  });

  // today's hours
  var pick = { 0: ['zondag', '11:30 tot 21:30', '17:00 tot 20:45'], 1: ['maandag', '11:30 tot 20:00', '17:00 tot 19:30'], 2: ['dinsdag', '11:30 tot 21:00', '17:00 tot 20:30'], 3: ['woensdag', '11:30 tot 21:00', '17:00 tot 20:30'], 4: ['donderdag', '11:30 tot 21:00', '17:00 tot 20:30'], 5: ['vrijdag', '11:00 tot 21:30', '17:00 tot 20:45'], 6: ['zaterdag', '11:00 tot 21:30', '17:00 tot 20:45'] };
  var d = new Date().getDay(), p = pick[d], box = document.querySelector('[data-today]');
  if (box && p) {
    box.querySelector('.today-h').textContent = 'Vandaag, ' + p[0];
    box.querySelector('.today-v').textContent = 'Afhalen ' + p[1] + ', bezorgen ' + p[2] + '.';
  }
  document.querySelectorAll('.hours tr[data-d="' + d + '"]').forEach(function (tr) { tr.classList.add('is-today'); });
})();
