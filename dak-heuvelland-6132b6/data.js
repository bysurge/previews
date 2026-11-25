// Dak onderhoud heuvelland (Maastricht). Bron: dakonderhoudheuvelland.nl (one-pager, weinig info) + Google (5,0 / 11, opgehaald 25-11-2026).
// Adres van Google. Geen voornaam op eigen site (Google-review noemt "Björn", niet gebruikt). Stockfoto's van hun site niet gebruikt;
// alleen hun eigen WhatsApp-projectfoto's + Google-foto's. Dakgoten/schoorsteen komen uit de Google-reviews.
window.SITE = {
  naam: "Dak onderhoud Heuvelland",
  kortNaam: "Dakonderhoud Heuvelland",
  plaats: "Maastricht",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Maastricht en het Heuvelland",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoHoogte: 38,
  kleuren: { brand: "#1d1e21", accent: "#b23a2e" },
  telefoon: "06 23 17 34 91",
  telefoonIntl: "31623173491",
  waTekst: "App ons",
  email: "dakonderhoudheuvelland@gmail.com",
  adres: ["Keizer Ottostraat 5", "6226 VN Maastricht"],
  google: { score: "5,0", aantal: "11" },
  ctaTekst: "Vraag een inspectie aan",
  navCta: "Inspectie",
  voetTekst: "Dakreparatie, lekkage en renovatie in Maastricht en omgeving. Uw dak in veilige handen.",

  hero: {
    regels: ["Sterk in dakwerk,", "solide", "in service."],
    tekst: "Reparatie, lekkage of een complete renovatie: wij zorgen dat uw dak weer jaren goed is. Vrijblijvende inspectie en een transparante offerte.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "78% 45%",
    fotoAlt: "Woning met een volledig vernieuwd pannendak en dakkapel",
    donker: true,
    punten: ["Vrijblijvende inspectie", "Transparante offerte", "5,0 op Google"]
  },

  marquee: ["Dakreparatie", "Daklekkage", "Dakrenovatie", "Pannendaken", "Platte daken", "Dakkapellen", "Dakgoten", "Schoorstenen"],

  intro: {
    kicker: "Dak onderhoud Heuvelland",
    tekst: "Een ervaren dakdekkersbedrijf dat staat voor vakmanschap en betrouwbaarheid. Wij bouwen vertrouwen, één dak tegelijk.",
    stats: [
      { getal: "5,0", label: "Gemiddeld uit 11 Google-reviews" },
      { getal: "Eerlijk", label: "Prijs en advies, volgens klanten" },
      { getal: "Helder", label: "Transparante offerte, zonder verrassingen" },
      { getal: "Plat & schuin", label: "Voor elk type dak" }
    ]
  },

  diensten: {
    knop: "Neem contact op",
    titel: "Wat wij voor uw dak doen",
    tekst: "Van een kleine reparatie tot een complete renovatie: wij werken met oog voor detail.",
    items: [
      { naam: "Dakreparatie", foto: "img/doorvoer.jpg", pos: "50% 55%", soort: "Schade en slijtage",
        tekst: "Snelle en efficiënte reparaties bij schade en slijtage aan uw dak.",
        punten: ["Plat en schuin dak", "Snel ingepland", "Netjes afgewerkt"] },
      { naam: "Daklekkage", foto: "img/plat-dak.jpg", pos: "50% 50%", soort: "Snel verholpen",
        tekst: "Wij verhelpen lekkages snel en voorkomen verdere schade aan uw woning.",
        punten: ["Oorzaak opgespoord", "Duurzaam hersteld", "Verdere schade voorkomen"] },
      { naam: "Dakrenovatie", foto: "img/pannen-leggen.jpg", pos: "50% 50%", soort: "Als nieuw",
        tekst: "Wij vernieuwen uw dak voor een duurzaam resultaat, van de panlatten tot de laatste pan.",
        punten: ["Nieuwe pannen en panlatten", "Dakkapellen meegenomen", "Duurzaam resultaat"] }
    ],
    meer: [
      { naam: "Dakgoten", tekst: "Nieuwe zinken dakgoten en afvoerpijpen." },
      { naam: "Schoorstenen", tekst: "Reparatie van schoorsteen en aansluitingen." },
      { naam: "Platte daken", tekst: "Nieuwe dakbedekking, strak afgewerkt." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken in Maastricht en omgeving",
    tekst: "Een greep uit ons werk.",
    items: [
      { foto: "img/avond.jpg", label: "Dakkapellen en pannendak", sub: "Vakwerk tot in de details", pos: "50% 45%" },
      { foto: "img/dakkapel.jpg", label: "Nieuwe dakkapel", pos: "50% 50%" },
      { foto: "img/pannendak.jpg", label: "Pannendak vernieuwd", pos: "50% 50%" },
      { foto: "img/dakkapel-rolluik.jpg", label: "Dakkapel met rolluik", pos: "50% 50%" },
      { foto: "img/bungalow.jpg", label: "Nieuw dak op een bungalow", pos: "50% 45%" }
    ]
  },

  werkwijze: {
    titel: "Onze werkwijze",
    tekst: "Duidelijk advies en een transparante offerte, zonder verrassingen.",
    foto: "img/herenhuis.jpg", fotoPos: "50% 40%", fotoAlt: "Herenhuis met nieuwe dakkapellen",
    stappen: [
      { naam: "Contact en inspectie", tekst: "Neem contact op, dan plannen we een vrijblijvende dakinspectie." },
      { naam: "Advies en offerte", tekst: "U krijgt duidelijk advies en een transparante offerte zonder verrassingen." },
      { naam: "Uitvoering", tekst: "We werken snel en zorgvuldig, met oog voor kwaliteit en veiligheid." },
      { naam: "Netjes opgeleverd", tekst: "We ruimen alles op en laten uw woning netjes achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Top werk geleverd met het vervangen van onze dakgoten en repareren van onze schoorsteen. Goed, snel en duidelijk contact. Geeft een eerlijke prijs voor de werkzaamheden. Laat alles netjes achter.", naam: "DenC B." },
      { tekst: "Kwam eerst alles netjes uitleggen en heeft zich aan zijn woord gehouden. Prijs kwaliteit is uitstekend. Een harde werker die doet wat hij zegt en zegt wat hij doet.", naam: "Mel E." },
      { tekst: "Twee weken geleden hebben ze bij ons twee daken opgeknapt. Top werk geleverd en denken heel goed mee met ons. … Zeker aan te bevelen en reageren altijd netjes en snel!", naam: "Tom" }
    ]
  },

  band: {
    foto: "img/achterkant.jpg", fotoPos: "50% 40%",
    titel: "Benieuwd hoe uw dak ervoor staat?",
    tekst: "Plan een vrijblijvende dakinspectie. U krijgt eerlijk advies en een duidelijke offerte."
  },

  contact: {
    titel: "Vraag een vrijblijvende inspectie aan",
    tekst: "Vertel kort om wat voor dak het gaat, of app direct een foto.",
    formTitel: "Inspectie aanvragen",
    onderwerpen: ["Plat dak", "Schuin dak", "Lekkage", "Dakgoten", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: er ligt een pan scheef en bij de schoorsteen komt water binnen",
    belofte: "Vrijblijvend advies en een transparante offerte."
  }
};
