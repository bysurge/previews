// Beerens Daktechniek Weert. GEEN eigen website: alles uit het Google-profiel (5,0 / 2), 25-11-2026. Zie content.md.
// Logo zelf gemaakt (woordmerk). Foto's: Google-profiel. Diensten alleen wat de foto's en reviews laten zien.
window.SITE = {
  naam: "Beerens Daktechniek",
  kortNaam: "Beerens Daktechniek",
  plaats: "Weert",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 40,
  kleuren: { brand: "#1b2026", accent: "#8a5a2b" },
  telefoon: "06 20 70 90 07",
  telefoonIntl: "31620709007",
  adres: ["Meester Strijbosstraat 49", "6001 ST Weert"],
  google: { score: "5,0", aantal: "2" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  voetTekst: "Dakdekker in Weert. Pannendaken, dakisolatie, dakkapellen en complete dakrenovaties.",

  hero: {
    regels: ["Een nieuw dak,", "vakwerk."],
    tekst: "Nieuwe pannen, isolatie en dakkapellen in Weert en omgeving. Hard gewerkt, en afspraken die worden nagekomen.",
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 50%",
    fotoAlt: "Vernieuwd pannendak met dakramen en een dakkapel",
    donker: true,
    punten: ["5,0 op Google", "Afspraken nagekomen", "Pannen, isolatie en dakkapellen"]
  },

  marquee: ["Pannendaken", "Dakisolatie", "Dakkapellen", "Dakrenovatie", "Dakopbouw", "Dakramen", "Nieuwe dakpannen"],

  intro: {
    kicker: "Beerens Daktechniek",
    tekst: "Een nieuw dak is een flinke stap. Bij Beerens krijgt u een team dat hard werkt, vakwerk levert en de afspraken keurig nakomt. Van de isolatie tot de laatste pan.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Snel", label: "Ter plaatse" },
      { getal: "Weert", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Alles voor uw pannendak",
    tekst: "Stuur een paar foto's van uw dak via WhatsApp. Dan weet u snel waar u aan toe bent.",
    knop: "Vraag een offerte aan",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 50%",
        tekst: "Het oude dak eraf en nieuwe dakpannen erop, strak gelegd en netjes afgewerkt bij nok, goot en dakramen.",
        punten: ["Nieuwe dakpannen", "Strakke afwerking", "Dakramen ingewerkt"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/hero-mobiel.jpg", pos: "50% 50%",
        tekst: "Bij een nieuw dak meteen isolatieplaten erin. Warmer binnen en een lagere energierekening.",
        punten: ["Isolatieplaten", "Samen met nieuwe pannen", "Lagere energierekening"] },
      { naam: "Dakkapellen", soort: "Dakkapel", foto: "img/dakkapel.jpg", pos: "50% 50%",
        tekst: "Meer ruimte en licht op zolder met een dakkapel, mooi aangesloten op het pannendak.",
        punten: ["Meer ruimte en licht", "Strak bekleed", "Aangesloten op de pannen"] },
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/renovatie.jpg", pos: "50% 45%",
        tekst: "Is uw dak aan vervanging toe? We pakken het in één keer aan: pannen, isolatie en dakkapel.",
        punten: ["Alles in één keer", "Pannen, isolatie en dakkapel", "Netjes opgeleverd"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit daken die we in en rond Weert hebben gemaakt.",
    items: [
      { foto: "img/dakkapellen-bouw.jpg", label: "Dakopbouw", sub: "Drie dakkapellen in aanbouw", pos: "50% 50%" },
      { foto: "img/dakkapel-breed.jpg", label: "Brede dakkapel", sub: "Strak afgewerkt", pos: "50% 50%" },
      { foto: "img/dakkapel-hout.jpg", label: "Dakkapel", sub: "Op een nieuw pannendak", pos: "50% 50%" },
      { foto: "img/bijgebouw.jpg", label: "Bijgebouw", sub: "Met nieuwe pannen", pos: "50% 50%" },
      { foto: "img/hero.jpg", label: "Pannendak", sub: "Met dakramen en dakkapel", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt Beerens",
    tekst: "Snel ter plaatse, duidelijke afspraken en hard aan het werk. Dat noemen klanten op Google.",
    foto: "img/sloop.jpg", fotoPos: "50% 50%", fotoAlt: "Oud dak wordt verwijderd tijdens een dakrenovatie",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat u wilt, het liefst met een paar foto's van uw dak." },
      { naam: "Snel ter plaatse", tekst: "We komen kijken en bespreken de mogelijkheden." },
      { naam: "Duidelijke afspraken", tekst: "U weet vooraf wat er gebeurt en wanneer." },
      { naam: "Vakwerk", tekst: "We werken hard en leveren het dak netjes op." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Bij ons is het dak vervangen met isolatieplaten, nieuwe dakpannen en een dakkapel. Ze werken hard en leveren vakwerk. De afspraken zijn keurig nagekomen. …", naam: "Maikel t. K." },
      { tekst: "Snel ter plaatse en goed werk verricht. Goede service!", naam: "PF" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakdekker in Weert",
    rol: "Beerens Daktechniek, Weert",
    tekst: [
      "Klanten kennen Beerens Daktechniek als een team dat hard werkt, vakwerk levert en de afspraken keurig nakomt.",
      "Pannendaken, isolatie en dakkapellen: we pakken uw dak in één keer goed aan. Heeft u een vraag? Stuur gerust een bericht met een foto."
    ],
    foto: "img/dakkapel-hout.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuwe dakkapel op een pannendak",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/pannendak.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Bel of app 06 20 70 90 07. Stuur er een foto bij, dan denken we met u mee."
  },

  contact: {
    titel: "Vertel wat u met uw dak wilt",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Nieuw pannendak", "Dakisolatie", "Dakkapel", "Dakrenovatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de pannen zijn aan vervanging toe en we willen meteen isoleren en een dakkapel",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};

// Leesbare hero-tekst op de foto (sjabloon niet aanpassen).
(function () {
  const st = document.createElement('style');
  st.textContent = '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
