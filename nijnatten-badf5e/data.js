// Pannendekkersbedrijf F. van Nijnatten (Etten-Leur). Bron: pannendekkersbedrijfvannijnatten.nl (alle pagina's) + Google (4,9 / 63). Zie content.md.
// Foto's: eigen site (projecten, bus) + Google-profiel. Logo van hun site, wit weggehaald (ondertitel eraf geknipt).
window.SITE = {
  naam: "Pannendekkersbedrijf F. van Nijnatten",
  kortNaam: "Van Nijnatten",
  plaats: "Etten-Leur",
  vak: "Pannendekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo.png",
  logoVorm: "icoon",
  logoMetNaam: false,
  logoWit: "img/logo.png",
  logoHoogte: 48,
  kleuren: { brand: "#241a14", accent: "#e07a45" },
  telefoon: "06 25 05 23 60",
  telefoonIntl: "31625052360",
  telefoon2: "076 503 82 35",
  email: "pannen.f.van.nijnatten@gmail.com",
  adres: ["Korte Brugstraat 86", "4871 XT Etten-Leur"],
  google: { score: "4,9", aantal: "63" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  waTekst: "App ons",
  voetTekst: "Specialist in hellende daken met pannen, sinds 1998. Nieuwbouw, renovatie, onderhoud en lekkages in heel West-Brabant.",

  hero: {
    regels: ["Pannendaken,", "sinds 1998."],
    tekst: "We doen één ding en doen dat goed: hellende daken met pannen. Van een nieuw pannendak en dakrenovatie tot dakkapellen, dakramen, goten en lekkages, in heel West-Brabant.",
    foto: "img/hero-nieuwbouw.jpg", fotoPos: "50% 40%", fotoPosMobiel: "55% 50%",
    fotoAlt: "Nieuwbouwwoning met een nieuw pannendak",
    donker: true,
    punten: ["Sinds 1998", "Eigen vakmensen", "Eén aanspreekpunt"]
  },

  marquee: ["Pannendaken", "Dakrenovatie", "Nieuwbouw", "Dakkapellen", "Dakramen", "Goten", "Overstekken", "Nok vernieuwen", "Lekkages", "Onderhoud"],

  spoed: {
    titel: "Daklekkage?",
    tekst: "Bel ons direct. Buiten kantoortijden: lekkageservice 06 11 80 51 32. We komen snel langs in heel West-Brabant."
  },

  intro: {
    kicker: "Van Nijnatten",
    tekst: "Geen platte daken, wel alles wat bij een pannendak hoort: van een complete dakrenovatie tot een enkele kapotte pan. Met eigen vakmensen en van offerte tot oplevering dezelfde persoon.",
    stats: [
      { getal: "1998", label: "Opgericht in Etten-Leur" },
      { getal: "25+ jaar", label: "Ervaring met pannendaken" },
      { getal: "4,9", label: "Uit 63 Google-reviews" },
      { getal: "1", label: "Aanspreekpunt van offerte tot oplevering" }
    ]
  },

  diensten: {
    titel: "Alles voor uw pannendak",
    tekst: "Van vakkundig onderhoud en reparatie tot complete dakrenovatie en nieuwbouw, tot in het kleinste detail.",
    items: [
      { naam: "Dakrenovatie en nieuwbouw", foto: "img/rode-pannen.jpg", pos: "50% 45%",
        tekst: "Complete vernieuwing van het pannendak, of een nieuw pannendak voor nieuwbouw en aanbouw, in overleg met aannemer of particulier.",
        punten: ["Pannen, panlatten, tengels en folie", "Advies over isolatie", "Voor nieuwbouw en aanbouw"] },
      { naam: "Dakkapellen en dakramen", foto: "img/dakkapel.jpg", pos: "50% 50%",
        tekst: "Plaatsen en waterdicht aansluiten van dakkapellen en dakramen, passend bij het pannendak.",
        punten: ["Nieuwe dakkapel plaatsen", "Bestaande dakkapel renoveren", "Dakramen met gootstuk"] },
      { naam: "Goten en overstekken", foto: "img/dakraam-rood.jpg", pos: "50% 50%",
        tekst: "Vervangen, repareren of nieuw aanbrengen van dakgoten, en nette betimmering van overstekken en boeidelen.",
        punten: ["Zinken of kunststof goten", "Reinigen en opnieuw afschot geven", "Hout of onderhoudsarm kunststof"] },
      { naam: "Nok, lekkage en onderhoud", foto: "img/nok.jpg", pos: "50% 50%",
        tekst: "Snel lekkages opsporen, nokvorsten herstellen en periodiek onderhoud, zodat kleine gebreken klein blijven.",
        punten: ["Nok in specie of droge nok", "Lekkages snel verholpen", "Periodieke controle"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Recent werk", navNaam: "Projecten",
    titel: "Pannendaken in West-Brabant",
    tekst: "Een greep uit recent werk: nieuwbouw, dakrenovatie, dakkapellen en bijgebouwen.",
    items: [
      { foto: "img/villa-dakkapellen.jpg", label: "Villa", sub: "Pannendak met dakkapellen", pos: "50% 50%" },
      { foto: "img/woonboerderij.jpg", label: "Woonboerderij", sub: "Pannendak met dakkapel", pos: "50% 50%" },
      { foto: "img/renovatie-steiger.jpg", label: "Dakrenovatie", sub: "Compleet vernieuwd", pos: "50% 50%" },
      { foto: "img/schuur.jpg", label: "Bijgebouw", sub: "Nieuw pannendak", pos: "50% 50%" },
      { foto: "img/kraan.jpg", label: "Nieuwbouw", sub: "Pannen op het dak", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Bij lekkage: zo werkt het",
    tekst: "Een lekkend pannendak wacht niet. Meestal is het direct verholpen.",
    foto: "img/pannen-leggen.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuwe dakpannen worden gelegd",
    stappen: [
      { naam: "Bellen", tekst: "Beschrijf kort waar het lekt en sinds wanneer. Lekkageservice: 06 11 80 51 32." },
      { naam: "Inspectie", tekst: "Op het dak zoeken we de oorzaak: pannen, nok, goot of aansluiting." },
      { naam: "Herstel", tekst: "Meestal direct verholpen. Is er meer nodig, dan volgt een duidelijke offerte." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Super tevreden. Werk wordt keurig zoals afgesproken geleverd en binnen de afgesproken tijd. Heel vriendelijk, meedenkend en goede service!", naam: "Jenneke K." },
      { tekst: "Fijn en betrouwbaar bedrijf. Goede communicatie, netjes gewerkt en duidelijke afspraken. Zeker een aanrader …", naam: "Chantal v. H." },
      { tekst: "Top service! Goede communicatie, komt zijn afspraken netjes na en de kwaliteit van het werk kan niet beter.", naam: "J A" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Eén ding, en dat goed",
    rol: "Korte Brugstraat 86, Etten-Leur",
    tekst: [
      "Pannendekkersbedrijf F. van Nijnatten b.v. is in 1998 opgericht in Etten-Leur. Voor particulieren, aannemers en VvE's: nieuwbouw, renovatie, onderhoud en spoedreparaties.",
      "Onze bus rijdt dagelijks door West-Brabant. U werkt met eigen vakmensen en heeft van offerte tot oplevering één vast aanspreekpunt."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 40%", fotoAlt: "De bus van Pannendekkersbedrijf F. van Nijnatten",
    knop: "Stuur een bericht"
  },

  werkgebied: {
    titel: "Heel West-Brabant",
    tekst: "Vanuit Etten-Leur werken we in de hele regio.",
    plaatsen: ["Etten-Leur", "Breda", "Roosendaal", "Zundert", "Rucphen", "Prinsenbeek", "Oudenbosch", "Bergen op Zoom"]
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel of app voor een vrijblijvende offerte of advies over uw dak, of laat hieronder een bericht achter.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakrenovatie", "Nieuwbouw", "Dakkapel of dakraam", "Goten of overstekken", "Lekkage", "Onderhoud"],
    voorbeeld: "Bijvoorbeeld: er liggen een paar pannen scheef en de nok laat los",
    belofte: "U heeft van offerte tot oplevering één aanspreekpunt."
  }
};
