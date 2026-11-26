// A.A. Living Garden Design (Deventer), eigenaar Ed Linnemann. Bron: aalivinggardendesign.nl (gecrawld 26-11-2026, site © 2017) + Google 5,0 uit 1 (niet getoond).
// Foto's: eigen fotoalbum van hun site (/fotoalbum/showcase). Leveranciersfoto's (schuttingen 'heritage artwood') NIET gebruikt.
// Logo op hun site is alleen een tekstbanner op grijs: eenvoudig blad-icoon in hun rood + naam. Reviews: referentiepagina op hun site.
window.SITE = {
  naam: "A.A. Living Garden Design",
  kortNaam: "Living Garden",
  vak: "Hovenier",
  plaats: "Deventer",
  titelExtra: "Hovenier in Deventer, Apeldoorn en Zutphen",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#33291f", accent: "#9a3138" },
  telefoon: "06 51 89 23 79",
  telefoonIntl: "31651892379",
  telefoon2: "0570 65 16 55",
  waTekst: "App Ed",
  email: "info@aalivinggardendesign.nl",
  adres: ["Toutenburg 407", "7423 XD Deventer"],
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Tuinaanleg met passie. Tuinontwerp, beplantingsplan, aanleg, inrichting en onderhoud in Deventer, Apeldoorn, Zutphen en verder.",

  hero: {
    regels: ["Tuinaanleg", "met *passie.*"],
    tekst: "Hovenier in Deventer, Apeldoorn en Zutphen, voor grote en kleine tuinen. We volgen geen trends, maar ontwerpen een tuin speciaal voor u.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "58% 50%", donker: true,
    fotoAlt: "Wit huis met veranda, gemetselde plantenbakken, borders en gazon",
    punten: ["Ontwerp, beplanting, aanleg en onderhoud", "Eerste bezoek vrijblijvend"]
  },

  marquee: ["Tuinontwerp", "Beplantingsplan", "Tuinaanleg", "Tuinonderhoud", "Tuininrichting", "Verlichting", "Vijvers", "Kunstgras"],

  intro: {
    kicker: "A.A. Living Garden Design",
    tekst: "Een goed tuinontwerp is geen tekening. Een goed tuinontwerp is *een gevoel.* Onze sterke punten: kijken en luisteren, zodat het resultaat helemaal aansluit op uw wensen.",
    stats: [
      { getal: "Op maat", label: "Ontwerp en beplantingsplan" },
      { getal: "Gratis", label: "Eerste bezoek, vrijblijvend" },
      { getal: "Altijd", label: "Telefonisch praktisch altijd bereikbaar" }
    ]
  },

  diensten: {
    titel: "Van eerste schets tot *volle border*",
    tekst: "Wij dragen graag zorg voor de volledige inrichting van uw tuin, en adviseren u daarin goed en duidelijk.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "Van balkontuin en daktuin tot stadstuin, cottagetuin, boerderijtuin of landschapspark. We volgen geen trends, maar ontwerpen een tuin die bij u past.",
        punten: ["Strak en modern of klassiek", "Dak- en balkontuinen", "Vijvertuinen en parken"] },
      { naam: "Beplantingsplan", foto: "img/beplanting.jpg", pos: "50% 55%", tekst: "De juiste plant op de juiste plek. Dankzij onze plantenkennis en goede contacten met kwekerijen kiezen we uit een groot assortiment, afgestemd op hoeveel tijd u aan de tuin wilt besteden.",
        punten: ["Strak en sober of weelderig", "Ook voor wie weinig tijd heeft", "Het hele jaar iets te beleven"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Met een grondige aanpak en hoogwaardige materialen brengen we het ontwerp tot leven. Samen met beregeningsspecialisten, zwembadbouwers en kunstenaars realiseren we grote en kleine projecten, met goede nazorg.",
        punten: ["Bestrating en vlonders", "Vijvers en water", "Goede nazorg"] },
      { naam: "Tuinonderhoud", foto: "img/hagen.jpg", pos: "50% 50%", tekst: "Wieden en snoeien, maar ook een goede bodem en de juiste bemesting, met advies op basis van een bodemanalyse. Op afspraak, per offerte of met een contract.",
        punten: ["Gazons, hagen en heesters", "Voor- en najaarsbeurt", "Vakantieservice"] },
      { naam: "Tuininrichting", foto: "img/buitenkeuken.jpg", pos: "50% 50%", tekst: "Tuinmeubelen en accessoires van topontwerpers, een verlichtingsplan met tuinverlichting van diverse merken, en plantenbakken op maat voor uw terras.",
        punten: ["Design tuinmeubelen", "Verlichtingsplan", "Plantenbakken op maat"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Fotoalbum",
    titel: "Tuinen met *uitstraling*",
    tekst: "Een greep uit tuinen die we ontwierpen, aanlegden en inrichtten.",
    items: [
      { foto: "img/blauweregen.jpg", label: "Terras onder de blauwe regen", sub: "Ontwerp en aanleg", pos: "50% 55%" },
      { foto: "img/vijver.jpg", label: "Vijver met beelden", sub: "Water in de tuin" },
      { foto: "img/zwembad.jpg", label: "Tuin met zwembad", sub: "Aanleg" },
      { foto: "img/waterval.jpg", label: "Waterval in de border", sub: "Beplanting", pos: "50% 60%" },
      { foto: "img/vlonderpad.jpg", label: "Vlonderpad", sub: "Aanleg" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot leven*",
    tekst: "Duidelijk vanaf het eerste gesprek. We zijn telefonisch praktisch altijd bereikbaar.",
    foto: "img/aan-het-werk.jpg", fotoPos: "50% 50%", fotoAlt: "Aan het werk bij de aanleg van een tuin",
    stappen: [
      { naam: "Eerste bezoek, vrijblijvend", tekst: "We bespreken uw wensen, maken afspraken en meten in." },
      { naam: "Schetsontwerp", tekst: "We maken een schets en bespreken die samen, tot de definitieve tekening klopt." },
      { naam: "Beplantingsplan en offerte", tekst: "U krijgt een beplantingsplan en een duidelijke offerte." },
      { naam: "Aanleg en oplevering", tekst: "We leggen de tuin aan, eventueel met tussentijds overleg, en bespreken na de oplevering kort hoe het ging." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Robbie N. en Simone K., Gaanderen", tekst: "Eigenaar Ed Linnemann gebruikt met recht de slogan “tuinaanleg met passie”. … Het werd ons duidelijk dat hier echt iemand sprak die wist waar hij het over had, maar die ook over een waanzinnige plantenkennis beschikt." },
      { naam: "Hans S. en Reina v. D.", tekst: "We hebben de tuin gekregen die bij ons past, vol met planten en bloemen waar wijzelf, onze katten en vele insecten nu van genieten. … Voor herhaling vatbaar!" },
      { naam: "Robert G., Deventer", tekst: "Ed denkt goed met je mee en geeft op maat advies. Daarnaast is hij erg prettig in de omgang, is hij iemand die van aanpakken weet en heeft hij een indrukwekkende florakennis." },
      { naam: "Fam. J. Stam", tekst: "Aardige professionele en bekwame mensen, die zelfs 14 uur per dag doorwerkten!! Alle afspraken nagekomen. Alles zeer correct verlopen." }
    ]
  },

  over: {
    kicker: "Over Ed", navNaam: "Over ons",
    titel: "Ed *Linnemann*",
    rol: "Eigenaar A.A. Living Garden Design",
    tekst: [
      "A.A. Living Garden Design is een hoveniersbedrijf in Deventer, vooral actief in de Stedendriehoek Apeldoorn, Deventer en Zutphen, maar ook in de rest van Nederland, België en Frankrijk.",
      "Tevreden klanten hebben en houden staat bij ons hoog in het vaandel. Kan de wagen er niet goed bij, of is er geen ruimte om een boom te laten vallen? Dan gaan we van de gebaande paden af om de klus te klaren."
    ],
    foto: "img/pad.jpg", fotoPos: "50% 50%", fotoAlt: "Pad langs een woning met strakke borders",
    knop: "Stuur Ed een bericht"
  },

  werkgebied: {
    titel: "Deventer, Apeldoorn, Zutphen *en verder*",
    tekst: "We werken vooral in de Stedendriehoek, maar ook in Overijssel, Gelderland, Utrecht, Zuid-Holland, België en Frankrijk.",
    plaatsen: ["Deventer", "Apeldoorn", "Zutphen", "Overijssel", "Gelderland", "Utrecht", "Zuid-Holland", "België", "Frankrijk"]
  },

  faq: [
    { v: "Is het eerste bezoek vrijblijvend?", a: "Ja. We bespreken uw wensen, maken afspraken en meten in. Daarna volgt een schetsontwerp." },
    { v: "Ik heb weinig tijd voor de tuin. Kan dat?", a: "Zeker. Het beplantingsplan stemmen we af op de tijd die u aan de tuin kunt of wilt besteden, ook als u geen groene vingers heeft." },
    { v: "Doen jullie ook onderhoud als ik op vakantie ben?", a: "Ja, met onze vakantieservice snoeien we hagen, bestrijden we onkruid en geven we terrasbeplanting water." },
    { v: "Leveren jullie ook kunstgras?", a: "Ja, we leveren en installeren kunstgras, putting greens en valdempende ondergronden, bijvoorbeeld voor speelplaatsen." }
  ],

  band: {
    foto: "img/vijvertuin.jpg", fotoPos: "50% 55%",
    titel: "Een tuin met *uitstraling en klasse?*",
    tekst: "Neem vrijblijvend contact op. We komen graag bij u langs."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. We zijn telefonisch praktisch altijd bereikbaar en beantwoorden e-mails zo snel mogelijk. Of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Beplantingsplan", "Tuinaanleg", "Tuinonderhoud", "Tuininrichting", "Kunstgras"],
    voorbeeld: "Bijvoorbeeld: een nieuw beplantingsplan voor de achtertuin met vijver"
  }
};
