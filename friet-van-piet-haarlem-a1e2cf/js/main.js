// Mobile menu
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Menu tabs
const tabs = [...document.querySelectorAll('[role=tab]')];
function select(tab, focus) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) tab.focus();
  tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});

// Open now (Amsterdam time). Ma-vr 11-24, za-zo 12-24.
(function () {
  const el = document.getElementById('openNow');
  try {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const get = k => parts.find(p => p.type === k).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    const mins = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);
    const opens = (day === 0 || day === 6) ? 12 : 11;
    const row = document.querySelector(`.hours tr[data-day="${day}"]`);
    if (row) row.classList.add('today');
    if (mins >= opens * 60) {
      el.textContent = 'Nu open tot 24.00 uur';
    } else {
      el.textContent = `Vandaag open vanaf ${opens}.00 uur`;
      el.classList.add('dicht');
    }
    el.hidden = false;
  } catch (e) { /* laat het label weg */ }
})();
