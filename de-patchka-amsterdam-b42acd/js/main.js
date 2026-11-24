(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
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

  // Vandaag open? 16:00-22:00, donderdag gesloten.
  var el = document.getElementById('today');
  var dot = document.querySelector('.hero-hours .dot');
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  if (day === 4) {
    el.textContent = 'Vandaag (donderdag) gesloten. Morgen weer open vanaf 16:00';
    dot.classList.add('closed');
  } else if (mins < 16 * 60) {
    el.textContent = 'Vandaag open van 16:00 tot 22:00';
  } else if (mins < 22 * 60) {
    el.textContent = 'Nu open, tot 22:00';
  } else {
    el.textContent = (day === 3 ? 'Morgen (donderdag) gesloten' : 'Morgen weer open vanaf 16:00');
    dot.classList.add('closed');
  }

  var form = document.getElementById('mail-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
