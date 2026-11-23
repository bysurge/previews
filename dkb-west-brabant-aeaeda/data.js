// Dak- en Klusbedrijf West Brabant (Roosendaal). Bron: dkbwestbrabant.nl + Google (4,6 / 52). Foto's: Google-profiel + eigen site. Zie content.md.
window.SITE = {
  naam: "Dak- en Klusbedrijf West Brabant",
  kortNaam: "DKB West Brabant",
  plaats: "Roosendaal",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoHoogte: 46,
  kleuren: { brand: "#171b20", accent: "#dfa45e" },
  telefoon: "0165 745 038",
  telefoonIntl: "31620448261",
  telBel: "+31165745038",
  telefoon2: "06 20 44 82 61",
  waTekst: "App Mike",
  waContact: "App Mike direct",
  email: "info@dkbwestbrabant.nl",
  adres: ["Ettingstraat 3", "4703 GK Roosendaal"],
  kvk: "89354052",
  google: { score: "4,6", aantal: "52" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Plaatsen en herstellen van daken. Klein dakdekkersbedrijf uit Roosendaal, actief in Brabant, Zeeland en over de grens.",

  hero: {
    regels: ["Plaatsen en herstellen", "van daken."],
    tekst: "Een klein bedrijf met een hecht team uit Roosendaal. Platte en hellende daken, renovaties en lekkages: eerlijk advies, een vlotte uitvoering.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 40%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 30%",
    fotoAlt: "Strak gelegd antraciet pannendak",
    donker: true,
    punten: ["10 jaar garantie op dakbedekking", "Gratis inspectie bij offerte", "Snel ter plaatse bij lekkage"]
  },

  marquee: ["Platte daken", "Bitumen", "EPDM", "Resitrix", "PVC", "Pannendaken", "Dakrenovatie", "Lekkages", "Dakisolatie", "Dakgoten", "Gevelbekleding", "Schoorstenen"],

  spoed: {
    titel: "Lekkage aan uw dak?",
    tekst: "Bel of mail ons. We reageren direct en komen vaak nog dezelfde dag kijken."
  },

  intro: {
    kicker: "Over DKB",
    tekst: "Wij zijn een klein bedrijf met een hecht team. U krijgt eerlijke communicatie, een vlotte uitvoering en vakmensen die hun afspraken nakomen.",
    stats: [
      { getal: "10 jaar", label: "Garantie op dakbedekking" },
      { getal: "Gratis", label: "Inspectie bij uw offerteaanvraag" },
      { getal: "4,6", label: "Gemiddeld op Google" },
      { getal: "52", tel: 52, label: "Reviews op Google" }
    ]
  },

  diensten: {
    titel: "Plat, schuin en alles eromheen",
    tekst: "Van een nieuwe dakbedekking op de schuur tot een compleet nieuw dak met isolatie.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 50%",
        tekst: "Bitumen, EPDM, PVC of Resitrix: samen kiezen we wat past bij uw dak en budget. Voor woningen, garages en bedrijfspanden.",
        punten: ["Gaat 25 tot 40 jaar mee", "Strak en waterdicht afgewerkt", "Ook overlagen over het oude dak"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 55%",
        tekst: "Keramisch, beton of leien. We controleren eerst de dakconstructie en leggen de pannen strak, met nokvorsten, windveren en dakranden.",
        punten: ["Gemiddeld 40 jaar levensduur", "Nieuwbouw en renovatie", "Opleverrapport en garantiecertificaat"] },
      { naam: "Lekkage en reparatie", soort: "Lekkage / spoed", foto: "img/schoorsteen.jpg", pos: "50% 60%",
        tekst: "We zoeken de bron, dekken zo nodig direct af en herstellen het blijvend. Bij schoorstenen, dakramen, goten of de dakbedekking zelf.",
        punten: ["Vaak nog dezelfde dag een inspectie", "Tijdelijke maatregelen waar nodig", "Duurzaam hersteld"] },
      { naam: "Dakrenovatie en isolatie", soort: "Dakrenovatie / isolatie", foto: "img/galerij-dak.jpg", pos: "50% 60%",
        tekst: "Is uw dak op of te koud? We vernieuwen het geheel of gedeeltelijk en isoleren meteen, aan de binnen- of buitenkant.",
        punten: ["PIR, EPS, glaswol of resolschuim", "Lagere energiekosten", "Vrijblijvende offerte na inspectie"] },
      { naam: "Dakgoten en gevelbekleding", soort: "Dakgoten / gevel", foto: "img/dakkapel.jpg", pos: "50% 50%",
        tekst: "Dakgoten bekleed met kunststof, aluminium of zink, en gevels in kunststof, hout, composiet of metaal. Netjes en onderhoudsarm.",
        punten: ["Geen lekkende of roestige goten meer", "Frisse uitstraling", "Advies op maat"] },
      { naam: "Dakonderhoud", soort: "Dakonderhoud", foto: "img/lichtkoepel.jpg", pos: "50% 50%",
        tekst: "Voorkomen is beter dan genezen. We inspecteren uw dak, geven een helder rapport en maken samen een onderhoudsplan.",
        punten: ["Dakbedekking, goten en aansluitingen", "Onderhoudscontract mogelijk", "Periodieke controle"] }
    ],
    meer: [
      { naam: "Ook voor klussen", tekst: "Ruiten plaatsen, zinkwerk, bestrating, wandtegels of een nieuwe vloer: vraag het gerust." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk, van dichtbij",
    tekst: "Van Roosendaal tot Goes en Terneuzen: zo laten we uw dak achter.",
    items: [
      { foto: "img/plat-tuin.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking met daktrim", pos: "50% 55%" },
      { foto: "img/plat-strak.jpg", label: "Plat dak", sub: "Bitumen, netjes aangesloten op de gevel", pos: "50% 50%" },
      { foto: "img/plat-modern.jpg", label: "Plat dak", sub: "Strak afgewerkt met zinken dakrand", pos: "50% 50%" },
      { foto: "img/koepel.jpg", label: "Lichtkoepel", sub: "Nieuw dak, koepel weer waterdicht", pos: "50% 60%" },
      { foto: "img/pannen-detail.jpg", label: "Pannendak", sub: "Antraciet, strak in lijn", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan eerlijk advies",
    tekst: "Geen verrassingen: u weet vooraf wat er gebeurt en wat het kost.",
    foto: "img/aan-het-werk.jpg", fotoPos: "40% 50%", fotoAlt: "Dakdekker van DKB aan het werk op een plat dak",
    stappen: [
      { naam: "Inspectie en advies", tekst: "We komen langs, bekijken uw dak grondig en vertellen eerlijk wat de beste oplossing is." },
      { naam: "Materiaal en offerte", tekst: "Samen kiezen we het materiaal dat past bij uw wensen en budget. De offerte heeft u snel." },
      { naam: "Vakkundig uitgevoerd", tekst: "Onze dakdekkers werken volgens planning, met een strakke afwerking en een waterdicht resultaat." },
      { naam: "Oplevering en nazorg", tekst: "U krijgt een opleverrapport en garantiecertificaat. Daarna blijven we bereikbaar voor onderhoud." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie op dakbedekking",
    tekst: "We staan achter ons werk. Daarom krijgt u 10 jaar garantie op de dakbedekking, met een garantiecertificaat bij de oplevering.",
    lijst: {
      titel: "Bij DKB krijgt u",
      punten: [
        "10 jaar garantie op dakbedekking",
        "Gratis inspectie bij uw offerteaanvraag",
        "Snelle service bij lekkages en spoedklussen",
        "Transparante prijzen, zonder verrassingen",
        "Altijd KOMO-gecertificeerd materiaal, via Zinkunie"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Na vele dakbedrijven ingeschakeld te hebben in Roosendaal om onze lekkage op te sporen … hebben wij Mike en Mylou benaderd. Zij kwamen snel ter plaatse om ons dak te inspecteren en wisten direct wat er aan de hand was. … Echte vakmensen, goed in de communicatie en komen afspraken na.", naam: "Robin van der V." },
      { tekst: "Dak en Klusbedrijf West Brabant heeft onlangs de bitumen dakbedekking van mijn berging vervangen. Ik kan niet anders zeggen dan dat ze top werk geleverd hebben. … Ze doen dit ook voor een scherpe prijs, ook in vergelijking met andere aanbiedingen die ik heb ontvangen.", naam: "Paul H." },
      { tekst: "Mike & Mylou hebben bij ons dak fantastisch werk afgeleverd. … Keurige vakmensen welke keihard werken en afspraken nakomen. Aanrader!!", naam: "Dennis de B." },
      { tekst: "Wij zijn super tevreden over Mike en zijn team. Ze hebben bij ons verschillende klussen kwalitatief en netjes afgewerkt. … waardoor alles weer tiptop eruit ziet en bestand is tegen de regen.", naam: "Stefan de G." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Mike en zijn team",
    rol: "Zaakvoerder van Dak- en Klusbedrijf West Brabant",
    tekst: [
      "Mike deed jarenlang ervaring op bij verschillende dakbedrijven en stond daar bekend als vakman. Om zijn liefde voor het vak echt kwijt te kunnen, begon hij zijn eigen bedrijf.",
      "Klanten noemen hem eerlijk, betrouwbaar en een doorzetter. Samen met zijn team wil hij verder groeien, en jongeren die graag met hun handen werken een eerlijke kans geven om het vak te leren."
    ],
    foto: "img/pvc-werk.jpg", fotoPos: "45% 50%", fotoAlt: "Dakdekker van DKB legt een PVC-dak",
    knop: "App Mike"
  },

  werkgebied: {
    titel: "West-Brabant, Zeeland en over de grens",
    tekst: "Vanuit Roosendaal werken we in Brabant en Zeeland, en ook in Oost-Vlaanderen en Antwerpen.",
    plaatsen: ["Roosendaal", "Bergen op Zoom", "Etten-Leur", "Breda", "Oosterhout", "Steenbergen", "Goes", "Vlissingen", "Terneuzen", "Kapellen (B)"]
  },

  faq: [
    { v: "Hoe lang gaat een plat dak mee?", a: "Een goed aangelegd plat dak gaat gemiddeld 25 tot 40 jaar mee, afhankelijk van het materiaal en het onderhoud. Bitumen 20 tot 25 jaar, Resitrix zelfs zo'n 50 jaar." },
    { v: "Welk materiaal past bij mijn dak?", a: "Bitumen is betaalbaar en makkelijk te repareren, EPDM is naadloos, Resitrix gaat het langst mee. Na de inspectie adviseren we wat het beste bij uw dak past." },
    { v: "Hoe snel kunnen jullie komen bij een lekkage?", a: "We reageren direct en plannen vaak nog dezelfde dag een inspectie. Zo nodig dekken we meteen af om verdere schade te voorkomen." },
    { v: "Doen jullie ook ander klussenwerk?", a: "Ja. Naast dakwerk plaatsen we ook ruiten, zinkwerk, bestrating, wandtegels en vloeren. Stuur ons gerust een bericht." }
  ],

  band: {
    foto: "img/pannen-steiger.jpg", fotoPos: "50% 40%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een offerte aan, de inspectie is gratis. We vertellen u eerlijk wat er nodig is."
  },

  contact: {
    titel: "Vraag een gratis inspectie aan",
    tekst: "Laat een bericht achter of bel ons. Bij lekkage reageren we direct.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis inspectie", "Lekkage / spoed", "Plat dak", "Pannendak", "Dakrenovatie / isolatie", "Dakgoten / gevel", "Klus"],
    voorbeeld: "Bijvoorbeeld: de bitumen op onze aanbouw is aan vervanging toe, of het lekt bij de schoorsteen",
    belofte: "Bij lekkage reageren we direct."
  }
};
