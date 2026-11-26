// Hoveniersbedrijf Schouten de Jel (Heerhugowaard). Bronnen: schoutendejel-hoveniers.nl (home, tuinonderhoud, tuinontwerp en
// renovatie, bestrating/tuinafscheiding/vijvers, gastenboek, over, portfolio) + Google (5,0 uit 2, geen reviewteksten).
// Alle foto's uit hun eigen portfolio. Geen stockfoto's. Geen logo op hun site: naam als woordmerk.
// Reviews: uit hun eigen gastenboek (namen zoals daar vermeld). KvK op site heeft 7 cijfers (tikfout?) -> niet getoond.
window.SITE = {
  naam: "Hoveniersbedrijf Schouten de Jel",
  kortNaam: "Schouten de Jel",
  vak: "Hovenier",
  plaats: "Heerhugowaard",
  logo: "img/leeg.svg", logoVorm: "icoon",
  kleuren: { brand: "#1f3a2b", accent: "#8a9a3a" },
  telefoon: "06 41 26 57 37",
  telefoonIntl: "31641265737",
  waTekst: "App René",
  email: "info@schoutendejel-hoveniers.nl",
  adres: ["Valkkooglaan 37", "1705 AM Heerhugowaard"],
  google: { score: "5,0", aantal: 2 },
  voetTekst: "Van tuinontwerp naar tuinaanleg tot tuinonderhoud, in Heerhugowaard en de regio Noord-Holland. Alles in eigen beheer.",

  hero: {
    regels: ["Van tuinontwerp", "tot *tuinonderhoud.*"],
    tekst: "René Schouten de Jel ontwerpt, legt aan en onderhoudt tuinen in de regio Noord-Holland. Alles in eigen beheer, van tekening tot rekening.",
    donker: true,
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "30% 50%",
    fotoAlt: "Terras onder een houten overkapping met strak geknipte hagen",
    punten: ["Ruim 25 jaar eigen hoveniersbedrijf", "Alles in eigen beheer"]
  },

  marquee: ["Tuinontwerp", "Tuinrenovatie", "Tuinaanleg", "Sierbestrating", "Schuttingen en poorten", "Overkappingen en tuinhuizen", "Vijvers", "Tuinonderhoud"],

  intro: {
    kicker: "Schouten de Jel",
    tekst: "Een tuin die past bij u, uw gezin en uw huis. René tekent hem, legt hem aan en *houdt hem mooi.* U hoeft alleen nog te genieten.",
    stats: [
      { getal: "25+", label: "Jaar eigen hoveniersbedrijf in Gelderland" },
      { getal: "2017", label: "Sindsdien actief in Noord-Holland" },
      { getal: "5,0", label: "Gemiddeld op Google" }
    ]
  },

  diensten: {
    titel: "Van tekening *tot rekening*",
    tekst: "Ontwerp, aanleg en onderhoud uit één hand. René doet alles in eigen beheer.",
    items: [
      { naam: "Tuinontwerp en renovatie", foto: "img/ontwerp.jpg", pos: "50% 60%", tekst: "René kijkt naar uw wensen, het gezin, hoeveel onderhoud u wilt, de zon en schaduw en de grond. Daarna maakt hij een ontwerp op maat en bespreekt het met u tot u helemaal tevreden bent.",
        punten: ["Ontwerp op maat", "Renovatie", "Onderhoudsvriendelijke tuinen"] },
      { naam: "Bestrating", foto: "img/bestrating.jpg", pos: "50% 60%", tekst: "Een nieuwe inrit, terras of tuinpad, in betontegels, plavuizen, klinkers of natuursteen. Ook halfverharding zoals grind en split.",
        punten: ["Terrassen en paden", "Opritten", "Grind en split"] },
      { naam: "Schuttingen, overkappingen en vijvers", foto: "img/schutting.jpg", pos: "50% 50%", tekst: "Van een eenvoudige schutting tot gemetselde zuilen met hekwerk, tuinhuizen, overkappingen en vlonders. En een vijver voor rust in de tuin.",
        punten: ["Schuttingen en poorten", "Tuinhuizen en overkappingen", "Vlonders", "Vijvers"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 60%", tekst: "Op uurbasis of met een onderhoudscontract: groot onderhoud in voor- en najaar, regelmatig, maandelijks of wekelijks. Snoeien, bemesten, maaien, verticuteren en hagen knippen.",
        punten: ["Groot onderhoud", "Maandelijks of wekelijks", "Op uurbasis"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Portfolio",
    titel: "Tuinen van *Schouten de Jel*",
    tekst: "Een greep uit tuinen die René aanlegde of vernieuwde, van Alkmaar tot Haarlem.",
    items: [
      { foto: "img/overkapping.jpg", label: "Achtertuin met overkapping en tuinhuis", sub: "Aanleg", pos: "50% 55%" },
      { foto: "img/pergola.jpg", label: "Overkapping met terras", sub: "Aanleg" },
      { foto: "img/plantenbakken.jpg", label: "Plantenbakken en bestrating", sub: "Aanleg en bestrating" },
      { foto: "img/voortuin.jpg", label: "Onderhoudsvriendelijke voortuin", sub: "Ontwerp en aanleg" },
      { foto: "img/terras.jpg", label: "Renovatie achtertuin", sub: "Bestrating en beplanting" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt *René*",
    tekst: "Letterlijk van tekening tot rekening.",
    stappen: [
      { naam: "Kennismaken", tekst: "René hoort uw wensen en kijkt naar ligging, zon en schaduw, grond en vochtigheid." },
      { naam: "Ontwerp", tekst: "Een tuinontwerp op maat, dat hij met u bespreekt tot u helemaal tevreden bent." },
      { naam: "Offerte en inkoop", tekst: "U krijgt een vrijblijvende offerte. René maakt de afspraken en kan de materialen voor u inkopen." },
      { naam: "Aanleg", tekst: "Alles in eigen beheer. Het enige wat u nog hoeft te doen is genieten." }
    ]
  },

  reviews: {
    titel: "Wat klanten over *René* zeggen",
    items: [
      { naam: "F.J. van der Mark", tekst: "Met vakmanschap heeft René de achtertuin een metamorfose gegeven. Goed plantadvies en net werk afgeleverd. Wij kunnen hem aanbevelen!" },
      { naam: "RC Rijvordt, Heerhugowaard", tekst: "Achtertuin nu ook gerealiseerd. Vakman met kennis van zaken. Wij zijn zeer tevreden. Betrouwbaar en prima service." },
      { naam: "Ilse, Alkmaar", tekst: "Bij mij een tuinhuis geplaatst: goede kwaliteit afgeleverd en de boel heel netjes achtergelaten. Absoluut een aanrader!" }
    ]
  },

  over: {
    kicker: "Over René", navNaam: "Over René",
    titel: "René Schouten de Jel, *hovenier*",
    rol: "Hoveniersbedrijf Schouten de Jel, Heerhugowaard",
    tekst: [
      "René had bijna 25 jaar een eigen hoveniersbedrijf in Heteren en Oosterbeek, bij Arnhem. Ontwerpen, aanleggen, onderhouden, inkopen: alle kanten van het vak kwamen voorbij.",
      "Na de verhuizing naar Heerhugowaard werkte hij als voorman bij een groenvoorzieningsbedrijf en bijna 5 jaar als coördinator groenvoorzieningen bij AZ Alkmaar. Sinds 2017 heeft hij weer een eigen bedrijf, in de regio Noord-Holland."
    ],
    foto: "img/over.jpg", fotoPos: "50% 55%", fotoAlt: "Tuin met overkapping en gazon",
    knop: "Stuur René een bericht"
  },

  werkgebied: {
    titel: "Regio *Noord-Holland*",
    tekst: "René werkt vanuit Heerhugowaard in de regio Noord-Holland, onder meer in deze plaatsen.",
    plaatsen: ["Heerhugowaard", "Alkmaar", "Heiloo", "Ursem", "Purmerend", "Haarlem"]
  },

  faq: [
    { v: "Welke vormen van onderhoud zijn er?", a: "Onderhoud op uurbasis, of een contract voor groot onderhoud (1 of 2 keer per jaar), regelmatig onderhoud (4 tot 5 keer per jaar), maandelijks of wekelijks onderhoud." },
    { v: "Kunt u mijn tuin onderhoudsvriendelijk maken?", a: "Ja. René maakte al meerdere voor- en achtertuinen onderhoudsvriendelijk, van ontwerp tot aanleg." },
    { v: "Doet u ook schuttingen en tuinhuizen?", a: "Zeker: schuttingen, poorten, tuinhuizen, overkappingen en vlonders, allemaal in eigen beheer." },
    { v: "Is een offerte vrijblijvend?", a: "Ja. U krijgt een ontwerp en een vrijblijvende offerte, pas na uw akkoord gaat René aan de slag." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Toe aan een *nieuwe tuin?*",
    tekst: "René komt graag langs om uw wensen te bespreken."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt. René neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Schutting of overkapping", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin onderhoudsvriendelijk maken met nieuwe bestrating en schutting"
  }
};
