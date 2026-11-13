// Bamboo Inn preview: nav, hero slideshow, tabs, buffet toggle, search, chips, open status, demo form.
(function () {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // mobile nav
  const burger = $('.burger'), mnav = $('#mnav');
  burger.addEventListener('click', () => { const o = burger.getAttribute('aria-expanded') !== 'true'; burger.setAttribute('aria-expanded', o); mnav.hidden = !o; });
  mnav.addEventListener('click', e => { if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); mnav.hidden = true; } });

  // hero slideshow
  const slides = $$('.slide'), dots = $$('.hero-dots button');
  if (slides.length) {
    let i = 0, timer;
    const show = n => { i = n; slides.forEach((s, k) => s.classList.toggle('on', k === n)); dots.forEach((d, k) => d.setAttribute('aria-selected', k === n)); };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => show((i + 1) % slides.length), 6500); };
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); run(); }));
    run();
  }

  // generic tab groups (menu tabs, buffet days)
  $$('[role=tablist]').forEach(list => {
    const tabs = $$('[role=tab][aria-controls]', list);
    tabs.forEach(t => t.addEventListener('click', () => tabs.forEach(o => {
      const on = o === t; o.setAttribute('aria-selected', on); $('#' + o.getAttribute('aria-controls')).hidden = !on;
    })));
  });

  // buffet weekday/weekend default by today
  const day = new Date().getDay();
  if ([5, 6, 0].includes(day) && $('#bt-weekend')) $('#bt-weekend').click();

  // category chips highlight
  const cats = $$('.cat');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$(`.chip`).forEach(c => {
      const on = c.getAttribute('href') === '#' + e.target.id;
      c.classList.toggle('on', on);
      if (on && innerWidth < 1000 && c.parentElement.classList.contains('chips-side')) c.parentElement.scrollTo({ left: c.offsetLeft - 20, behavior: 'smooth' });
    });
  }), { rootMargin: '-25% 0px -65% 0px' });
  cats.forEach(c => io.observe(c));

  // search (afhalen page)
  const q = $('#q');
  if (q) q.addEventListener('input', () => {
    const v = q.value.trim().toLowerCase(); let any = 0;
    $$('#acats .cat').forEach(cat => {
      let n = 0;
      $$('.dish', cat).forEach(d => {
        const nr = ($('.nr', d) || {}).textContent || '';
        const hit = !v || (/^\d+[a-z]?$/.test(v) ? nr.toLowerCase() === v : d.dataset.s.includes(v));
        d.hidden = !hit; if (hit) n++;
      });
      $$('.sub', cat).forEach(h => { h.hidden = !!v && !h.nextElementSibling.querySelector('.dish:not([hidden])'); });
      cat.hidden = !!v && !n; if (!cat.hidden) any++;
    });
    $('#noresult').hidden = any > 0;
  });

  // open status + today
  const hours = { 1: [1200, 2200], 3: [1200, 2200], 4: [1200, 2200], 5: [1130, 2200], 6: [1130, 2200], 0: [1130, 2200] };
  const now = new Date(), t = now.getHours() * 100 + now.getMinutes(), h = hours[day];
  const row = $(`#hours tr[data-d="${day}"]`); if (row) row.classList.add('today');
  const st = $('#st-open');
  if (st) {
    const f = n => String(Math.floor(n / 100)).padStart(2, '0') + ':' + String(n % 100).padStart(2, '0');
    if (h && t >= h[0] && t < h[1]) { st.textContent = 'Nu open, tot ' + f(h[1]); $('.today-bar').classList.add('is-open'); }
    else if (h && t < h[0]) st.textContent = 'Vandaag open vanaf ' + f(h[0]);
    else st.textContent = day === 2 || day === 1 ? 'Gesloten, woensdag weer open vanaf 12:00' : 'Gesloten, morgen weer open';
  }

  // links that preset the reservation form
  $$('[data-kerst]').forEach(a => a.addEventListener('click', () => { const r = $('input[name=kerst][value=ja]'); if (r) r.checked = true; }));
  $$('[data-soort]').forEach(a => a.addEventListener('click', () => { const s = $('#soort'); if (s) s.value = a.dataset.soort; }));

  // demo form
  const form = $('#resform');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); $('#formmsg').hidden = false; });
})();
