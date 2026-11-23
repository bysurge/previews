(function () {
  var body = document.body;
  var bar = document.getElementById('top-bar');
  var toggle = document.querySelector('.nav-toggle');

  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Menukaart
  var K = window.KAART || {};
  var panels = document.getElementById('panels');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function prijs(p) { return p ? esc(p).replace(' | ', ' <span aria-hidden="true">|</span> ') : ''; }
  var namen = { lunch: 'lunchkaart', diner: 'dinerkaart', borrel: 'borrelkaart', dranken: 'drankenkaart' };
  Object.keys(K).forEach(function (k, i) {
    var kaart = K[k];
    var html = '<div class="panel" role="tabpanel" id="p-' + k + '" aria-labelledby="tab-' + k + '"' + (i ? ' hidden' : '') + '>';
    html += '<p class="panel-noot">' + esc(kaart.noot) + '</p><div class="groepen">';
    kaart.groepen.forEach(function (g) {
      html += '<div class="groep"><h3>' + esc(g.t) + '</h3>' + (g.s ? '<p class="sub">' + esc(g.s) + '</p>' : '');
      g.items.forEach(function (it) {
        html += '<div class="gerecht"><span class="n">' + esc(it[0]) + '</span><span class="p">' + prijs(it[2]) + '</span>' +
          (it[1] ? '<span class="d">' + esc(it[1]) + '</span>' : '') + '</div>';
      });
      html += '</div>';
    });
    html += '</div><p class="pdf-link">Liever de originele ' + namen[k] + '? <a href="' + kaart.pdf + '">Open de PDF</a></p></div>';
    panels.insertAdjacentHTML('beforeend', html);
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function kies(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById('p-' + t.dataset.k).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      kies(next); next.focus();
    });
  });

  // Openingstijden vandaag
  var d = new Date().getDay();
  var rij = document.querySelector('#tijden tr[data-d="' + d + '"]');
  if (rij) {
    rij.classList.add('vandaag');
    var tijd = rij.querySelector('td').textContent;
    var vandaag = document.getElementById('vandaag');
    vandaag.innerHTML = d === 6 ? 'Vandaag: <b>alleen op aanvraag</b>' : 'Vandaag open: <b>' + tijd + ' uur</b>';
  }

  // Rustige diavoorstelling in de hero
  var slides = document.querySelectorAll('.hero-slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('on');
    }, 6000);
  }
})();
