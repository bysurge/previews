// mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); } });

// menu tabs
const tabs = [...document.querySelectorAll('.tabs [role=tab]')];
function show(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => show(t));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    show(n); n.focus();
  });
});
document.querySelectorAll('[data-tab]').forEach(a => a.addEventListener('click', () => {
  const t = document.getElementById('t-' + a.dataset.tab);
  if (t) show(t);
}));

// demo forms
document.querySelectorAll('.demo-form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  f.querySelector('.form-msg').hidden = false;
}));
