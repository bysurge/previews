// Bennie Zuthof Dak- en Timmerwerken (Haaksbergen). Bron: dakentimmerwerken.nl (2013) + Google (4,1 / 8, 25-11-2026).
// Alleen eigen foto's van hun site (klein formaat, max 800px). Hun logo is een oranje dakvorm met witte tekst die niet los te gebruiken is:
// plaatshouder verborgen, naam als tekst, oranje accent uit hun logo. Geen reviewblok: weinig en korte reviews (één van familie).
document.head.insertAdjacentHTML("beforeend", "<style>.brand img{display:none!important}</style>");
window.SITE = {
  naam: "Bennie Zuthof Dak- en Timmerwerken",
  kortNaam: "Bennie Zuthof",
  plaats: "Haaksbergen",
  vak: "Dakdekker",
  titelExtra: "Lei-, zink-, lood- en koperwerk in Haaksbergen en Twente",
  logo: "img/leeg.png",
  logoHoogte: 28,
  kleuren: { brand: "#1d2226", accent: "#e0603c" },
  telefoon: "06 23 16 12 67",
  telefoonIntl: "31623161267",
  email: "b.zuthof@dakentimmerwerken.nl",
  adres: ["Stiegert 6", "7482 GC Haaksbergen"],
  google: { score: "4,1", aantal: "8" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dak- en timmerwerken voor kerken, kastelen, landhuizen en woningen. Leien, pannen, zink, koper, lood en goud.",

  hero: {
    regels: ["Vakwerk op", "elk dak."],
    tekst: "Van leien op een landhuis tot een gouden haan op de kerktoren. Bennie Zuthof werkt aan restauratie én nieuwbouw, met leien, dakpannen, zink, koper en lood.",
    foto: "img/hero.jpg", fotoPos: "50% 40%", fotoPosMobiel: "55% 40%",
    fotoAlt: "Nieuwe leien dakkapellen op een woning",
    donker: true,
    punten: ["Sinds 2004", "Meer dan 30 jaar vakervaring", "Veel werk via de Monumentenwacht"]
  },

  marquee: ["Leiwerken", "Pannenwerken", "Zinkwerken", "Koperwerken", "Loodwerken", "Goudwerken", "Timmerwerken", "Restauratie", "Nieuwbouw"],

  intro: {
    kicker: "Bennie Zuthof Dak- en Timmerwerken",
    tekst: "Kerken, kastelen, landhuizen en gewone woningen: wij werken aan daken waar vakmanschap echt telt.",
    stats: [
      { getal: "2004", label: "Eigen bedrijf sinds" },
      { getal: "30+", label: "Jaar ervaring in het vak" },
      { getal: "6", label: "Materialen: lei, pan, zink, koper, lood, goud" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Wat wij doen",
    tekst: "Restauratie en nieuwbouw, voor particulieren, gemeentes, kerkbesturen en landhuiseigenaren.",
    items: [
      { naam: "Leiwerken en dakdekkingen", soort: "Hellend dak", foto: "img/leien.jpg", pos: "50% 50%",
        tekst: "Een compleet dak opbouwen, inclusief isolatie, met leien of dakpannen. Ook complete dakdekking voor platte daken.",
        punten: ["Leien en pannen", "Inclusief isolatie", "Platte daken"] },
      { naam: "Zink-, koper- en loodwerken", soort: "Metaalwerk", foto: "img/zink.jpg", pos: "50% 50%",
        tekst: "Felsbanen en roevendaken leveren en monteren, schoorsteenlood en nieuwe goten. Van dakkapel tot torenspits.",
        punten: ["Felsbanen en roevendak", "Schoorsteenlood", "Nieuwe goten"] },
      { naam: "Timmerwerken", soort: "Restauratie", foto: "img/timmerwerk.jpg", pos: "50% 40%",
        tekst: "Windveren en boeidelen vernieuwen, kozijnen, vensters en staldeuren restaureren en zolders aftimmeren.",
        punten: ["Windveren en boeidelen", "Kozijnen en staldeuren", "Zolders aftimmeren"] }
    ],
    meer: [
      { naam: "Dakrenovaties", tekst: "Platte en hellende daken renoveren." },
      { naam: "Verbouwingen", tekst: "Schuren, woningen en zolders verbouwen." },
      { naam: "Dakkapellen en Velux", tekst: "Dakkapellen en dakramen plaatsen." },
      { naam: "Goudwerken", tekst: "Goudwerk aan torenhanen, bollen en windwijzers." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Referenties",
    titel: "Werk om trots op te zijn",
    tekst: "Een greep uit ons werk aan kerken, landhuizen en woningen.",
    items: [
      { foto: "img/haan.jpg", label: "Gouden haan terug op de toren", sub: "Goudwerken", pos: "50% 40%" },
      { foto: "img/torentje.jpg", label: "Torentje in leien", sub: "Leiwerken", pos: "50% 40%" },
      { foto: "img/koepel.jpg", label: "Koepel in lood", sub: "Loodwerken", pos: "50% 40%" },
      { foto: "img/koper.jpg", label: "Kap in koper", sub: "Koperwerken", pos: "50% 50%" },
      { foto: "img/villa.jpg", label: "Nieuw pannendak", sub: "Pannenwerken", pos: "50% 40%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Eerlijk, goed en professioneel advies, van de eerste vraag tot de laatste lei.",
    stappen: [
      { naam: "Contact", tekst: "Bel, app of mail ons met uw vraag." },
      { naam: "Advies", tekst: "We komen kijken en geven eerlijk advies over materiaal en aanpak." },
      { naam: "Offerte", tekst: "U krijgt een vrijblijvende offerte." },
      { naam: "Vakwerk", tekst: "Uitgevoerd door vakmensen met tientallen jaren ervaring." }
    ]
  },

  over: {
    kicker: "Het bedrijf", navNaam: "Over ons",
    titel: "Dakwerk met historie",
    rol: "Bennie Zuthof, Haaksbergen",
    tekst: [
      "Sinds 2004 werkt Bennie Zuthof Dak- en Timmerwerken aan restauratie en nieuwbouw. Onze vakmensen hebben al meer dan 30 jaar ervaring met timmerwerk, zink-, koper- en loodwerk, leiwerk en dakdekkingen.",
      "We werken veel via de Monumentenwacht. Voor gemeentes, kerkbesturen en landhuiseigenaren hebben we diverse referentieadressen."
    ],
    foto: "img/over.jpg", fotoPos: "50% 40%", fotoAlt: "Aan het werk op een leien dak",
    knop: "Neem contact op"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Een dak dat generaties meegaat?",
    tekst: "Vraag geheel vrijblijvend een offerte aan."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Heeft u een vraag of wilt u een offerte? Bel, app of mail ons, of gebruik het formulier.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Leien of pannen", "Zink / koper / lood", "Timmerwerk", "Dakrenovatie", "Monument of kerk", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de windveren van onze boerderij zijn aan vervanging toe",
    belofte: "U krijgt eerlijk, goed en professioneel advies."
  }
};
