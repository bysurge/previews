// Dennis van der Ven Hoveniersbedrijf (Limmen, bij Alkmaar). Teksten, logo en foto's van venhovenier.nl (eigen werk, max 960px).
// Google: 4,5 uit 2 (niet als score getoond); review letterlijk van Google.
window.SITE = {
  naam: "Dennis van der Ven Hoveniersbedrijf",
  kortNaam: "Dennis van der Ven",
  vak: "Hovenier",
  plaats: "Limmen",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 42,
  kleuren: { brand: "#21435a", accent: "#7c9a3d" },
  telefoon: "06 37 45 57 37",
  telefoonIntl: "31637455737",
  waTekst: "App Dennis",
  waContact: "App Dennis direct",
  email: "info@venhovenier.nl",
  adres: ["Vredeburglaan 34", "1906 WP Limmen"],
  kvk: "6357782",
  voetTekst: "Aanleg en onderhoud van tuinen in Limmen en omgeving, voor particulieren en bedrijven. Dennis is bij elke klus zelf aanwezig.",

  hero: {
    regels: ["Uw tuin,", "van plan tot", "*plantenbak.*"],
    tekst: "Aanleg en onderhoud in Limmen en omgeving. Dennis doet het werk zelf en is bij elke klus aanwezig, groot of klein.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "70% 55%",
    fotoAlt: "Voortuin met nieuwe bestrating, een bank en een plantenbak vol hortensia's",
    donker: true,
    punten: ["Aanleg en onderhoud", "Sinds 2015"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Straatwerk", "Schuttingen", "Veranda's", "Grondwerk", "Beregening", "Tuinonderhoud"],

  intro: {
    kicker: "Dennis van der Ven",
    tekst: "Een tuin moet passen bij *het huis,* en bij u. Heerlijk thuiskomen en ontspannen in een rustige omgeving: daar werkt Dennis naartoe.",
    stats: [
      { getal: "2015", label: "Eigen hoveniersbedrijf" },
      { getal: "Zelf", label: "Bij elke klus aanwezig" },
      { getal: "Groot", label: "of klein, geen uitdaging te veel" },
      { getal: "Ook", label: "Bedrijfstuinen" }
    ]
  },

  diensten: {
    titel: "Van eerste schets tot *onderhoud*",
    tekst: "Van begin tot eind verzorgt Dennis alles. Grotere klussen doet hij met betrouwbare collega's.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 30%", tekst: "Eerst een kennismaking: wat vindt u mooi en wat zijn uw wensen? Daarna volgt een tekening, zodat u al ziet hoe het wordt.",
        punten: ["Kennismakingsgesprek", "Tekening van uw tuin", "Advies"] },
      { naam: "Tuinaanleg", foto: "img/achtertuin.jpg", tekst: "Alles zit in het pakket: grondwerk, elektra, beregening, beplanting en boomverzorging.",
        punten: ["Grondwerk", "Elektra en beregening", "Beplanting"] },
      { naam: "Straatwerk", foto: "img/pad.jpg", pos: "50% 60%", tekst: "Nieuwe bestrating of een renovatie van uw terras, pad of oprit.",
        punten: ["Nieuw straatwerk", "Renovatie", "Reinigen"] },
      { naam: "Schuttingen en veranda's", foto: "img/schutting-tuin.jpg", tekst: "Houten schuttingen, poorten en veranda's, netjes gebouwd en passend bij de tuin.",
        punten: ["Schuttingen", "Veranda's", "Overkappingen"] },
      { naam: "Gazon", foto: "img/gras.jpg", tekst: "Een nieuw grasveld van graszoden of een bestaand gazon weer mooi.",
        punten: ["Graszoden", "Bemesten"] },
      { naam: "Tuinonderhoud", foto: "img/border.jpg", tekst: "Goed onderhoud is net zo belangrijk als een goede aanleg. Regelmatig of periodiek, ook met een onderhoudscontract.",
        punten: ["Maaien en snoeien", "Bemesten", "Onkruid- en algenbestrijding"] }
    ]
  },

  galerij: {
    kicker: "Portfolio",
    titel: "Een greep uit *ons werk*",
    tekst: "Voortuinen, nieuwbouwtuinen, straatwerk en schuttingen.",
    items: [
      { foto: "img/plantenbak.jpg", label: "Voortuin met plantenbak", sub: "Voortuin" },
      { foto: "img/veranda.jpg", label: "Veranda", sub: "Overkapping" },
      { foto: "img/gazon.jpg", label: "Nieuw grasveld", sub: "Grasveld" },
      { foto: "img/schutting.jpg", label: "Schutting langs de tuin", sub: "Schuttingen" },
      { foto: "img/straatwerk.jpg", label: "Straatwerk bij nieuwbouw", sub: "Straatwerk" },
      { foto: "img/schutting-deur.jpg", label: "Schutting met poort", sub: "Schuttingen" },
      { foto: "img/overkapping-bouw.jpg", label: "Overkapping in aanbouw", sub: "Nieuwbouw" },
      { foto: "img/reinigen.jpg", label: "Terras reinigen", sub: "Straatwerk en renovatie" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Franky M.", tekst: "Verstaat zijn vak als geen ander ook qua kennis en inzicht! Werkt zeer nauwkeurig, georganiseerd en voor een zeer redelijke prijs!" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot leven*",
    tekst: "Van het eerste gesprek tot de laatste plant.",
    stappen: [
      { naam: "Kennismaken", tekst: "We bespreken waar u van houdt en wat uw wensen zijn. Dennis adviseert." },
      { naam: "Tekening", tekst: "U krijgt een tekening, zodat u al een beeld heeft van uw nieuwe tuin." },
      { naam: "Aanleg", tekst: "Dennis verzorgt alles van begin tot eind en is er zelf altijd bij." },
      { naam: "Onderhoud", tekst: "Daarna houden we de tuin mooi, eventueel met een onderhoudscontract." }
    ]
  },

  over: {
    kicker: "Over Dennis", navNaam: "Over mij",
    titel: "Dennis *van der Ven*",
    rol: "Hovenier en eigenaar",
    tekst: [
      "Dennis deed jarenlang ervaring op als hovenier en begon in 2015 zijn eigen bedrijf.",
      "Hij voert het werk zelf uit, en grotere klussen samen met betrouwbare collega's. Bij elke klus is hij zelf aanwezig, dus u weet altijd met wie u te maken heeft."
    ],
    foto: "img/dennis.jpg", fotoPos: "50% 15%", fotoAlt: "Dennis van der Ven",
    knop: "Stuur Dennis een bericht"
  },

  faq: [
    { v: "Werkt Dennis zelf mee?", a: "Ja. Dennis voert het werk zelf uit en is bij alle klussen aanwezig." },
    { v: "Doen jullie ook bedrijfstuinen?", a: "Ja, aanleg en onderhoud voor zowel particulieren als bedrijven." },
    { v: "Kan ik een onderhoudscontract afsluiten?", a: "Ja. Regelmatig of periodiek onderhoud kan, ook met een vast contract." }
  ],

  band: {
    foto: "img/gazon.jpg", fotoPos: "50% 60%",
    titel: "Zin in een tuin om *thuis te komen?*",
    tekst: "Neem gerust contact op. Dennis komt langs voor een kennismaking."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Dennis neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Straatwerk", "Schutting of veranda", "Gazon", "Tuinonderhoud"],
    voorbeeld: "Bijvoorbeeld: nieuwbouwtuin van 8 bij 12 meter, bestrating, gras en een schutting"
  }
};
