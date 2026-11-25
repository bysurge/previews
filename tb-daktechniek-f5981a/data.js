// TB daktechniek (Oud Gastel, regio Roosendaal). GEEN eigen website: alles uit het Google-profiel (4,3 / 6), 25-11-2026. Zie content.md.
// Logo zelf gemaakt (woordmerk). Foto's: Google-profiel. Diensten alleen wat de foto's en reviews laten zien.
window.SITE = {
  naam: "TB Daktechniek",
  kortNaam: "TB Daktechniek",
  plaats: "Oud Gastel",
  vak: "Dakdekker",
  titelExtra: "Platte daken in Oud Gastel, Roosendaal en omgeving",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 40,
  kleuren: { brand: "#17212a", accent: "#2f7d6d" },
  telefoon: "06 21 34 60 79",
  telefoonIntl: "31621346079",
  adres: ["Neon 27G", "4751 XA Oud Gastel"],
  google: { score: "4,3", aantal: "6" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een prijs aan",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  voetTekst: "Platte daken in Oud Gastel, Roosendaal en omgeving. Bitumen, renovatie, lichtstraten en dakgoten.",

  hero: {
    regels: ["Uw platte dak,", "snel en strak."],
    tekst: "Nieuwe bitumen dakbedekking of een renovatie van uw platte dak. Snel een afspraak, een goede prijs en keurig werk.",
    foto: "img/hero.jpg", fotoPos: "60% 55%",
    fotoPosMobiel: "70% 55%",
    fotoAlt: "Dakdekker van TB daktechniek aan het werk op een nieuw bitumen plat dak",
    donker: true,
    punten: ["Snel een afspraak", "Goede prijs", "Keurig werk"]
  },

  marquee: ["Platte daken", "Bitumen", "Dakrenovatie", "Lichtstraten", "Dakgoten", "Ontluchtingen", "Opstanden", "Witte daken"],

  intro: {
    kicker: "Over TB daktechniek",
    tekst: "Is de dakbedekking van uw platte dak aan vervanging toe? Bel of app, dan plannen we snel een afspraak. U krijgt een goede prijs en een dak dat weer jaren droog blijft.",
    stats: [
      { getal: "4,3", label: "Gemiddeld op Google" },
      { getal: "6", label: "Reviews op Google" },
      { getal: "Snel", label: "Afspraak op korte termijn" }
    ]
  },

  diensten: {
    titel: "Specialist in platte daken",
    tekst: "Stuur een paar foto's van uw dak via WhatsApp. Dan weet u snel waar u aan toe bent.",
    knop: "Vraag een prijs aan",
    items: [
      { naam: "Nieuw plat dak", soort: "Plat dak", foto: "img/platdak-werk.jpg", pos: "50% 60%",
        tekst: "Nieuwe bitumen dakbedekking op woningen, garages en uitbouwen. Strak gelegd en netjes aangesloten op de dakrand.",
        punten: ["Bitumen dakbedekking", "Woningen, garages en uitbouwen", "Strakke dakranden"] },
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/ondergrond.jpg", pos: "50% 50%",
        tekst: "Is de oude dakbedekking op? We halen het oude dak weg en leggen een nieuw, waterdicht platte dak.",
        punten: ["Oude bedekking eraf", "Nieuwe ondergrond", "Weer jaren droog"] },
      { naam: "Lichtstraten en koepels", soort: "Lichtstraat", foto: "img/lichtstraat.jpg", pos: "50% 40%",
        tekst: "Lichtstraten en lichtkoepels waterdicht ingewerkt in het platte dak, zodat er geen water langs kan.",
        punten: ["Waterdicht ingewerkt", "Opstanden bekleed", "Ook bij renovatie"] },
      { naam: "Dakgoten en bakgoten", soort: "Dakgoot", foto: "img/goot.jpg", pos: "50% 50%",
        tekst: "Bakgoten en goten opnieuw bekleed met bitumen, zodat het regenwater weer goed wegloopt.",
        punten: ["Bakgoten bekleden", "Goede afwatering", "Ontluchtingen ingewerkt"] },
      { naam: "Bijzondere daken", soort: "Plat dak", foto: "img/rond-dak.jpg", pos: "50% 60%",
        tekst: "Ook ronde of lastige daken en dakterrassen maken we waterdicht, met aandacht voor elke hoek en aansluiting.",
        punten: ["Ronde vormen", "Dakterrassen", "Lastige aansluitingen"] },
      { naam: "Witte daken", soort: "Plat dak", foto: "img/wit-dak.jpg", pos: "50% 60%",
        tekst: "Een licht, reflecterend plat dak houdt de zon beter buiten. Fijn op een warme zomerdag.",
        punten: ["Lichte toplaag", "Koeler onder het dak", "Netjes afgewerkt"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit platte daken die we hebben gemaakt.",
    items: [
      { foto: "img/hero.jpg", label: "Nieuw plat dak", sub: "Woning met dakrand", pos: "50% 60%" },
      { foto: "img/wit-dak.jpg", label: "Wit plat dak", sub: "Met lichtkoepel", pos: "50% 60%" },
      { foto: "img/rond-dak.jpg", label: "Rond dakterras", sub: "Waterdicht gemaakt", pos: "50% 55%" },
      { foto: "img/ontluchting.jpg", label: "Ontluchtingen", sub: "Netjes ingewerkt", pos: "50% 50%" },
      { foto: "img/platdak-werk.jpg", label: "Plat dak", sub: "Nieuwe bitumen", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt TB daktechniek",
    tekst: "Snel reageren, duidelijke afspraken en vlot aan de slag. Dat noemen klanten op Google.",
    foto: "img/opstand.jpg", fotoPos: "50% 50%", fotoAlt: "Opstand van een plat dak, waterdicht aangesloten tegen de muur",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er aan de hand is, het liefst met een paar foto's." },
      { naam: "Snel een afspraak", tekst: "We plannen zo snel mogelijk, vaak al op korte termijn." },
      { naam: "Goede prijs", tekst: "U hoort vooraf wat er nodig is en wat het kost." },
      { naam: "Keurig werk", tekst: "Vlot uitgevoerd en netjes opgeleverd." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Levert topkwaliteit werk. Uitstekende prijzen en de communicatie was heel fijn en soepel", naam: "Henk P." },
      { tekst: "Levert keurig werk af en reageert erg snel. Konden op zeer korte termijn afspraak maken waardoor de werkzaamheden naar alle tevredenheid snel verricht zijn.", naam: "Jolanda S." },
      { tekst: "Heb een hele goede ervaring met dit bedrijf, hele vriendelijke en professionele mensen en een goede prijs. Zeker een aanrader", naam: "Dion v. d. E." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakdekker in de regio Roosendaal",
    rol: "TB daktechniek, Oud Gastel",
    tekst: [
      "Klanten kennen TB daktechniek als vriendelijke, professionele mensen die snel reageren en keurig werk leveren, voor een goede prijs.",
      "Platte daken zijn ons vak: bitumen, renovaties, lichtstraten en goten. Heeft u een vraag over uw dak? Stuur gerust een bericht met een foto."
    ],
    foto: "img/platdak-werk.jpg", fotoPos: "30% 40%", fotoAlt: "Dakdekker op een plat dak met nieuwe bitumen",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/wit-dak.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw plat dak?",
    tekst: "Bel of app 06 21 34 60 79. Stuur er een foto bij, dan weet u snel waar u aan toe bent."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Prijs aanvragen",
    onderwerpen: ["Nieuw plat dak", "Dakrenovatie", "Lekkage", "Lichtstraat of koepel", "Dakgoot", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van de garage lekt en is zo'n 25 jaar oud",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};

// Leesbare hero-tekst op de foto (sjabloon niet aanpassen).
(function () {
  const st = document.createElement('style');
  st.textContent = '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
