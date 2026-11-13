// Tabs, mobile nav, dish wall arrows and the sample reservation form. Nothing is sent anywhere.
document.querySelectorAll('[data-tabs]').forEach(box => {
  const tabs = [...box.querySelectorAll('[role="tab"]')];
  const show = t => tabs.forEach(b => {
    const on = b === t;
    b.setAttribute('aria-selected', on);
    b.tabIndex = on ? 0 : -1;
    document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); show(n);
    });
  });
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', nav.classList.toggle('open')));
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); } });

const row = document.querySelector('.wall-row');
document.querySelectorAll('.wall-btn').forEach(b => b.addEventListener('click', () => {
  row.scrollBy({ left: Number(b.dataset.dir) * row.clientWidth * 0.8, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}));

const form = document.querySelector('.res-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.querySelector('.form-msg').hidden = false;
});
