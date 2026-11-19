// Mobile menu
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Calm hero slideshow (skipped when reduced motion is preferred)
const slides = [...document.querySelectorAll('.slides img')];
if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  slides.forEach(img => { img.loading = 'eager'; });
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('on');
    i = (i + 1) % slides.length;
    slides[i].classList.add('on');
  }, 6500);
}

// Demo form: never sends anything
const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});
