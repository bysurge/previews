(function () {
  var body = document.body;
  var bar = document.getElementById('top-bar');
  var toggle = document.querySelector('.nav-toggle');

  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 30); }
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
  var K = window.KAART || [];
  var menu = document.getElementById('menu');
  var cats = document.getElementById('cats');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var html = '', nav = '';
  K.forEach(function (c) {
    nav += '<a href="#c-' + c.id + '">' + esc(c.t) + '</a>';
    html += '<div class="cat" id="c-' + c.id + '"><h3>' + esc(c.t) + '</h3>' + (c.note ? '<p class="note">' + esc(c.note) + '</p>' : '');
    c.items.forEach(function (it) {
      var zoek = (it[0] + ' ' + it[1] + ' ' + it[2]).toLowerCase();
      html += '<div class="dish" data-z="' + esc(zoek) + '" data-nr="' + esc(it[0].toLowerCase()) + '"><span class="nr">' + esc(it[0]) + '</span><span class="n">' + esc(it[1]) +
        (it[2] ? '<span class="d">' + esc(it[2]) + '</span>' : '') + '</span><span class="p">' + esc(it[3]) + '</span></div>';
    });
    html += '</div>';
  });
  menu.innerHTML = html;
  cats.innerHTML = nav;

  var zoekveld = document.getElementById('zoek');
  var geen = document.getElementById('geen');
  zoekveld.addEventListener('input', function () {
    var q = zoekveld.value.trim().toLowerCase();
    var isNr = /^[0-9]+[a-z]?$/.test(q) || /^k[0-9]+$/.test(q);
    var totaal = 0;
    menu.querySelectorAll('.cat').forEach(function (cat) {
      var n = 0;
      cat.querySelectorAll('.dish').forEach(function (d) {
        var hit = !q || (isNr ? d.dataset.nr === q || d.dataset.nr.indexOf(q) === 0 && /[a-z]$/.test(d.dataset.nr) : d.dataset.z.indexOf(q) > -1);
        d.hidden = !hit;
        if (hit) n++;
      });
      cat.hidden = n === 0;
      totaal += n;
    });
    geen.hidden = totaal > 0;
  });

  // Openingstijden vandaag
  var dag = new Date().getDay();
  var rij = document.querySelector('#tijden tr[data-d="' + dag + '"]');
  if (rij) {
    rij.classList.add('vandaag');
    var t = rij.querySelector('td').textContent;
    document.getElementById('vandaag').innerHTML = dag === 2 ? 'Vandaag, dinsdag, zijn we gesloten.' : 'Vandaag geopend: <b>' + t + ' uur</b>';
  }
})();
