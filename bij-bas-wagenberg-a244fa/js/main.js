// Mobiel menu
const knop = document.getElementById('menuknop');
const nav = document.getElementById('nav');
function sluit() { nav.classList.remove('open'); knop.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
knop.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  knop.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', sluit));

// Rustige wissel van hero-foto's
const fotos = [...document.querySelectorAll('.hero__fotos img')];
if (fotos.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = 0;
  setInterval(() => {
    fotos[i].classList.remove('actief');
    i = (i + 1) % fotos.length;
    fotos[i].classList.add('actief');
  }, 6000);
}

// Tabs menukaart
const tabs = [...document.querySelectorAll('[role="tab"]')];
function kies(tab, focus) {
  tabs.forEach(t => {
    const aan = t === tab;
    t.setAttribute('aria-selected', aan);
    t.tabIndex = aan ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
  });
  if (focus) tab.focus();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => kies(t));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});

// "Neem contact op" bij feesten zet de keuze in het formulier
document.querySelectorAll('[data-keuze]').forEach(a => a.addEventListener('click', () => {
  document.getElementById('keuze').value = a.dataset.keuze;
}));

// Vandaag markeren in de openingstijden
const rij = document.querySelector(`#tijdtabel tr[data-dag="${new Date().getDay()}"]`);
if (rij) rij.classList.add('vandaag');

// Voorbeeldformulier: verstuurt niets
document.getElementById('reserveren').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('melding').hidden = false;
});
