(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Menu
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

  // Hero slideshow (own photos)
  const slides = $$('.hero-slides img');
  if (!reduce && slides.length > 1) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 5200);
  }

  // Opening hours: today
  const hours = { 0: '16:00 – 21:30', 1: null, 2: '17:00 – 21:30', 3: '17:00 – 21:30', 4: '17:00 – 21:30', 5: '17:00 – 22:00', 6: '16:00 – 22:00' };
  const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  const now = new Date(), d = now.getDay();
  const today = $('#today');
  if (hours[d]) today.textContent = `Vandaag (${names[d]}) open ${hours[d].replace(' – ', '–')}`;
  else { today.textContent = 'Maandag gesloten, morgen weer open vanaf 17:00'; today.classList.add('closed'); }
  const row = $(`#hours tr[data-d="${d}"]`); if (row) row.classList.add('is-today');

  // Prices (per persoon, uit tariefposters; zie notes.md)
  const P = {
    new: {
      week:    [['2 uur', '43,50', '25,00', '19,00'], ['2,5 uur', '46,50', '26,50', '20,50'], ['3 uur', '49,50', '28,00', '22,00'], ['3,5 uur', '52,50', '29,50', '23,50'], ['4 uur', '55,50', '31,00', '25,00']],
      weekend: [['2 uur', '47,25', '27,75', '20,75'], ['2,5 uur', '50,25', '29,25', '22,25'], ['3 uur', '53,25', '30,75', '23,75'], ['3,5 uur', '56,25', '32,25', '25,25'], ['4 uur', '59,25', '33,75', '26,75']]
    },
    old: {
      week:    [['2 uur', '42,50'], ['2,5 uur', '45,50'], ['3 uur', '48,50'], ['4 uur', '54,50']],
      weekend: [['2 uur', '46,25'], ['2,5 uur', '49,25'], ['3 uur', '52,25'], ['4 uur', '58,25']]
    }
  };
  const isNewPeriod = now >= new Date(2026, 11, 1);
  const state = { period: 'new', days: (d === 5 || d === 6 || d === 0) ? 'weekend' : 'week' };
  const body = $('#pbody'), note = $('#pnote');
  const euro = v => `€ ${v}`;
  function render() {
    const rows = P[state.period][state.days];
    body.innerHTML = rows.map(r => `<tr><td>${r[0]}</td><td class="adult">${euro(r[1])}</td>` +
      (r[2] ? `<td>${euro(r[2])}</td><td>${euro(r[3])}</td>` : `<td class="na">–</td><td class="na">–</td>`) + '</tr>').join('');
    note.textContent = state.period === 'old'
      ? 'Geldig t/m 30 november 2026. De kinderprijzen voor deze periode hoor je aan de balie of telefonisch; vanaf 1 december staan ze hierboven bij de nieuwe tarieven.'
      : (isNewPeriod ? '' : 'Nieuw: vanaf 1 december 2026 kun je ook 3,5 uur blijven.');
    $$('[data-period]').forEach(b => b.setAttribute('aria-selected', b.dataset.period === state.period));
    $$('[data-days]').forEach(b => b.setAttribute('aria-selected', b.dataset.days === state.days));
  }
  $$('[data-period]').forEach(b => b.addEventListener('click', () => { state.period = b.dataset.period; render(); }));
  $$('[data-days]').forEach(b => b.addEventListener('click', () => { state.days = b.dataset.days; render(); }));
  render();
  $('#priceTeaser').innerHTML = `2 uur all-in vanaf <b>€ ${isNewPeriod ? '43,50' : '42,50'}</b> p.p.`;

  // Stations rail buttons
  const rail = $('#rail');
  $$('.rail-btn').forEach(b => b.addEventListener('click', () => {
    const card = rail.querySelector('.st');
    rail.scrollBy({ left: Number(b.dataset.dir) * (card.offsetWidth + 16) * (innerWidth > 900 ? 2 : 1), behavior: reduce ? 'auto' : 'smooth' });
  }));

  // Reservation: total persons
  const form = $('#bookForm'), total = $('#total');
  const sum = () => {
    const n = ['volw', 'k811', 'k37', 'k02'].reduce((s, k) => s + (parseInt(form.elements[k].value, 10) || 0), 0);
    total.textContent = `Totaal: ${n} ${n === 1 ? 'persoon' : 'personen'}`;
  };
  form.addEventListener('input', sum); sum();

  // Forms do not send (preview)
  $$('form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    $('.form-msg', f).textContent = 'Dit is een voorbeeld: er is niets verstuurd. In de echte website komt hier de online reservering (of het contactformulier).';
  }));

  // Mobile action bar appears after the hero
  const bar = $('.actionbar'), hero = $('.hero');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => bar.classList.toggle('show', !e.isIntersecting), { threshold: 0.1 }).observe(hero);
  } else bar.classList.add('show');
})();
