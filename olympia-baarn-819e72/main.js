(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };

  var top = document.querySelector('.top');
  function onScroll() {
    top.classList.toggle('solid', window.scrollY > 40);
    document.body.classList.toggle('scrolled', window.scrollY > window.innerHeight * .8);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.classList.remove('nav-open'); }
  });

  var slides = document.querySelectorAll('.slides img');
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () { slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on'); }, 6000);
  }

  function li(it, withPrice) {
    return '<li><span class="nr">' + esc(it[0]) + '</span><div><div class="d-top"><h4>' + esc(it[1]) + '</h4>' +
      (withPrice && it[3] ? '<span class="pr">' + it[3] + '</span>' : '') + '</div>' +
      ((withPrice ? it[2] : it[2]) ? '<p>' + esc(it[2]) + '</p>' : '') + '</div></li>';
  }

  function tabs(data, tabsId, panelsId, render) {
    var tEl = document.getElementById(tabsId), pEl = document.getElementById(panelsId);
    data.forEach(function (cat, c) {
      var t = document.createElement('button');
      t.type = 'button'; t.setAttribute('role', 'tab'); t.id = 't-' + cat.id;
      t.setAttribute('aria-controls', 'p-' + cat.id); t.setAttribute('aria-selected', c === 0);
      t.tabIndex = c === 0 ? 0 : -1; t.textContent = cat.tab; tEl.appendChild(t);
      var p = document.createElement('div');
      p.className = 'panel'; p.id = 'p-' + cat.id; p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', t.id); p.hidden = c !== 0;
      p.innerHTML = render(cat); pEl.appendChild(p);
    });
    var all = tEl.querySelectorAll('[role=tab]');
    function select(t, focus) {
      all.forEach(function (o) {
        var on = o === t; o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) t.focus();
    }
    all.forEach(function (t, n) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) select(all[(n + d + all.length) % all.length], true);
      });
    });
  }

  tabs(RESTAURANT, 'rTabs', 'rPanels', function (cat) {
    return (cat.note ? '<p class="note">' + esc(cat.note) + '</p>' : '') + '<div class="groups">' +
      cat.groups.map(function (g) {
        return '<div class="group"><h3>' + esc(g.kop) + '</h3><ul class="dishes">' + g.items.map(function (it) { return li(it, false); }).join('') + '</ul></div>';
      }).join('') + '</div>';
  });
  tabs(AFHAAL, 'aTabs', 'aPanels', function (cat) {
    return '<ul class="dishes prijs">' + cat.items.map(function (it) { return li(it, true); }).join('') + '</ul>';
  });

  var r = document.querySelector('#tijden tr[data-d="' + new Date().getDay() + '"]');
  if (r) r.classList.add('vandaag');
})();
