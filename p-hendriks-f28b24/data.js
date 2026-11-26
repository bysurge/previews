// Hoveniersbedrijf P. Hendriks (Zoetermeer). Geen eigen website. Bron: alleen hun Google-profiel (5,0 uit 4, 26-11-2026).
// Foto's: 4 unieke eigen werkfoto's van hun Google-profiel (g01 en g02 zijn dezelfde, g05 lijkt op g01). Geen stockfoto's.
// Diensten bewust algemeen gehouden: alleen wat reviews en foto's laten zien (tuinaanleg, advies, bestrating, beplanting).
window.SITE = {
  naam: "Hoveniersbedrijf P. Hendriks",
  kortNaam: "P. Hendriks",
  vak: "Hovenier",
  plaats: "Zoetermeer",
  logo: "img/logo.svg",
  logoOpFoto: "img/logo-wit.svg",
  logoWit: "img/logo-wit.svg",
  logoVorm: "icoon",
  logoHoogte: 36,
  kleuren: { brand: "#2c4a2e", accent: "#a8743f" },
  telefoon: "06 14 36 62 36",
  telefoonIntl: "31614366236",
  waTekst: "App ons",
  adres: ["Bakemaplan 6", "2728 DA Zoetermeer"],
  google: { score: "5,0", aantal: 4 },
  ctaTekst: "Vraag advies aan",
  voetTekst: "Familiebedrijf in Zoetermeer voor tuinaanleg en advies. Netjes, nauwkeurig en met uw wensen voorop.",

  hero: {
    regels: ["Uw tuin,", "met *vakmanschap*", "aangelegd."],
    tekst: "Hoveniersbedrijf P. Hendriks is een familiebedrijf in Zoetermeer. We adviseren vooraf, denken met u mee en werken netjes en nauwkeurig.",
    foto: "img/hero.jpg", fotoPos: "50% 50%", fotoPosMobiel: "30% 50%", donker: true,
    fotoAlt: "Het team van Hendriks met de bedrijfswagen aan het werk in een voortuin aan het water",
    punten: ["Familiebedrijf", "5,0 op Google"]
  },

  marquee: ["Tuinaanleg", "Advies vooraf", "Bestrating en terrassen", "Beplanting", "Familiebedrijf", "Zoetermeer"],

  intro: {
    kicker: "Familiebedrijf",
    tekst: "Een tuin waar u *echt blij* mee bent. Vooraf goed advies, rekening houden met al uw wensen, en netjes en nauwkeurig werk.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Familie", label: "Bedrijf met verstand van het vak" },
      { getal: "Advies", label: "Vooraf, met uw wensen voorop" }
    ]
  },

  diensten: {
    vorm: "kaarten",
    titel: "Wat we voor u *doen*",
    tekst: "Vertel wat u wilt met uw tuin, dan denken we met u mee.",
    items: [
      { naam: "Tuinaanleg", foto: "img/voortuin.jpg", pos: "50% 60%", tekst: "Van advies tot oplevering. We denken mee met uw wensen en leggen de tuin netjes, nauwkeurig en snel aan." },
      { naam: "Bestrating en terrassen", foto: "img/terras.jpg", pos: "50% 60%", tekst: "Strak gelegde terrassen en paden, in de tegel die bij uw huis en tuin past." },
      { naam: "Beplanting", foto: "img/team.jpg", pos: "60% 50%", tekst: "Planten op de juiste plek, zodat uw tuin mooi groeit en bloeit." }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk",
    titel: "Aan het werk in *Zoetermeer*",
    tekst: "Een paar foto's van klussen. Heeft u een vraag over uw tuin? App gerust een foto.",
    items: [
      { foto: "img/terras.jpg", label: "Achtertuin met nieuw terras", sub: "Bestrating", pos: "50% 60%" },
      { foto: "img/team.jpg", label: "Het team aan het werk", sub: "Beplanting" },
      { foto: "img/voortuin.jpg", label: "Terras aan de voorgevel", sub: "Bestrating" },
      { foto: "img/werk.jpg", label: "Voortuin aan het water", sub: "Tuinaanleg" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Chantal", tekst: "Vooraf werden wij goed geadviseerd en is er met onze wensen meegedacht. De tuinaanleg is zeer goed verlopen. Dit bedrijf werkt zeer netjes en nauwkeurig en snel. En dit alles voor een zeer redelijke prijs. … Wij zijn erg blij met onze tuin en wij zullen jullie zeer zeker aanraden." },
      { naam: "Sevada M.", tekst: "Familiebedrijf met verstand van het vak. Denken met je mee, werken netjes en nauwkeurig." }
    ]
  },

  faq: [
    { v: "Komen jullie eerst kijken?", a: "Neem contact op via WhatsApp of telefoon. We adviseren u graag vooraf en denken mee met uw wensen." },
    { v: "Kan ik een foto van mijn tuin sturen?", a: "Ja, app gerust een foto. Dan kunnen we u sneller een goed beeld geven." },
    { v: "Waar werken jullie?", a: "We zitten in Zoetermeer. Twijfelt u of we bij u komen? Vraag het gerust." }
  ],

  band: {
    foto: "img/terras.jpg", fotoPos: "50% 65%",
    titel: "Klaar voor een tuin *om blij van te worden?*",
    tekst: "App of bel ons, dan denken we met u mee."
  },

  contact: {
    titel: "Vraag *advies* aan",
    tekst: "Vertel kort wat u wilt met uw tuin. App gerust een foto mee, dan reageren we zo snel mogelijk.",
    onderwerpen: ["Tuinaanleg", "Bestrating en terrassen", "Beplanting", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw bestraten en een border langs de schutting"
  }
};
