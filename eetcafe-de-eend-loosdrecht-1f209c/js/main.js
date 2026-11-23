// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
});

// Menu tabs
const tabs = [...document.querySelectorAll('[role=tab]')];
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    select(n); n.focus();
  });
});

// Highlight today in the opening hours
const row = document.querySelector(`.hours tr[data-d="${new Date().getDay()}"]`);
if (row) row.classList.add('today');

// Demo form: send nothing
document.querySelectorAll('.demo-form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  f.querySelector('.form-msg').hidden = false;
}));
