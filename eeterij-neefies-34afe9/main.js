document.documentElement.classList.add('js');
// mobile menu
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', false);
}));
// menu tabs
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
// demo form
document.getElementById('res-form').addEventListener('submit', e => {
  e.preventDefault(); document.getElementById('form-msg').hidden = false;
});
// opening hours today
const hours = { 2: [17, 21.5], 3: [17, 21.5], 4: [17, 21.5], 5: [17, 22.5], 6: [17, 22.5] };
const now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
const row = document.querySelector(`.hours tr[data-d="${d}"]`); if (row) row.classList.add('today');
const el = document.getElementById('open-now');
if (hours[d] && h >= hours[d][0] && h < hours[d][1]) { el.textContent = 'Nu open'; el.classList.add('is-open'); }
else if (hours[d] && h < hours[d][0]) el.textContent = 'Vandaag open vanaf 17:00';
// draw the 104-steps path once
const steps = document.querySelector('.steps');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { steps.classList.add('draw'); io.disconnect(); } }), { threshold: .5 });
  io.observe(steps);
}
