(function () {
  var t = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  t.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); t.setAttribute('aria-expanded', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); }
  });
})();
