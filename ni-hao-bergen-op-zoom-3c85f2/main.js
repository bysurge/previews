(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // Search the numbered menu by number or name.
  var input = document.getElementById('zoek');
  var dishes = [].slice.call(document.querySelectorAll('#menu-list .dish'));
  var cats = [].slice.call(document.querySelectorAll('#menu-list .cat'));
  var none = document.getElementById('geen');
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    var isNr = /^\d+$/.test(q);
    var shown = 0;
    dishes.forEach(function (d) {
      var hay = d.getAttribute('data-search');
      var hit = !q || (isNr ? hay.split(' ')[0] === q : hay.indexOf(q) !== -1);
      d.hidden = !hit;
      if (hit) shown++;
    });
    cats.forEach(function (c) { c.hidden = !c.querySelector('.dish:not([hidden])'); });
    none.hidden = shown > 0;
  });
})();
