// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Tabs (menu + drinks)
document.querySelectorAll('[role=tablist]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role=tab]')];
  const select = t => {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });
});

// Open today?
(() => {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const el = document.getElementById('today');
  const row = document.querySelector(`.hours [data-days*="${day}"]`);
  if (row) row.classList.add('is-today');
  if (day === 1) { el.textContent = 'Vandaag (maandag) gesloten, morgen weer open vanaf 16:30'; el.classList.add('closed'); }
  else if (mins < 990) el.textContent = 'Vandaag open van 16:30 tot 22:00';
  else if (mins < 1320) el.textContent = 'Nu open, tot 22:00';
  else { el.textContent = day === 0 ? 'Dinsdag weer open vanaf 16:30' : 'Morgen weer open vanaf 16:30'; el.classList.add('closed'); }
})();

// Demo form
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Bel gerust 0165-769036.';
});
