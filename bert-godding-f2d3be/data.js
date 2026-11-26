// Bert Godding Tuinaanleg en onderhoud (Maastricht). Bron: bertgodding.nl (2011-2018) + Google (4,0 / 4, 26-11-2026).
// google-score (4,0) bewust niet getoond: sjabloon toont altijd 5 volle sterren.
// Alleen eigen portfoliofoto's van hun site; foto's met datumstempel (2012) bewust niet gebruikt.
window.SITE = {
  naam: "Bert Godding Tuinaanleg en onderhoud",
  kortNaam: "Bert Godding",
  vak: "Hovenier",
  plaats: "Maastricht",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 34,
  kleuren: { brand: "#2a3b2c", accent: "#b0583f" },
  telefoon: "06 14 16 89 75",
  telefoonIntl: "31614168975",
  waTekst: "App Bert",
  email: "info@bertgodding.nl",
  adres: ["Ebenistendreef 126", "6216 PS Maastricht"],
  voetTekst: "Zelfstandig hovenier in Maastricht, sinds 2011. Tuinontwerp, aanleg, onderhoud en renovatie in Nederlands en Belgisch Limburg.",

  hero: {
    regels: ["Uw tuin,", "*op maat.*"],
    tekst: "Bert Godding ontwerpt, legt aan en onderhoudt tuinen in Maastricht en de Limburgse regio. Van een complete nieuwe tuin tot een verzakte tuinmuur.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "35% 50%",
    fotoAlt: "Houten vlonder met trappen en gazon in een nieuw aangelegde tuin",
    punten: ["Zelfstandig sinds 2011", "Ruim 25 jaar ervaring"], donker: true
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Tuinrenovatie", "Bestrating", "Waterpartijen", "Hagen scheren", "Gazon"],

  intro: {
    kicker: "Bert Godding",
    tekst: "Een groene omgeving *precies naar uw wens.* Bert komt eerst persoonlijk langs om de situatie te bekijken, en maakt daarna een duidelijke offerte.",
    stats: [
      { getal: "2011", label: "Zelfstandig hovenier" },
      { getal: "25+", label: "Jaar ervaring in het vak" },
      { getal: "1", label: "Vast aanspreekpunt: Bert zelf" },
      { getal: "NL + B", label: "Nederlands en Belgisch Limburg" }
    ]
  },

  diensten: {
    titel: "Van eerste schets tot *vast onderhoud*",
    tekst: "Een complete tuin of een kleine aanpassing: alles kan op maat worden afgesproken.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 55%", tekst: "Met een ontwerp of schets krijgt uw tuin een eigen sfeer: Engels, Frans of juist Japans. Met water, een overkapping of pergola, of luxe als een jacuzzi of buitenkeuken.",
        punten: ["Ontwerp en schets", "Elke stijl", "Water, pergola's en tuinhuisjes"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Volgens het besproken plan legt Bert de hele tuin aan, op het afgesproken moment. Materialen worden zo nodig rechtstreeks bij u afgeleverd.",
        punten: ["Complete aanleg", "Terrassen en bestrating", "Op de afgesproken datum"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 60%", tekst: "Een periodieke onderhoudsbeurt houdt uw tuin in goede conditie. Uitgebreid, of juist los afgesproken klussen.",
        punten: ["Schoffelen en grasmaaien", "Hagen scheren en snoeien", "Gazon en vijveronderhoud"] },
      { naam: "Tuinrenovatie", foto: "img/renovatie.jpg", pos: "50% 55%", tekst: "Niet de hele tuin hoeft om. Ook kleinere aanpassingen en reparaties doet Bert graag, zoals een verzakte tuinmuur of bestrating.",
        punten: ["Verzakte bestrating", "Tuinmuren en trappen", "Herstel van tuinelementen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Portfolio",
    titel: "Tuinen die Bert *aanlegde*",
    tekst: "Van stadstuinen tot grote landelijke tuinen in Maastricht en omgeving.",
    items: [
      { foto: "img/p-modern.jpg", label: "Gazon bij moderne villa", sub: "Tuinaanleg", pos: "50% 60%" },
      { foto: "img/p-gazon.jpg", label: "Nieuw gazon van graszoden", sub: "Gazon" },
      { foto: "img/p-vijver.jpg", label: "Vijver met nieuwe schutting", sub: "Aanleg" },
      { foto: "img/p-pad.jpg", label: "Pad tussen strakke hagen", sub: "Bestrating en hagen", pos: "50% 60%" },
      { foto: "img/p-schutting.jpg", label: "Houten schutting met border", sub: "Aanleg", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt *Bert*",
    tekst: "Persoonlijk, duidelijk en op tijd.",
    foto: "img/werk.jpg", fotoPos: "50% 55%", fotoAlt: "Graafmachine aan het werk bij een tuinrenovatie",
    stappen: [
      { naam: "Persoonlijk bezoek", tekst: "Bert komt langs om de situatie ter plekke te bekijken en uw wensen te bespreken." },
      { naam: "Duidelijke offerte", tekst: "U krijgt een gespecificeerde offerte, zodat u precies weet wat er gebeurt." },
      { naam: "Uitvoering", tekst: "Op de afgesproken datum en tijd. Voor specialistisch werk schakelt Bert vaste vakmensen in." },
      { naam: "Onderhoud", tekst: "Daarna houdt Bert uw tuin in conditie, zo vaak als u wilt." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Voor het opmaken van de offerte heeft er een persoonlijk bezoek van Bert plaatsgevonden om de situatie ter plekke te bekijken en op basis daarvan volgde een duidelijk gespecificeerde en concurrerende offerte. … De werkzaamheden zijn naar tevredenheid uitgevoerd: op afgesproken datum en tijd, efficiënt, netjes en snel. Ik beveel de tuindiensten van Bert Godding zeker aan.", naam: "Erik G." }
    ]
  },

  over: {
    kicker: "Over Bert", navNaam: "Over Bert",
    titel: "Bert *Godding*",
    rol: "Hovenier en eigenaar",
    tekst: [
      "Bert deed ruim 25 jaar ervaring op bij verschillende hoveniers in de regio: van grootschalige onderhoudsprojecten tot ontwerp en aanleg van grote en kleine tuinen, binnentuinen en dakterrassen.",
      "Sinds oktober 2011 werkt hij als zelfstandig hovenier, in Nederlands en Belgisch Limburg. Hij doet het werk zelf, en schakelt voor specialistisch werk vakmensen uit zijn netwerk in. Hij selecteert ze op kwaliteit en neemt zelf de volle verantwoordelijkheid."
    ],
    foto: "img/bert.jpg", fotoPos: "45% 55%", fotoAlt: "Bert aan het werk met een minigraver",
    knop: "Stuur Bert een bericht"
  },

  werkgebied: {
    titel: "Maastricht en *Limburg*",
    tekst: "Vanuit Maastricht werkt Bert vooral in Nederlands en Belgisch Limburg. Twijfelt u of hij bij u komt? Vraag het gerust.",
    plaatsen: ["Maastricht", "Nederlands Limburg", "Belgisch Limburg"]
  },

  faq: [
    { v: "Komt u eerst kijken?", a: "Ja. Voor een offerte komt Bert persoonlijk langs om de situatie ter plekke te bekijken." },
    { v: "Doet u ook kleine klussen?", a: "Zeker. Ook kleinere aanpassingen of reparaties, zoals een verzakte tuinmuur of bestrating, horen bij het werk." },
    { v: "Kan ik los onderhoud afspreken?", a: "Ja. Onderhoud kan uitgebreid zijn, maar u kunt ook los schoffelen, grasmaaien, hagen scheren of snoeien afspreken. Alles op maat." },
    { v: "Werkt u ook in België?", a: "Ja, Bert werkt in Nederlands en Belgisch Limburg." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Toe aan een tuin *op maat?*",
    tekst: "Vertel Bert wat u voor ogen heeft. Hij komt graag langs om te kijken."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Laat uw gegevens achter, bel, of stuur Bert direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Renovatie of reparatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 8 bij 10 meter, nieuw terras en een vijver"
  }
};
