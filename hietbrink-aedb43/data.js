// Rietdekkersbedrijf Hietbrink, Henk Hietbrink (Holten). Bron: rietdekkersbedrijfhietbrink.nl (alle pagina's) + Google (5,0 / 2). Zie content.md.
// Foto's: alle eigen referentiefoto's van hun site (maar 640x480, groter bestaat niet). Logo: tekst-woordmerk van hun naam (ze hebben geen logo).
window.SITE = {
  naam: "Rietdekkersbedrijf Hietbrink",
  kortNaam: "Hietbrink",
  plaats: "Holten",
  vak: "Rietdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#2b2116", accent: "#c9994f" },
  telefoon: "06 22 17 21 92",
  telefoonIntl: "31622172192",
  telefoon2: "0548 36 37 72",
  adres: ["Rijssenseweg 5", "7451 RC Holten"],
  kvk: "38019827",
  google: { score: "5,0", aantal: "2" },
  ctaTekst: "Vraag vrijblijvend advies",
  navCta: "Advies",
  waTekst: "App Henk",
  voetTekst: "Traditioneel rietdekkersbedrijf uit Holten. Nieuwe rieten daken, schroefdaken, renovatie en onderhoud. Lid van de Vakfederatie Rietdekkers.",

  hero: {
    regels: ["Vakwerk", "in riet."],
    tekst: "Rietdekkersbedrijf Hietbrink uit Holten dekt al meer dan 30 jaar boerderijen, woningen, schuren en nieuwbouw. Persoonlijk en met oog voor kwaliteit.",
    foto: "img/hero-henk-dekt.jpg", fotoPos: "35% 45%", fotoPosMobiel: "30% 50%",
    fotoAlt: "Rietdekker van Hietbrink aan het werk op een nieuw rieten dak",
    donker: true,
    punten: ["Meer dan 30 jaar vakmanschap", "Lid Vakfederatie Rietdekkers", "Vrijblijvend advies"]
  },

  marquee: ["Rieten daken", "Schroefdaken", "Renovatie", "Reparatie", "Onderhoud", "Mos- en algenbestrijding", "Pannen naar riet", "Timmerwerk", "Nokken"],

  intro: {
    kicker: "Rietdekkersbedrijf Hietbrink",
    tekst: "Een rieten dak is een flinke investering. Dan wilt u zeker zijn van kwaliteit. Rietdekken is een vak apart: naast scholing is het vooral ervaring die de vakman maakt. Elk project is maatwerk.",
    stats: [
      { getal: "30+", label: "Jaar vakmanschap" },
      { getal: "5,0", label: "Op Google" },
      { getal: "3", label: "Provincies: Overijssel, Gelderland, Drenthe" },
      { getal: "Holten", label: "Onze thuisbasis" }
    ]
  },

  keurmerkenTitel: "Aangesloten bij",
  keurmerken: [
    { naam: "Vakfederatie Rietdekkers", sub: "Aangesloten lid", logo: "img/vakfederatie.png" }
  ],

  diensten: {
    titel: "Alles voor uw rieten dak",
    tekst: "Voor particulieren en aannemers. Van een nieuw rieten dak tot reparatie, renovatie en onderhoud.",
    knop: "Advies aanvragen",
    items: [
      { naam: "Nieuw rieten dak", foto: "img/boerderij.jpg", pos: "50% 50%",
        tekst: "Traditioneel gebonden op rietlatten of als energiezuinig schroefdak. Voor boerderijen, woningen, schuren en nieuwbouwprojecten.",
        punten: ["Traditioneel rieten dak", "Professioneel schroefdak", "Nok in keramiek of koper"] },
      { naam: "Renovatie en reparatie", foto: "img/henk-bindt.jpg", pos: "40% 45%",
        tekst: "Is uw rieten dak toe aan herstel? We repareren en renoveren, en bouwen een traditionele kap desgewenst om naar een goed geïsoleerd schroefdak.",
        punten: ["Reparatie en renovatie", "Van open kap naar schroefdak", "Inclusief timmer- en isolatiewerk"] },
      { naam: "Onderhoud", foto: "img/dakkapellen.jpg", pos: "50% 50%",
        tekst: "Regelmatig onderhoud houdt uw rieten dak mooi en gezond. Algen, mos en rot krijgen minder kans. Met een onderhoudscontract weet u vooraf waar u aan toe bent.",
        punten: ["Groot en klein onderhoud", "Mos- en algenbestrijding", "Onderhoudscontract mogelijk"] }
    ],
    meer: [
      { naam: "Van pannen naar riet", tekst: "We hebben al veel daken van pannen naar riet omgebouwd. We verzorgen het complete traject, inclusief timmer- en isolatiewerk." },
      { naam: "Vergunningen en subsidie", tekst: "Soms komt u in aanmerking voor subsidie of is een vergunning nodig. Daar helpen we u graag bij." },
      { naam: "Brandveilig en goed geïsoleerd", tekst: "Een schroefdak haalt de isolatiewaarde uit het bouwbesluit met gemak en is een stuk brandveiliger dan een open kap." }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Referenties", navNaam: "Projecten",
    titel: "Rieten daken rond Holten",
    tekst: "Van de entree van Camping De Holterberg tot boerderijen in en rond Holten.",
    items: [
      { foto: "img/entree-klaar.jpg", label: "Entree", sub: "Camping De Holterberg, Holten", pos: "50% 55%" },
      { foto: "img/boerderij-2.jpg", label: "Erve Dijk", sub: "Holten", pos: "50% 50%" },
      { foto: "img/steltenberg-klaar.jpg", label: "Steltenberg", sub: "Camping De Holterberg, Holten", pos: "50% 50%" },
      { foto: "img/raam-detail.jpg", label: "Detail", sub: "Riet strak om het raam", pos: "50% 50%" },
      { foto: "img/leilinden.jpg", label: "Boerderij", sub: "Rieten dak", pos: "50% 45%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Elke opdracht is uniek en verdient een persoonlijke benadering.",
    foto: "img/entree-dekken.jpg", fotoPos: "50% 50%", fotoAlt: "Rietdekkers aan het werk op de entree van Camping De Holterberg",
    stappen: [
      { naam: "Bel of app Henk", tekst: "Persoonlijk contact gaat het snelst. Vertel kort wat u wilt." },
      { naam: "We komen langs", tekst: "We bekijken uw dak of bouwplan ter plekke en nemen uw wensen door." },
      { naam: "Vrijblijvende offerte", tekst: "De prijs hangt af van de kap, de details, de m² en het soort riet. U krijgt een heldere offerte." },
      { naam: "Vakkundig gedekt", tekst: "Vooral met Hollands riet, en het complete traject in één hand, tot en met de nok." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Henk is vriendelijk en als hij wat belooft dan komt hij dat zeker na", naam: "Dinie N." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over Henk",
    titel: "Een traditioneel rietdekkersbedrijf",
    rol: "Henk Hietbrink, eigenaar",
    tekst: [
      "Rietdekkersbedrijf Hietbrink uit Holten is een traditioneel rietdekkersbedrijf waar kwaliteit en persoonlijke benadering voorop staan. We hebben tal van boerderijen, woningen, schuren en nieuwbouwprojecten van riet voorzien.",
      "We werken voor particulieren en aannemers, vooral in Overijssel, Gelderland en Drenthe. Als lid van de Vakfederatie Rietdekkers bent u verzekerd van kwaliteit en de juiste zorg voor uw rieten dak."
    ],
    foto: "img/henk-riet.jpg", fotoPos: "82% 40%", fotoAlt: "Rietdekker legt een bos riet op het dak",
    knop: "App Henk"
  },

  band: {
    foto: "img/boerderij-gras.jpg", fotoPos: "50% 50%",
    titel: "Plannen voor een rieten dak?",
    tekst: "Bel of app Henk voor vrijblijvend advies. We komen graag bij u langs."
  },

  contact: {
    titel: "Vraag vrijblijvend advies",
    tekst: "Bel of app Henk, of laat hieronder een bericht achter. Een foto van uw dak meesturen helpt.",
    formTitel: "Advies aanvragen",
    onderwerpen: ["Nieuw rieten dak", "Schroefdak", "Renovatie of reparatie", "Onderhoud", "Pannen naar riet", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons rieten dak is 25 jaar oud en er groeit mos op",
    belofte: "Henk neemt zelf contact met u op."
  }
};
