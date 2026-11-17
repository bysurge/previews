(function () {
  var btn = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var o = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', o);
    document.body.style.overflow = o ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  });

  // Vanavond live: alleen in november 2026, dan staat het programma op de site
  try {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(new Date());
    var g = function (t) { return +p.filter(function (x) { return x.type === t; })[0].value; };
    if (g('year') === 2026 && g('month') === 11) {
      var li = document.querySelector('.board li[data-day="' + g('day') + '"]');
      if (li) {
        li.classList.add('today');
        var t = document.getElementById('tonight');
        t.textContent = 'Vanavond live: ' + li.querySelector('.act').textContent.replace(/^(Bingo|Big Band Night|Popronde)/, '$1 met ');
        t.hidden = false;
      }
    }
  } catch (e) {}
})();
