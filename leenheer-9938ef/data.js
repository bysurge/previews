// Hovenier Leenheer (Almere). Bron: hovenierleenheer.nl (25-11-2026) + eigen Google-profiel (opnieuw opgehaald: "Hoofdkantoor Hovenier Leenheer", 4,5 uit 11).
// Google-reviewtekst kon niet worden opgehaald: geen reviews-sectie, alleen score. Foto's: eigen projectfoto's van hun site.
// Stock-achtige foto's op hun site (Japanse tuin, hogedrukreiniger, schutting met rozen) NIET gebruikt. Geen voornaam op de site.
window.SITE = {
  naam: "Hovenier Leenheer",
  kortNaam: "Leenheer",
  vak: "Hovenier",
  plaats: "Almere",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 30,
  kleuren: { brand: "#1f3a27", accent: "#b07a3f" },
  telefoon: "06 53 34 05 20",
  telefoonIntl: "31653340520",
  telefoon2: "036 532 19 23",
  waTekst: "WhatsApp",
  email: "info@hovenierleenheer.nl",
  adres: ["David Humeweg 20", "1349 DA Almere"],
  google: { score: "4,5", aantal: 11 },
  voetTekst: "Al sinds 1998 een compleet pakket voor bedrijven en particulieren in Almere en omstreken: aanleg, onderhoud, bestrating, overkappingen, vijvers en zwembaden.",

  hero: {
    regels: ["Sinds 1998", "dé hovenier", "*van Almere.*"],
    tekst: "De complete aanleg van uw tuin, onderhoud en alles daartussen. Met een klein team en één aanspreekpunt: beginnen we in uw tuin, dan maken we hem ook direct af.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%", donker: true,
    fotoAlt: "Vijver met vlonder tussen hortensia's en weelderige beplanting",
    punten: ["Eén vast aanspreekpunt", "Particulier en zakelijk"]
  },

  marquee: ["Tuinaanleg", "Tuinonderhoud", "Bestrating", "Overkappingen en prieëlen", "Schuttingen", "Vijvers en vlonders", "Zwembaden", "Kunstgras", "Bomen snoeien en rooien"],

  intro: {
    kicker: "Hovenier Leenheer",
    tekst: "In een persoonlijk gesprek vertelt u over uw wensen. Wij reageren met een *projectvoorstel* en realiseren uw project van begin tot eind, in uw achtertuin, voortuin of op uw dakterras.",
    stats: [
      { getal: "1998", label: "Hovenier in Almere sinds" },
      { getal: "4,5", label: "Gemiddeld op Google" },
      { getal: "1", label: "Aanspreekpunt, klein team" },
      { getal: "Compleet", label: "Pakket, van aanleg tot onderhoud" }
    ]
  },

  diensten: {
    titel: "Alle tuinwensen, *één hovenier*",
    tekst: "Van een schutting of blokhut tot een complete tuin met zwembad. Om uw tuin af te maken hebben we ook diverse bomen, vaste planten en heesters.",
    items: [
      { naam: "Tuinaanleg", foto: "img/tuinaanleg.jpg", pos: "50% 60%", tekst: "De complete aanleg van uw tuin, van grondwerk en gazon tot beplanting. We denken graag mee over al uw ideeën.",
        punten: ["Achter- en voortuin", "Gazon en beplanting", "Dakterras"] },
      { naam: "Bestrating", foto: "img/terras-zwembad.jpg", pos: "50% 60%", tekst: "Terrassen in keramiek, natuursteen, beton of gebakken waaltjes, opritten en paden. Op een stevige ondergrond met het juiste afschot, zodat niets verzakt.",
        punten: ["Terrassen", "Opritten", "Herbestraten en ophogen"] },
      { naam: "Overkappingen en tuinhuizen", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Overkappingen, prieëlen, tuinhuizen en blokhutten, stevig gebouwd, desgewenst op een schroeffundatie.",
        punten: ["Overkappingen", "Prieëlen", "Schroeffundatie"] },
      { naam: "Vijvers en vlonders", foto: "img/vijver.jpg", pos: "50% 55%", tekst: "Een mooie waterpartij is een lust voor het oog. We leggen vijvers en vlonders compleet voor u aan.",
        punten: ["Vijvers", "Vlonders", "Waterpartijen"] },
      { naam: "Zwembaden", foto: "img/zwembad.jpg", pos: "50% 60%", tekst: "Een zwembad in uw tuin, aangelegd samen met de bestrating en de tuin eromheen.",
        punten: ["Aanleg", "Bestrating rondom", "Tuin eromheen"] },
      { naam: "Schuttingen en kunstgras", foto: "img/schutting.jpg", pos: "50% 55%", tekst: "Tuin- en erfafscheidingen voor meer privacy, en kunstgras dat 365 dagen per jaar strak en groen is.",
        punten: ["Schuttingen", "Hekwerk", "Kunstgras"] },
      { naam: "Onderhoud en bomen", foto: "img/bomen.jpg", pos: "40% 60%", tekst: "Periodiek onderhoud van uw tuin, en bomen vakkundig snoeien of veilig rooien, ook op lastige plekken met kraan of klimtechniek.",
        punten: ["Tuinonderhoud", "Bomen snoeien", "Bomen rooien"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "De mooiste *projecten*",
    tekst: "Een greep uit ons werk in Almere en omstreken. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/zwembad2.jpg", label: "Zwembad met terras", sub: "Zwembaden" },
      { foto: "img/vlonder.jpg", label: "Vlonder over de vijver", sub: "Vlonders" },
      { foto: "img/pergola.jpg", label: "Houten prieel", sub: "Prieëlen" },
      { foto: "img/tuinhuis.jpg", label: "Tuinhuis met overkapping", sub: "Tuinhuizen" },
      { foto: "img/gazon.jpg", label: "Nieuw gazon langs het pad", sub: "Tuinaanleg" },
      { foto: "img/bestrating.jpg", label: "Terras met grote tegels", sub: "Bestrating" }
    ]
  },

  werkwijze: {
    titel: "Van gesprek tot *opgeleverde tuin*",
    tekst: "Laat uw project van het begin tot het eind uitvoeren door Hovenier Leenheer.",
    stappen: [
      { naam: "Persoonlijk gesprek", tekst: "U vertelt over uw wensen voor uw tuin, voortuin of dakterras." },
      { naam: "Projectvoorstel", tekst: "Wij reageren met een duidelijk voorstel en denken mee over uw ideeën." },
      { naam: "Uitvoering", tekst: "Beginnen we in uw tuin, dan maken we hem ook direct af." },
      { naam: "Onderhoud", tekst: "Ook daarna kunnen we uw tuin onderhouden en kleine aanpassingen doen." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Al sinds *1998* in Almere",
    rol: "Hovenier Leenheer, Almere",
    tekst: [
      "Vanuit Almere biedt Hovenier Leenheer een compleet pakket voor bedrijven en particulieren: aanleg, onderhoud en alle aanpassingen daartussen.",
      "We werken met een klein team, dus u heeft één aanspreekpunt. Een schutting, hekwerk, bestrating, vijver of blokhut in en om Almere is voor ons geen probleem."
    ],
    foto: "img/bomen.jpg", fotoPos: "75% 70%", fotoAlt: "Kraanwagen van Hovenier Leenheer bij het snoeien van een boom"
  },

  werkgebied: {
    titel: "Almere en omstreken",
    tekst: "Zoekt u een hovenier of tuinman in de regio Almere? Bel ons op 036 532 19 23 of 06 53 34 05 20."
  },

  faq: [
    { v: "Heb ik één aanspreekpunt?", a: "Ja. Omdat we met een klein team werken, heeft u één vast aanspreekpunt." },
    { v: "Werken jullie voor bedrijven én particulieren?", a: "Ja, al sinds 1998 bieden we een compleet pakket voor beide." },
    { v: "Kunnen jullie ook planten leveren?", a: "Ja. Om uw tuin af te maken hebben we diverse soorten bomen, vaste planten en heesters." },
    { v: "Leggen jullie ook kunstgras?", a: "Ja. Natuurgetrouw kunstgras, vakkundig gelegd, eventueel met een zachte onderlaag." }
  ],

  band: {
    foto: "img/vijver.jpg", fotoPos: "50% 55%",
    titel: "Zin in een *nieuwe tuin?*",
    tekst: "Neem gerust contact op voor een gesprek over uw nieuwe tuin."
  },

  contact: {
    titel: "Meer weten? *Neem contact op*",
    tekst: "Bel, app of mail ons voor een gesprek over uw nieuwe tuin. We denken graag met u mee.",
    onderwerpen: ["Tuinaanleg", "Bestrating", "Overkappingen en tuinhuizen", "Vijvers en vlonders", "Zwembaden", "Schuttingen en kunstgras", "Onderhoud en bomen"],
    voorbeeld: "Bijvoorbeeld: overkapping met nieuwe bestrating in de achtertuin"
  }
};
