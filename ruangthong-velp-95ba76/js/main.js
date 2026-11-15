(() => {
  const top = document.getElementById('top-bar');
  const burger = document.querySelector('.burger');
  const nav = document.getElementById('nav');
  const float = document.querySelector('.float-call');
  const hero = document.querySelector('.hero');

  const onScroll = () => {
    top.classList.toggle('scrolled', scrollY > 10);
    if (float) float.classList.toggle('hide', scrollY < hero.offsetHeight * 0.8);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeNav = () => { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.style.overflow = ''; };
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // tabs
  const tabs = [...document.querySelectorAll('[role=tab]')];
  const select = (t, scroll) => {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    t.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (scroll) {
      const bar = document.querySelector('.tabs');
      if (bar.getBoundingClientRect().top <= 80) scrollTo({ top: bar.offsetTop - 70, behavior: 'smooth' });
    }
  };
  tabs.forEach((t, n) => {
    t.addEventListener('click', () => select(t, true));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const next = tabs[(n + d + tabs.length) % tabs.length];
      next.focus(); select(next);
    });
  });

  // filters
  const active = new Set();
  const apply = () => {
    document.querySelectorAll('.panel').forEach(p => {
      let shown = 0;
      p.querySelectorAll('.dish').forEach(li => {
        const ok = [...active].every(f => li.dataset[f] === '1');
        li.hidden = !ok; if (ok) shown++;
      });
      p.querySelector('.empty').hidden = shown > 0;
    });
  };
  document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    const f = c.dataset.filter, on = c.getAttribute('aria-pressed') !== 'true';
    c.setAttribute('aria-pressed', on);
    on ? active.add(f) : active.delete(f);
    apply();
  }));

  // today
  const d = new Date().getDay();
  document.querySelectorAll('.uren tr').forEach(tr => { if (tr.dataset.d === String(d)) tr.classList.add('today'); });
  const t = document.getElementById('today');
  const dec = new Date(), m = dec.getMonth(), day = dec.getDate();
  const winter = (m === 11 && day >= 22) || (m === 0 && day <= 6);
  if (t) t.innerHTML = winter ? '<strong>Wintersluiting:</strong> gesloten t/m woensdag 6 januari.'
    : (d === 2 || d === 3) ? '<strong>Vandaag gesloten.</strong> Donderdag zijn we weer open van 16:00 tot 20:30.'
    : '<strong>Vandaag open van 16:00 tot 20:30.</strong> Bestellen kan vanaf 14:00.';
})();
