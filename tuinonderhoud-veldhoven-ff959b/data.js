// Tuinonderhoud Veldhoven (voorheen Schipper onderhoud). Bronnen: eigen Jimdo-site + Google (4,8 uit 15, Kerktorenstraat Veldhoven).
// Voornaam staat niet op hun eigen site (alleen "Schipper"); in Google-reviews heet hij Gert. Daarom op de site geen voornaam buiten de reviews.
// Foto's: eigen site (jimcdn) + hun Google-profiel. Geen stockfoto's. Vogel-/vlinderfoto's van "Dieren in de tuin" bewust niet gebruikt (herkomst onzeker).
window.SITE = {
  naam: "Tuinonderhoud Veldhoven",
  kortNaam: "Tuinonderhoud Veldhoven",
  vak: "Hovenier",
  plaats: "Veldhoven",
  titelExtra: "Tuinonderhoud en tuinaanleg in Veldhoven",
  logo: "img/logo.png",
  logoOpFoto: "img/logo.png",
  kleuren: { brand: "#1f4a2d", accent: "#a8803f" },
  telefoon: "06 21 50 63 55",
  telefoonIntl: "31621506355",
  waTekst: "WhatsApp",
  email: "tuinonderhoudveldhoven@gmail.com",
  kvk: "53505654",
  google: { score: "4,8", aantal: "15" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Tuinonderhoud, tuinaanleg, ontwerp en graszoden in Veldhoven en omgeving. Van 2011 tot 2021 bekend als Schipper onderhoud.",

  hero: {
    regels: ["Laat uw tuin", "weer *opbloeien.*"],
    tekst: "Onderhoud, aanleg en beplanting in Veldhoven. We luisteren naar uw ideeën en maken samen een tuin die er het hele jaar netjes bij ligt.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%", fotoMobiel: "img/blauwregen.jpg",
    fotoAlt: "Voortuin met leiplatanen, witte hortensia's en een strak geknipte haag",
    donker: true,
    punten: ["Sinds 2011", "Afval nemen we mee", "Verse graszoden"]
  },

  marquee: ["Tuinonderhoud", "Tuinaanleg", "Bestrating", "Ontwerp en beplanting", "Verse graszoden", "Snoeien", "Afvoer van tuinafval"],

  intro: {
    kicker: "Tuinonderhoud Veldhoven",
    tekst: "Een mooie, onkruidvrije tuin wil iedereen. Wij zorgen dat de beplanting weer de vorm krijgt die u *in gedachten had*, en laten de tuin netjes en schoon achter.",
    stats: [
      { getal: "2011", label: "Sindsdien aan het werk in Veldhoven" },
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "Vers", label: "Graszoden, dezelfde dag van het land" },
      { getal: "3", label: "Werkdagen: binnen die tijd antwoord" }
    ]
  },

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Van een grote snoeibeurt tot een complete nieuwe tuin. Alles in overleg, en het afval nemen we mee.",
    items: [
      { naam: "Tuinonderhoud", foto: "img/p-voortuin.jpg", tekst: "Planten groeien vaak sneller of anders dan bedoeld, en onkruid groeit net zo hard mee. Wij brengen de tuin weer in vorm.",
        punten: ["Snoeien van planten, struiken en kleine bomen", "Onkruid verwijderen", "Oude planten vervangen", "Al het tuinafval afgevoerd"] },
      { naam: "Tuinaanleg en bestrating", foto: "img/voortuin-bakken.jpg", tekst: "U heeft een idee, maar hoe nu verder? In overleg maken we een plan en leggen we uw tuin aan, inclusief bestrating en beplanting.",
        punten: ["Bestrating: bekijk de soorten in een showtuin in Veldhoven", "Wij bestellen en laten alles bezorgen", "Verhoogde borders en plantenbakken", "Container bij veel afval, snel weer weg"] },
      { naam: "Ontwerp en beplanting", foto: "img/allium.jpg", tekst: "We meten de tuin op en maken een tekening op schaal, op basis van uw ideeën en waar u wilt onze aanvullingen.",
        punten: ["Tekening op schaal", "Beplantingsplan in overleg", "Planten van kwekers uit de buurt", "U kunt zelf mee gaan kijken"] },
      { naam: "Graszoden", foto: "img/graszoden.jpg", tekst: "Direct een groen gazon. De zoden halen we dezelfde dag bij de leverancier, verser kan niet. Na ongeveer twee weken kunt u er al overheen lopen.",
        punten: ["Ondergrond bemest en losgewerkt", "Zoden dezelfde dag van het land", "Middelen tegen engerlingen en emelten"] }
    ]
  },

  voorNa: {
    titel: "Van kale grond naar *groen gazon*",
    tekst: "Twee tuinen uit Veldhoven, voor en na. Schuif over de foto om het verschil te zien.",
    items: [
      { naam: "Tuin met veranda", voor: "img/voor-zoden.jpg", na: "img/na-zoden.jpg" },
      { naam: "Achtertuin met border", voor: "img/voor-gazon.jpg", na: "img/na-gazon.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen in en rond *Veldhoven*",
    tekst: "Een greep uit tuinen die we aanlegden of onderhouden.",
    items: [
      { foto: "img/blauwregen.jpg", label: "Voortuin met blauwregen", sub: "Beplanting en onderhoud", pos: "50% 45%" },
      { foto: "img/p-siertuin.jpg", label: "Siertuin met hagen en pad", sub: "Aanleg en onderhoud" },
      { foto: "img/gazon-stapstenen.jpg", label: "Gazon met stapstenen", sub: "Tuinaanleg" },
      { foto: "img/voortuin-cipres.jpg", label: "Strakke voortuin", sub: "Bestrating en beplanting" },
      { foto: "img/p-rond.jpg", label: "Rond gazon met terras", sub: "Tuinaanleg", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken *we samen*",
    tekst: "We luisteren naar uw ideeën en werken samen aan een tuin die bij u past.",
    stappen: [
      { naam: "Bericht of WhatsApp", tekst: "Stuur uw naam, adres en woonplaats, en wat u wilt laten doen. U hoort binnen drie werkdagen van ons." },
      { naam: "Kijken en meten", tekst: "We komen langs, meten de tuin op en denken mee over bestrating en beplanting." },
      { naam: "Aan de slag", tekst: "We werken netjes en volgens afspraak. Materialen bestellen we, het afval voeren we af." },
      { naam: "Onderhoud, als u wilt", tekst: "Veel klanten laten de tuin daarna door ons bijhouden, soms al jaren." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Gert heeft onze achtertuin volledig vernieuwd. Wij hadden zelf al concrete ideeën en hij heeft hier een mooie en praktische invulling aan gegeven. Gert was gezellig, werkt netjes en rekent redelijke tarieven. … Wij genieten inmiddels alweer 4 seizoenen van onze tuin en het ligt er allemaal nog erg mooi bij!", naam: "Dafne G." },
      { tekst: "We maken nu alweer een aantal jaar gebruik van de diensten van dhr Schipper. Hij is vakbekwaam, heel vriendelijk, makkelijk om mee samen te werken geeft goede adviezen, komt zijn afspraken na. Kortom: Top!! Een aanrader", naam: "Wies V." },
      { tekst: "Gert is een man van zijn woord en altijd goed gehumeurd. Zijn werk is vakwerk, netjes en volgens afspraak zelfs een extra klus is vaak geen probleem.", naam: "Oscar V." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Voorheen *Schipper onderhoud*",
    rol: "Tuinonderhoud Veldhoven, sinds 2011",
    tekst: [
      "Van 2011 tot 2021 waren we bekend als Schipper onderhoud. De naam is veranderd, de aanpak niet: klantgericht, netjes en volgens afspraak.",
      "We halen onze planten bij gespecialiseerde kwekers in de buurt en de graszoden vers van het land. Engelstalige klanten zijn ook van harte welkom."
    ],
    foto: "img/aan-het-werk.jpg", fotoPos: "50% 40%", fotoAlt: "Aan het werk: nieuwe planten in een voortuin",
    knop: "Stuur een WhatsApp"
  },

  werkgebied: {
    titel: "Veldhoven en *omgeving*",
    tekst: "We werken in Veldhoven en de buurt. Twijfelt u of we bij u langskomen? Stuur gerust een berichtje."
  },

  faq: [
    { v: "Hoe snel krijg ik antwoord?", a: "We streven ernaar uw bericht binnen drie werkdagen te beantwoorden. Vermeld uw naam, telefoonnummer, adres en woonplaats." },
    { v: "Wat gebeurt er met het tuinafval?", a: "Dat nemen we mee. Bij weinig afval brengen we het zelf weg, bij veel afval regelen we een container die zo snel mogelijk weer wordt opgehaald." },
    { v: "Kan ik de bestrating eerst zien?", a: "Ja. In een showtuin in Veldhoven kunt u verschillende soorten bestrating bekijken. U kiest, wij bestellen en laten het bezorgen." },
    { v: "Wanneer kan ik over nieuwe graszoden lopen?", a: "Na ongeveer twee weken zijn de zoden aangegroeid. Dan kunt u er overheen lopen en voor het eerst maaien." },
  ],

  band: {
    foto: "img/blauwregen.jpg", fotoPos: "50% 40%",
    titel: "Zin in een tuin die er *weer netjes bij ligt?*",
    tekst: "Stuur een bericht met wat u wilt laten doen. We denken graag met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt laten doen, met uw naam, adres en woonplaats. Of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinonderhoud", "Tuinaanleg en bestrating", "Ontwerp en beplanting", "Graszoden", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: voortuin flink snoeien, onkruid weg en het afval meenemen",
    belofte: "U hoort binnen drie werkdagen van ons."
  }
};
