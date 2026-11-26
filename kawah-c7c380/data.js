// Hoveniersbedrijf Kawah (Den Haag). Bron: hoveniersbedrijfkawah.nl (26-11-2026; homepage laadt leeg, subpagina's werken) + eigen Google-profiel (5,0 uit 8).
// Foto's: eigen projectfoto's en ontwerptekeningen van hun site + eigen Google-foto's. Geen stockfoto's.
// Naam eigenaar staat niet op de site (klanten noemen hem "Kawah"); daarom bedrijfsnaam + "jullie".
window.SITE = {
  naam: "Hoveniersbedrijf Kawah",
  kortNaam: "Kawah",
  vak: "Hovenier",
  plaats: "Den Haag",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo.png",
  logoVorm: "icoon",
  logoMetNaam: true,
  logoHoogte: 34,
  kleuren: { brand: "#25402c", accent: "#b98349" },
  telefoon: "06 81 71 55 57",
  telefoonIntl: "31681715557",
  waTekst: "App ons",
  email: "hoveniersbedrijfkawah@live.nl",
  adres: ["Pluvierstraat 436", "2583 KJ Den Haag"],
  google: { score: "5,0", aantal: 8 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Ontwerp, aanleg en onderhoud van tuinen, vijvers, bestratingen en schuttingen, in en om Den Haag.",

  hero: {
    regels: ["Met passie", "voor mooie", "*tuinen.*"],
    tekst: "Ontwerp, aanleg en onderhoud van tuinen, vijvers, bestratingen en schuttingen. In een straal van 20 km in en om Den Haag.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "38% 50%", donker: true,
    fotoAlt: "Aangelegde achtertuin met gazon, pad, houten schutting en schuur",
    punten: ["Van ontwerp tot aanleg", "Vrijblijvende afspraak"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Schuttingen", "Vijvers", "Beplanting", "Pergola's en veranda's", "Tuinonderhoud"],

  intro: {
    kicker: "Hoveniersbedrijf Kawah",
    tekst: "Een tuin ontworpen vanuit *uw huis*, waarin u zich volledig kunt ontspannen. We nemen ruim de tijd voor advies, en werken via een gedetailleerd plan.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "20 km", label: "In en om Den Haag" },
      { getal: "100%", label: "Tevreden, dat is het doel" },
      { getal: "Totaal", label: "Ontwerp, aanleg en onderhoud" }
    ]
  },

  diensten: {
    titel: "Van eerste schets tot *bloeiende border*",
    tekst: "Alle voorkomende hovenierswerkzaamheden, met puntje op de i en service ook na oplevering.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 40%", tekst: "Tijdloos rustiek of modern, met weelderige beplanting en mooi in balans met de seizoenen. We tekenen een plan dat past bij uw huis en de omgeving.",
        punten: ["Ontwerp op tekening", "Beplantingsplan", "Advies over indeling"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Een volledig nieuwe tuin, ook vanaf een kale zandvlakte. Alles op maat, en we besteden niets uit: zo wordt alles goed opgeleverd.",
        punten: ["Complete aanleg", "Gazon", "Buitenverlichting"] },
      { naam: "Bestrating", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Terrassen, paden en opritten, van gebakken klinkers tot grote tegels. Strak gelegd, met oog voor het kleinste detail.",
        punten: ["Terrassen", "Gebakken klinkers", "Opritten en paden"] },
      { naam: "Schuttingen en houtwerk", foto: "img/schutting.jpg", pos: "50% 55%", tekst: "Schuttingen, schuren, blokhutten, pergola's, veranda's en afdaken, op maat gemaakt.",
        punten: ["Schuttingen", "Schuur en blokhut", "Pergola en veranda"] },
      { naam: "Beplanting en onderhoud", foto: "img/border.jpg", pos: "50% 60%", tekst: "Borders vol planten die van de vroege lente tot november om de beurt bloeien, met kennis van bloeitijd, bodem en kleur. En onderhoud zodat het zo blijft.",
        punten: ["Borders en beplanting", "Snoeien", "Tuinonderhoud"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Kawah*",
    tekst: "Een greep uit tuinen die we in en om Den Haag ontwierpen en aanlegden. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/terras.jpg", label: "Terras met strakke hagen", sub: "Aanleg" },
      { foto: "img/pergola.jpg", label: "Pergola tussen de bloemen", sub: "Beplanting" },
      { foto: "img/grind.jpg", label: "Voortuin met grind en grassen", sub: "Aanleg" },
      { foto: "img/achtertuin.jpg", label: "Achtertuin met gazon en terras", sub: "Aanleg" },
      { foto: "img/schuur.jpg", label: "Houten schuur op maat", sub: "Houtwerk" },
      { foto: "img/vlonder.jpg", label: "Vlonder met pergola", sub: "Houtwerk" },
      { foto: "img/zithoek.jpg", label: "Zithoek met lavendel", sub: "Terras" },
      { foto: "img/oprit.jpg", label: "Bestrating met tuinhuis", sub: "Bestrating" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot stand*",
    tekst: "We nemen ruim de tijd om u te adviseren. Daarna weet u precies wat er gebeurt en wat het kost.",
    stappen: [
      { naam: "Kennismaken", tekst: "Bel, mail of app voor een vrijblijvende afspraak. We komen kijken en luisteren naar uw wensen." },
      { naam: "Ontwerp en plan", tekst: "Op basis van uw ideeën en de onze maken we een gedetailleerd plan, met een duidelijke offerte en werkbeschrijving." },
      { naam: "Aanleg", tekst: "Ons eigen team voert alles uit, van bestrating en houtwerk tot de beplanting." },
      { naam: "Oplevering en service", tekst: "Pas klaar als u voor de volle 100% tevreden bent. Ook na oplevering staan we voor u klaar." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Josephine B.", tekst: "Zijn kracht zit hem niet alleen in het feit dat hij een gedetailleerd plan voor je kan uitwerken als je zelf helemaal blanco bent, maar hij speelt ook perfect in op je wensen en ideeën … We zijn ontzettend blij met het mooie eindresultaat." },
      { naam: "Gregory M.", tekst: "Fantastisch werk! Kawah is echt gepassioneerd over zijn werk. Hij is uiterst betrouwbaar, neemt de tijd om dingen goed te doen en let op de kleinste details." },
      { naam: "Manja W.", tekst: "Kawah heeft dit jaar onze achtertuin volledig gerenoveerd. Het is precies geworden wat wij wilden en hebben al veel kunnen genieten van het prachtige terras met het mooie weer." },
      { naam: "I. Seinen", tekst: "Met veel geduld heeft hij ons voorzien van vakkundig advies om tot het juiste ontwerp, passend bij ons budget, te komen. Kawah en zijn team zijn nette werklui, die heel precies werken." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Een vertrouwd adres *in Den Haag*",
    rol: "Hoveniersbedrijf Kawah, Den Haag",
    tekst: [
      "Hoveniersbedrijf Kawah is een vertrouwd adres voor al uw hovenierswerk. Ieder lid van het team heeft een eigen specialisatie: ontwerp, aanleg en onderhoud van tuinen, vijvers, bestratingen en schuttingen.",
      "We willen u een totaaloplossing bieden, en streven ernaar al het werk naar volle tevredenheid uit te voeren. Wilt u kennismaken of een offerte? Bel, mail of stuur een WhatsApp."
    ],
    foto: "img/pergola2.jpg", fotoPos: "50% 55%", fotoAlt: "Houten pergola voor een hoge haag",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "In en om *Den Haag*",
    tekst: "We werken in een straal van ongeveer 20 kilometer rond Den Haag, in de provincie Zuid-Holland. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Den Haag", "Straal van 20 km", "Zuid-Holland"]
  },

  faq: [
    { v: "Maken jullie ook een ontwerp?", a: "Ja. Van advies en ontwerp tot aanleg en inrichting. U krijgt een gedetailleerd plan met een duidelijke offerte." },
    { v: "Wat kunnen jullie allemaal plaatsen?", a: "Bestrating, beplanting, schuttingen, blokhutten, schuren, pergola's, veranda's, buitenverlichting, vijvers, buitenkeukens en speeltoestellen, allemaal op maat." },
    { v: "Besteden jullie werk uit?", a: "Nee. We doen alles met ons eigen team, zodat alles perfect wordt opgeleverd." },
    { v: "Hoe neem ik contact op?", a: "Bel, mail of stuur een WhatsApp voor een snelle afstemming. We reageren zo spoedig mogelijk." }
  ],

  band: {
    foto: "img/aanleg.jpg", fotoPos: "50% 55%",
    titel: "Uw tuin *anders indelen?*",
    tekst: "Bel, mail of app om vrijblijvend een afspraak te maken. We denken graag met u mee."
  },

  contact: {
    titel: "Maak een *afspraak*",
    tekst: "Vertel kort wat u voor ogen heeft, dan reageren we zo spoedig mogelijk. Of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Schuttingen en houtwerk", "Beplanting en onderhoud", "Vijver"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw indelen, met terras, schutting en borders"
  }
};
