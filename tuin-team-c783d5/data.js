// Tuin-Team (Geldrop, Eindhoven e.o.). Bron: tuin-team.nl (26-11-2026, Youvia) + Google (4,3 uit 9).
// Foto's: alleen eigen foto's van hun site. Geen logo op hun site -> naam als tekst (img/leeg.png als lege logo-plek).
// Eigenaar: Joan van Dijk (contactpagina). E-mail op site: info@tuin-team.nl (privacyverklaring noemt info@boomtuin.nl).
window.SITE = {
  naam: "Tuin-Team",
  kortNaam: "Tuin-Team",
  vak: "Hovenier",
  plaats: "Eindhoven",
  logo: "img/leeg.png",
  logoWit: "img/leeg.png",
  logoOpFoto: "img/leeg.png",
  logoMetNaam: true,
  logoVorm: "breed",
  kleuren: { brand: "#223d2b", accent: "#9a6a35" },
  telefoon: "06 51 81 43 35",
  telefoonIntl: "31651814335",
  waTekst: "App Joan",
  email: "info@tuin-team.nl",
  adres: ["Hoog Geldrop 130", "5663 BH Geldrop"],
  kvk: "17070994",
  google: { score: "4,3", aantal: 9 },
  voetTekst: "Ontwerpers, hoveniers, stratenmakers, vijverbouwers, timmermannen en boomverzorgers in Eindhoven en omstreken. Voor een mooie tuin.",

  hero: {
    regels: ["Een mooie tuin", "in Eindhoven", "*en omstreken.*"],
    tekst: "Tuinontwerp, aanleg en onderhoud, natuurlijke zwemvijvers, overkappingen op maat en boomonderhoud. Alles in één hand.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "35% 55%", donker: true,
    fotoAlt: "Natuurlijke zwemvijver met vlonder voor een moderne tuinkamer",
    punten: ["Vooraf afgesproken prijs", "Vrijblijvende afspraak"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Natuurlijke zwemvijvers", "Vijvers", "Overkappingen op maat", "Boomonderhoud", "Bomen rooien en uitfrezen", "Leibomen"],

  intro: {
    kicker: "Tuin-Team",
    tekst: "Eén team voor *de hele tuin.* Ontwerpers, hoveniers, stratenmakers, vijverbouwers, timmermannen en boomverzorgers staan klaar, zodat u alleen nog hoeft te genieten.",
    stats: [
      { getal: "4,3", label: "Op Google" },
      { getal: "1 team", label: "Ontwerp tot boomverzorging" },
      { getal: "Vooraf", label: "Een afgesproken prijs" },
      { getal: "Chloorvrij", label: "Natuurlijke zwemvijvers" }
    ]
  },

  diensten: {
    titel: "Alles voor *een mooie tuin*",
    tekst: "Originele oplossingen die zeker niet meteen de hoofdprijs kosten. Binnen enkele weken geniet u van uw nieuwe tuin.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "Samen brengen we uw tuinwensen haarscherp in beeld: uw stijl, de sfeer van het huis, de vorm en ligging van het perceel en uw budget. Het ontwerp presenteren we u persoonlijk.",
        punten: ["Vrijblijvende afspraak", "Ontwerp op maat", "Persoonlijke presentatie"] },
      { naam: "Tuinaanleg en onderhoud", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "We beginnen altijd met een ontwerp en plan van aanpak, in nauw overleg met u. Daarna gaan we aan de slag tegen een vooraf afgesproken prijs. Onderhoud kan incidenteel, periodiek of compleet.",
        punten: ["Plan van aanpak", "Vooraf afgesproken prijs", "Deel- of compleet onderhoud"] },
      { naam: "(Zwem)vijvers", foto: "img/vijver.jpg", pos: "50% 50%", tekst: "Een vijver, of een natuurlijke zwemvijver zonder chloor. Met een lava-/plantenfilter (helofytenfilter) krijgt u fris, kraakhelder zwemwater met een minimum aan techniek en onderhoud.",
        punten: ["Natuurlijke zwemvijver", "Helofytenfilter", "Bekijk een gerealiseerde vijver"] },
      { naam: "Overkappingen op maat", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Een veranda aan huis, bijvoorbeeld met lichtstraat, of een vrijstaande overkapping met moderne uitstraling. Uit te breiden met glazen schuifwanden, ramen, deuren of een dakdoorvoer voor de houtkachel.",
        punten: ["Europees Douglas hout", "Veranda of vrijstaand", "Glazen schuifwanden"] },
      { naam: "Boomonderhoud", foto: "img/boom.jpg", pos: "50% 50%", tekst: "Een nieuwe boom planten, vakkundig snoeien voor meer licht, leibomen voor privacy, of een boom rooien. Daarna frezen we de stronk en wortels weg.",
        punten: ["Snoeien en rooien", "Leibomen planten", "Stronken uitfrezen"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Ons werk",
    titel: "Tuinen van *Tuin-Team*",
    tekst: "Een greep uit tuinen, vijvers en overkappingen die we maakten. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/zwemvijver.jpg", label: "Zwemvijver bij een moderne woning", sub: "Zwemvijver" },
      { foto: "img/border.jpg", label: "Bloeiende border", sub: "Beplanting" },
      { foto: "img/zwemvijver2.jpg", label: "Strakke zwemvijver met vlonder", sub: "Zwemvijver" },
      { foto: "img/veranda.jpg", label: "Overkapping met loungehoek", sub: "Overkapping" },
      { foto: "img/tuin.jpg", label: "Groene tuin onder de boom", sub: "Aanleg" },
      { foto: "img/overkapping-bouw.jpg", label: "Overkapping in aanbouw", sub: "Timmerwerk" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Geert-Jan van G.", tekst: "Vriendelijke alleskunners... Geen moeite teveel, geen andere aannemers voor metselwerk of electra, alles in 1 hand! We hebben nu een comfortabele tuin met weinig onderhoud en zelfs automatische beregening! Mooi timmerwerk." },
      { naam: "Bas C.", sterren: 4, tekst: "Deskundig plus Brabantse gemoedelijkheid!" }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Enthousiast, ervaren *en vakbekwaam*",
    rol: "Joan van Dijk, Tuin-Team, Geldrop",
    tekst: [
      "Tuin-Team is een team van ontwerpers, hoveniers, stratenmakers, vijverbouwers, timmermannen en boomverzorgers. Zo heeft u voor de hele tuin één aanspreekpunt.",
      "Wilt u een natuurlijke zwemvijver zien of beleven? Dan nemen we u graag mee naar een of meer zwemvijvers die we hebben aangelegd."
    ],
    foto: "img/klimmen.jpg", fotoPos: "50% 40%", fotoAlt: "Boomverzorger van Tuin-Team aan het werk in een boom",
    knop: "Stuur Joan een bericht"
  },

  werkgebied: {
    titel: "Eindhoven en omstreken",
    tekst: "Vanuit Geldrop werken we in Eindhoven en de omliggende plaatsen. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Eindhoven", "Geldrop", "en omstreken"]
  },

  faq: [
    { v: "Is een eerste afspraak vrijblijvend?", a: "Ja. Een afspraak is snel gemaakt en geheel vrijblijvend. Samen brengen we uw wensen in beeld." },
    { v: "Weet ik vooraf wat het kost?", a: "Ja. We werken volgens ontwerp en plan van aanpak, altijd tegen een vooraf afgesproken prijs." },
    { v: "Heeft een zwemvijver veel onderhoud?", a: "Nee. Met een natuurlijk lava-/plantenfilter (helofytenfilter) krijgt u met een minimum aan techniek en onderhoud fris, helder zwemwater, zonder chloor." },
    { v: "Heb ik een kapvergunning nodig?", a: "Veel gemeentes hebben hun regels versoepeld en vaak is een vergunning niet nodig. Kijk voor de zekerheid op het omgevingsloket van uw gemeente." }
  ],

  band: {
    foto: "img/zwemvijver.jpg", fotoPos: "50% 55%",
    titel: "Zwemmen in *uw eigen tuin?*",
    tekst: "We nemen u graag mee naar een zwemvijver die we hebben aangelegd. Bel of app voor een afspraak."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft, of bel direct: 06 51 81 43 35.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "(Zwem)vijver", "Overkapping", "Boomonderhoud"],
    voorbeeld: "Bijvoorbeeld: een natuurlijke zwemvijver met vlonder in onze achtertuin"
  }
};
