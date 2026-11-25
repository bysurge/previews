// W. van Boxtel Dakwerken (Luyksgestel, eigenaar Wilbert van Boxtel). Let op: zit in Luyksgestel, niet in Boxtel.
// Bron: wvanboxteldakwerken.nl (alle dienstpagina's + projecten) + Google (5,0 / 1 zonder tekst, opgehaald 25-11-2026: daarom geen reviewblok).
// Alle foto's van hun eigen projectenpagina (1024px origineel, hero dus iets zachter).
window.SITE = {
  naam: "W. van Boxtel Dakwerken",
  kortNaam: "Van Boxtel Dakwerken",
  plaats: "Luyksgestel",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Luyksgestel en de Kempen",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#1d2219", accent: "#b5523b" },
  telefoon: "06 13 70 68 00",
  telefoonIntl: "31613706800",
  waTekst: "App Wilbert",
  waContact: "App Wilbert, ook voor een foto van uw dak",
  email: "info@wvanboxteldakwerken.nl",
  adres: ["Lommelsedijk 32", "5575 XD Luyksgestel"],
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Pannendaken, platte daken en timmerwerk in een straal van 25 km rond Luyksgestel. 24/7 lekkageservice.",

  hero: {
    badge: "24/7 lekkageservice",
    regels: ["Van de eerste", "pan tot", "de nok."],
    tekst: "Pannendaken, leien, bitumen, EPDM en al het timmerwerk eromheen. Wilbert van Boxtel is van begin tot eind uw aanspreekpunt, en altijd zelf op het werk.",
    foto: "img/hero.jpg", fotoPos: "50% 35%", fotoPosMobiel: "55% 40%",
    fotoAlt: "Woning met een nieuw donker pannendak en dakkapellen, gelegd door W. van Boxtel Dakwerken",
    donker: true,
    punten: ["10 tot 20 jaar garantie", "KOMO-materialen", "VCA-gecertificeerd"]
  },

  marquee: ["Pannendaken", "Bitumen", "Leien daken", "EPDM", "Dakisolatie", "Timmerwerk", "Lood en zink", "Dakkapellen", "Dakvensters", "Zonnepanelen"],

  spoed: {
    titel: "Lekkage? Bel direct, 24/7.",
    tekst: "Met spoedservice zijn onze dakdekkers binnen 2 tot 8 uur ter plaatse. Volledig mobiel uitgerust voor elke daklekkage."
  },

  intro: {
    kicker: "W. van Boxtel Dakwerken",
    tekst: "Elke situatie is anders. Daarom komen we eerst kijken, bespreken we uw wensen en zetten we de mogelijkheden tot in de kleinste details op papier.",
    stats: [
      { getal: "2-8 uur", label: "Ter plaatse bij spoedlekkage" },
      { getal: "10-20", label: "Jaar garantie op vrijwel al ons werk" },
      { getal: "15", label: "Jaar garantie op EPDM-dakbedekking" },
      { getal: "25 km", label: "Werkgebied rond Luyksgestel" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Alles voor uw dak",
    tekst: "Van een kleinere tussenwoning tot een vrijstaande villa, oud of nieuw.",
    items: [
      { naam: "Pannendaken", foto: "img/nieuwbouw.jpg", pos: "50% 40%", soort: "Pannendak",
        tekst: "Keramische of betonpannen, gerepareerd of compleet gerenoveerd. Op de pannen zit 30 jaar fabrieksgarantie.",
        punten: ["Keramisch en beton", "Repareren of renoveren", "Inclusief isolatie"] },
      { naam: "Platte daken", foto: "img/carport.jpg", pos: "50% 50%", soort: "Plat dak",
        tekst: "Bitumen voor platte en licht hellende daken, of EPDM: een rubber dat bewezen minstens 50 jaar meegaat.",
        punten: ["Bitumen en EPDM", "15 jaar garantie op EPDM", "Ook groen- en sedumdaken"] },
      { naam: "Leien en timmerwerk", foto: "img/leien-gevel.jpg", pos: "50% 50%", soort: "Leien / timmerwerk",
        tekst: "Leien daken en al het timmerwerk rond het dak: dakconstructies, overstekken en dakkapellen op maat.",
        punten: ["Leien daken", "Dakkapellen en dakopbouw", "Dakvensters"] }
    ],
    meer: [
      { naam: "Dakinspectie", tekst: "Stap voor stap de staat van uw dak in kaart, ook vóór de aankoop van een woning." },
      { naam: "Lood en zink", tekst: "Dakgoten, vergaarbakken en deklijsten die lang meegaan." },
      { naam: "Zonnepanelen en asbest", tekst: "Samen met erkende installateurs en gecertificeerde saneerders." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken in de Kempen",
    tekst: "Een greep uit onze projecten, van boerderij tot moderne villa.",
    items: [
      { foto: "img/modern.jpg", label: "Moderne woning", sub: "Dak en gevel in één materiaal", pos: "50% 50%" },
      { foto: "img/boerderij.jpg", label: "Langgevelboerderij", pos: "50% 50%" },
      { foto: "img/riet-en-pannen.jpg", label: "Pannen naast riet", pos: "50% 50%" },
      { foto: "img/overkapping.jpg", label: "Overkapping met rode pannen", pos: "50% 50%" },
      { foto: "img/zonnepanelen.jpg", label: "Nieuwbouw met zonnepanelen", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Eén aanspreekpunt van begin tot eind: Wilbert zelf.",
    foto: "img/steiger.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuwbouwwoning in de steigers met nieuw pannendak",
    stappen: [
      { naam: "Kennismaken", tekst: "We komen langs en bekijken uw situatie." },
      { naam: "Gratis inspectie", tekst: "Een vrijblijvende dakinspectie en advies op maat." },
      { naam: "Alles op papier", tekst: "Een gratis offerte op maat, gespreid betalen kan." },
      { naam: "Vakwerk met garantie", tekst: "Schriftelijke garantie, en de werkplek netjes opgeruimd." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Wilbert van Boxtel, altijd zelf op het werk",
    rol: "Eigenaar W. van Boxtel Dakwerken",
    tekst: [
      "Het grote voordeel: Wilbert van Boxtel is van begin tot eind uw aanspreekpunt en is altijd bij de werkzaamheden aanwezig, zodat alles volgens afspraak verloopt.",
      "We werken uitsluitend met de beste materialen met KOMO-keurmerk of kwaliteitscertificaat. Onze dakdekkers zijn VCA-gecertificeerd en steigers en gereedschap worden jaarlijks gekeurd."
    ],
    foto: "img/woning-leien.jpg", fotoPos: "50% 50%", fotoAlt: "Woning met nieuw leien dak",
    knop: "App Wilbert"
  },

  werkgebied: {
    titel: "Tussen Tilburg, Lommel en Eindhoven",
    tekst: "We werken in een straal van 25 kilometer rond Luyksgestel."
  },

  band: {
    foto: "img/schuur.jpg", fotoPos: "50% 50%",
    titel: "Benieuwd hoe uw dak ervoor staat?",
    tekst: "Vraag een gratis dakinspectie aan. U krijgt advies op maat en een vrijblijvende offerte."
  },

  contact: {
    titel: "Advies op maat?",
    tekst: "Neem direct contact met ons op, of app een foto van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak", "Leien", "Dakkapel / timmerwerk", "Lekkage", "Dakinspectie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: we willen ons pannendak laten vernieuwen en isoleren",
    belofte: "Altijd een gratis, vrijblijvende offerte."
  }
};
