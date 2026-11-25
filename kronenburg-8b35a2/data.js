// Ronald van Kronenburg, boomkwekerij en hoveniersbedrijf (Eindhoven). Bron: ronaldvankronenburg.nl + Google (4,6 / 12, 25-11-2026).
// Alleen eigen foto's van hun site. Geen los logo (hun kop is een plaatje met tekst): naam als tekst.
// Google-adres (Poeijersstraat) wijkt af van de site; site-adres Urkhovenseweg 700 aangehouden (bevestigd in een Google-review).
document.head.insertAdjacentHTML("beforeend", "<style>.brand img{display:none!important}</style>");
window.SITE = {
  naam: "Ronald van Kronenburg",
  kortNaam: "Ronald van Kronenburg",
  vak: "Hovenier",
  plaats: "Eindhoven",
  logo: "img/leeg.png",
  kleuren: { brand: "#2f4430", accent: "#7a4f8a" },
  telefoon: "06 53 88 64 57",
  telefoonIntl: "31653886457",
  waTekst: "App Ronald",
  email: "info@ronaldvankronenburg.nl",
  adres: ["Urkhovenseweg 700", "5641 KX Eindhoven"],
  google: { score: "4,6", aantal: "12" },
  voetTekst: "Boomkwekerij en hoveniersbedrijf in Eindhoven, sinds 1985. Tuinaanleg, vijvers, bestrating en showtuinen om inspiratie op te doen.",

  hero: {
    regels: ["Tuinen met", "*ervaring sinds 1985.*"],
    tekst: "Boomkwekerij en hoveniersbedrijf in Eindhoven. We ontwerpen en leggen tuinen aan naar uw wensen, en in onze showtuinen ziet u alvast wat er kan.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "60% 60%",
    fotoAlt: "Bloeiende border met lavendel langs een gazon",
    badge: "Showtuinen zaterdags open",
    donker: true,
    punten: ["Sinds 1985", "Eigen boomkwekerij"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Vijvers", "Bestrating", "Vlonders en pergola's", "Tuinonderhoud", "Boomkwekerij", "Showtuinen"],

  intro: {
    kicker: "Boomkwekerij · Hoveniersbedrijf",
    tekst: "Al sinds 1985 creëren we tuinen *naar de wensen van onze klanten.* Met een eigen kwekerij en showtuinen aan de Urkhovenseweg.",
    stats: [
      { getal: "1985", label: "Actief in de groene branche" },
      { getal: "4,6", label: "Op Google" },
      { getal: "Zaterdag", label: "Showtuinen open, of op afspraak" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *vijver*",
    tekst: "Alles voor uw tuin, met planten en bomen van onze eigen kwekerij.",
    items: [
      { naam: "Tuinontwerp", foto: "img/landschap.jpg", pos: "50% 55%", tekst: "Een tuin naar uw wensen, met lijnen, beplanting en zitplekken die bij uw huis passen.",
        punten: ["Ontwerp op maat", "Inspiratie in de showtuinen", "Advies over beplanting"] },
      { naam: "Tuinaanleg", foto: "img/achtertuin.jpg", pos: "50% 55%", tekst: "We leggen complete tuinen aan: gazon, borders, terrassen en houtwerk zoals vlonders, pergola's en tuinhuizen.",
        punten: ["Gazon en borders", "Vlonders en pergola's", "Tuinhuizen en overkappingen"] },
      { naam: "Vijvers", foto: "img/vijver.jpg", pos: "50% 55%", tekst: "Van strakke waterpartij tot natuurlijke vijver. In onze showtuinen ligt ook een grote natuurlijke vijver om te bekijken.",
        punten: ["Strakke vijvers", "Natuurlijke vijvers", "Vlonders over het water"] },
      { naam: "Bestrating", foto: "img/terras-verlichting.jpg", pos: "50% 55%", tekst: "Terrassen en paden in keramiek, natuursteen of klinkers, desgewenst met verlichting.",
        punten: ["Terrassen", "Paden", "Tuinverlichting"] },
      { naam: "Onderhoud", foto: "img/border.jpg", pos: "50% 55%", tekst: "Uw tuin het hele jaar mooi, met de kennis van een kweker.",
        punten: ["Snoeien", "Borders bijhouden", "Bomen en heesters"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Aanleg",
    titel: "Tuinen die we *aanlegden*",
    tekst: "Een greep uit tuinen, bestratingen en vijvers die wij hebben aangelegd.",
    items: [
      { foto: "img/zwembad.jpg", label: "Tuin met zwembad", sub: "Ontwerp en aanleg", pos: "50% 55%" },
      { foto: "img/waterterras.jpg", label: "Terras aan het water", sub: "Vijver en bestrating", pos: "50% 55%" },
      { foto: "img/vlonder-vijver.jpg", label: "Vlonder over de vijver", sub: "Houtwerk en vijver", pos: "50% 55%" },
      { foto: "img/pergola.jpg", label: "Stadstuin met pergola", sub: "Aanleg", pos: "50% 55%" },
      { foto: "img/siergras.jpg", label: "Voortuin met siergrassen", sub: "Beplanting", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot leven*",
    tekst: "Persoonlijk en met ervaring, van eerste idee tot aanleg.",
    foto: "img/stadstuin.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde stadstuin met gazon en terras",
    stappen: [
      { naam: "Inspiratie opdoen", tekst: "Kom zaterdags langs in onze showtuinen, of maak een afspraak." },
      { naam: "Ontwerp en advies", tekst: "We bespreken uw wensen en maken een plan dat bij uw tuin past." },
      { naam: "Aanleg", tekst: "We leggen de tuin aan, met planten en bomen van onze eigen kwekerij." },
      { naam: "Onderhoud", tekst: "Desgewenst houden we uw tuin daarna mooi." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Mijn voortuin zeer mooi opgeknapt door Ronald. Hele aardige mensen en alles heel netjes afgewerkt. Op naar de achtertuin :)", naam: "Boris P." },
      { tekst: "Beste hovenier in omgeving Eindhoven. Vakmanschap, ervaring en de klant staan hier voorop!", naam: "Behzad H. J." }
    ]
  },

  over: {
    kicker: "Showtuinen", navNaam: "Showtuinen",
    titel: "Kom kijken in *onze showtuinen*",
    rol: "Urkhovenseweg 700, Eindhoven",
    tekst: [
      "Aan de Urkhovenseweg vindt u onze kwekerij en showtuinen, met verschillende soorten tuinen en een grote natuurlijke vijver. Een mooie plek om inspiratie op te doen en een voorproefje te zien van de mogelijkheden.",
      "De showtuinen zijn zaterdags geopend, en verder op afspraak."
    ],
    foto: "img/gazon.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met gazon en borders",
    knop: "Maak een afspraak"
  },

  band: {
    foto: "img/zwembad.jpg", fotoPos: "50% 55%",
    titel: "Benieuwd wat er *kan in uw tuin?*",
    tekst: "Kom zaterdags langs in de showtuinen, of app Ronald voor een afspraak."
  },

  contact: {
    titel: "Neem *contact* op",
    tekst: "Vertel kort waar u informatie over wilt, of app Ronald een foto van uw tuin. Showtuinen: zaterdags open en op afspraak.",
    onderwerpen: ["Ontwerp", "Tuinaanleg", "Onderhoud", "Vijvers", "Bestrating", "Showtuinen"],
    voorbeeld: "Bijvoorbeeld: we willen een vijver met vlonder in de achtertuin"
  }
};
