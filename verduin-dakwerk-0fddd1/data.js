// Verduin Dakwerk en Aannemersbedrijf (Veenendaal). Bron: verduindakwerk.nl (Wix) + Google (5,0 / 44).
// Foto's: eigen site (alleen eigen werkfoto's, geen Unsplash/AI-sfeerbeelden van hun site) + Google-profiel.
window.SITE = {
  naam: "Verduin Dakwerk",
  kortNaam: "Verduin Dakwerk",
  plaats: "Veenendaal",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Veenendaal, Ede en Utrecht",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoOpFoto: "img/logo-op-foto.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 34,
  kleuren: { brand: "#1e2023", accent: "#e9b526" },
  telefoon: "06 19 77 94 82",
  telefoonIntl: "31619779482",
  telefoon2: "0318 222 711",
  email: "info@verduindakwerk.nl",
  adres: ["Turbinestraat 18E", "3903 LW Veenendaal"],
  kvk: "42008501",
  google: { score: "5,0", aantal: "44" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Gratis inspectie",
  waTekst: "App Sjoerd",
  waContact: "Stuur Sjoerd een WhatsApp",
  voetTekst: "Familiedakdekkersbedrijf uit Veenendaal. Platte en schuine daken, lekkageherstel, dakrenovatie en dakisolatie in Veenendaal, Ede, Utrecht en omgeving.",

  hero: {
    regels: ["Vakmanschap", "zonder", "poespas."],
    tekst: "Familiedakdekker uit Veenendaal voor platte en schuine daken. Eerlijk advies, binnen 24 uur op locatie en een gratis inspectie.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "58% 50%",
    fotoAlt: "Gerenoveerd pannendak met dakraam en nieuwe zinken goten, van bovenaf gezien",
    donker: true,
    punten: ["10 jaar garantie op een nieuw dak", "Binnen 24 uur op locatie", "VCA-gecertificeerd"]
  },

  marquee: ["Bitumen", "Pannendaken", "Daklekkage", "Dakrenovatie", "Dakisolatie", "Zink en lood", "Dakgoten", "Dakramen", "Lichtstraten", "Schoorstenen"],

  spoed: {
    titel: "Daklekkage? Bel direct.",
    tekst: "Bij spoed in Veenendaal, Ede en omgeving zijn we snel ter plaatse en maken we uw dak eerst weer waterdicht."
  },

  intro: {
    kicker: "Verduin Dakwerk",
    tekst: "Een dak moet gewoon doen wat het belooft: u beschermen tegen weer en wind. Daarom kijken we naar de constructie, de afwatering en de staat van uw dakbedekking, en geven we eerlijk advies.",
    stats: [
      { getal: "10 jaar", label: "Garantie op een nieuw dak" },
      { getal: "24 uur", label: "En we staan op locatie" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Gratis", label: "Dakinspectie en offerte" }
    ]
  },

  diensten: {
    titel: "Plat, schuin of spoed",
    tekst: "Van één kapotte pan tot een compleet nieuw dak. U krijgt altijd eerst een gratis inspectie en een duidelijke offerte.",
    knop: "Gratis inspectie",
    items: [
      { naam: "Bitumen dak", soort: "Platte daken", foto: "img/bitumen.jpg", pos: "50% 50%", tekst: "Gewapende bitumen van topkwaliteit, vakkundig gebrand en afgewerkt met aluminium daktrimmen. Vaak kan een nieuwe laag over de oude heen.",
        punten: ["Overlagen of vernieuwen", "Strakke daktrimmen", "Goede afvoer van regenwater"] },
      { naam: "Pannendaken", soort: "Schuine daken", foto: "img/zwart-pannendak.jpg", pos: "50% 40%", tekst: "Van het vervangen van een enkele pan tot een compleet nieuw pannendak, met nieuwe panlatten en folie. Altijd een strak resultaat.",
        punten: ["Alle soorten dakpannen", "Panlatten en vliesfolie", "Nokvorsten"] },
      { naam: "Daklekkage", soort: "Spoed", foto: "img/lekkage.jpg", pos: "50% 50%", tekst: "We zoeken de échte bron, niet alleen de plek waar het drupt. Eerst een noodreparatie als het nodig is, daarna herstel waar u weer jaren op kunt vertrouwen.",
        punten: ["Snel ter plaatse", "Bron opsporen", "Duurzaam herstel"] },
      { naam: "Dakrenovatie", soort: "Compleet", foto: "img/pannen-leggen.jpg", pos: "50% 50%", tekst: "Het hele dak in één keer goed: houtwerk controleren, van buitenaf isoleren, nieuwe pannen of bitumen en meteen nieuwe goten en lood.",
        punten: ["Houtrot hersteld", "Direct isoleren", "Werkplek spik en span"] },
      { naam: "Dakisolatie", soort: "Warm dak", foto: "img/isolatie.jpg", pos: "50% 50%", tekst: "We isoleren platte daken van buitenaf met PIR-platen. Geen ruimteverlies binnen, geen condens en een lagere energierekening.",
        punten: ["Hoge isolatiewaarde", "Drukvast en beloopbaar", "Advies over subsidie"] },
      { naam: "Zink, lood en dakramen", soort: "Details", foto: "img/goot.jpg", pos: "50% 50%", tekst: "Nieuwe zinken dakgoten en afvoeren, loodwerk rond schoorstenen en dakkapellen, en lichtstraten en dakramen voor meer daglicht.",
        punten: ["Zinken goten en afvoeren", "Loodwerk", "Lichtstraten en dakramen"] }
    ],
    meer: [
      { naam: "Schoorsteen", tekst: "Repareren of verwijderen, inclusief het dak eromheen netjes dichtmaken." },
      { naam: "Dakreparatie", tekst: "Losse pannen, losgelaten naden of een kapotte loodslab: snel en vakkundig verholpen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent opgeleverd",
    tekst: "Van een complete pannendakrenovatie tot een lichtstraat in een plat dak.",
    items: [
      { foto: "img/drone.jpg", label: "Dakrenovatie", sub: "Pannendak met steiger", pos: "50% 50%" },
      { foto: "img/lichtstraat-plat.jpg", label: "Lichtstraat", sub: "In een nieuw plat dak", pos: "50% 50%" },
      { foto: "img/plat-dak-zink.jpg", label: "Plat dak", sub: "Met zinken dakrand", pos: "50% 50%" },
      { foto: "img/pannendak-renovatie.jpg", label: "Pannendak", sub: "Complete renovatie", pos: "50% 50%" },
      { foto: "img/lichtstraat.jpg", label: "Bitumen", sub: "Met lichtstraat, Veenendaal", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerlijk advies, duidelijke prijs",
    tekst: "Geen ingewikkelde rapporten met vaktermen, maar heldere uitleg.",
    foto: "img/sjoerd-steiger.jpg", fotoPos: "50% 35%", fotoAlt: "Sjoerd Verduin aan het werk op de steiger",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt. Een foto van uw dak via WhatsApp helpt al." },
      { naam: "Gratis inspectie", tekst: "We komen langs, vaak binnen 24 uur, en kijken verder dan de plek van het probleem." },
      { naam: "Duidelijke offerte", tekst: "U weet vooraf precies waar u aan toe bent. Geen verborgen kosten." },
      { naam: "Vakwerk met garantie", tekst: "Uitgevoerd met de beste materialen. 10 jaar garantie op uw nieuwe dak." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Verduin Dakwerk was de ENIGE die daadwerkelijk de telefoon opnam en direct bereid was om te helpen! Binnen één uur stond hij bij mij voor de deur! … Nogmaals ontzettend bedankt, Sjoerd! Je bent werkelijk een topper!", naam: "Mariké K." },
      { tekst: "Afgelopen week hebben we ons 50 jaar oude pannendak incl. panlatten en vliesfolie laten vervangen door Sjoerd en zijn collega's. Super aardige, nette en vakbekwame monteurs en een goede prijs. Echt een aanrader.", naam: "Ton V." },
      { tekst: "Verduin heeft het dak van de uitbouw geisoleerd en voorzien van nieuw bitumen. Ook is er een prachtige lichtschacht geplaatst. Wat een licht hebben we ineens in huis! We zijn nog elke dag blij met deze keuze.", naam: "Melissa de R." },
      { tekst: "Vakwerk! Een kleine lekkage werd snel en vakkundig verholpen. De ingrijpende dakrenovatie daarna … is perfect uitgevoerd. Ook bij onverwachte problemen kiest hij voor kwaliteit.", naam: "Michiel K." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Familiebedrijf uit Veenendaal",
    rol: "Verduin Dakwerk en Aannemersbedrijf",
    tekst: [
      "Verduin Dakwerk is een familiedakdekkersbedrijf uit Veenendaal, gespecialiseerd in dakrenovatie, dakreparatie, lekkageherstel en duurzame oplossingen voor platte en schuine daken.",
      "We combineren jarenlange praktijkervaring met een nuchtere aanpak. Gediplomeerde vakmensen, VCA-gecertificeerd, en korte lijnen van het eerste telefoontje tot de oplevering."
    ],
    foto: "img/sjoerd.jpg", fotoPos: "50% 30%", fotoAlt: "Sjoerd Verduin op het dak, in het shirt van Verduin Dakwerk",
    knop: "Stuur Sjoerd een bericht"
  },

  werkgebied: {
    titel: "Veenendaal, Ede en de regio Utrecht",
    tekst: "Vanuit Veenendaal zijn we dagelijks onderweg in Utrecht en Gelderland. Bij spoed vaak binnen 24 uur ter plaatse.",
    plaatsen: ["Veenendaal", "Ede", "Renswoude", "Wageningen", "Rhenen", "Overberg", "Utrecht", "Zeist", "Amersfoort", "Arnhem", "Utrechtse Heuvelrug"]
  },

  faq: [
    { v: "Is een dakinspectie gratis?", a: "Ja. We komen altijd eerst gratis bij u langs voor een eerlijk advies en een duidelijke offerte." },
    { v: "Hoe snel kunnen jullie er zijn?", a: "In Veenendaal en omgeving zijn we vaak binnen 24 uur ter plaatse. Bij een lekkage kunt u ons direct bellen of appen." },
    { v: "Geven jullie garantie?", a: "Ja, op een nieuw dak krijgt u altijd 10 jaar garantie." },
    { v: "Wat kost een dakdekker?", a: "Dat hangt af van het werk. Kleine reparaties beginnen vaak rond de honderd euro. Na de gratis inspectie weet u precies waar u aan toe bent." }
  ],

  band: {
    foto: "img/pannendak.jpg", fotoPos: "50% 50%",
    titel: "Uw dak in topconditie, zonder zorgen",
    tekst: "Laat uw dak op tijd controleren. Sjoerd komt gratis langs en geeft eerlijk advies."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Bel of app direct, of laat hieronder een bericht achter. Een foto van uw dak is altijd handig.",
    formTitel: "Aanvraag",
    onderwerpen: ["Daklekkage / spoed", "Bitumen dak", "Pannendak", "Dakrenovatie", "Dakisolatie", "Zink en lood", "Dakraam / lichtstraat", "Schoorsteen"],
    voorbeeld: "Bijvoorbeeld: na de storm lekt het bij de schoorsteen",
    belofte: "Sjoerd neemt zo snel mogelijk contact met u op."
  }
};
