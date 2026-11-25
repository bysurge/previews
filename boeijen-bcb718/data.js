// Boeijen Dakbedekkingen (Lithoijen). Bron: boeijendakbedekkingen.nl (alle pagina's) + Google (5,0 / 22). Zie content.md.
// Foto's: allemaal van hun eigen site (projecten + dronefoto's van het bedrijf). Projectfoto's zijn klein (400px), dus alleen in kaarten/mozaiek.
window.SITE = {
  naam: "Boeijen Dakbedekkingen",
  kortNaam: "Boeijen",
  plaats: "Lithoijen",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Lithoijen, Oss en omgeving",
  logo: "img/logo.png",
  logoOpFoto: "img/logo.png",
  logoWit: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 38,
  kleuren: { brand: "#0f2233", accent: "#1f8fcb" },
  telefoon: "06 106 466 77",
  telefoonIntl: "31610646677",
  email: "info@boeijendakbedekkingen.nl",
  adres: ["Sluisstraat 1", "5396 NB Lithoijen"],
  google: { score: "5,0", aantal: "22" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  waTekst: "App ons",
  voetTekst: "Platte daken van A tot Z, al ruim 20 jaar vanuit Lithoijen. Nieuwbouw, renovatie, onderhoud en lekkages. Bereikbaar ma t/m vr 07:30-16:30.",

  hero: {
    regels: ["Daken van", "A tot Z."],
    tekst: "Al ruim 20 jaar leggen, renoveren en onderhouden we platte daken. Van woonhuis tot bedrijfshal, met een vast team uit Lithoijen.",
    foto: "img/hero-bedrijf.jpg", fotoPos: "55% 50%", fotoPosMobiel: "58% 50%",
    fotoAlt: "Het bedrijfspand van Boeijen Dakbedekkingen in Lithoijen met de bedrijfsbussen, van bovenaf",
    donker: true,
    punten: ["5,0 op Google", "10 jaar garantie op waterdichtheid", "Ruim 20 jaar ervaring"]
  },

  marquee: ["Bitumen dakbedekking", "SBS-dakbedekking", "Dakrenovatie", "Isolatie", "Lichtkoepels", "Onderhoud", "Lekkages", "Randbeveiliging"],

  spoed: {
    titel: "Lekkage?",
    tekst: "Bel of app ons. Bij lekkages kunnen we snel schakelen om het op te lossen."
  },

  intro: {
    kicker: "Boeijen Dakbedekkingen",
    tekst: "Kleine en grote bedrijven vertrouwen ons al jaren hun daken toe. Particulier of zakelijk: u heeft één aanspreekpunt, van advies tot oplevering.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "20+", label: "Jaar actief in het dakwerk" },
      { getal: "10 jaar", label: "Garantie op waterdichtheid" },
      { getal: "A-keuze", label: "Alleen de beste materialen" }
    ]
  },

  keurmerkenTitel: "Erkend leerbedrijf en VCA-gecertificeerd",
  keurmerken: [
    { naam: "Erkend Leerbedrijf", sub: "SBB", logo: "img/erkend-leerbedrijf.png" },
    { naam: "VCA**", sub: "Veilig werken op het dak" }
  ],

  diensten: {
    titel: "Wat we voor uw dak doen",
    tekst: "Voor woningen, kantoren, appartementencomplexen en bedrijfshallen.",
    items: [
      { naam: "Nieuwbouw", foto: "img/nieuwbouw.jpg", pos: "50% 60%",
        tekst: "We zijn gespecialiseerd in bitumineuze en SBS-dakbedekking, voor kleine en grote nieuwbouwprojecten.",
        punten: ["Bitumen en SBS", "Woningen en bedrijfspanden", "Randbeveiliging volgens arbo"] },
      { naam: "Renovatie", foto: "img/renovatie.jpg", pos: "50% 50%",
        tekst: "Onze specialiteit. Samen met vaste partners bieden we een complete renovatie, alles onder één dak.",
        punten: ["Oud dak en isolatie eraf en afgevoerd", "Nieuwe isolatie en tweelaags daksysteem", "Lichtkoepels, dakgrind en muurlood"] },
      { naam: "Onderhoud en controle", foto: "img/lichtstraat.jpg", pos: "50% 50%",
        tekst: "Bij hoosbuien telt elke afvoer. We controleren uw dak jaarlijks en adviseren over extra afvoeren of noodoverstorten.",
        punten: ["Jaarlijkse controle", "Blad en vuil verwijderen", "Overzicht van staat en levensduur"] },
      { naam: "Lekkages", foto: "img/lichtkoepel.jpg", pos: "50% 55%",
        tekst: "Een lekkage lossen we snel op. Laat u ons het onderhoud doen, dan kennen we uw dak al.",
        punten: ["Snel ter plaatse", "Reparatie van dak en koepels", "Eerlijk advies over de oorzaak"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten", navNaam: "Projecten",
    titel: "Van woonhuis tot bedrijfshal",
    tekst: "Onder meer het Centraal Station in 's-Hertogenbosch, Albert Heijn Berghem en Heesen Yachts in Oss.",
    items: [
      { foto: "img/bedrijfshallen.jpg", label: "Bedrijfshallen", sub: "Complete dakrenovatie", pos: "50% 50%" },
      { foto: "img/kraan-begra.jpg", label: "Begra", sub: "70 pallets in een halve dag omhoog", pos: "50% 50%" },
      { foto: "img/lichtstraten.jpg", label: "Lichtstraten", sub: "Ingewerkt in nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/isolatie-hijsen.jpg", label: "Isolatie", sub: "Klaar om te verwerken", pos: "50% 50%" },
      { foto: "img/plat-dak-stad.jpg", label: "Plat dak", sub: "Renovatie in de stad", pos: "50% 50%" }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar waterdicht",
    tekst: "We gebruiken alleen A-keuze materialen. Daarom geven we 10 jaar garantie op de waterdichtheid van uw dak.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "10 jaar garantie op de waterdichtheid",
        "VCA** en SBB Erkend Leerbedrijf",
        "Randbeveiliging en aanlijnankers volgens de arbowet",
        "Eén aanspreekpunt, ook bij een complete renovatie"
      ]
    }
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Duidelijk advies vooraf, netjes werk en alles opgeruimd achteraf.",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt: lekkage, reparatie of een nieuw dak." },
      { naam: "Eerlijk advies", tekst: "We komen kijken en bespreken welke oplossing het langst meegaat." },
      { naam: "Veilig aan het werk", tekst: "Eerst randbeveiliging, dan het dak. Volgens de huidige arbowetgeving." },
      { naam: "Netjes opgeleverd", tekst: "Afval opgeruimd en afgevoerd, met 10 jaar garantie op waterdichtheid." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ik had een kleine lekkage. … Er was iets gescheurd. Dit hebben ze kosteloos gemaakt, omdat het valt onder de service. Ik was hierdoor aangenaam verrast. Dit is service met een dikke 10!", naam: "Astrid" },
      { tekst: "Niet alleen standaard een dak vervangen maar ook echt verbeterd waardoor betere afvoer hemelwater. Ook in de details zie je het vakwerk bevestigd. … Kortom, goed advies en degelijk werk.", naam: "Paul B." },
      { tekst: "Duidelijke uitleg en nette jongens. Waar wij juist over te spreken zijn is de eerlijkheid van het bedrijf en de omgang naar de klant toe.", naam: "E. T." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Ruim 20 jaar dakwerk uit Lithoijen",
    rol: "Boeijen Dakbedekkingen",
    tekst: [
      "Al ruim 20 jaar zijn we actief in het dakwerk rond Lithoijen, en we doen het nog steeds met veel voldoening. Met een fris team gaan we geen uitdaging uit de weg.",
      "We denken ook aan de toekomst: als erkend leerbedrijf leiden we met plezier de jongere generatie dakdekkers op."
    ],
    foto: "img/bedrijf-boven.jpg", fotoPos: "50% 50%", fotoAlt: "Het bedrijfspand van Boeijen Dakbedekkingen aan de dijk in Lithoijen",
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Hoe vaak moet een plat dak onderhouden worden?", a: "Het onderhoud van de dakbedekking op een plat dak laat u het best eens per jaar doen. Zo voorkomt u lekkages en verrassingen." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. Van particuliere woningen tot kantoor- en appartementencomplexen en bedrijfshallen. Ook randbeveiliging en aanlijnankers regelen we." },
    { v: "Wat valt onder de garantie?", a: "We werken alleen met A-keuze materialen en geven 10 jaar garantie op de waterdichtheid." },
    { v: "Wanneer zijn jullie bereikbaar?", a: "Maandag tot en met vrijdag van 07:30 tot 16:30. Een appje of bericht via het formulier kan altijd." }
  ],

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel of app ons, of laat hieronder een bericht achter. We zijn bereikbaar van maandag t/m vrijdag, 07:30-16:30.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Nieuw dak", "Renovatie", "Onderhoud", "Lekkage", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: er staat water op het platte dak van de garage",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
