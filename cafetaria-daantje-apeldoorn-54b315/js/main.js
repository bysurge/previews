(function () {
  // mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // menukaart-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function kies(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var j = null;
      if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (j !== null) { e.preventDefault(); tabs[j].focus(); kies(tabs[j]); }
    });
  });

  // open of dicht (iedere dag 11.30; 1 mrt t/m 30 sep tot 21.00, anders tot 20.30)
  var nu = new Date();
  var maand = nu.getMonth(); // 0 = januari
  var zomer = maand >= 2 && maand <= 8;
  var sluit = zomer ? 21 * 60 : 20 * 60 + 30;
  var sluitTekst = zomer ? '21.00' : '20.30';
  var min = nu.getHours() * 60 + nu.getMinutes();
  var status = document.getElementById('status');
  if (status) {
    if (min >= 690 && min < sluit) {
      status.textContent = 'Nu open, vandaag tot ' + sluitTekst + ' uur';
      status.classList.add('open');
    } else if (min < 690) {
      status.textContent = 'Vandaag open van 11.30 tot ' + sluitTekst + ' uur';
    } else {
      status.textContent = 'Nu gesloten, morgen weer open vanaf 11.30 uur';
    }
  }
  var s = document.querySelector('[data-seizoen="' + (zomer ? 'zomer' : 'winter') + '"]');
  if (s) s.classList.add('nu');
})();
