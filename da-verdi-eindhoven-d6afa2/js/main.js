(() => {
  const body = document.body;
  const bar = document.getElementById('top-bar');
  const toggle = document.querySelector('.nav-toggle');

  // Header: transparent over the photo, solid once scrolled.
  const onScroll = () => bar.classList.toggle('solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu.
  toggle.addEventListener('click', () => {
    const open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
    body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // Tabs (menu + wine), keyboard friendly.
  document.querySelectorAll('[role=tablist]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role=tab]')];
    const select = tab => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const n = tabs[(i + d + tabs.length) % tabs.length];
        n.focus(); select(n);
      });
    });
  });

  // Today's hours (kitchen times from their own site).
  const day = new Date().getDay(); // 0 = zondag
  const weekend = day === 0 || day >= 5;
  const today = document.getElementById('today');
  if (today) today.textContent = weekend
    ? 'Vandaag geopend 16.00 – 23.30 · keuken tot 22.30'
    : 'Vandaag geopend 17.00 – 23.00 · keuken tot 22.30';
  document.querySelectorAll('.hours tr[data-days]').forEach(tr => {
    if (tr.dataset.days.includes(String(day))) tr.classList.add('now');
  });
})();
