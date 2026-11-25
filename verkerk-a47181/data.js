// Verkerk Dakwerk (Druten). Geen eigen site. Bron: Google-profiel (5,0 / 6, reviews ca. 4 jaar oud) + visitekaartje op Google
// ("Dakbedekking & zink", 06 14062145, verkerkdakwerk@gmail.com). Alleen eigen Google-foto's. Zie content.md.
window.SITE = {
  naam: "Verkerk Dakwerk",
  kortNaam: "Verkerk",
  plaats: "Druten",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 34,
  kleuren: { brand: "#25292a", accent: "#5f9a3a" },
  telefoon: "06 14 06 21 45",
  telefoonIntl: "31614062145",
  waTekst: "App ons",
  waContact: "Stuur een foto van uw dak",
  email: "verkerkdakwerk@gmail.com",
  google: { score: "5,0", aantal: "6" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakbedekking en zinkwerk vanuit Druten. Platte daken, renovatie en reparatie.",

  hero: {
    regels: ["Dakbedekking", "en zink,", "strak gelegd."],
    tekst: "Platte daken, renovatie en zinkwerk vanuit Druten. Van een reparatie tot een compleet nieuw dak, met een duidelijke offerte vooraf.",
    foto: "img/plat-dak-riet.jpg", fotoPos: "50% 60%", fotoPosMobiel: "40% 60%",
    fotoAlt: "Nieuw plat dak naast een rieten kap",
    donker: true,
    punten: ["Duidelijke offerte", "Dakbedekking en zink", "5,0 op Google"]
  },

  marquee: ["Bitumen dakbedekking", "Platte daken", "Dakrenovatie", "Isolatie", "Zinkwerk", "Zinken goten", "Reparaties", "Dakterrassen"],

  intro: {
    kicker: "Verkerk Dakwerk",
    tekst: "Goed contact, een duidelijke offerte en vakkundig werk. Zo omschrijven klanten ons. Van het eerste bericht tot de laatste naad.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "6", label: "Reviews op Google, allemaal 5 sterren" },
      { getal: "Druten", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Van een lekkend schuurdak tot een compleet gerenoveerd plat dak.",
    items: [
      { naam: "Bitumen dakbedekking", foto: "img/bitumen-dak.jpg", pos: "50% 55%", tekst: "Nieuwe dakbedekking op uw plat dak, garage, aanbouw of chalet. Strak gelegd en netjes afgewerkt.",
        punten: ["Platte daken en aanbouwen", "Garages en chalets", "Dakterrassen"] },
      { naam: "Dakrenovatie", foto: "img/sloop-isolatie.jpg", pos: "50% 50%", tekst: "Is uw dak op? Dan halen we de oude bedekking eraf, herstellen de ondergrond en leggen er een nieuw dak op.",
        punten: ["Oude bedekking verwijderen", "Ondergrond en balklaag herstellen", "Isolatie meenemen"], soort: "Dakrenovatie" },
      { naam: "Zinkwerk", foto: "img/zinken-goot.jpg", pos: "50% 50%", tekst: "Zinken goten, nokken en aansluitingen, op maat gemaakt en waterdicht afgewerkt.",
        punten: ["Zinken goten", "Nokken en hoeken", "Aansluitingen en afwerking"] }
    ],
    meer: [
      { naam: "Reparaties", tekst: "Lekkage of een beschadigde plek? We komen kijken en repareren het vakkundig." },
      { naam: "Shingles vervangen", tekst: "Oude dakshingles eraf en vervangen door een strakke laag bitumen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van sloop tot strak dak",
    tekst: "Een greep uit ons werk.",
    items: [
      { foto: "img/dakterras.jpg", label: "Plat dak met opstaande randen", sub: "Nieuwe dakbedekking", pos: "50% 55%" },
      { foto: "img/zink-nok.jpg", label: "Zinken nok", sub: "Zinkwerk", pos: "50% 40%" },
      { foto: "img/renovatie-open.jpg", label: "Dakrenovatie", sub: "Onderweg", pos: "50% 50%" },
      { foto: "img/zink-hoek.jpg", label: "Zinken aansluiting", sub: "Op maat gemaakt", pos: "50% 50%" },
      { foto: "img/balklaag.jpg", label: "Nieuwe ondergrond", sub: "Renovatie", pos: "50% 50%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Wij zijn uiterst tevreden, oude bitumen en dakshingles verwijderd en vervangen door een mooie nieuwe strakke laag grijs bitumen op ons chalet. Vakwerk!", naam: "Boudewijn" },
      { tekst: "Goed contact. Duidelijke offerte. Snelle en vakkundige vervanging en reparatie van het dak.", naam: "Wigo van R." },
      { tekst: "Ervaren professional, contact en uitgevoerde werkzaamheden is tip top.", naam: "Bart A." }
    ]
  },

  band: {
    foto: "img/bitumen-dak.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Stuur een foto of vraag een offerte aan. U hoort snel van ons."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat u wilt laten doen, of stuur direct een WhatsApp met een foto van uw dak.",
    voorbeeld: "Bijvoorbeeld: garagedak lekt, ongeveer 20 m²",
    onderwerpen: ["Nieuwe dakbedekking", "Dakrenovatie", "Zinkwerk", "Reparatie of lekkage", "Iets anders"]
  }
};
