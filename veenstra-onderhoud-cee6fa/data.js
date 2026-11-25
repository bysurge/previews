// Veenstra Totaalonderhoud (Bussum). Website werkt niet (domein verlopen): alles uit het Google-profiel (4,6 / 69), 25-11-2026.
// Logo zelf gemaakt (woordmerk). Foto's: Google-profiel.
window.SITE = {
  naam: "Veenstra Totaalonderhoud",
  kortNaam: "Veenstra",
  plaats: "Bussum",
  vak: "Dakdekker",
  logo: "img/logo.svg", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.svg", logoOpFoto: "img/logo-wit.svg", logoHoogte: 44,
  kleuren: { brand: "#1d2b2a", accent: "#c27a3a" },
  telefoon: "06 17 83 51 71",
  telefoonIntl: "31617835171",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  adres: ["Torenlaan 5b", "1402 AT Bussum"],
  google: { score: "4,6", aantal: "69" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Dakwerk en onderhoud in Bussum en omgeving. Pannendaken, platte daken, lekkages en isolatie.",

  hero: {
    regels: ["Uw dak,", "goed geregeld."],
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 45%",
    fotoAlt: "Nieuw plat dak aan het water, afgewerkt door Veenstra Totaalonderhoud",
    donker: true,
    punten: ["Komt afspraken na", "Eerlijke prijs", "4,6 uit 69 reviews"]
  },

  marquee: ["Pannendaken", "Platte daken", "Lekkages", "Dakisolatie", "Dakramen", "Bergingen", "Regenpijpen", "Onderhoud"],

  intro: {
    kicker: "Over Veenstra",
    tekst: "Nieuwe dakpannen, een bergingsdak dat vervangen moet of een lekkage midden in de storm? Veenstra Totaalonderhoud komt snel langs, is flexibel in de planning en de prijs is precies wat u mag verwachten.",
    stats: [
      { getal: "4,6", label: "Gemiddeld op Google" },
      { getal: "69", tel: 69, label: "Reviews op Google" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Stuur een paar foto's van uw dak via WhatsApp, dan hoort u snel wat er nodig is.",
    knop: "Vraag een offerte aan",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/woning.jpg", pos: "50% 30%", tekst: "Nieuwe dakpannen en isolatiefolie op uw puntdak, netjes gelegd tot in de nok.",
        punten: ["Nieuwe dakpannen", "Isolatiefolie", "Nette afwerking"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/platdak.jpg", pos: "50% 50%", tekst: "Een nieuw plat dak voor uw woning, uitbouw of berging, strak afgewerkt en waterdicht.",
        punten: ["Bergingen en uitbouwen", "Strakke dakranden", "Ook met installaties"] },
      { naam: "Lekkages", soort: "Lekkage", foto: "img/vakman.jpg", pos: "50% 40%", tekst: "Lekt het? We komen snel kijken, ook als het stormt, en verhelpen de lekkage.",
        punten: ["Snel ter plekke", "Ook bij storm", "Oorzaak opgespoord"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 50%", tekst: "Isolatie op het platte dak of onder de pannen, voor een warmer huis en lagere stookkosten.",
        punten: ["Plat dak en schuin dak", "Isolatieplaten en folie", "Lagere energierekening"] },
      { naam: "Dakramen", soort: "Dakraam", foto: "img/dakraam.jpg", pos: "50% 50%", tekst: "Een dakraam netjes ingewerkt in het pannendak, met een waterdichte aansluiting.",
        punten: ["Plaatsen en vervangen", "Waterdicht ingewerkt", "Meer daglicht"] }
    ]
  },

  galerij: {
    vorm: "mozaiek",
    titel: "Werk van Veenstra",
    items: [
      { foto: "img/platdak-water.jpg", label: "Plat dak", sub: "Aan het water", pos: "50% 55%" },
      { foto: "img/isolatie.jpg", label: "Dakisolatie", sub: "In uitvoering", pos: "50% 50%" },
      { foto: "img/pannen-platdak.jpg", label: "Pannen en plat dak", sub: "Bij zonsondergang", pos: "50% 60%" },
      { foto: "img/folie.jpg", label: "Folie en latten", sub: "Voorbereiding", pos: "50% 50%" },
      { foto: "img/platdak.jpg", label: "Plat dak", sub: "Met installaties", pos: "50% 50%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Zelfs tijdens de storm en sneeuw, na meerdere keren bellen met verschillende bedrijven, kwamen ze langs. Met een ladder en veel moeite hebben ze onze lekkage weten te verhelpen. … Deze jongens doen echt hun best en willen het beste voor de klant.", naam: "Julian T." },
      { tekst: "Hadden wat werk aan ons puntdak — nieuwe dakpannen en isolatiefolie laten leggen. Veenstra heeft dit netjes opgepakt. Flexibel in de planning, afspraken worden nagekomen … Prijs was precies wat je mag verwachten, geen verrassingen.", naam: "Lo" },
      { tekst: "Ik heb het dak van mijn berging laten vervangen. Ondanks de vele tegenslagen onderweg, is alles netjes en professioneel opgelost. Het eindresultaat ziet er super uit – erg tevreden!", naam: "Robert N." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakdekker in Bussum",
    rol: "Veenstra Totaalonderhoud, Torenlaan, Bussum",
    tekst: [
      "Klanten kennen Veenstra als aardige vakmensen die snel langskomen, afspraken nakomen en een eerlijke prijs vragen.",
      "Van een lekkende regenpijp tot een compleet nieuw dak: we denken mee en staan open voor uw vragen. Stuur gerust een bericht met een foto."
    ],
    foto: "img/vakman.jpg", fotoPos: "50% 35%", fotoAlt: "Vakman van Veenstra aan het werk op een dak",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 70%",
    titel: "Lekt uw dak?",
    tekst: "Bel of app 06 17 83 51 71. Stuur er een foto bij, dan weet u snel waar u aan toe bent."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Lekkage", "Dakisolatie", "Goot of afvoer", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het dak van de berging lekt en is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};

(function () {
  const st = document.createElement('style');
  st.textContent = '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
