// Hoveniersbedrijf Kruitbos (Wesepe / Deventer). Bron: hoveniersbedrijfkruitbos.nl (26-11-2026) + eigen Google-profiel (5,0 uit 8).
// Foto's: eigen Google-foto's (hero, advies, boom, Kevin bij de vijver) + eigen projectfoto's van hun site (900px). Geen stockfoto's.
// Google-reviews zijn heel kort ("Geweldige service", "Mooi spul") en op de site staan geen reviews -> geen reviewsectie.
window.SITE = {
  naam: "Hoveniersbedrijf Kruitbos",
  kortNaam: "Kruitbos",
  vak: "Hovenier",
  plaats: "Deventer",
  titelExtra: "Hovenier in Wesepe en Deventer",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 38,
  kleuren: { brand: "#26402a", accent: "#6aa83c" },
  telefoon: "06 50 80 57 59",
  telefoonIntl: "31650805759",
  waTekst: "App Kevin",
  email: "info@hoveniersbedrijfkruitbos.nl",
  adres: ["Raalterweg 91", "8124 AC Wesepe"],
  google: { score: "5,0", aantal: 8 },
  ctaTekst: "Vraag advies aan",
  voetTekst: "Tuinadvies, tuinaanleg, onderhoud, blokhutten en schuttingen in Wesepe, Deventer en omgeving.",

  hero: {
    regels: ["Uw tuin,", "uw sfeer.", "*Onze vakkennis.*"],
    tekst: "Tuinadvies, tuinaanleg en onderhoud in Wesepe, Deventer en omgeving. Met passie voor tuinen blijft elke tuin een plaatje, het hele jaar door.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "50% 60%", donker: true,
    fotoAlt: "Klinkerpad tussen borders met roze phlox en blauwe geranium",
    punten: ["Materialen van degelijke kwaliteit", "Ook onderhoudscontracten"]
  },

  marquee: ["Tuinadvies", "Tuinaanleg", "Tuinrenovatie", "Onderhoud", "Blokhutten", "Overkappingen", "Schuttingen", "Grondwerk en bestrating", "Bomen kandelaberen"],

  intro: {
    kicker: "Hoveniersbedrijf Kruitbos",
    tekst: "Een bedrijf *in de groei*, voor al uw tuinwerkzaamheden. Van een kleine aanpassing tot een complete nieuwe tuin, en daarna het onderhoud.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Advies", label: "Met een frisse kijk" },
      { getal: "Contract", label: "Onderhoud het hele jaar" }
    ]
  },

  diensten: {
    titel: "Voor al uw *tuinwerkzaamheden*",
    tekst: "Tuinaanleg, tuinonderhoud en tuinrenovatie. We denken mee en vertalen uw wensen naar een tuin waarin u zich goed voelt.",
    items: [
      { naam: "Tuinadvies", foto: "img/advies.jpg", pos: "50% 55%", tekst: "Met een frisse kijk adviseren we over renovatie en aanpassingen. Een extra terras, een overkapping of andere beplanting: we denken mee en maken een voorstel. Ook een bemestingsplan.",
        punten: ["Renovatie", "Aanpassingen", "Bemestingsplan"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Vooraf bespreken we vormgeving, kleurstelling, bestrating en beplanting. Aan de hand van dat plan leggen we uw tuin aan, met materialen van degelijke kwaliteit.",
        punten: ["Ontwerp op uw wensen", "Beplanting", "Sproeisysteem en verlichting"] },
      { naam: "Onderhoud", foto: "img/border.jpg", pos: "50% 55%", tekst: "Snoeien, onkruid wieden, het gazon en de juiste bemesting in het seizoen. Af en toe hulp, of een onderhoudscontract, ook als u op vakantie gaat.",
        punten: ["Onderhoudscontract", "Winter- of voorjaarklaar", "Gazon en bemesting"] },
      { naam: "Blokhutten, overkappingen en schuttingen", foto: "img/pergola.jpg", pos: "50% 55%", tekst: "Samen komen we tot een ontwerp, daarna plaatsen we het vakkundig, inclusief het grondwerk. Solide, zodat u er jaren plezier van heeft.",
        punten: ["Blokhutten", "Overkappingen en pergola's", "Schuttingen en hekwerk"] },
      { naam: "Grondwerk en bestrating", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Een belangrijk onderdeel van elke tuin. Terrassen, opritten en paden, ook met keramische tegels, en ingevoegd tegen onkruid.",
        punten: ["Terrassen", "Opritten", "Keramische tegels"] },
      { naam: "Bomen", foto: "img/boom.jpg", pos: "50% 40%", tekst: "Kandelaberen, snoeien of een boom zagen: we houden de bomen in uw tuin in goede conditie.",
        punten: ["Kandelaberen", "Boomzagen", "Snoeiwerk"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Recente opdrachten",
    titel: "Projecten van *Kruitbos*",
    tekst: "Tuinen, overkappingen en pergola's in Wesepe, Deventer, Wijhe, Olst en verder. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/pergola2.jpg", label: "Pergola van douglas hout", sub: "Houtwerk" },
      { foto: "img/overkapping2.jpg", label: "Overkapping op maat", sub: "Overkapping" },
      { foto: "img/bomen.jpg", label: "Tuin met leibomen en hagen", sub: "Tuinaanleg" },
      { foto: "img/overkapping.jpg", label: "Overkapping en tuinaanleg", sub: "Nieuwbouw Broekland" },
      { foto: "img/spiegelvijver.jpg", label: "Spiegelvijver bij een boerderij", sub: "Buitengebied Wesepe" },
      { foto: "img/vlonder.jpg", label: "Houten vlonder in aanleg", sub: "Aanleg" },
      { foto: "img/heesters.jpg", label: "Borders met heesters", sub: "Beplanting" },
      { foto: "img/kevin.jpg", label: "Onderhoud aan de vijver", sub: "Onderhoud" }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Hovenier *Kevin Kruitbos*",
    rol: "Eigenaar, Hoveniersbedrijf Kruitbos",
    tekst: [
      "Hoveniersbedrijf Kruitbos is een bedrijf in de groei. We richten ons op tuinaanleg, tuinonderhoud en tuinrenovatie, en voor ons is elke opdracht een uitdaging.",
      "Heeft u al een prachtig idee, een ontwerp, of nog helemaal geen idee? Kevin denkt mee en vertaalt uw wensen naar een tuin die bij u past. Het onderhoud kunt u daarna met een gerust hart aan ons overlaten."
    ],
    foto: "img/kevin.jpg", fotoPos: "45% 50%", fotoAlt: "Kevin aan het werk bij een vijver",
    knop: "Stuur Kevin een bericht"
  },

  werkgebied: {
    titel: "Wesepe, Deventer *en omgeving*",
    tekst: "Vanuit Wesepe werken we in Deventer en de wijde omgeving. Hier legden we onder meer tuinen aan:",
    plaatsen: ["Wesepe", "Deventer", "Wijhe", "Olst", "Broekland", "Heerde", "Twello", "Nagele"]
  },

  faq: [
    { v: "Kan ik ook alleen advies krijgen?", a: "Ja. We kijken met een frisse blik naar uw tuin en adviseren over renovatie, aanpassingen of bemesting." },
    { v: "Hebben jullie onderhoudscontracten?", a: "Ja, bijvoorbeeld voor onkruid wieden, snoeien, bemesten of de tuin winter- of voorjaarklaar maken. Ook als u op vakantie gaat." },
    { v: "Plaatsen jullie ook blokhutten en overkappingen?", a: "Zeker. In overleg maken we een ontwerp en plaatsen we alles vakkundig, inclusief het grondwerk." },
    { v: "Hoe neem ik contact op?", a: "Bel of app Kevin op 06 50 80 57 59, of stuur een e-mail. Vrijblijvend." }
  ],

  band: {
    foto: "img/advies.jpg", fotoPos: "50% 55%",
    titel: "Benieuwd naar *de mogelijkheden?*",
    tekst: "Wilt u advies of informatie? Bel of app Kevin, hij denkt graag met u mee."
  },

  contact: {
    titel: "Vraag *advies* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Kevin neemt contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinadvies", "Tuinaanleg", "Onderhoud", "Blokhutten en overkappingen", "Schuttingen", "Bestrating", "Bomen"],
    voorbeeld: "Bijvoorbeeld: achtertuin opknappen met een nieuw terras en een overkapping"
  }
};
