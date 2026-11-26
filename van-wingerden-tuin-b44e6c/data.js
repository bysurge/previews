// Van Wingerden Tuin en Onderhoud, Gouda. Geen eigen site (domein wijst naar Facebook). Bron: Google-profiel (5,0 uit 2, foto's + 2 reviews).
// Geen logo bekend: leeg.svg zodat alleen de naam in de nav staat. Diensten afgeleid van hun eigen projectfoto's op Google.
window.SITE = {
  naam: "Van Wingerden Tuin en Onderhoud",
  kortNaam: "Van Wingerden",
  vak: "Hovenier",
  plaats: "Gouda",
  logo: "img/leeg.svg", logoVorm: "breed",
  kleuren: { brand: "#2e3f2c", accent: "#a8713f" },
  telefoon: "06 13 33 94 44",
  telefoonIntl: "31613339444",
  waTekst: "Stuur een WhatsApp",
  voetTekst: "Tuinaanleg en onderhoud in Gouda en omgeving. Bestrating, overkappingen, schuttingen en beplanting.",
  google: { score: "5,0", aantal: 2 },

  hero: {
    regels: ["Uw tuin,", "netjes en", "*volgens afspraak.*"],
    tekst: "Tuinaanleg en onderhoud in Gouda en omgeving. Van bestrating en beplanting tot een overkapping met sfeerverlichting.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "45% 50%",
    fotoAlt: "Tuin met borders, haag en kronkelend pad",
    punten: ["Denkt mee", "Flexibel"]
  },

  marquee: ["Tuinaanleg", "Bestrating", "Overkappingen", "Schuttingen", "Tuinverlichting", "Beplanting", "Tuinonderhoud"],

  intro: {
    kicker: "Van Wingerden",
    tekst: "Een tuin die er *netjes* bij ligt, zonder gedoe. Klanten noemen het zelf: alles verloopt volgens afspraak, flexibel en professioneel.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Gouda", label: "En omgeving" },
      { getal: "Aanleg", label: "En onderhoud uit één hand" }
    ]
  },

  diensten: {
    titel: "Van terras tot *overkapping*",
    tekst: "Een greep uit het werk dat we doen. Twijfelt u of we iets doen? Vraag het gerust.",
    items: [
      { naam: "Bestrating", foto: "img/bestrating.jpg", tekst: "Terrassen en paden, strak gelegd, ook met rondingen.",
        punten: ["Terrassen", "Tuinpaden", "Klinkers en tegels"] },
      { naam: "Overkappingen", foto: "img/overkapping.jpg", tekst: "Houten overkappingen en tuinhuizen, als extra buitenkamer.",
        punten: ["Overkappingen", "Tuinhuizen", "Op maat gemaakt"] },
      { naam: "Schuttingen", foto: "img/schutting.jpg", tekst: "Houten schuttingen en erfafscheidingen die jaren meegaan.",
        punten: ["Houten schuttingen", "Erfafscheiding", "Poorten"] },
      { naam: "Tuinverlichting", foto: "img/verlichting.jpg", pos: "50% 55%", tekst: "Sfeerverlichting in de overkapping en langs de schutting, zodat u ook 's avonds buiten zit.",
        punten: ["Wandlampen", "Sfeerverlichting", "Verlichting in de overkapping"] },
      { naam: "Beplanting en onderhoud", foto: "img/beplanting.jpg", tekst: "Nieuwe borders en beplanting, en onderhoud zodat de tuin er netjes bij blijft liggen.",
        punten: ["Borders aanleggen", "Tuinonderhoud", "Voor- en achtertuinen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Recent *werk*",
    tekst: "Tuinen die we aanlegden in Gouda en omgeving.",
    items: [
      { foto: "img/p1.jpg", label: "Tuin met tuinhuis en vijver", sub: "In aanleg" },
      { foto: "img/p2.jpg", label: "Overkapping", sub: "Houtbouw" },
      { foto: "img/p3.jpg", label: "Voortuin", sub: "Bestrating en plantenbakken" },
      { foto: "img/p4.jpg", label: "Tuin bij avond", sub: "Overkapping en verlichting" },
      { foto: "img/p5.jpg", label: "Terras met borders", sub: "Bestrating en beplanting" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Duncan K.", tekst: "Goede ervaring met van wingerden, Alles verliep volgens afspraak en was erg flexibel en denkt professioneel mee. Ik zou dit bedrijf zeker aanraden voor wie zijn tuin netjes wil laten doen. Een aanrader!" },
      { naam: "AG De B.", tekst: "Goed bedrijf, uitstekende service." }
    ]
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Plannen met *uw tuin?*",
    tekst: "Stuur een WhatsApp met een foto van uw tuin, dan denken we met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Bestrating", "Overkapping", "Schutting", "Tuinverlichting", "Beplanting", "Tuinonderhoud"],
    voorbeeld: "Bijvoorbeeld: nieuw terras en een overkapping achter in de tuin"
  }
};
