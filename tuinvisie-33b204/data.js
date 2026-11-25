// Tuinvisie hoveniers (TuinVisie Hoveniers B.V.), Maastricht. Roy Koch en Ivar Ariës (namen van eigen site, "Wie zijn wij?").
// Bronnen: eigen GoDaddy-site (2019) + Google (4,9 uit 18). Foto's: eigen site (src/site) + Google-profiel (src/google). Geen logo-bestand op hun site: naam in tekst.
// Hun homepage zegt: nog ruimte voor enkele nieuwe snoei- en onderhoudstuinen, rooien en aanplanten; GEEN ruimte meer voor aanleg/bestrating. Daarom de notitie in de hero.
// KvK-nummer niet gevonden: weggelaten.
window.SITE = {
  naam: "Tuinvisie hoveniers",
  kortNaam: "Tuinvisie",
  vak: "Hovenier",
  plaats: "Maastricht",
  logo: "img/leeg.svg", logoVorm: "icoon",
  kleuren: { brand: "#244a2b", accent: "#7fae3a" },
  telefoon: "06 39 23 15 36",
  telefoonIntl: "31639231536",
  waTekst: "WhatsApp",
  email: "info@tuinvisiehoveniers.nl",
  google: { score: "4,9", aantal: "18" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Tuinontwerp, aanleg en onderhoud vanuit Maastricht, in Zuid- en Midden-Limburg. Roy en Ivar: goed voorbereid, secuur uitgevoerd, netjes afgerond.",

  hero: {
    regels: ["Een tuin", "met *visie.*"],
    tekst: "Ontwerp, aanleg en onderhoud vanuit Maastricht. Roy en Ivar bereiden goed voor, werken secuur en ronden netjes af.",
    foto: "img/hero.jpg", fotoPos: "50% 22%", fotoPosMobiel: "45% 40%",
    fotoAlt: "Nieuw terras van grote grijze tegels met gazon, border en beukenhaag",
    punten: ["Zuid- en Midden-Limburg", "Ontwerp, aanleg en onderhoud"],
    notitie: { label: "Nu in de planning", tekst: "Nog ruimte voor enkele nieuwe snoei- en onderhoudstuinen" }
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Schuttingen", "Vlonders", "Bomen rooien", "Waterafvoer", "Keerwanden"],

  intro: {
    kicker: "Tuinvisie hoveniers",
    tekst: "Bij elke klus vragen we ons af: *als we het bij onszelf thuis maakten,* zouden we het dan ook zo doen? Zo streven we naar een topresultaat, klein of groot.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "2", label: "Vaste vakmensen: Roy en Ivar" },
      { getal: "Eigen", label: "Ontwerp en bouw van schuttingen" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *onderhoud*",
    tekst: "Altijd in nauw overleg, met een duidelijk plan en heldere materiaalkeuze. We adviseren u met onze eigen visie.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", tekst: "Samen komen we tot een duidelijk plan. We tekenen de tuin uit en denken mee over indeling, bestrating en beplanting.",
        punten: ["Plan op tekening", "Advies over materialen", "Eigen visie, uw wensen"] },
      { naam: "Tuinaanleg", foto: "img/terras.jpg", tekst: "Achtertuin, voortuin of oprit: we leggen aan met precisie, van terras en trappen tot gazon en bloembakken.",
        punten: ["Terrassen en opritten", "Trappen en bloembakken", "Aanplant en gazon"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 45%", tekst: "Snoeien, rooien en de tuin winterklaar maken. Ook dikke stammen en stronken met wortels pakken we aan.",
        punten: ["Snoeien en bomen verzorgen", "Rooien en wortels frezen", "Onkruid, gras maaien, blad ruimen"] },
      { naam: "Schuttingen en vlonders", foto: "img/schutting.jpg", tekst: "Schuttingen naar eigen ontwerp, strak gebouwd, en vlonders die jaren meegaan.",
        punten: ["Eigen ontwerp en bouw", "Hout, beton en gabions", "Vlonders"] },
      { naam: "Water en grondwerk", foto: "img/infiltratie.jpg", tekst: "De basis moet goed zijn: afvoer, fundering en keerwanden, zodat uw tuin droog en stevig blijft.",
        punten: ["Waterafvoer en riolering", "Infiltratiebox", "Stapelmuur en keerwand", "Grondwerk"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Ons werk in *Limburg*",
    tekst: "Een greep uit projecten, ook foto's die we tijdens het werk maakten.",
    items: [
      { foto: "img/p-schutting.jpg", label: "Schutting naar eigen ontwerp", sub: "Schutting- en vlonderbouw" },
      { foto: "img/p-voortuin.jpg", label: "Voortuin met borders", sub: "Aanleg en aanplant" },
      { foto: "img/p-gazon.jpg", label: "Nieuw gazon", sub: "Aanplant en gazon" },
      { foto: "img/p-vlonder.jpg", label: "Vlonder en schutting", sub: "Schutting- en vlonderbouw" },
      { foto: "img/oprit.jpg", label: "Grindpad langs de woning", sub: "Aanleg" }
    ]
  },

  werkwijze: {
    titel: "Goed voorbereid, *netjes afgerond*",
    tekst: "Hoe klein of groot de opdracht ook is: altijd in nauw overleg met u.",
    stappen: [
      { naam: "Kennismaken", tekst: "We komen kijken en luisteren naar uw wensen. Waar nodig zijn we ook kritisch op wat haalbaar is." },
      { naam: "Plan en materialen", tekst: "Samen komen we tot een duidelijk plan en materiaalkeuze, met ons advies erbij." },
      { naam: "Secuur uitvoeren", tekst: "We werken degelijk en precies, en zijn kritisch naar elkaar en naar het resultaat." },
      { naam: "Netjes afronden", tekst: "We laten de tuin netjes achter. Pas dan is het klaar." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Heel tevreden zijn wij over de renovatie van onze achtertuin. Nieuw terras-met afvoergoot en infiltratiekrat. Er wordt goed geluisterd naar wensen, maar zijn ook kritisch op uitvoerbaarheid. Werken met uiterste precisie.", naam: "Ton L." },
      { tekst: "Roy En Ivar bedankt voor onze mooie oprit! deze twee gasten kan ik iedereen aan bevelen, ze werken heel professioneel, nemen zich de tijd om te luisteren naar je wensen en komen dan zelf ook met nog hele goede ideeën tevoorschijn…", naam: "Lucio P." },
      { tekst: "Wij zijn meer dan tevreden over het door Roy en Ivar geleverde werk; het betrof het herinrichten en opnieuw beplanten van onze voortuin in drie niveaus; er is keurig en netjes gewerkt; alles top!", naam: "Ludo van R." }
    ]
  },

  over: {
    kicker: "Wie zijn wij?", navNaam: "Over ons",
    titel: "Roy en *Ivar*",
    rol: "Roy Koch en Ivar Ariës",
    tekst: [
      "Tuinvisie hoveniers, dat zijn Roy Koch en Ivar Ariës. Vanuit onze thuisbasis Maastricht werken we in Zuid- en Midden-Limburg.",
      "We zijn een jong en gedreven duo dat zich goed voorbereidt, secuur en degelijk uitvoert en netjes afrondt. Elke klus bekijken we kritisch, naar elkaar en naar het resultaat."
    ],
    foto: "img/roy-ivar.jpg", fotoPos: "50% 35%", fotoAlt: "Roy en Ivar bij een tuin",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Zuid- en *Midden-Limburg*",
    tekst: "Vanuit Maastricht werken we in heel Zuid- en Midden-Limburg. Twijfelt u of we bij u komen? Vraag het gerust."
  },

  band: {
    foto: "img/p-voortuin.jpg", fotoPos: "50% 55%",
    titel: "Tuin laten snoeien of *onderhouden?*",
    tekst: "We hebben nog ruimte voor enkele nieuwe snoei- en onderhoudstuinen. Stuur ons een bericht."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. We nemen contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinonderhoud en snoeien", "Bomen rooien", "Tuinontwerp", "Tuinaanleg", "Schutting of vlonder", "Water en grondwerk"],
    voorbeeld: "Bijvoorbeeld: haag en heesters snoeien en een oude struik rooien"
  }
};
