// ZaanDak (Zaandam/Zaandijk). Bron: zaandak.nl + Google (4,8 / 40, geen reviewteksten). Foto's: eigen site + Google. Zie content.md.
window.SITE = {
  naam: "ZaanDak",
  plaats: "Zaandam",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 50,
  kleuren: { brand: "#11231a", accent: "#2fb55a" },
  telefoon: "06 23 31 34 69",
  telefoonIntl: "31623313469",
  waTekst: "WhatsApp ons",
  email: "info@zaandak.nl",
  google: { score: "4,8", aantal: "40" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Offerte",
  voetTekst: "Dakdekker in Zaandam en de Zaanstreek. Pannendaken, bitumen, nokvorsten, lood- en zinkwerk en dakisolatie. Uw dak, onze zorg.",

  hero: {
    regels: ["Uw dak,", "onze zorg."],
    tekst: "Dakdekker in Zaandam en omstreken. Van pannendak tot plat dak: renovatie, onderhoud en nieuwbouw, netjes afgewerkt.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 40%", fotoPosMobiel: "84% 50%",
    fotoAlt: "Dakdekkers van ZaanDak aan het werk op een nieuw plat dak",
    donker: true,
    punten: ["Gratis dakinspectie", "Geen voorrijkosten", "Hulp bij subsidie"]
  },

  marquee: ["Pannendaken", "Bitumen daken", "Nokvorsten", "Loodwerk", "Zinkwerk", "Dakisolatie", "Lekkages", "Dakonderhoud"],

  spoed: {
    titel: "Lekkage?",
    tekst: "Wacht niet en neem direct contact op. We komen snel langs en beperken de schade."
  },

  intro: {
    kicker: "Over ZaanDak",
    tekst: "Bij ons krijgt uw dak de aandacht die het verdient. Eerst kijken we goed, daarna krijgt u een plan op maat. Geen verrassingen achteraf.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "40", tel: 40, label: "Reviews op Google" },
      { getal: "Gratis", label: "Dakinspectie bij u thuis" },
      { getal: "€ 0", label: "Voorrijkosten" }
    ]
  },

  diensten: {
    titel: "Experts in alle soorten daken",
    tekst: "Klassiek of modern, plat of schuin. Van een losse nokvorst tot een compleet nieuw dak.",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 60%", tekst: "Dakpannen vervangen of het hele pannendak renoveren, als het kan meteen geïsoleerd.",
        punten: ["Keramische en betonnen pannen", "Isoleren bij vervanging", "Hulp bij subsidie"] },
      { naam: "Bitumen daken", soort: "Plat dak", foto: "img/bitumen.jpg", pos: "50% 50%", tekst: "Een volledig nieuwe bitumen dakbedekking, of snel en vakkundig repareren wat lekt.",
        punten: ["Nieuw dak of renovatie", "Reparatie van scheuren en lekken", "Ook advies over EPDM"] },
      { naam: "Nokvorst herstel", soort: "Nokvorst", foto: "img/nokvorst.jpg", pos: "50% 55%", tekst: "Beschadigde nokvorsten repareren of vervangen, zodat de nok weer waterdicht is.",
        punten: ["Repareren waar het kan", "Vervangen waar het moet", "Ook na stormschade"] },
      { naam: "Lood- en zinkwerk", soort: "Lood- of zinkwerk", foto: "img/loodwerk.jpg", pos: "50% 45%", tekst: "Waterdichte aansluitingen bij schoorstenen, dakkapellen en muren, en dakgoten in zink.",
        punten: ["Loodwerk vervangen", "Zinken dakgoten en regenpijpen", "Gaat tientallen jaren mee"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 55%", tekst: "Schuin of plat dak isoleren: minder warmteverlies, lagere energiekosten en meer comfort.",
        punten: ["Pannendak of plat dak", "Isolatie aan de buitenzijde", "Goede ventilatie"] },
      { naam: "Lekkage en onderhoud", soort: "Lekkage / onderhoud", foto: "img/plat-dak.jpg", pos: "50% 60%", tekst: "We sporen de lekkage op, repareren en controleren daarna of alles droog blijft.",
        punten: ["Snel ter plaatse", "Eenmalig onderhoud", "Of een vast jaarlijks onderhoudscontract"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk in de Zaanstreek",
    tekst: "Platte daken aan het water, nieuwe pannen op strakke panlatten. Zo laten we elk dak achter.",
    items: [
      { foto: "img/aan-de-zaan.jpg", label: "Plat dak", sub: "Nieuwe bitumen, met uitzicht op het water", pos: "50% 55%" },
      { foto: "img/panlatten.jpg", label: "Pannendak", sub: "Nieuwe panlatten en folie", pos: "50% 50%" },
      { foto: "img/nieuwe-pannen.jpg", label: "Dakpannen", sub: "Klaar om gelegd te worden", pos: "50% 50%" },
      { foto: "img/folie.jpg", label: "Renovatie", sub: "Isolatiefolie onder de nieuwe pannen", pos: "50% 50%" },
      { foto: "img/steiger.jpg", label: "Op locatie", sub: "Steiger staat, het werk begint", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan een plan",
    tekst: "U weet vooraf waar u aan toe bent: wat er nodig is, wat het kost en wanneer we komen.",
    foto: "img/aan-het-werk.jpg", fotoPos: "50% 40%", fotoAlt: "Dakdekker van ZaanDak aan het werk op een dak",
    stappen: [
      { naam: "Gratis dakinspectie", tekst: "We komen langs en bekijken uw dak zorgvuldig. Zonder voorrijkosten." },
      { naam: "Plan en offerte op maat", tekst: "U krijgt een vrijblijvende offerte met een duidelijk overzicht van werk en kosten." },
      { naam: "Planning die u uitkomt", tekst: "Na uw akkoord plannen we het werk op een datum die u past. Vaak kunnen we snel beginnen." },
      { naam: "Uitvoering en nazorg", tekst: "We werken netjes, ruimen alles op en controleren na afloop of alles goed is." }
    ]
  },

  garantie: {
    kicker: "Waarom ZaanDak", navNaam: "Waarom wij",
    titel: "Uw dak in goede handen",
    tekst: "Jarenlange ervaring, modern vakmanschap en de beste materialen. Zodat uw dak er weer jaren tegen kan.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Garanties en nazorg",
        "Hoogwaardige materialen",
        "Ervaren dakdekkers",
        "Gratis dakinspectie",
        "Geen voorrijkosten",
        "Altijd netjes afgewerkt",
        "Duidelijke en eerlijke prijzen"
      ]
    }
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Dakdekken met zorg en precisie",
    tekst: [
      "Renovatie, onderhoud of nieuwbouw: bij ons krijgt uw dak de aandacht die het verdient. Zodra we een helder beeld hebben van de situatie, komen we met een plan dat past bij uw wensen.",
      "Wilt u isoleren? Er is vaak subsidie, en die verschilt per postcode. We helpen u uitzoeken wat er voor uw woning mogelijk is."
    ],
    foto: "img/steiger.jpg", fotoPos: "50% 50%", fotoAlt: "Steiger met spandoek van ZaanDak voor een rij woningen",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een WhatsApp"
  },

  werkgebied: {
    titel: "Zaandam en de Zaanstreek",
    tekst: "We werken in Zaandam, Zaandijk en omstreken, en ook in Purmerend.",
    plaatsen: ["Zaandam", "Zaandijk", "Zaanstreek", "Purmerend"]
  },

  faq: [
    { v: "Hoe lang gaan dakpannen mee?", a: "Keramische dakpannen kunnen tot wel 100 jaar meegaan, betonnen pannen zo'n 30 tot 50 jaar. Met goed onderhoud haalt u het meeste uit uw dak." },
    { v: "Is er subsidie voor dakisolatie?", a: "Vaak wel. De regelingen verschillen per postcode. We helpen u inzicht te krijgen in wat er voor uw woning mogelijk is." },
    { v: "Bitumen of EPDM voor een plat dak?", a: "Bitumen is betrouwbaar, sterk en betaalbaar. EPDM gaat zo'n 50 jaar mee en wordt zonder open vuur gelegd. We adviseren u graag wat het beste past." },
    { v: "Hoe vaak moet mijn dak gecontroleerd worden?", a: "Minstens één keer per jaar. Dat kan als eenmalige onderhoudsbeurt, of met een onderhoudscontract voor een vast jaarlijks tarief." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 45%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakinspectie aan. We komen langs en vertellen eerlijk wat er nodig is."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Bij een lekkage helpen we u zo snel mogelijk.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis dakinspectie", "Lekkage", "Pannendak", "Plat dak / bitumen", "Nokvorst", "Lood- of zinkwerk", "Dakisolatie"],
    voorbeeld: "Bijvoorbeeld: er zitten scheuren in de nokvorst, of de pannen zijn aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
