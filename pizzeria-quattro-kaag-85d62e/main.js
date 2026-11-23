const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', false);
}));
const hdr = document.getElementById('top');
const onScroll = () => hdr.classList.toggle('solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
// tabs
const tabs = [...document.querySelectorAll('[role=tab]')];
function select(t) {
  tabs.forEach(b => { const on = b === t; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
    document.getElementById(b.getAttribute('aria-controls')).hidden = !on; });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (d) { const n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
  });
});
// slow crossfade in hero
const slides = [...document.querySelectorAll('.hero-slides img')];
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && slides.length > 1) {
  let i = 0;
  setInterval(() => { slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on'); }, 6000);
}
// today
const row = document.querySelector(`.hours tr[data-d="${new Date().getDay()}"]`); if (row) row.classList.add('today');
