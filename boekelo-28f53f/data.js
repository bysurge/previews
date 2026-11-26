// Hoveniersbedrijf Boekelo, Utrecht (Veldhuizenlaan 63). Geen eigen site; alles van Google (5,0 met 5 reviews, foto's van hun profiel).
// Review van "Lilian boekelo" niet gebruikt (zelfde achternaam als het bedrijf). Diensten afgeleid van hun eigen projectfoto's, zonder claims.
window.SITE = {
  naam: "Hoveniersbedrijf Boekelo",
  kortNaam: "Boekelo",
  vak: "Hovenier",
  plaats: "Utrecht",
  logo: "img/logo.png",
  logoOpFoto: "img/logo.png",
  logoWit: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#2c4030", accent: "#9a9a1c" },
  telefoon: "06 51 46 09 09",
  telefoonIntl: "31651460909",
  waTekst: "Stuur een WhatsApp",
  adres: ["Veldhuizenlaan 63", "3454 EC Utrecht"],
  google: { score: "5,0", aantal: 5 },
  voetTekst: "Hoveniersbedrijf in Utrecht. Tuinaanleg, bestrating, schuttingen en gazons.",

  hero: {
    regels: ["Uw tuin,", "met zorg", "*aangelegd.*"],
    tekst: "Van een nieuw terras tot een complete tuin: Hoveniersbedrijf Boekelo uit Utrecht legt het netjes en degelijk voor u aan.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "50% 60%",
    fotoAlt: "Rond terras met tuinset tussen borders en potten",
    badge: "5,0 op Google",
    punten: ["Uit Utrecht", "Tuinaanleg en bestrating"]
  },

  marquee: ["Tuinaanleg", "Terrassen", "Bestrating", "Schuttingen", "Graszoden", "Borders en beplanting"],

  intro: {
    kicker: "Over Boekelo",
    tekst: "Een tuin waar u *graag buiten zit.* Hoveniersbedrijf Boekelo legt terrassen, paden, gazons en schuttingen aan in Utrecht en omgeving."
  },

  diensten: {
    titel: "Wat we voor uw tuin *doen*",
    tekst: "Een greep uit het werk dat we het meest doen. Vraag gerust wat er voor uw tuin mogelijk is.",
    items: [
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", tekst: "Een nieuwe tuin van begin tot eind: grondwerk, paden, beplanting en een plek om te zitten.",
        punten: ["Nieuwe tuinen", "Paden en borders", "Grondwerk"] },
      { naam: "Terrassen en bestrating", foto: "img/terras.jpg", pos: "50% 60%", tekst: "Een strak terras of pad dat jaren meegaat, gelegd op een goede ondergrond.",
        punten: ["Terrassen", "Tuinpaden", "Sierbestrating"] },
      { naam: "Schuttingen en gazon", foto: "img/gazon.jpg", pos: "50% 60%", tekst: "Houten schuttingen voor privacy, en een strak nieuw gazon van graszoden.",
        punten: ["Houten schuttingen", "Graszoden", "Afscheidingen"] },
      { naam: "Bomen", foto: "img/boom.jpg", pos: "50% 30%", tekst: "Ook voor werk in de boom kunt u bij ons terecht.",
        punten: ["Snoeien", "Werk op hoogte"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk",
    titel: "Tuinen die we *aanlegden*",
    tekst: "Een greep uit tuinen in Utrecht en omgeving.",
    items: [
      { foto: "img/hero.jpg", label: "Rond terras tussen de borders", sub: "Aanleg en bestrating", pos: "50% 60%" },
      { foto: "img/stadstuin.jpg", label: "Stadstuin met schutting", sub: "Aanleg" },
      { foto: "img/bestrating.jpg", label: "Terras met cirkel", sub: "Bestrating" },
      { foto: "img/trap.jpg", label: "Houten trap en vlonder", sub: "Houtwerk" },
      { foto: "img/grondwerk.jpg", label: "Groot terrein in grind", sub: "Grondwerk" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Andre M.", tekst: "Professioneel en sympathiek." }
    ]
  },

  band: {
    foto: "img/terras.jpg", fotoPos: "50% 60%",
    titel: "Zin in een tuin om *buiten te leven?*",
    tekst: "Stuur een WhatsApp met een foto van uw tuin, dan denken we graag met u mee."
  },

  contact: {
    titel: "Vertel ons over *uw tuin*",
    tekst: "Vertel kort wat u voor ogen heeft. We nemen snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinaanleg", "Terras of bestrating", "Schutting", "Gazon", "Bomen", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 6 bij 10 meter, nieuw terras en een schutting"
  }
};
