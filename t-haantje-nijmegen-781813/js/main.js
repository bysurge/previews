(function () {
  var t = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  t.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); t.setAttribute('aria-expanded', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); }
  });
  var chips = document.querySelectorAll('.chip'), evs = document.querySelectorAll('.ev');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c); });
      var f = c.getAttribute('data-f');
      evs.forEach(function (e) { e.hidden = f !== 'alle' && e.getAttribute('data-t') !== f; });
    });
  });
})();
