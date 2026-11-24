(() => {
  const toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('[role=tablist]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role=tab]')];
    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', on);
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }));
  });

  // live "nu open / gesloten" per door, from data-hours: "day:HH:MM-HH:MM" (0 = sunday)
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  document.querySelectorAll('.door[data-hours]').forEach(door => {
    const slots = Object.fromEntries(door.dataset.hours.split(' ').map(s => { const [d, r] = s.split('='); return [d, r]; }));
    const today = slots[day];
    const status = door.querySelector('.status');
    let open = false;
    if (today) { const [a, b] = today.split('-'); open = mins >= toMin(a) && mins < toMin(b); }
    status.textContent = open ? 'Nu open' : 'Nu gesloten';
    status.classList.toggle('open', open);
    door.querySelectorAll('tr[data-day]').forEach(tr => {
      if (tr.dataset.day.split(',').includes(String(day))) tr.classList.add('today');
    });
  });
})();
