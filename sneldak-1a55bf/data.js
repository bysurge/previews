// Sneldak v.o.f. (Zaandam). Eigen site: website-bouwer, rommelig, projectenpagina "wordt aan gewerkt".
// Inhoud van sneldak.nl + Google-profiel (4,8 / 45), 25-11-2026. Foto's: eigen site + Google-profiel (geen stock).
window.SITE = {
  naam: "Sneldak",
  kortNaam: "Sneldak",
  plaats: "Zaandam",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 52,
  kleuren: { brand: "#15201a", accent: "#4fa85a" },
  telefoon: "06 819 048 20",
  telefoonIntl: "31681904820",
  email: "sneldak@gmail.com",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  adres: ["Ringweg 278", "1507 BN Zaandam"],
  google: { score: "4,8", aantal: "45" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Dakdekker uit Zaandam sinds 1995. Platte en hellende daken, zink- en loodwerk.",

  hero: {
    regels: ["Vakwerk op", "elk dak.", "Ook op de molen."],
    tekst: "Al meer dan 30 jaar renoveren, repareren en isoleren we platte en hellende daken, inclusief zink- en loodwerk. Vanuit Zaandam.",
    foto: "img/molen-bus.jpg", fotoPos: "50% 40%", fotoPosMobiel: "58% 50%",
    fotoAlt: "Groene Sneldak-bus bij een Zaanse molen waar het team aan het dak werkt",
    donker: true,
    punten: ["Sinds 1995", "Minimaal 10 jaar garantie", "Gratis dakinspectie"]
  },

  marquee: ["Platte daken", "Bitumen", "EPDM", "Pannendaken", "Zinkwerk", "Loodwerk", "Dakisolatie", "Lichtstraten", "Lichtkoepels", "Daklekkage"],

  spoed: {
    titel: "Lekkage? Wacht niet te lang.",
    tekst: "Hoe langer u wacht, hoe groter de schade. We sporen het lek op en repareren het duurzaam."
  },

  intro: {
    kicker: "Sneldak",
    tekst: "Een nieuw plat dak, dakpannen vervangen of een lastige lekkage: Michael en zijn mannen staan zelf op het dak. Eerlijk advies, een duidelijke offerte en netjes opgeleverd.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "45", tel: 45, label: "Reviews op Google" },
      { getal: "30+", label: "Jaar ervaring" },
      { getal: "15 jaar", label: "Garantie op EPDM-daken" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Van een kleine reparatie tot een complete dakrenovatie, voor woningen, aanbouwen, schuren en bedrijfspanden.",
    items: [
      { naam: "Platte daken", soort: "Bitumen en EPDM", foto: "img/plat-dak.jpg", pos: "50% 50%", tekst: "Plat dak vervangen of renoveren met bitumen of onderhoudsarm EPDM. Bij vervanging isoleren we direct mee.",
        punten: ["Bitumen dakbedekking", "EPDM met 15 jaar garantie", "Dakisolatie"] },
      { naam: "Hellende daken", soort: "Pannendaken", foto: "img/pannendak-zwart.jpg", pos: "50% 50%", tekst: "Dakpannen vervangen, keramisch of beton, en meteen de constructie eronder controleren. Ook isoleren.",
        punten: ["Dakpannen vervangen", "Nokvorsten", "Hellend dak isoleren"] },
      { naam: "Zink- en loodwerk", soort: "Precisiewerk", foto: "img/loodwerk.jpg", pos: "50% 50%", tekst: "Dakgoten, afvoeren en dakranden in zink, en lood voor waterdichte aansluitingen rond schoorstenen en kozijnen.",
        punten: ["Dakgoten en afvoeren", "Loodslabben", "Schoorsteenaansluitingen"] },
      { naam: "Lichtstraten en koepels", soort: "Plaatsen of vervangen", foto: "img/lichtstraat.jpg", pos: "50% 55%", tekst: "Een lichtstraat of nieuwe lichtkoepel, strak ingewerkt in het platte dak. Meer licht en beter geïsoleerd.",
        punten: ["Lichtstraten", "Lichtkoepels", "Netjes ingewerkt"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Van een nieuw pannendak tot het platte dak bij een Zaanse molen.",
    items: [
      { foto: "img/molen-plat-dak.jpg", label: "Molen", sub: "Nieuw plat dak bij een rietgedekte molen", pos: "50% 50%" },
      { foto: "img/pannendak-nok.jpg", label: "Pannendak", sub: "Nieuwe pannen en nokvorsten", pos: "50% 50%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel", sub: "Pannendak rond de dakkapel", pos: "50% 50%" },
      { foto: "img/lichtkoepel.jpg", label: "Lichtkoepel", sub: "Geplaatst in het platte dak", pos: "50% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Schoorsteen", sub: "Pannendak met nieuwe aansluiting", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Geen verkooppraatjes. Gewoon eerlijk advies van iemand die zelf het werk doet.",
    foto: "img/hero.jpg", fotoPos: "50% 30%", fotoAlt: "Dakdekker van Sneldak werkt aan een schoorsteen op een pannendak",
    stappen: [
      { naam: "Bel of app", tekst: "Stuur gerust een foto van uw dak of de lekkage mee." },
      { naam: "Gratis inspectie", tekst: "We komen kijken en vertellen eerlijk wat er nodig is." },
      { naam: "Duidelijke offerte", tekst: "Vooraf helder wat het kost. Geen verrassingen." },
      { naam: "Netjes opgeleverd", tekst: "Binnen de afgesproken tijd, met garantie en nazorg." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Toen Michael langskwam om een offerte te maken, eigenaar én iemand die zelf met zijn collega’s het werk uitvoert, had ik voor het eerst wél een goed gevoel. … De offerte was duidelijk en goed, de uitvoering was perfect.", naam: "Roland v." },
      { tekst: "Zij kwamen met een eerlijke, betrouwbare en duurzame oplossing waarvoor slechts een relatief kleine ingreep nodig was. De lekkage is vakkundig verholpen en we zijn erg blij met het resultaat.", naam: "Marijn B." },
      { tekst: "Hierbij is Mike erg grondig en vakkundig te werk gegaan en het resultaat mag er zijn. Hij werkt hard, communiceert goed … en levert echt vakwerk.", naam: "Julien R." },
      { tekst: "Rustige doorwerkende mannen. Keurig en snel gewerkt. Alles geheel volgens afspraak.", naam: "Anja t." }
    ]
  },

  werkgebied: {
    titel: "Zaandam en verder",
    tekst: "Vanuit onze vestiging in Zaandam werken we in de Zaanstreek, de rest van Noord-Holland en daarbuiten. Twijfelt u of we bij u komen? Stuur gerust een berichtje."
  },

  band: {
    foto: "img/pannendak-zwart.jpg", fotoPos: "50% 50%",
    titel: "Even een foto sturen?",
    tekst: "App een foto van uw dak, dan kijken we mee en hoort u snel wat er nodig is."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel of app direct, of laat hieronder een bericht achter. Een foto van uw dak is altijd handig.",
    formTitel: "Aanvraag",
    onderwerpen: ["Plat dak", "Pannendak", "Daklekkage", "Zink- of loodwerk", "Lichtstraat of koepel", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons platte dak is ruim 25 jaar oud en lekt bij de dakrand",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
