// Cremerson Hoveniersbedrijf BV, Breda. Hun site is alleen een "wordt aan gewerkt"-pagina (sinds 1998, werk- en woonomgeving, info@cremerson.nl).
// Foto's van hun Google-profiel (eigen bus/hoogwerker met Cremerson-opdruk). Google 5,0 met 3 reviews, zonder tekst. Geen adres/KvK gevonden; tel 076 van Google.
// Twee Google-foto's van kerstverlichting in een binnenstad bewust niet gebruikt (onduidelijk of dat hun werk is).
window.SITE = {
  naam: "Cremerson Hoveniersbedrijf",
  kortNaam: "Cremerson",
  vak: "Hovenier",
  plaats: "Breda",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-kaart.png",
  logoWit: "img/logo-kaart.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#23402a", accent: "#c49a2c" },
  telefoon: "076 543 99 85",
  telBel: "+31765439985",
  whatsapp: false,
  email: "info@cremerson.nl",
  google: { score: "5,0", aantal: 3 },
  voetTekst: "Tuinaanleg en groenvoorziening voor werk- en woonomgeving, sinds 1998.",

  hero: {
    regels: ["Buiten", "wonen en werken,", "*met stijl.*"],
    tekst: "Sinds 1998 legt Cremerson tuinen en groen aan voor woon- en werkomgeving. Eén totaalconcept, van overkapping tot gazon.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "35% 60%",
    fotoAlt: "Houten overkapping in een tuin met gazon",
    punten: ["Sinds 1998", "Woon- en werkomgeving"]
  },

  marquee: ["Tuinaanleg", "Overkappingen", "Schuttingen", "Gazons", "Groenvoorziening", "Werk op hoogte"],

  intro: {
    kicker: "Over Cremerson",
    tekst: "Uw wensen vormen *de basis.* Of het nu om een tuin bij huis gaat of het groen rond uw bedrijf: wij zorgen voor de sfeer en functionaliteit die u zoekt.",
    stats: [
      { getal: "1998", label: "Opgericht" },
      { getal: "Totaal", label: "Concept in tuinaanleg en groen" },
      { getal: "5,0", label: "Sterren op Google" }
    ]
  },

  diensten: {
    titel: "Alles voor *buiten*",
    tekst: "In de loop der jaren hebben we ons gespecialiseerd en verbreed, in alle facetten van de aanleg van een tuin.",
    items: [
      { naam: "Tuinaanleg", foto: "img/tuin.jpg", pos: "50% 70%", tekst: "Een complete tuin, met gazon en een plek om te zitten, afgestemd op uw wensen.",
        punten: ["Complete tuinen", "Gazon"] },
      { naam: "Overkappingen en houtwerk", foto: "img/bouwen.jpg", pos: "50% 40%", tekst: "Houten overkappingen, pergola's en vlonders, op maat gebouwd in uw tuin.",
        punten: ["Overkappingen", "Pergola's", "Vlonders"] },
      { naam: "Schuttingen", foto: "img/schutting.jpg", tekst: "Strakke houten schuttingen en afscheidingen die de tuin rust en privacy geven.",
        punten: ["Houten schuttingen", "Tuinafscheiding"] },
      { naam: "Groen voor de werkomgeving", foto: "img/hoogwerker.jpg", pos: "40% 50%", tekst: "Ook voor bedrijven en de openbare ruimte, met eigen hoogwerker voor werk op hoogte.",
        punten: ["Zakelijke groenvoorziening", "Werk op hoogte"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk",
    titel: "Een greep uit *ons werk*",
    tekst: "Van tuin bij huis tot werk in de stad.",
    items: [
      { foto: "img/overkapping.jpg", label: "Houten overkapping", sub: "Houtwerk", pos: "50% 60%" },
      { foto: "img/tuin.jpg", label: "Nieuwe tuin met gazon", sub: "Tuinaanleg", pos: "50% 60%" },
      { foto: "img/schutting.jpg", label: "Strakke schutting", sub: "Schuttingen" },
      { foto: "img/bouwen.jpg", label: "Pergola in aanbouw", sub: "Houtwerk" },
      { foto: "img/gevel.jpg", label: "Werk aan de gevel", sub: "Werkomgeving" }
    ]
  },

  band: {
    foto: "img/overkapping.jpg", fotoPos: "50% 60%",
    titel: "Toe aan een tuin *met sfeer?*",
    tekst: "Mail ons wat u voor ogen heeft, dan denken we graag met u mee."
  },

  contact: {
    titel: "Vertel ons over *uw plannen*",
    tekst: "Vragen of opmerkingen? Mail of bel ons gerust, of vul het formulier in.",
    onderwerpen: ["Tuinaanleg", "Overkapping of houtwerk", "Schutting", "Groen voor bedrijven", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 8 bij 12 meter, nieuwe overkapping en gazon"
  }
};
