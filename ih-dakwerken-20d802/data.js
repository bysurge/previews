// I.H. Dakwerken (Katwijk). GEEN eigen website (domein geparkeerd): alles uit het Google-profiel (5,0 / 14), 25-11-2026. Zie content.md.
// Logo nagemaakt als eenvoudig woordmerk naar de belettering op hun bus. Foto's: Google-profiel.
window.SITE = {
  naam: "I.H. Dakwerken",
  plaats: "Katwijk",
  vak: "Dakdekker",
  logo: "img/logo.svg", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.svg", logoOpFoto: "img/logo-wit.svg", logoHoogte: 36,
  kleuren: { brand: "#16233b", accent: "#d9583b" },
  telefoon: "06 83 67 31 07",
  telefoonIntl: "31683673107",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  google: { score: "5,0", aantal: "14" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Dakdekker voor platte en hellende daken: isoleren, vernieuwen, goten, vorsten en lekkages.",

  hero: {
    regels: ["Een nieuw dak,", "strak tot in", "de hoeken."],
    tekst: "Platte en hellende daken vernieuwen en isoleren, goten en vorsten, lekkages. Met een duidelijke offerte, zonder verrassingen achteraf.",
    foto: "img/hero-drone.jpg", fotoPos: "45% 45%", fotoPosMobiel: "52% 55%",
    fotoAlt: "Drone-foto van een nieuw pannendak met dakkapel, de bus van I.H. Dakwerken voor de deur",
    donker: true,
    punten: ["5,0 op Google", "Offerte zonder stelposten", "Steigers en container geregeld"]
  },

  marquee: ["Dakrenovatie", "Dakisolatie", "Platte daken", "Pannendaken", "Dakgoten", "Nokvorsten", "Boeidelen", "Lekkages", "Schoorstenen"],

  intro: {
    kicker: "Over I.H. Dakwerken",
    tekst: "Een jong dakdekkersbedrijf dat snel kan beginnen. U krijgt een duidelijke offerte, wordt elke dag op de hoogte gehouden en wordt eerst gevraagd als er iets te kiezen valt.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "14", tel: 14, label: "Reviews op Google" },
      { getal: "Geen", label: "Stelposten in de offerte" },
      { getal: "Snel", label: "Kunnen beginnen" }
    ]
  },

  diensten: {
    titel: "Van lekkage tot compleet nieuw dak",
    tekst: "Plat of hellend, met isolatie meegenomen.",
    items: [
      { naam: "Dakrenovatie en isolatie", soort: "Dakrenovatie", foto: "img/pannen.jpg", pos: "50% 50%", tekst: "Het dak eraf, isolatie erop en nieuwe pannen erop. Strak aangesloten op de buren en netjes afgewerkt rond dakkapellen, schoorstenen en dakramen.",
        punten: ["Nieuwe dakpannen", "Dakisolatie", "Aansluiting op de buren"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak-2.jpg", pos: "50% 50%", tekst: "Plat dak isoleren en opnieuw dekken, met nieuwe daklijsten. Ook bij een lekkage kijken we snel wat er nodig is.",
        punten: ["Isoleren en opnieuw dekken", "Nieuwe daklijsten", "Lekkages verholpen"] },
      { naam: "Goten, vorsten en boeidelen", soort: "Goten / vorsten", foto: "img/zink.jpg", pos: "50% 50%", tekst: "Goten vervangen, nokvorsten goed vastzetten en afwerken met nette broekstukken, en trespa op de boeidelen.",
        punten: ["Goten vervangen", "Nokvorsten met broekstukken", "Trespa op boeidelen"] }
    ],
    meer: [
      { naam: "Schoorstenen", tekst: "Netjes aangesloten, of in overleg helemaal weggehaald." },
      { naam: "Steigers en afvoer", tekst: "Lift, steigers en afvalcontainer: we regelen het zetten én het ophalen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Werk", kicker: "Ons werk",
    titel: "Netjes afgewerkt",
    tekst: "Foto's van onze eigen klussen.",
    items: [
      { foto: "img/straat.jpg", label: "Pannendaken", sub: "Nieuw dak, strak aangesloten", pos: "50% 40%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel", sub: "Nieuw gedekt", pos: "50% 50%" },
      { foto: "img/schoorsteen.jpg", label: "Plat dak", sub: "Rond de schoorsteen", pos: "50% 50%" },
      { foto: "img/isolatie.jpg", label: "Plat dak", sub: "Tijdens het werk", pos: "50% 60%" },
      { foto: "img/dakrand.jpg", label: "Dakrand", sub: "Nieuwe daklijst", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Duidelijk vanaf het begin",
    tekst: "Wat klanten het meest noemen: heldere afspraken.",
    stappen: [
      { naam: "Bellen of appen", tekst: "Stuur een foto of bel. We kunnen meestal snel komen kijken." },
      { naam: "Duidelijke offerte", tekst: "Een vaste prijs zonder stelposten. Wordt iets duurder, dan vragen we het eerst." },
      { naam: "Elke dag op de hoogte", tekst: "U en de buren weten steeds wat er gebeurt." },
      { naam: "Opgeruimd opgeleverd", tekst: "Steigers, lift en container gaan weer netjes weg." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ze hebben de goten vervangen en vorsten goed gemonteerd en alles opgelost, wat problemen kan geven. … Groot pluspunt was een duidelijke offerte zonder stelposten. … Ivo, Daan en alle anderen hartelijk bedankt", naam: "Alfred B." },
      { tekst: "Echt superblij met de dakdekkers en het vernieuwde dak met dakisolatie. … Uiteindelijk sloten de daken perfect aan en is alles ook strak afgewerkt bij de dakkapellen, schoorstenen en het dakraam. … Topbedrijf.", naam: "Jacqueline H." },
      { tekst: "Wij hebben meerdere dingen laten doen zoals isoleren, dakpannen vervangen, schoorsteen weghalen en trespa op boeidelen. Het resultaat is prachtig geworden! … Communicatie was erg prettig!", naam: "Kevin van M." },
      { tekst: "Fijne kerels, doorpakkers. Hebben goed en netjes werk geleverd. Platdak geïsoleerd en opnieuw overlangs. Nieuwe daklijsten aangebracht. Eerlijke prijs/ kwaliteit!", naam: "Roos van den B." }
    ]
  },

  faq: [
    { v: "Hoe snel kunnen jullie beginnen?", a: "Vaak snel. Stuur een foto via WhatsApp of bel, dan plannen we een afspraak om te komen kijken." },
    { v: "Komen er achteraf nog kosten bij?", a: "Nee. U krijgt een duidelijke offerte zonder stelposten. Wilt u iets extra's, dan overleggen we dat eerst." },
    { v: "Regelen jullie steigers en afvoer?", a: "Ja. Lift, steigers en afvalcontainer regelen we zelf, inclusief het weer ophalen." }
  ],

  band: {
    foto: "img/hero-drone.jpg", fotoPos: "50% 60%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Stuur een foto van uw dak via WhatsApp, dan denken we direct met u mee."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat er aan de hand is, of stuur direct een foto via WhatsApp.",
    onderwerpen: ["Nieuw dak / renovatie", "Dakisolatie", "Plat dak", "Lekkage", "Goten en vorsten", "Schoorsteen"],
    voorbeeld: "Bijvoorbeeld: ons pannendak lekt bij de schoorsteen en mag ook geïsoleerd worden"
  }
};
