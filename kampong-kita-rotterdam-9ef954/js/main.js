const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
});
