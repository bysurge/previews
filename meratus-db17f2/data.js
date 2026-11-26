// MERATUS Hoveniers (Ede). Bron: meratus.nl (26-11-2026) + Google (4,4 uit 13).
// Foto's: tuinfoto's uit hun eigen "Inspiratie"-galerij (amateurfoto's van echte tuinen, één met hun Meratus-bord) -> eigen werk aangenomen.
// Geen 06 op de site -> whatsapp:false. Geen voornaam eigenaar op de site (een Google-review noemt "meneer Hol").
// Site toont VHG-logo + Stichting Garantiefonds Groen + Geschillencommissie Groen.
window.SITE = {
  naam: "Meratus Hoveniers",
  kortNaam: "Meratus",
  vak: "Hovenier",
  plaats: "Ede",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 36,
  kleuren: { brand: "#1d3a2b", accent: "#a63c33" },
  telefoon: "0318 61 89 52",
  telBel: "+31318618952",
  whatsapp: false,
  email: "info@meratus.nl",
  adres: ["Lunterseweg 68a", "6718 WG Ede"],
  google: { score: "4,4", aantal: 13 },
  ctaTekst: "Plan een adviesgesprek",
  voetTekst: "Tuinadvies, tuinaanleg en tuinonderhoud in Ede en omgeving. Vlot, correct en altijd deskundig.",

  hero: {
    regels: ["Op adem", "komen in", "*uw tuin.*"],
    tekst: "Advies, aanleg en onderhoud uit Ede. Wij werken netjes en snel, en adviseren u vakkundig over de tuin die bij u past.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "50% 55%", donker: true,
    fotoAlt: "Tuin met strak gazon, vijver en pergola",
    punten: ["Voor particulieren en bedrijven", "Garantiefonds Groen"]
  },

  marquee: ["Strakke tuinen", "Stadstuinen", "Voortuinen", "Natuurlijke tuinen", "Vlonders en pergola's", "Bestrating en muurtjes", "Waterwerken en vijvers", "Zitjes en terrassen"],

  intro: {
    kicker: "Meratus Hoveniers",
    tekst: "Een tuin realiseren is vakmanschap. Bij Meratus is het ook *een samenspel van vakkennis en beleving*, met ontwerpen en advies die uw tuinplezier zo groot mogelijk maken.",
    stats: [
      { getal: "4,4", label: "Gemiddeld op Google" },
      { getal: "Op maat", label: "Onderhoud, wat en wanneer u wilt" },
      { getal: "VHG", label: "Garantiefonds en Geschillencommissie Groen" }
    ]
  },

  keurmerkenTitel: "Aangesloten bij",
  keurmerken: [
    { naam: "VHG", sub: "Vereniging Hoveniers en Groenvoorzieners", logo: "img/vhg.png" },
    { naam: "Stichting Garantiefonds Groen" },
    { naam: "Geschillencommissie Groen" }
  ],

  diensten: {
    titel: "Advies, aanleg *en onderhoud*",
    tekst: "Voor particulieren en bedrijven. Onze vakmensen zijn gedegen opgeleid, in de theorie én in de praktijk.",
    items: [
      { naam: "Tuinadvies", foto: "img/advies.jpg", pos: "50% 55%", tekst: "Een mooie tuin heeft karakter, en dat begint bij u. We kijken hoe u de tuin wilt gebruiken en van welke sfeer u houdt. Dan volgen schetsen, ontwerp en advies: persoonlijk en vakkundig maatwerk.",
        punten: ["Schetsen en ontwerp", "Voor woning of bedrijf", "Werken met een moodboard"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Egaliseren, bestraten, bouwen, zaaien en planten. Onze mensen zijn stratenmaker, hovenier en timmerman tegelijk, dus alles komt uit één hand.",
        punten: ["Bestrating en muurtjes", "Vlonders, pergola's en tuinhuisjes", "Vijvers en waterwerken"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Onderhoud op maat, van maaien en snoeien tot beitsen en wieden. Ook opritten, paden, terrassen en terrasmeubilair houden we bij.",
        punten: ["Snoeien, bemesten en wieden", "Opritten, paden en terrassen", "Voor bedrijven en particulieren"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Inspiratie",
    titel: "Sferen, kleuren, *vormen*",
    tekst: "Moderne en onderhoudsarm, of juist weelderig groen? Laat u inspireren door tuinen van Meratus.",
    items: [
      { foto: "img/g-vijver.jpg", label: "Natuurlijke tuin met vijver", sub: "Waterwerken", pos: "50% 55%" },
      { foto: "img/g-waterbak.jpg", label: "Strakke waterbak op het terras", sub: "Strakke tuin" },
      { foto: "img/g-voortuin.jpg", label: "Voortuin onder de bloesem", sub: "Voortuin" },
      { foto: "img/g-prieel.jpg", label: "Prieel met waterval", sub: "Vlonders en pergola's" },
      { foto: "img/g-strak.jpg", label: "Buxusbollen en natuursteen", sub: "Strakke tuin" }
    ]
  },

  werkwijze: {
    titel: "Van droom *naar tuin*",
    tekst: "Wij dromen graag met u mee, en maken het daarna waar.",
    foto: "img/werkwijze.jpg", fotoPos: "50% 50%", fotoAlt: "Terras met natuursteen, trap en borders",
    stappen: [
      { naam: "Adviesgesprek", tekst: "Maak kennis met de mensen van Meratus en vertel hoe u de tuin wilt gebruiken." },
      { naam: "Uw moodboard", tekst: "Laat met foto's en prints zien welke sfeer, kleur en vorm u aanspreekt." },
      { naam: "Schets en ontwerp", tekst: "We werken uw wensen uit tot een ontwerp en persoonlijk advies." },
      { naam: "Aanleg en onderhoud", tekst: "Ons team legt de tuin aan en houdt hem daarna graag voor u bij." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Gerben V.", tekst: "Tuin laten aanleggen een jaar of 5 geleden, heel netjes geregeld. Recentelijk begon een deel van de schutting scheef te staan. Na een mailtje is alles weer netjes rechtgezet. Dat noem ik top service, bedankt hiervoor." }
    ]
  },

  over: {
    kicker: "Ons team", navNaam: "Team",
    titel: "Vlot, correct en *altijd deskundig*",
    rol: "Meratus Hoveniers, Ede",
    tekst: [
      "De hoveniers van Meratus hebben u graag in de tuin. We werken netjes en snel, en adviseren u vakkundig. Dat komt uw tuinplezier ten goede.",
      "Onze vakmensen zijn gedegen opgeleid in tuinaanleg en onderhoud. Daar profiteert u van bij de aanleg, het onderhoud of de renovatie van gazons, borders, heggen en terrassen. En we leiden graag nieuwe vakmensen op, ook via de BBL."
    ],
    foto: "img/over.jpg", fotoPos: "60% 55%", fotoAlt: "Tuin in aanleg met het bord van Meratus Hoveniers",
    knop: "Mail ons"
  },

  faq: [
    { v: "Hoe begin ik?", a: "Bel voor een afspraak of stuur ons uw vraag. Dan plannen we een adviesgesprek over uw tuin." },
    { v: "Wat is een moodboard?", a: "Een verzameling foto's en prints die laat zien welke sfeer, kleur en vorm u mooi vindt. Zo ontdekt u welke tuin het best bij u past." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. We ontwerpen buitenruimtes die passen bij uw bedrijf of woning, en doen onderhoud voor bedrijven en particulieren." },
    { v: "Wanneer moet ik onderhoud aanvragen?", a: "Maak het liefst op tijd een afspraak, dan kunnen we ook op tijd bij u aan het werk." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Wij dromen graag *met u mee*",
    tekst: "Bel of mail ons voor een verrassende kennismaking."
  },

  contact: {
    titel: "Plan een *adviesgesprek*",
    tekst: "Nieuwsgierig geworden? Vul het formulier in, mail ons of bel voor een verrassende kennismaking.",
    onderwerpen: ["Tuinadvies", "Tuinaanleg", "Tuinonderhoud"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw indelen met een terras, vijver en onderhoudsarme beplanting"
  }
};
