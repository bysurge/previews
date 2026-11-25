// J.N. Bakker Dakwerken (Amsterdam). Bron: jnbdakwerken.nl (sjabloon, weinig tekst) + Google (5,0 / 15, opgehaald 25-11-2026).
// Eigenaar-voornaam staat niet op de eigen site -> niet gebruikt. Adres alleen op Google -> alleen plaats getoond.
window.SITE = {
  naam: "J.N. Bakker Dakwerken",
  kortNaam: "J.N. Bakker Dakwerken",
  plaats: "Amsterdam",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 46,
  kleuren: { brand: "#2a2627", accent: "#b3262b" },
  telefoon: "06 16 44 47 77",
  telefoonIntl: "31616444777",
  waTekst: "App ons",
  email: "info@jnbdakwerken.nl",
  google: { score: "5,0", aantal: "15" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Pannendaken, bitumen daken en lood- en zinkwerk in Amsterdam. Bereikbaar ma t/m vr van 08:00 tot 16:00.",

  hero: {
    regels: ["Daken die", "weer jaren", "mee kunnen."],
    tekst: "Pannendaken, bitumen daken en lood- en zinkwerk in Amsterdam. Snel geholpen, duidelijke afspraken.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Dakkapel met zinkwerk en strak afgewerkt dak in Amsterdam",
    donker: true,
    punten: ["Pannen, bitumen en zink", "Ma t/m vr 08:00-16:00"]
  },

  marquee: ["Pannendaken", "Bitumen daken", "Lood- en zinkwerk", "Dakkapellen", "Dakterrassen", "Zinken dakgoten", "Reparaties"],

  intro: {
    kicker: "J.N. Bakker Dakwerken",
    tekst: "Een dak dat er weer tiptop uitziet en jaren mee kan. Van het dakterras tot het schuurtje, van één reparatie tot een complete dakkapel.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "15", tel: 15, label: "Reviews op Google" },
      { getal: "08-16", label: "Bereikbaar op werkdagen" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Onze specialiteiten",
    tekst: "Twijfelt u of uw klus erbij hoort? Stuur gerust een foto via WhatsApp.",
    items: [
      { naam: "Pannendaken", foto: "img/pannendak.jpg", pos: "50% 50%", soort: "Pannendak",
        tekst: "Pannendaken netjes gelegd, met strakke aansluitingen langs goten en randen.",
        punten: ["Nieuwe pannen", "Reparaties", "Strak afgewerkt"] },
      { naam: "Bitumen daken", foto: "img/plat-dak.jpg", pos: "50% 55%", soort: "Plat dak",
        tekst: "Platte daken met bitumen dakbedekking: van dakterras en uitbouw tot het schuurtje.",
        punten: ["Dakterrassen", "Uitbouw en bijkeuken", "Schuren en bergingen"] },
      { naam: "Lood- en zinkwerk", foto: "img/zinkgoot.jpg", pos: "50% 45%", soort: "Zinkwerk",
        tekst: "Zinken dakgoten, daktrims en loodwerk rond het dak, vakkundig gemaakt.",
        punten: ["Zinken dakgoten", "Daktrims", "Loodwerk"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Werk", kicker: "Ons werk",
    titel: "Gewoon goed dakwerk",
    tekst: "Een greep uit ons werk in en rond Amsterdam.",
    items: [
      { foto: "img/plat-dak-stad.jpg", label: "Plat dak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 60%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel", pos: "50% 40%" },
      { foto: "img/goot-lang.jpg", label: "Zinken dakgoot", pos: "50% 50%" },
      { foto: "img/pannen-3.jpg", label: "Pannendak", pos: "50% 50%" },
      { foto: "img/zinkwerk.jpg", label: "Zinkwerk", pos: "50% 50%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Goede service, fijne communicatie en top kwaliteit geleverd. Ons dakterras en het dak van het schuurtje zien er weer tiptop uit. Ze kunnen weer jaren mee.", naam: "Rianne van der L." },
      { tekst: "De service was erg goed! We werden snel geholpen en de communicatie was erg duidelijk en voor een goed prijsje.", naam: "Thimo van der Z." },
      { tekst: "Goede en nette service en heeft de reparatie snel uitgevoerd. Echt een aanrader", naam: "Tim T." },
      { tekst: "Hier onze bijkeuken en dakkapel gedaan. Uitstekend werk geleverd.", naam: "Daniel D." }
    ]
  },

  band: {
    foto: "img/aan-het-werk.jpg", fotoPos: "50% 50%",
    titel: "Klus aan uw dak?",
    tekst: "Bel, mail of app een foto. Wij laten snel van ons horen."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat er aan uw dak moet gebeuren, of app direct een foto. Bereikbaar op werkdagen van 08:00 tot 16:00.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Plat dak / bitumen", "Lood- en zinkwerk", "Dakgoot", "Reparatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze uitbouw moet opnieuw, ongeveer 15 m²",
    belofte: "U krijgt snel een duidelijke reactie."
  }
};
