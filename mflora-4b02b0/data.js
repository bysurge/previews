// Hoveniersbedrijf mflora (Menzo Hogendoorn, Gouda). Bron: mflora.nl (WordPress, 26-11-2026) + Google (4,7 uit 15).
// Foto's: eigen foto's van hun site (projecten + banners). Geen stockfoto's. Reviews: letterlijk van Google, ingekort met "…".
window.SITE = {
  naam: "Hoveniersbedrijf mflora",
  kortNaam: "mflora",
  vak: "Hovenier",
  plaats: "Gouda",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#26402a", accent: "#5f9e2f" },
  telefoon: "06 24 26 72 10",
  telefoonIntl: "31624267210",
  waTekst: "App Menzo",
  email: "info@mflora.nl",
  adres: ["Nansenstraat 50", "2806 HM Gouda"],
  google: { score: "4,7", aantal: 15 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Tuinontwerp, tuinaanleg, onderhoud en boomverzorging in Gouda en omgeving. Uw tuin in handen van vakmensen: geen zorgen, wel plezier.",

  hero: {
    regels: ["De tuin,", "dat bent", "*u zelf.*"],
    tekst: "Ontwerp, aanleg, onderhoud en boomverzorging in Gouda. Menzo denkt met u mee, van de eerste schets tot het snoeiwerk.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "65% 50%", donker: true,
    fotoAlt: "Terras met lange tafel, witte stoelen en een strakke zwarte schutting",
    punten: ["Vrijblijvende kennismaking", "Ontwerp, aanleg en onderhoud"],
    notitie: { label: "Nu in de planning", tekst: "Najaarsbeurt en snoeiseizoen: hagen, heesters en bomen" }
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Boomverzorging", "Vlonders", "Schuttingen", "Vijvers", "Sedumdaken", "Stobben frezen"],

  intro: {
    kicker: "Hoveniersbedrijf mflora",
    tekst: "Uw tuin vertelt alles over *hoe u leeft.* Wij helpen u kiezen wat bij u past, en zorgen voor een vormgeving die u het meest aanspreekt.",
    stats: [
      { getal: "4,7", label: "Gemiddeld op Google" },
      { getal: "4", label: "Diensten: ontwerp, aanleg, onderhoud, bomen" },
      { getal: "15", label: "Reviews op Google" },
      { getal: "Ma–vr", label: "Bereikbaar van 8 tot 17 uur" }
    ]
  },

  diensten: {
    titel: "Van eerste schets tot *gezonde boom*",
    tekst: "Alles kan apart: alleen een ontwerp, alleen onderhoud, of het hele traject.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "We komen vrijblijvend langs om kennis te maken, de tuin te bekijken en op te meten. Daarna maken we een schets. Rekening houdend met zon en schaduw, uw huis, de omgeving en uw budget.",
        punten: ["Kennismaking en opmeten", "Schets", "Definitief ontwerp met offerte"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Een zorgvuldige aanleg met oog voor detail, duurzame materialen en een nette werkwijze. Ook losse klussen: een vijver, een schutting of de tuin ophogen.",
        punten: ["Bestrating en ophogen", "Schuttingen en vlonders", "Vijvers"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Een jonge tuin heeft begeleiding nodig, een volwassen tuin de juiste aandacht. Voor losse klussen of op contractbasis.",
        punten: ["Voorjaars- en najaarsbeurt", "Snoeien en onkruid", "Onderhoudscontract"] },
      { naam: "Boomverzorging", foto: "img/boom.jpg", pos: "50% 45%", tekst: "Bomen snoeien met klimgordel of hoogwerker, ook op moeilijk bereikbare plekken. Boomstronken verwijderen we met een stobbenfrees.",
        punten: ["Klimmend snoeien", "Hoogwerker", "Stobben frezen"] },
      { naam: "Water en vlonders", foto: "img/vlonder.jpg", pos: "50% 55%", tekst: "Vlonders aan huis of aan het water, en een tuin aan de sloot? Dan maken we een tijdelijke brug om materialen makkelijk aan en af te voeren.",
        punten: ["Hardhouten vlonders", "Waterpartijen", "Tijdelijke brug"] }
    ]
  },

  seizoenen: {
    kicker: "Het hele jaar",
    titel: "Onderhoud op *het juiste moment*",
    tekst: "Incidenteel, per seizoen of met een vast contract: maatwerk, afgestemd op uw wensen.",
    items: [
      { naam: "Lente", maanden: "maart – mei", foto: "img/p-tuinhuis.jpg", pos: "50% 55%", titel: "De *voorjaarsbeurt*",
        tekst: "De tuin schoonmaken, spitten en bemesten, zodat alles een goede start heeft.",
        punten: ["Schoonmaken en opruimen", "Spitten en bemesten", "Gazonherstel"] },
      { naam: "Zomer", maanden: "juni – augustus", foto: "img/onderhoud.jpg", pos: "50% 55%", titel: "Hagen *in vorm*",
        tekst: "Groeizaam weer betekent hagen knippen en onkruid bijhouden.",
        punten: ["Hagen snoeien", "Onkruid verwijderen", "Bestrating reinigen"] },
      { naam: "Herfst", maanden: "september – november", foto: "img/p-border.jpg", pos: "50% 55%", titel: "De *najaarsbeurt*",
        tekst: "Opruimen, snoeien en de tuin klaar maken voor de winter.",
        punten: ["Tuin opruimen", "Bomen en struiken snoeien", "Bemesten"] },
      { naam: "Winter", maanden: "december – februari", foto: "img/ontwerp.jpg", titel: "Tijd voor *een nieuw plan*",
        tekst: "Het snoeiseizoen is in volle gang, en het is een goed moment om aan een nieuw ontwerp te beginnen.",
        punten: ["Snoeiseizoen", "Tuinontwerp voor het voorjaar"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Uit de tuinen *van mflora*",
    tekst: "Een greep uit recent werk. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/p-avond.jpg", label: "Plantenbakken met verlichting", sub: "Aanleg" },
      { foto: "img/p-vlonder.jpg", label: "Vlonder aan het water", sub: "Houtwerk" },
      { foto: "img/p-tuinhuis.jpg", label: "Tuin met tuinhuis en terras", sub: "Aanleg" },
      { foto: "img/water.jpg", label: "Waterpartij in strakke tuin", sub: "Ontwerp en aanleg" },
      { foto: "img/p-border.jpg", label: "Border met siergrassen", sub: "Beplanting" },
      { foto: "img/p-voortuin.jpg", label: "Voortuin met houten gevel", sub: "Aanleg" },
      { foto: "img/p-schuur.jpg", label: "Tuinhuis", sub: "Houtwerk" },
      { foto: "img/vlonder.jpg", label: "Nieuwe hardhouten vlonder", sub: "Houtwerk" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Liesbeth R.", tekst: "Menzo heeft een nieuwe schutting geplaatst en onze tuin flink opgehoogd en grotendeels met de oude tegels in een nieuw ontwerp herbestraat. Hij werkt op basis van duidelijke afspraken, denkt mee en is flexibel als aanpassingen nodig zijn." },
      { naam: "Marcia van der H.", tekst: "Nieuwe tegels gelegd na flink ophogen van de grond, de oude schutting vervangen en een nieuwe schuur geplaatst. Werkt netjes, goede prijs kwaliteit verhouding, komt zijn afspraken na en denkt vooral mee. Heel fijn bedrijf!" },
      { naam: "Mirte K.", tekst: "Hoveniersbedrijf MFlora, Menzo, heeft onze tuin naar volle tevredenheid aangelegd. Hij heeft rekening gehouden met onze wensen. Wij wilden een tuin met planten die veel insecten aantrekken …" },
      { naam: "Frans van der H.", tekst: "Menzo heeft onze tuin in Gouda weer op en top gemaakt: Ophogen, paden en terras opnieuw bestraten en de bestaande schutting verstevigen. Menzo maakt van te voren een duidelijke offerte …" }
    ]
  },

  over: {
    kicker: "Over Menzo", navNaam: "Over ons",
    titel: "Tuinieren *doet Menzo*",
    rol: "Menzo Hogendoorn, Hoveniersbedrijf mflora",
    tekst: [
      "mflora is gespecialiseerd in het ontwerpen en aanleggen van tuinen. Daarnaast kunt u bij ons terecht voor advies, onderhoud en het snoeien van bomen.",
      "Goede communicatie, een nette werkwijze en degelijke afwerking staan centraal. Samen maken we van uw tuin een tuin waar u jarenlang plezier van heeft."
    ],
    foto: "img/p-tuinhuis.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met tuinhuis, plantenbakken en terras",
    knop: "App Menzo"
  },

  faq: [
    { v: "Kost een ontwerp geld?", a: "De kennismaking en een eerste schets zijn vrijblijvend. Wilt u een definitief ontwerp, dan zijn daar kosten aan verbonden." },
    { v: "Kan ik alleen onderhoud afnemen?", a: "Ja. U kunt terecht voor losse klussen, een voor- of najaarsbeurt of onderhoud op contractbasis." },
    { v: "Mijn tuin is lastig bereikbaar. Kan dat?", a: "Ja. Grenst uw tuin bijvoorbeeld aan een sloot, dan maken we een tijdelijke brug voor de aan- en afvoer van materialen." },
    { v: "Snoeien jullie ook grote bomen?", a: "Ja, met klimgordel of hoogwerker, ook op moeilijk bereikbare plekken. Stronken frezen we weg met een stobbenfrees." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Uw tuin in handen van vakmensen: *geen zorgen, wel plezier*",
    tekst: "Vraag een vrijblijvende offerte aan. Menzo komt graag langs."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft, dan neemt Menzo contact met u op. U kunt ook direct een WhatsApp sturen met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Boomverzorging", "Vlonder of schutting"],
    voorbeeld: "Bijvoorbeeld: achtertuin ophogen, nieuwe bestrating en een schutting aan de zijkant"
  }
};
