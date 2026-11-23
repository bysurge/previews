(function () {
  // Header + mobile menu
  var top = document.querySelector('.top');
  var nav = document.getElementById('nav');
  var btn = document.getElementById('menuBtn');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('.hero-slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on');
    }, 6000);
  }

  // Bierkaart
  var data = window.BIEREN || [];
  var chips = document.getElementById('bierChips');
  var list = document.getElementById('bierLijst');
  var info = document.getElementById('bierInfo');
  var search = document.getElementById('bierZoek');
  var current = 'tap';
  var seen = {};
  data.forEach(function (c) { c.bieren.forEach(function (b) { seen[b[0].toLowerCase()] = 1; }); });
  var total = Object.keys(seen).length;
  var totEl = document.getElementById('bierTotaal');
  // teller blijft '100+' (kaart telt tapmaten los)

  function esc(s) { return s.replace(/[&<>"]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]; }); }
  function abvOf(s) { var m = s.match(/<?(\d+(?:,\d+)?)\s*%/); return m ? parseFloat(m[1].replace(',', '.')) : null; }
  function row(b, kleur) {
    var abv = abvOf(b[1]);
    var desc = b[1].replace(/,?\s*<?\d+(?:,\d+)?\s*%/, '').trim();
    var meter = abv !== null ? '<span class="abv"><span style="--w:' + Math.min(100, abv / 12.5 * 100) + '%"></span>' + esc(b[1].match(/<?\d+(?:,\d+)?\s*%/)[0]) + '</span>' : '';
    var price = b[2] ? '€ ' + b[2] : '<span class="b-ask">vraag aan de bar</span>';
    return '<li><i class="glass" style="--c:' + kleur + '" aria-hidden="true"></i><span class="b-name">' + esc(b[0]) + '</span><span class="b-price">' + price + '</span><span class="b-info">' + esc(desc) + meter + '</span></li>';
  }
  function render() {
    var q = search.value.trim().toLowerCase();
    var html = '', n = 0;
    if (q) {
      var done = {};
      data.forEach(function (c) {
        c.bieren.forEach(function (b) {
          var k = b[0].toLowerCase();
          if (!done[k] && (k.indexOf(q) > -1 || b[1].toLowerCase().indexOf(q) > -1)) { done[k] = 1; html += row(b, c.kleur); n++; }
        });
      });
      info.textContent = n ? n + (n === 1 ? ' bier' : ' bieren') + ' gevonden voor "' + search.value.trim() + '"' : '';
      if (!n) html = '<li class="beer-empty">Geen bier gevonden met "' + esc(search.value.trim()) + '". Probeer een andere naam of brouwerij.</li>';
    } else {
      var cat = data.filter(function (c) { return c.id === current; })[0];
      cat.bieren.forEach(function (b) { html += row(b, cat.kleur); });
      info.textContent = cat.naam + ': ' + cat.bieren.length + (cat.bieren.length === 1 ? ' bier' : ' bieren');
    }
    list.innerHTML = html;
    chips.querySelectorAll('button').forEach(function (bt) { bt.setAttribute('aria-selected', !q && bt.dataset.id === current); });
  }
  data.forEach(function (c) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.id = c.id;
    b.innerHTML = '<i style="background:' + c.kleur + '"></i>' + esc(c.naam) + ' <small>' + c.bieren.length + '</small>';
    b.addEventListener('click', function () { current = c.id; search.value = ''; render(); });
    chips.appendChild(b);
  });
  search.addEventListener('input', render);
  render();

  // Menu tabs
  var tabs = document.querySelectorAll('.tabs [role="tab"]');
  tabs.forEach(function (t, idx) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var nt = tabs[(idx + d + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });
  function select(t) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  }

  // Past events hide themselves
  var today = new Date(); today.setHours(0, 0, 0, 0);
  document.querySelectorAll('#events li').forEach(function (li) {
    if (new Date(li.dataset.end + 'T23:59:59') < today) li.classList.add('past');
  });
  document.querySelectorAll('#eventSelect option').forEach(function (o) {
    var li = Array.prototype.filter.call(document.querySelectorAll('#events li'), function (l) { return l.querySelector('h3').textContent.toLowerCase() === o.textContent.toLowerCase(); })[0];
    if (li && li.classList.contains('past')) o.remove();
  });

  // Buttons that prefill the form
  document.querySelectorAll('[data-onderwerp]').forEach(function (a) {
    a.addEventListener('click', function () { var f = document.getElementById('onderwerp'); if (f) f.value = a.dataset.onderwerp; });
  });
  document.querySelectorAll('[data-event]').forEach(function (a) {
    a.addEventListener('click', function () { var s = document.getElementById('eventSelect'); if (s) s.value = a.dataset.event; });
  });

  // Demo forms: nothing is sent
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.demo-msg').hidden = false; });
  });
})();
