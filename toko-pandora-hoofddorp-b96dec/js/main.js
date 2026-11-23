// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Today's opening hours (ma-za 10-20, zo 12-20)
(() => {
  const d = new Date().getDay();
  const el = document.getElementById('vandaag');
  const sub = document.getElementById('vandaag-sub');
  el.textContent = d === 0 ? 'Vandaag open 12:00–20:00' : 'Vandaag open 10:00–20:00';
  sub.textContent = d === 0 ? 'ma t/m za 10:00–20:00' : 'zondag 12:00–20:00';
})();

// Menu tabs
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    select(n); n.focus();
  });
});

// Rames builder
const form = document.getElementById('builder');
const val = name => [...form.querySelectorAll(`input[name="${name}"]:checked`)].map(i => i.value);
function update() {
  const maat = form.querySelector('input[name="maat"]:checked');
  const groot = maat.value === 'groot';
  // nasi uduk only with groot
  const uduk = form.querySelector('input[data-groot]');
  uduk.disabled = !groot;
  if (!groot && uduk.checked) form.querySelector('input[name="bodem"]').checked = true;

  [['vlees', 2], ['groente', 3]].forEach(([name, max]) => {
    const boxes = [...form.querySelectorAll(`input[name="${name}"]`)];
    const n = boxes.filter(b => b.checked).length;
    boxes.forEach(b => { b.disabled = !b.checked && n >= max; });
    const c = document.getElementById('c-' + name);
    c.textContent = `${n} van ${max}`;
    c.classList.toggle('full', n === max);
    const list = val(name);
    document.getElementById('s-' + name).innerHTML = list.length
      ? list.join(', ') + (list.length < max ? ` <span class="leeg">(nog ${max - list.length})</span>` : '')
      : `<span class="leeg">nog ${max} kiezen</span>`;
  });

  document.getElementById('s-maat').textContent = groot ? 'Groot' : 'Klein';
  document.getElementById('s-bodem').textContent = val('bodem')[0];
  document.getElementById('s-prijs').textContent = '€ ' + maat.dataset.prijs;

  const msg = `Hallo Toko Pandora, ik wil graag een ${groot ? 'grote' : 'kleine'} nasi rames bestellen.\n` +
    `Bodem: ${val('bodem')[0]}\nVlees: ${val('vlees').join(', ') || '-'}\nGroente: ${val('groente').join(', ') || '-'}`;
  document.getElementById('wa-link').href = 'https://wa.me/31644691453?text=' + encodeURIComponent(msg);
}
form.addEventListener('change', update);
form.addEventListener('submit', e => e.preventDefault());
update();
