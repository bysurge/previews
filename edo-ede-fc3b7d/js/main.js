// Edo preview: menu switch, search, category highlight, open status, mobile nav, demo form.
(function () {
  // mobile nav
  const burger = document.querySelector('.burger'), mnav = document.getElementById('mnav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    mnav.hidden = !open;
  });
  mnav.addEventListener('click', e => { if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); mnav.hidden = true; } });

  // menu switch
  const tabs = [...document.querySelectorAll('.switch [role=tab]')];
  const q = document.getElementById('q');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(o => { const on = o === t; o.setAttribute('aria-selected', on); document.getElementById(o.getAttribute('aria-controls')).hidden = !on; });
    filter();
  }));

  // search within the visible menu
  const noresult = document.getElementById('noresult');
  function filter() {
    const v = q.value.trim().toLowerCase();
    const panel = document.querySelector('.panel:not([hidden])');
    let any = 0;
    panel.querySelectorAll('.cat').forEach(cat => {
      let n = 0;
      cat.querySelectorAll('.dish').forEach(d => {
        const s = d.dataset.s, nr = d.querySelector('.nr').textContent.toLowerCase();
        const hit = !v || (/^\d+[a-z]?$/.test(v) ? nr === v : s.includes(v));
        d.hidden = !hit; if (hit) n++;
      });
      cat.querySelectorAll('.sub').forEach(h => { const ul = h.nextElementSibling; h.hidden = v && !ul.querySelector('.dish:not([hidden])'); });
      const special = cat.querySelector('.wok');
      if (special) special.hidden = !!v && !'wok'.includes(v) && !v.includes('wok');
      const show = !v || n > 0 || (special && !special.hidden);
      cat.hidden = !show; if (show) any++;
    });
    noresult.hidden = any > 0;
  }
  q.addEventListener('input', filter);

  // highlight category chip in view
  const chips = [...document.querySelectorAll('.chip')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const panel = e.target.closest('.panel');
    panel.querySelectorAll('.chip').forEach(c => {
      const on = c.getAttribute('href') === '#' + e.target.id;
      c.classList.toggle('on', on);
      if (on && innerWidth < 980) c.parentElement.scrollTo({ left: c.offsetLeft - 20, behavior: 'smooth' });
    });
  }), { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('.cat').forEach(c => io.observe(c));

  // open status and today in hours table
  const hours = { 0: [1200, 2030], 2: [1200, 2030], 3: [1200, 2030], 4: [1200, 2030], 5: [1200, 2100], 6: [1200, 2100] };
  const now = new Date(), d = now.getDay(), t = now.getHours() * 100 + now.getMinutes();
  const row = document.querySelector(`#hours tr[data-d="${d}"]`); if (row) row.classList.add('today');
  const fmt = n => String(Math.floor(n / 100)).padStart(2, '0') + ':' + String(n % 100).padStart(2, '0');
  const st = document.getElementById('st-open'), status = document.querySelector('.status');
  const h = hours[d];
  if (h && t >= h[0] && t < h[1]) { st.textContent = 'Nu open, tot ' + fmt(h[1]); status.classList.add('is-open'); }
  else if (h && t < h[0]) st.textContent = 'Vandaag open vanaf ' + fmt(h[0]);
  else st.textContent = d === 1 || (d === 0 && h && t >= h[1]) ? 'Gesloten, dinsdag weer open vanaf 12:00' : 'Gesloten, morgen weer open vanaf 12:00';

  // reservation times 17:00 - 20:45
  const sel = document.getElementById('tijd');
  for (let m = 17 * 60; m <= 20 * 60 + 45; m += 15) { const o = document.createElement('option'); o.textContent = fmt(Math.floor(m / 60) * 100 + m % 60); sel.appendChild(o); }
  sel.value = '18:30';

  // demo form
  document.getElementById('resform').addEventListener('submit', e => { e.preventDefault(); document.getElementById('formmsg').hidden = false; });
})();
