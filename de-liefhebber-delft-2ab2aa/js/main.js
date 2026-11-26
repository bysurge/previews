(function () {
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });

  // today
  var d = new Date().getDay();
  document.getElementById('vandaag').textContent = (d === 5 || d === 6) ? '10:00 – 23:00' : '10:00 – 20:30';
  var row = document.querySelector('.uren tr[data-dag="' + d + '"]');
  if (row) row.classList.add('nu');

  function tabsFor(listEl, panelEl, data, render) {
    listEl.innerHTML = data.map(function (c, i) {
      return '<button class="tab" role="tab" id="' + listEl.id + '-' + c.id + '" aria-selected="' + (i === 0) + '" data-id="' + c.id + '">' + c.naam + '</button>';
    }).join('');
    function show(id) {
      listEl.querySelectorAll('.tab').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.id === id ? 'true' : 'false'); });
      panelEl.setAttribute('aria-labelledby', listEl.id + '-' + id);
      panelEl.innerHTML = render(data.filter(function (c) { return c.id === id; })[0]);
    }
    listEl.addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) show(b.dataset.id); });
    show(data[0].id);
  }

  function tag(t) {
    if (!t) return '';
    var cls = /^vegan$/i.test(t) ? 'vegan' : /^vegetarisch$/i.test(t) ? 'vega' : '';
    return ' <span class="tag ' + cls + '">' + t + '</span>';
  }
  tabsFor(document.getElementById('eten-tabs'), document.getElementById('eten-panel'), window.ETEN, function (c) {
    return '<ul class="gerechten">' + c.items.map(function (g) {
      return '<li class="gerecht"><h3>' + g[0] + tag(g[3]) + '</h3>' +
        (g[1] ? '<p class="nl">' + g[1] + '</p>' : '') +
        (g[2] ? '<p class="en" lang="en">' + g[2] + '</p>' : '') + '</li>';
    }).join('') + '</ul>';
  });

  tabsFor(document.getElementById('drink-tabs'), document.getElementById('drink-panel'), window.DRINKEN, function (c) {
    return '<div class="groepen">' + c.groepen.map(function (g) {
      return '<div class="groep">' + (g[0] ? '<h3>' + g[0] + '</h3>' : '') + '<ul>' + g[1].map(function (x) {
        var right = (x[1] ? '<span>' + x[1] + '</span>' : '') + (x[2] ? '<span class="pct">' + x[2] + '</span>' : '');
        return '<li><b>' + x[0] + '</b>' + (right ? '<span>' + right + '</span>' : '') + '</li>';
      }).join('') + '</ul></div>';
    }).join('') + '</div>';
  });
})();
