// Coni Daktechnieken (Den Haag/Rijswijk). Eigen site werkt niet; alles van Google (5,0 / 3, opgehaald 25-11-2026). Zie content.md.
// Alle foto's van hun eigen Google-profiel. Geen logo: tekst-woordmerk. Diensten alleen wat op de foto's te zien is.
window.SITE = {
  naam: "Coni Daktechnieken",
  plaats: "Den Haag",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Den Haag en Rijswijk",
  logo: "img/logo.svg",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.svg",
  logoWit: "img/logo-wit.svg",
  logoHoogte: 40,
  kleuren: { brand: "#172029", accent: "#4f86a8" },
  telefoon: "06 40 01 09 16",
  telefoonIntl: "31640010916",
  waTekst: "WhatsApp",
  google: { score: "5,0", aantal: "3" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Platte daken, dakisolatie, zinkwerk en pannendaken in Den Haag, Rijswijk en omgeving.",

  hero: {
    regels: ["Daken die", "jaren", "droog blijven."],
    tekst: "Platte daken, isolatie, zinkwerk en pannendaken: Coni Daktechnieken werkt strak, netjes en met oog voor detail.",
    foto: "img/hero.jpg", fotoPos: "50% 45%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 50%",
    fotoAlt: "Woning met pannendak en dakkapellen",
    donker: true,
    punten: ["Plat en hellend dak", "Zinkwerk op maat", "5,0 op Google"]
  },

  marquee: ["Platte daken", "Bitumen", "Dakisolatie", "Zinkwerk", "Dakgoten", "Pannendaken", "Dakreparatie"],

  intro: {
    kicker: "Coni Daktechnieken",
    tekst: "Van de isolatie onder uw dak tot de zinken rand erlangs: wij zorgen dat elk detail klopt, zodat uw dak jaren meegaat.",
    stats: [
      { getal: "5,0", label: "Op Google" },
      { getal: "Plat", label: "Bitumen dakbedekking en isolatie" },
      { getal: "Hellend", label: "Pannendaken en dakgoten" },
      { getal: "Zink", label: "Dakranden en goten op maat" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Wat wij doen",
    tekst: "Alles voor een droog en goed geïsoleerd dak.",
    items: [
      { naam: "Platte daken", foto: "img/plat-dak.jpg", pos: "50% 50%", soort: "Bitumen",
        tekst: "Nieuwe bitumen dakbedekking op woningen, aanbouwen en garages, strak gelegd tot in de hoeken.",
        punten: ["Nieuw of vervangen", "Aanbouw en garage", "Strak afgewerkte randen"] },
      { naam: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 50%", soort: "Warm dak",
        tekst: "Isolatieplaten onder de nieuwe dakbedekking: een warmer huis en een lagere energierekening.",
        punten: ["Isolatie onder bitumen", "Nieuwe onderlaag"] },
      { naam: "Zinkwerk en goten", foto: "img/zinkwerk.jpg", pos: "50% 50%", soort: "Op maat",
        tekst: "Zinken dakranden en goten langs het pannendak, op maat gemaakt en waterdicht aangesloten.",
        punten: ["Zinken dakranden", "Dakgoten", "Aansluiting op pannendak"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit onze klussen in Den Haag en omgeving.",
    items: [
      { foto: "img/dakrand.jpg", label: "Plat dak langs het pannendak", pos: "50% 40%" },
      { foto: "img/dakgoot.jpg", label: "Goot en dakrand", pos: "50% 50%" },
      { foto: "img/bitumen.jpg", label: "Nieuwe bitumen dakbedekking", pos: "50% 50%" },
      { foto: "img/plat-dak-2.jpg", label: "Plat dak met ontluchting", pos: "50% 50%" },
      { foto: "img/hoogwerker.jpg", label: "Met de hoogwerker aan het werk", pos: "50% 40%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Duidelijke afspraken en netjes werk.",
    foto: "img/isolatie.jpg", fotoPos: "50% 50%", fotoAlt: "Isolatie en onderlaag op een plat dak",
    stappen: [
      { naam: "Contact", tekst: "Bel of app een foto van uw dak." },
      { naam: "Bekijken", tekst: "We komen kijken en adviseren wat nodig is." },
      { naam: "Offerte", tekst: "U krijgt een duidelijke prijs, zonder verrassingen." },
      { naam: "Vakwerk", tekst: "Strak gelegd en netjes opgeruimd." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Oog voor detail, op elk dak",
    rol: "Coni Daktechnieken",
    tekst: [
      "Coni Daktechnieken werkt aan platte en hellende daken in Den Haag, Rijswijk en omgeving. Van isolatie en bitumen tot zinken dakranden en goten.",
      "Kort contact, eerlijk advies en werk waar u jaren op kunt bouwen. Bel of app gerust met uw vraag."
    ],
    foto: "img/dakgoot.jpg", fotoPos: "50% 50%", fotoAlt: "Zinken goot langs een pannendak",
    knop: "Stuur een WhatsApp"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw dak?",
    tekst: "App een foto van uw dak en vraag vrijblijvend een offerte aan."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat er moet gebeuren, of app direct een foto.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Isolatie", "Zinkwerk", "Dakgoot", "Pannendak", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze aanbouw lekt",
    belofte: "Vrijblijvend en duidelijk."
  }
};
