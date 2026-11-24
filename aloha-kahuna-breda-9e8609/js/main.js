(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // Bowl rekenhulp
  var EXTRA = 0.75, groups = document.querySelectorAll('.chips[data-group]');
  var order = {};
  function fmt(n) { return n.toFixed(2).replace('.', ','); }
  function label(c) { return c.childNodes[0].textContent.trim(); }
  function update() {
    var list = document.getElementById('tally-list'), priceEl = document.getElementById('tally-price');
    if (!list || !priceEl) return;
    var total = 0, rows = [];
    groups.forEach(function (g) {
      var name = g.dataset.group, picked = order[name] || [];
      if (name === 'size') {
        var s = g.querySelector('[aria-pressed="true"]');
        if (s) { total += parseFloat(s.dataset.price); rows.push(['Formaat: ' + label(s).split(' ')[0], '']); }
        return;
      }
      var incl = parseInt(g.dataset.incl || '1', 10);
      picked.forEach(function (c, i) {
        var extra = '';
        if (name === 'proteine') {
          if (i === 0 && c.dataset.tonijn) { total += 1; extra = '+1,00'; }
          if (i > 0) { var p = c.dataset.tonijn ? 3.5 : 2.5; total += p; extra = '+' + fmt(p); }
        } else if (!g.dataset.single && i >= incl) { total += EXTRA; extra = '+0,75'; }
        rows.push([label(c), extra]);
      });
    });
    list.innerHTML = '';
    if (rows.length <= 1) { var e = document.createElement('li'); e.className = 'empty'; e.textContent = 'Tik je ingrediënten aan.'; list.appendChild(e); }
    rows.forEach(function (r) {
      var li = document.createElement('li'); li.textContent = r[0];
      if (r[1]) { var x = document.createElement('span'); x.className = 'x'; x.textContent = r[1]; li.appendChild(x); }
      list.appendChild(li);
    });
    priceEl.textContent = fmt(total);
  }
  groups.forEach(function (g) {
    var name = g.dataset.group; order[name] = [];
    g.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () {
        var on = c.getAttribute('aria-pressed') !== 'true';
        if (g.dataset.single) {
          if (name === 'size' && !on) return;
          g.querySelectorAll('.chip').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
          order[name] = [];
        }
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
        order[name] = order[name].filter(function (o) { return o !== c; });
        if (on) order[name].push(c);
        update();
      });
    });
  });
  update();
})();
