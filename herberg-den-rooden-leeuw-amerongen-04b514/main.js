(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  var form = document.getElementById('res-form');
  var note = document.getElementById('form-note');
  var date = form && form.querySelector('input[type=date]');
  if (date) date.min = new Date().toISOString().slice(0, 10);
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.hidden = false;
  });
})();
