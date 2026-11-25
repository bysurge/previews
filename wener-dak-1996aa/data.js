// Wener Dakbedekking (Hoogerheide). Bron: wenerdakbedekking.nl + Google (4,8 / 65, opgehaald 25-11-2026).
window.SITE = {
  naam: "Wener Dakbedekking",
  kortNaam: "Wener Dakbedekking",
  plaats: "Hoogerheide",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in West-Brabant en Zeeland",
  logo: "img/logo.png",
  logoKlein: "img/logo-icoon.png",
  logoVorm: "breed",
  logoHoogte: 30,
  kleuren: { brand: "#1f2023", accent: "#d4782c" },
  telefoon: "06 30 88 00 84",
  telefoonIntl: "31630880084",
  waTekst: "App Ryan",
  email: "info@wenerdakbedekking.nl",
  adres: ["Voltweg 15a", "4631 SR Hoogerheide"],
  kvk: "72731621",
  google: { score: "4,8", aantal: "65" },
  ctaTekst: "Gratis dakadvies",
  navCta: "Dakadvies",
  voetTekst: "Platte daken en pannendaken: nieuwbouw, renovatie, onderhoud en lekkageherstel, met 12 jaar garantie.",

  hero: {
    regels: ["Een strak dak,", "plat of", "schuin."],
    tekst: "Bitumen, EPDM, PVC, dakpannen of leien: Wener Dakbedekking legt, vernieuwt en onderhoudt uw dak. Voor particulieren en bedrijven.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 55%",
    fotoAlt: "Nieuw shingle-dak met strakke zinken randen, van bovenaf gefotografeerd",
    donker: true,
    punten: ["12 jaar garantie", "24-uurs spoedservice", "Binnen 24 uur reactie"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Pannendaken", "Leien", "Shingles", "Isolatie", "Lood- en zinkwerk", "Koperwerk", "Dakinspecties"],

  spoed: {
    titel: "Lekkage of stormschade? Bel direct.",
    tekst: "Onze 24-uurs service staat 365 dagen per jaar klaar. Binnen 24 uur staat er een dakdekker bij u om de schade te beperken."
  },

  intro: {
    kicker: "Wener Dakbedekking",
    tekst: "Eén partner voor uw hele dak: van de dakbedekking tot het lood, zink en timmerwerk eromheen.",
    stats: [
      { getal: "12 jaar", label: "Garantie op al ons werk" },
      { getal: "24/7", label: "Spoedservice, 365 dagen per jaar" },
      { getal: "4,8", label: "Gemiddeld uit 65 Google-reviews" },
      { getal: "Heel NL", label: "Veel werk in Brabant en Zeeland" }
    ]
  },

  keurmerkenTitel: "Erkend en beoordeeld",
  keurmerken: [
    { naam: "MJOP Beheer", sub: "Geselecteerd vakbedrijf", logo: "img/mjop.png" },
    { naam: "Klantenvertellen", sub: "Top Score 2021 t/m 2024", logo: "img/topscore.png" }
  ],

  diensten: {
    knop: "Vraag advies aan",
    titel: "Alles voor uw dak",
    tekst: "Van een nieuw plat dak op de garage tot een compleet pannendak: wij doen het met oog voor detail.",
    items: [
      { naam: "Platte daken", foto: "img/plat-wit.jpg", pos: "50% 50%", soort: "Bitumen, EPDM, PVC",
        tekst: "Nieuwe dakbedekking of een renovatie, inclusief isolatie en strakke dakranden.",
        punten: ["Bitumen en kunststof", "Isolatie mee te nemen", "Nette afwerking van de randen"] },
      { naam: "Pannen en leien", foto: "img/pannendak.jpg", pos: "50% 50%", soort: "Hellende daken",
        tekst: "Pannendaken, natuur- of kunstleien en shingles, met het timmerwerk dat erbij hoort.",
        punten: ["Dakpannen en leien", "Shingles", "Folie, panlatten en ventilatie"] },
      { naam: "Onderhoud en lekkage", foto: "img/aan-het-werk.jpg", pos: "50% 40%", soort: "Inspectie en herstel",
        tekst: "Wij controleren dakbedekking, naden, goten en afvoeren, en herstellen lekkages snel en vakkundig.",
        punten: ["Inspectierapport met advies", "Kleine gebreken direct hersteld", "24-uurs spoedservice"] }
    ],
    meer: [
      { naam: "Lood-, zink- en koperwerk", tekst: "Loketten, goten en deklijsten op ambachtelijke wijze." },
      { naam: "Dakbeheer", tekst: "Periodiek onderhoud voor bedrijven en VvE's." },
      { naam: "Isolatie", tekst: "Een warm dak bij vervanging of renovatie." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken waar we trots op zijn",
    tekst: "Een greep uit ons werk in Brabant en Zeeland.",
    items: [
      { foto: "img/voorkant.jpg", label: "Shingle-dak met dakkapellen", sub: "Strak tot in de details", pos: "50% 50%" },
      { foto: "img/boerderij.jpg", label: "Nieuw pannendak", pos: "50% 60%" },
      { foto: "img/plat-lang.jpg", label: "Plat dak vernieuwd", pos: "50% 60%" },
      { foto: "img/lichtkoepel.jpg", label: "Afwerking rond een lichtkoepel", pos: "50% 50%" },
      { foto: "img/dakkapel-drone.jpg", label: "Dakkapellen ingedekt", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Duidelijk en eerlijk: u weet vooraf wat er gebeurt.",
    foto: "img/panlatten.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuwe folie en panlatten op een hellend dak",
    stappen: [
      { naam: "Contact", tekst: "Bel, mail of app een foto. Binnen 24 uur hoort u van ons." },
      { naam: "Dakopname en advies", tekst: "We bekijken uw dak en geven vrijblijvend advies en een offerte." },
      { naam: "Vakwerk", tekst: "We voeren het werk netjes uit en voeren het oude materiaal af." },
      { naam: "12 jaar garantie", tekst: "Op alle geleverde diensten krijgt u 12 jaar garantie." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Arthur is bij ons het garagedak komen vervangen. Binnen een week was het oude dak verwijderd en afgevoerd en het nieuwe waterdicht gelegd … Het is een mooi strak resultaat en wij zijn tevreden!", naam: "Katinka C." },
      { tekst: "Na slechte ervaringen met een vorige dakdekker kwamen we bij deze vakman terecht, en dat was de juiste keuze. … Betrouwbaar, correct en professioneel.", naam: "Jethro D." },
      { tekst: "Betrouwbaar bedrijf, zeer vriendelijke, vakkundige mensen. Ze denken mee en hebben voor alles een oplossing.", naam: "Lisette K." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakwerk met oog voor detail",
    rol: "Ryan Wener, Wener Dakbedekking",
    tekst: [
      "Wener Dakbedekking is specialist in platte daken: bitumen, EPDM en PVC. Inmiddels doen we ook pannendaken en natuur- of kunstleien, inclusief het timmerwerk. Zo heeft u nog maar één partner nodig voor uw hele dakproject.",
      "Kwaliteit en afspraken nakomen staan bij ons hoog in het vaandel. Daarom geven we 12 jaar garantie op al ons werk."
    ],
    foto: "img/pand.jpg", fotoPos: "50% 50%", fotoAlt: "De bussen van Wener Dakbedekking voor het bedrijfspand",
    badge: "img/logo.png", badgeVrij: true,
    knop: "App Ryan"
  },

  werkgebied: {
    titel: "Dakdekker in Brabant en Zeeland",
    tekst: "Wij werken door heel Nederland, met veel werk in West-Brabant en Zeeland.",
    plaatsen: ["Hoogerheide", "Bergen op Zoom", "Roosendaal", "Steenbergen", "Etten-Leur", "Tholen", "Middelburg", "Vlissingen", "Goes"]
  },

  band: {
    foto: "img/drone-2.jpg", fotoPos: "50% 50%",
    titel: "Dak lek of aan vervanging toe?",
    tekst: "Bel of app een foto. Wij komen langs voor een vrijblijvende dakopname."
  },

  contact: {
    titel: "Vraag gratis dakadvies aan",
    tekst: "Vertel kort om wat voor dak het gaat, of app direct een foto. Binnen 24 uur reageren we.",
    formTitel: "Dakadvies aanvragen",
    onderwerpen: ["Nieuw plat dak", "Pannendak of leien", "Lekkage / reparatie", "Dakonderhoud / inspectie", "Lood- en zinkwerk", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze garage (ca. 20 m²) lekt bij de dakrand",
    belofte: "Vrijblijvend en professioneel advies, binnen 24 uur reactie."
  }
};
