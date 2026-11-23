(function () {
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setNav(!body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });

  // highlight today in the opening hours
  var rows = document.querySelectorAll('.tijden tbody tr');
  var day = (new Date().getDay() + 6) % 7; // monday = 0
  if (rows[day]) rows[day].classList.add('vandaag');

  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: uw bericht is niet verstuurd. Bel of mail ons gerust.';
  });
})();
