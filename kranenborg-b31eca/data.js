// Gebr. Kranenborg Dakdekkers (Garnwerd, Groningen). Gebouwd 25-11-2026 door helper D.
// Eigen site (2015, boxed WordPress) heeft alleen kleine foto's (290px); hero = Google-foto g04 (eigen rode bus bij een klus).
// Logo = woordmerk nagemaakt als SVG (origineel is maar 225px breed). Geen stockfoto's.
window.SITE = {
  naam: "Gebr. Kranenborg Dakdekkers",
  kortNaam: "Gebr. Kranenborg",
  plaats: "Groningen",
  vak: "Dakdekker",
  logo: "img/logo.svg", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.svg", logoOpFoto: "img/logo-op-foto.svg", logoHoogte: 40,
  kleuren: { brand: "#231c1b", accent: "#c8352d" },
  telefoon: "06 1064 5257",
  telefoonIntl: "31610645257",
  email: "info@gebr-kranenborg.nl",
  adres: ["Hunzeweg 33", "9893 PB Garnwerd"],
  waTekst: "App Jeroen",
  waContact: "App Jeroen een foto van uw dak",
  google: { score: "4,3", aantal: "21" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Dakdekkersbedrijf in Groningen sinds 1955. Hellende daken, dakisolatie, dakramen, goten en zonnepanelen.",

  hero: {
    regels: ["Hellende daken,", "al sinds 1955."],
    tekst: "Nieuwe pannen, isolatie, dakramen of een compleet nieuw dak. Voor particulieren, aannemers en woningcorporaties in Groningen en omstreken.",
    foto: "img/hero.jpg", fotoPos: "50% 40%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Bus van Gebr. Kranenborg bij een woning in de steigers voor een nieuw pannendak",
    donker: true,
    punten: ["15 jaar garantie", "KOMO-gecertificeerd", "Meer dan 50 jaar ervaring"]
  },

  marquee: ["Dakpannen", "Dakrenovatie", "Dakisolatie", "Dakramen", "Zink en koper", "Boeidelen", "Timmerwerk", "Zonnepanelen in het dak", "Nieuwbouw"],

  intro: {
    kicker: "Gebr. Kranenborg",
    tekst: "Al meer dan 50 jaar leggen we daken in Groningen. Met eigen kraan, pannenliften en vakmensen die ook het timmerwerk doen. Duidelijke afspraken, een strakke planning en alles netjes opgeruimd na afloop.",
    stats: [
      { getal: "1955", label: "Opgericht" },
      { getal: "15 jr", label: "Garantie op ons werk" },
      { getal: "24 mln", label: "Dakpannen gelegd tot 2016" },
      { getal: "4,3", label: "Gemiddeld op Google" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en aangesloten bij de branche",
  keurmerken: [
    { naam: "KOMO", sub: "Procescertificaat" },
    { naam: "VCA", sub: "Veilig werken op hoogte" },
    { naam: "Dakmeester", sub: "Brancheorganisatie" },
    { naam: "Het Hellende Dak", sub: "Brancheorganisatie" }
  ],

  diensten: {
    titel: "Alles op en rond het dak",
    tekst: "Van een nieuw pannendak tot de goten, boeidelen en dakramen. Laat u adviseren welke oplossing het beste bij uw woning past.",
    items: [
      { naam: "Dakpannen", soort: "Monier en Koramic", foto: "img/pannen-leggen.jpg", pos: "50% 40%",
        tekst: "Keramische of betonnen pannen: we helpen u kiezen welke dakpan het beste bij uw woning past en leggen hem vakkundig.",
        punten: ["Nieuwe pannen", "Advies over het type pan", "Ook herstel in oude stijl"] },
      { naam: "Dakrenovatie", soort: "Bestaande bouw", foto: "img/hoogkerk.jpg", pos: "50% 50%",
        tekst: "Van een simpele montageklus tot een compleet vernieuwd dak, met isolatie, nieuwe goten en boeidelen.",
        punten: ["Dak vervangen", "Met isolatie", "Goten en windveren vernieuwen"] },
      { naam: "Dakisolatie", soort: "Lagere stookkosten", foto: "img/kraan-pannen.jpg", pos: "50% 50%",
        tekst: "Zo'n 30% van de warmte verdwijnt door een ongeïsoleerd dak. We isoleerden in tien jaar meer dan 100.000 m² dak.",
        punten: ["Hellend en plat", "Na-isoleren", "Advies op maat"] },
      { naam: "Zonnepanelen in het dak", soort: "Indak-systeem", foto: "img/indak.jpg", pos: "50% 50%",
        tekst: "Zonnepanelen als onderdeel van het dak zelf, in plaats van erbovenop. Zo bespaart u op pannen én wekt u stroom op.",
        punten: ["Indak-systemen", "Ook tussen de pannen", "Nul-op-de-meter woningen"] },
      { naam: "Nieuwbouw", soort: "Complete aanleg", foto: "img/noorderbinnensingel.jpg", pos: "50% 50%",
        tekst: "Bij nieuwbouw nemen we het hele dak voor onze rekening: pannen, dakramen, timmerwerk, zinkwerk en boeidelen.",
        punten: ["Eigen kraan en liften", "Strakke planning", "Voor aannemers en corporaties"] },
      { naam: "Dakramen en goten", soort: "Velux, zink en koper", foto: "img/vakman.jpg", pos: "50% 30%",
        tekst: "Dakramen plaatsen of vervangen en aftimmeren, en nieuwe dakgoten van zink of koper.",
        punten: ["Dakramen plaatsen", "Zinken en koperen goten", "Boeidelen vervangen"] }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Duidelijkheid voor u als opdrachtgever, en voor de bewoners.",
    stappen: [
      { naam: "Advies", tekst: "We komen kijken en adviseren welke oplossing het beste bij uw dak past." },
      { naam: "Duidelijke offerte", tekst: "Heldere afspraken, zodat u precies weet waar u aan toe bent." },
      { naam: "Strakke planning", tekst: "U weet wanneer we beginnen en wanneer we weer weg zijn." },
      { naam: "Netjes opgeleverd", tekst: "Onder KOMO-certificaat, met 15 jaar garantie. Afval opgeruimd." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "De mannen van de gebr. Kranenborg hebben de aansluiting van het hellende dak en het vlakke dak vakkundig hersteld. De constructie is nu beter en steviger dan het was. De lekkage is nu verleden tijd. … De communicatie met het bedrijf met Jeroen, verliep altijd prettig, snel en soepel.", naam: "Gert T." },
      { tekst: "Wat een fijn bedrijf is dit! Ze hebben mijn vrijstaande jaren 30 huis voorzien van een volledig nieuw geïsoleerd dak. De prijs was goed de werkzaamheden liepen erg gesmeerd. … Dikke pluim!", naam: "Wouter L." },
      { tekst: "Ik had gebeld omdat we een nokvorst kwijt zijn geraakt tijdens een storm. Gebr. Kranenborg hadden toevallig precies de goede liggen en kwamen hem ook nog eens langsbrengen! … Super aardig en behulpzaam.", naam: "Jessica d. B." }
    ]
  },

  werkgebied: {
    titel: "Groningen en omstreken",
    tekst: "Vanuit Garnwerd werken we in de stad en de provincie Groningen, bijvoorbeeld in Haren, Glimmen, Hoogkerk, Loppersum en Wildervank."
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 30%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Bel of app Jeroen voor advies op maat. Vrijblijvend, en met 15 jaar garantie op ons werk."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel, app of mail ons, of laat hieronder een bericht achter. We denken graag met u mee.",
    formTitel: "Aanvraag",
    onderwerpen: ["Nieuw dak", "Dakrenovatie", "Dakisolatie", "Dakramen", "Goten", "Zonnepanelen", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons dak is uit de jaren 70 en we willen het laten isoleren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
