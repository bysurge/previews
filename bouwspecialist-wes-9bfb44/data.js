// De Bouwspecialist Wes. Bron: debouwspecialistwes.nl (JouwWeb, stock-hero) + Google (5,0 / 22, Geograaf 16 Duiven).
// LET OP adres: site noemt Pizarrostraat 1, 's-Hertogenbosch; Google zegt Duiven. Telefoon (06 10016081) is op beide gelijk.
// Daarom geen straatadres op de preview en geen plaatsnamenlijst. Foto's: eigen site + Google-profiel (geen stock gebruikt).
window.SITE = {
  naam: "De Bouwspecialist Wes",
  kortNaam: "Bouwspecialist Wes",
  plaats: "Duiven",
  vak: "Dakdekker",
  titelExtra: "Dakdekker voor pannendaken en platte daken",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 44,
  kleuren: { brand: "#1d1b19", accent: "#c8282e" },
  telefoon: "06 10 01 60 81",
  telefoonIntl: "31610016081",
  telBel: "+31610016081",
  email: "info@debouwspecialistwes.nl",
  kvk: "89195418",
  google: { score: "5,0", aantal: "22" },
  ctaTekst: "Gratis offerte",
  navCta: "Offerte",
  waTekst: "App ons",
  waContact: "Stuur een foto van uw dak",
  voetTekst: "Dakdekker voor pannendaken, platte daken, dakisolatie, schoorstenen en dakgoten. Van een kleine reparatie tot een compleet nieuw dak.",

  hero: {
    regels: ["Uw dak", "in goede", "handen."],
    tekst: "Van een kleine reparatie tot een compleet nieuw dak. Pannendaken, platte daken en dakisolatie, met zorg en aandacht voor elk detail.",
    foto: "img/hero.jpg", fotoPos: "50% 42%", fotoPosMobiel: "45% 55%",
    fotoAlt: "Pannendak in aanbouw: nieuwe isolatie en panlatten bij zonsondergang",
    donker: true,
    punten: ["Gratis offerte", "Gratis dakinspectie", "24/7 bij lekkage"]
  },

  marquee: ["Pannendaken", "Platte daken", "EPDM", "Bitumen", "PVC", "Dakisolatie", "Schoorstenen", "Dakgoten", "Lekkages", "Dakrenovatie"],

  spoed: {
    titel: "Lekkage aan uw dak?",
    tekst: "We bieden 24/7 noodreparatie bij lekkages. Bel of app ons, gerust met een foto."
  },

  intro: {
    kicker: "De Bouwspecialist Wes",
    tekst: "Van reparatie tot volledige dakrenovatie: we werken met goede materialen, denken mee als we onderweg iets tegenkomen en ruimen na elke klusdag alles netjes op.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "22", tel: 22, label: "Reviews op Google" },
      { getal: "24/7", label: "Noodreparatie bij lekkage" },
      { getal: "Gratis", label: "Offerte en dakinspectie" }
    ]
  },

  diensten: {
    titel: "Van nok tot dakgoot",
    tekst: "Voor woningen en bedrijfspanden. Reparatie, onderhoud of een compleet nieuw dak.",
    knop: "Vraag een offerte aan",
    items: [
      { naam: "Pannendaken", soort: "Schuin dak", foto: "img/pannen-leggen.jpg", pos: "50% 40%", tekst: "Nieuwe dakbedekking leggen of vervangen, met dakpannen, leien of metaal. We helpen u kiezen wat bij uw huis en budget past.",
        punten: ["Dak compleet vernieuwen", "Dakpannen, leien of metaal", "Nokvorsten en aansluitingen"] },
      { naam: "Platte daken", soort: "EPDM, bitumen, PVC", foto: "img/plat-dak-2.jpg", pos: "50% 50%", tekst: "Een nieuw plat dak, of onderhoud en reparatie van uw bestaande dak. We zoeken eerst de bron van het probleem.",
        punten: ["EPDM, bitumen of PVC", "Nieuw, onderhoud of reparatie", "Ook voor bedrijfspanden"] },
      { naam: "Dakisolatie", soort: "Isolatie", foto: "img/dakbeschot.jpg", pos: "50% 50%", tekst: "Een goed geïsoleerd dak houdt de warmte binnen, scheelt op de energierekening en houdt geluid van buiten tegen.",
        punten: ["Lagere energierekening", "Meer comfort, minder tocht", "Langere levensduur van uw dak"] },
      { naam: "Lekkage", soort: "24/7", foto: "img/nok.jpg", pos: "50% 50%", tekst: "Een daklekkage moet snel worden aangepakt. We sporen de oorzaak op en maken uw dak weer waterdicht.",
        punten: ["24/7 noodreparatie", "Oorzaak opsporen", "Preventief onderhoud"] }
    ],
    meer: [
      { naam: "Schoorstenen", tekst: "Loszittende stenen, scheuren of lekkage rond de schoorsteen: we repareren en renoveren." },
      { naam: "Dakgoten", tekst: "Installeren, repareren en onderhouden. Kleine problemen pakken we aan voordat ze escaleren." },
      { naam: "Dakinspectie", tekst: "Minstens één keer per jaar laten controleren voorkomt grote reparaties. De inspectie is gratis." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk",
    tekst: "Foto's van eigen klussen, van pannendak tot plat dak.",
    items: [
      { foto: "img/op-het-dak.jpg", label: "Pannendak", sub: "Nieuwe oranje pannen", pos: "50% 40%" },
      { foto: "img/nieuw-dak.jpg", label: "Dakrenovatie", sub: "Compleet nieuw pannendak", pos: "50% 45%" },
      { foto: "img/plat-dak.jpg", label: "Plat dak", sub: "Strak afgewerkt", pos: "50% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Schoorsteen", sub: "Lood vernieuwd", pos: "50% 60%" },
      { foto: "img/dakraam-opening.jpg", label: "Dakraam", sub: "Sparing in het nieuwe dak", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Duidelijk vooraf, netjes opgeleverd",
    tekst: "U weet precies waar u aan toe bent, zonder verrassingen.",
    foto: "img/pannen-leggen.jpg", fotoPos: "50% 50%", fotoAlt: "Dakdekkers leggen nieuwe pannen op een dak met blauwe folie",
    stappen: [
      { naam: "Contact", tekst: "Bel, app of mail ons. Een foto van uw dak helpt al een eind." },
      { naam: "Gratis dakinspectie", tekst: "We komen kijken, gaan het dak op en bespreken de mogelijkheden." },
      { naam: "Duidelijke offerte", tekst: "U krijgt een heldere, gratis offerte op maat." },
      { naam: "Uitvoering", tekst: "Vakkundig uitgevoerd, met foto's en filmpjes als we onderweg iets tegenkomen." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Dak van ons 100 jaar oude pand laten vervangen. Erg leuk contact, eerlijke prijs en verbluffend resultaat! Zeker een aanrader.", naam: "Enrico A." },
      { tekst: "Het vakmanschap, de efficiency en snelheid, kwaliteit van de vervanging van ons dak was indrukwekkend. … De filmpjes en foto's waren hierbij erg behulpzaam. Na een klusdag werd alles keurig opgeruimd.", naam: "Saskia K." },
      { tekst: "Dak van onze woning compleet laten renoveren en isoleren door de bouwspecialist Wes, daarbij hebben zij ook een dakkapel bij ons geplaatst. … Wij zijn super tevreden en bevelen dit bedrijf zeker aan!", naam: "Kim V." },
      { tekst: "Gehele platdak ca. 54 m3 laten vernieuwen. Het geheel is prima uitgevoerd door prettige mensen met kennis van zaken. … Een aanrader dit bedrijf.", naam: "Jan J." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Van reparatie tot nieuw dak",
    rol: "Dakdekbedrijf, onderhoud en renovatie",
    tekst: [
      "De Bouwspecialist Wes is een dakdekbedrijf met jarenlange ervaring. We zijn gespecialiseerd in alle soorten dakbedekking: van platte daken tot pannendaken, en van bitumen tot kunststof.",
      "We werken met goede materialen en de nieuwste technieken, en we blijven investeren in opleidingen. Voor vragen of advies zijn we dagelijks bereikbaar."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 75%", fotoAlt: "Bedrijfsbus van De Bouwspecialist Wes bij een klus",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/woning-steiger.jpg", fotoPos: "50% 50%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Plan een gratis dakinspectie in. We vertellen eerlijk hoe uw dak ervoor staat."
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Bel, app of mail ons. We zijn dagelijks bereikbaar voor vragen en advies.",
    formTitel: "Aanvraag",
    onderwerpen: ["Offerte", "Dakinspectie", "Lekkage", "Pannendak", "Plat dak", "Dakisolatie", "Schoorsteen / dakgoot"],
    voorbeeld: "Bijvoorbeeld: het pannendak is aan vervanging toe, rijtjeshuis uit de jaren 30",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
