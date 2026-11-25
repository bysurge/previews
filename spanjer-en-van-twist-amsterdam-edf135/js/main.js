(function () {
  var knop = document.querySelector('.menuknop');
  var nav = document.getElementById('hoofdmenu');
  if (knop && nav) {
    knop.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      knop.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        knop.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  document.querySelectorAll('[role="tablist"]').forEach(function (lijst) {
    var tabs = Array.prototype.slice.call(lijst.querySelectorAll('[role="tab"]'));
    function kies(tab) {
      tabs.forEach(function (t) {
        var aan = t === tab;
        t.setAttribute('aria-selected', aan ? 'true' : 'false');
        t.tabIndex = aan ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { kies(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); kies(n); n.focus(); }
      });
    });
  });

  var form = document.getElementById('resform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.querySelector('.melding').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Op de echte site komt je reservering hier binnen.';
    });
  }
})();
