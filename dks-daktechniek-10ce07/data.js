// DKS Daktechniek (Ulft). Bron: dksdaktechniek.nl (alle pagina's) + Google (5,0 / 25). Zie content.md.
// Foto's: eigen werk van hun site + hun Google-profiel. Blogplaatjes (AI) en sedum-productfoto's niet gebruikt.
window.SITE = {
  naam: "DKS Daktechniek",
  plaats: "Ulft",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Ulft en de Achterhoek",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 50,
  kleuren: { brand: "#13284a", accent: "#e39424" },
  telefoon: "06 87 74 09 08",
  telefoonIntl: "31687740908",
  telefoon2: "085 203 11 39",
  email: "info@dksdaktechniek.nl",
  kvk: "92013473",
  adres: ["Vechtstraat 13", "7071 VC Ulft"],
  google: { score: "5,0", aantal: "25" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  waTekst: "App ons",
  voetTekst: "Uw totaal dakdekker met Achterhoekse betrouwbaarheid. Platte en hellende daken, dakgoten, zink, lood en schoorstenen.",

  hero: {
    regels: ["Sterk", "op hoogte."],
    tekst: "Platte daken, pannendaken, zinken goten en schoorstenen. DKS Daktechniek zorgt voor uw dak alsof het ons eigen dak is.",
    foto: "img/hero-groen-dak.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%",
    fotoAlt: "Nieuw plat dak met dakkapel, van bovenaf gefotografeerd",
    donker: true,
    punten: ["5,0 op Google", "Tot 15 jaar garantie", "VCA-gecertificeerd"]
  },

  marquee: ["Bitumen daken", "Kunststof daken", "Pannendaken", "Zinken dakgoten", "Loodwerk", "Schoorsteenrenovatie", "Groendaken", "Onderhoud", "Lekkages"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "We staan 7 dagen in de week klaar om uw dak weer waterdicht te krijgen. Bel of stuur een foto via WhatsApp."
  },

  intro: {
    kicker: "DKS Daktechniek",
    tekst: "Een jong bedrijf met ruim 10 jaar ervaring in dakbedekking en 15 jaar in zinkwerk. Eén vaste partij voor alles op en rond uw dak, voor particulieren en bedrijven.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "15 jaar", label: "Garantie op het werk, tot" },
      { getal: "7 dagen", label: "Per week klaar bij lekkage" },
      { getal: "A-kwaliteit", label: "Alleen de beste materialen" }
    ]
  },

  diensten: {
    titel: "Alles op en rond uw dak",
    tekst: "We komen vrijblijvend langs voor advies en een heldere offerte op maat.",
    items: [
      { naam: "Platte daken", foto: "img/plat-dak.jpg", pos: "50% 55%",
        tekst: "Renovatie, aanleg en reparatie van platte daken. We adviseren eerlijk welk materiaal past: levensduur of prijs.",
        punten: ["Bitumen, tot 30 jaar levensduur", "PVC, TPO en EPDM", "Verduurzamen en isoleren"] },
      { naam: "Hellende daken", foto: "img/pannendak.jpg", pos: "50% 50%",
        tekst: "Nieuwe pannendaken, renovatie en verduurzaming. We helpen u kiezen welke pan het beste bij uw woning past.",
        punten: ["Keramische en betonpannen", "Shingles en metalen daken", "Reinigen en onderhoud"] },
      { naam: "Dakgoten en zink", foto: "img/zinken-goot.jpg", pos: "50% 50%",
        tekst: "Zink is onze specialiteit. Aanleggen, renoveren en repareren van alle soorten dakgoten.",
        punten: ["Zinken en koperen goten", "Goten renoveren met EPDM", "Hemelwaterafvoeren"] },
      { naam: "Schoorsteen en lood", foto: "img/schoorsteen-lood.jpg", pos: "50% 45%",
        tekst: "De schoorsteen is vaak het gevoeligste punt van het dak. Wij renoveren hem compleet, of halen hem weg als hij niet meer nodig is.",
        punten: ["Lood- en voegrenovatie", "Kop coaten en kanalen afdichten", "Voeglood, spouwlood en gevellood"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk", navNaam: "Projecten",
    titel: "Strak werk, van dichtbij",
    tekst: "Een greep uit recente klussen in de Achterhoek.",
    items: [
      { foto: "img/plat-en-pannen.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 60%" },
      { foto: "img/goot-renovatie.jpg", label: "Dakgoot", sub: "Gerenoveerd", pos: "50% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Schoorsteen", sub: "Gerenoveerd", pos: "50% 40%" },
      { foto: "img/bitumen-woning.jpg", label: "Woning", sub: "Plat dak rondom", pos: "50% 50%" },
      { foto: "img/dakrand-zink.jpg", label: "Zinkwerk", sub: "Dakrand en goot", pos: "50% 50%" }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "Uw waterdichte garantie",
    tekst: "We werken alleen met materialen van A-kwaliteit. Daarom krijgt u standaard 10 jaar productgarantie en tot wel 15 jaar garantie op het werk dat we uitvoeren.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Tot 15 jaar garantie op de werkzaamheden",
        "VCA-gecertificeerd, volgens de VeBiDak-richtlijnen",
        "Heldere en transparante offertes",
        "Onderhoudscontract mogelijk"
      ]
    }
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Korte lijntjes en één vaste partij, van advies tot oplevering.",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt. Een foto van uw dak meesturen helpt al veel." },
      { naam: "Vrijblijvend langs", tekst: "We bekijken uw dak en leggen uit wat er nodig is, en waarom." },
      { naam: "Heldere offerte", tekst: "Een duidelijke prijs op maat, zonder verrassingen achteraf." },
      { naam: "Strak afgewerkt", tekst: "Netjes uitgevoerd en opgeruimd achtergelaten, met garantie." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Vanmorgen keurig op tijd aanwezig voor de renovatie van de schoorsteen. De mannen hebben echt vakwerk geleverd en alles netjes achtergelaten. Super vriendelijk, kundig en prettig in de omgang.", naam: "Lisette v.d. B." },
      { tekst: "Bij DKS staat kwaliteit voorop. Kjell is een echte vakman en complete dakdekker. Heldere communicatie en duidelijke afspraken.", naam: "Rolf T." },
      { tekst: "Ben zeer tevreden met het resultaat. Kjell en zijn team zijn zeer zorgvuldig aan het werk gegaan. Ze hebben op een pand de kunststof goten vervangen voor een zinken dakgoot.", naam: "Mike v. E." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Ontstaan uit liefde voor het vak",
    rol: "DKS Daktechniek, Ulft",
    tekst: [
      "Na jaren ervaring in alle facetten van het dakdekken is DKS Daktechniek ontstaan. Gespecialiseerd in renovatie en zinkwerk, maar u kunt bij ons terecht voor alles op en rond het dak.",
      "Zo blijven de lijntjes kort en heeft u één vaste partij. Wat we zelf niet doen, besteden we uit aan vaste, betrouwbare partners."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 40%", fotoAlt: "Bij de bus van DKS Daktechniek",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Ulft, de Achterhoek en de Liemers",
    tekst: "Vanuit Ulft werken we in heel Gelderland en daarbuiten. Onder andere in:",
    plaatsen: ["Ulft", "Gendringen", "Silvolde", "Terborg", "Doetinchem", "Wehl", "Didam", "Zevenaar", "'s-Heerenberg", "Zeddam", "Gaanderen", "Dinxperlo", "Winterswijk", "Aalten", "Varsseveld", "Doesburg", "Zutphen", "Arnhem", "Duiven", "Nijmegen"]
  },

  faq: [
    { v: "Hoe lang gaat mijn dak mee?", a: "Dat hangt af van het materiaal. Bitumen kan tot wel 30 jaar meegaan, kunststof dakbedekking tot wel 40 jaar. Goed onderhoud maakt veel verschil." },
    { v: "Hoe lang is de garantie geldig?", a: "Standaard 10 jaar productgarantie en tot 15 jaar garantie op de werkzaamheden die we uitvoeren." },
    { v: "In welke regio werken jullie?", a: "Vanuit Ulft in de Achterhoek, de Liemers en de rest van Gelderland. Voor grotere klussen werken we door heel Nederland." },
    { v: "Kan ik een onderhoudscontract afsluiten?", a: "Ja. U kiest zelf hoe vaak we langskomen, of kleine reparaties erbij horen en of u een rapport wilt over de staat van uw dak en goten." }
  ],

  band: {
    foto: "img/hero-pannen.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een dak waar u weer jaren op kunt bouwen?",
    tekst: "We komen vrijblijvend langs voor advies en een heldere offerte."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel of app ons, of laat hieronder een bericht achter. Bij lekkage staan we 7 dagen in de week klaar.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Pannendak", "Dakgoot of zink", "Schoorsteen of lood", "Lekkage", "Onderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de zinken goot lekt bij de hoek van het huis",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
