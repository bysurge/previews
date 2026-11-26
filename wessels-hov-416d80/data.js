// Hoveniersbedrijf Wessels (Dongen / Tilburg). Bron: hoveniersbedrijfwessels.nl (26-11-2026) + eigen Google-profiel (4,3 uit 29).
// Foto's: eigen Google-foto's (src/google) + 2 eigen projectfoto's van hun site. Zwembad-/onderhoudsplaatjes van hun site
// (zwembad_afbeelding, heggenschaar, grindtuin) lijken stock en zijn NIET gebruikt.
window.SITE = {
  naam: "Hoveniersbedrijf Wessels",
  kortNaam: "Wessels",
  vak: "Hovenier",
  plaats: "Dongen",
  titelExtra: "Hovenier in Dongen en Tilburg",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "icoon",
  logoMetNaam: true,
  logoHoogte: 40,
  kleuren: { brand: "#21392a", accent: "#b98349" },
  telefoon: "06 22 95 52 08",
  telefoonIntl: "31622955208",
  waTekst: "App Jasper",
  email: "info@hoveniersbedrijfwessels.nl",
  adres: ["Uiterste Stuiver Oost 6", "5105 NG Dongen"],
  kvk: "76995755",
  google: { score: "4,3", aantal: 29 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Allround hovenier in Dongen, Tilburg en omgeving. Tuinaanleg, tuinonderhoud, boomverzorging en zwembaden.",

  hero: {
    regels: ["Maximaal", "genieten van", "*uw eigen tuin.*"],
    tekst: "Tuinaanleg, tuinonderhoud, boomverzorging en zwembaden in Dongen, Tilburg en omgeving. Eén allround hovenier voor de hele tuin.",
    foto: "img/hero.jpg", fotoPos: "50% 62%", fotoPosMobiel: "42% 60%", donker: true,
    fotoAlt: "Tuin met zwembad, verlichte traptreden en palmen in de avond",
    punten: ["Reactie binnen 24 uur", "Vrijblijvende offerte"]
  },

  marquee: ["Tuinaanleg", "Bestrating en terrassen", "Graszoden", "Schuttingen", "Overkappingen", "Beregening", "Tuinonderhoud", "Boomverzorging", "Zwembaden"],

  intro: {
    kicker: "Hoveniersbedrijf Wessels",
    tekst: "Eén bedrijf voor de *complete tuin.* Van bestrating en schutting tot beplanting, beregening en zelfs een zwembad: u hoeft maar één hovenier te bellen.",
    stats: [
      { getal: "4,3", label: "Op Google, uit 29 reviews" },
      { getal: "24 uur", label: "Altijd binnen een dag reactie" },
      { getal: "HDPE", label: "Zwembaden in elke vorm" },
      { getal: "Allround", label: "Aanleg, onderhoud en bomen" }
    ]
  },

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Heeft u een wens die hier niet tussen staat? Vraag het gerust, de kans is groot dat we u kunnen helpen.",
    items: [
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Zelf een idee, een ontwerp van een tuinarchitect, of wilt u dat wij meedenken? We leggen uw tuin compleet aan, van grondwerk tot beplanting.",
        punten: ["Aanplanten", "Vijver plaatsen", "Complete renovatie"] },
      { naam: "Bestrating en terrassen", foto: "img/terras.jpg", pos: "50% 60%", tekst: "Terrassen, paden en opritten, strak gelegd op een goed zandbed en met de juiste afwatering.",
        punten: ["Terrassen", "Bestrating", "Afwatering"] },
      { naam: "Gazon en beregening", foto: "img/gazon.jpg", pos: "50% 60%", tekst: "Een nieuw gazon van graszoden, en desgewenst een beregeningssysteem dat het gras groen houdt.",
        punten: ["Graszoden leggen", "Beregeningssysteem", "Kunstgras"] },
      { naam: "Schuttingen en overkappingen", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Een nieuwe schutting, of een overkapping van douglas hout om ook bij minder weer buiten te zitten.",
        punten: ["Schutting plaatsen", "Douglas overkapping", "Schuren"] },
      { naam: "Zwembad aanleg", foto: "img/zwembad.jpg", pos: "50% 55%", tekst: "Een eigen zwembad in de tuin: instant vakantiegevoel. Wij bouwen HDPE-zwembaden, in elke vorm en elk formaat, sterk en onderhoudsvriendelijk.",
        punten: ["HDPE-inbouwzwembad", "Elke vorm en maat", "Installatie en nazorg"] },
      { naam: "Tuinonderhoud en boomverzorging", foto: "img/voortuin.jpg", pos: "50% 55%", tekst: "Wekelijks, maandelijks of op contractbasis. We maken uw tuin winter- of zomerklaar, en snoeien of verplanten bomen die te groot zijn geworden.",
        punten: ["Onderhoud op contract", "Tuin winterklaar maken", "Bomen snoeien"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Wessels*",
    tekst: "Een greep uit tuinen die we aanlegden. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/aanleg.jpg", label: "Tuin met kunstgras en tuinhuis", sub: "Tuinaanleg" },
      { foto: "img/zwembad.jpg", label: "Zwembad met gazon", sub: "Zwembad aanleg" },
      { foto: "img/poolhouse.jpg", label: "Poolhouse en terras", sub: "Aanleg" },
      { foto: "img/overkapping.jpg", label: "Overkapping met zithoek", sub: "Overkapping" },
      { foto: "img/schutting.jpg", label: "Schutting en terras", sub: "Schutting" },
      { foto: "img/strak.jpg", label: "Strakke tuin met kunstgras", sub: "Tuinaanleg" },
      { foto: "img/gazon.jpg", label: "Nieuw gazon met beregening", sub: "Graszoden" },
      { foto: "img/zwembad-bouw.jpg", label: "Zwembad in aanbouw", sub: "Zwembad aanleg" }
    ]
  },

  werkwijze: {
    titel: "Zo leggen we *uw tuin* aan",
    tekst: "Netjes van begin tot eind. Na afloop kunt u zonder achtergebleven rommel van uw tuin genieten.",
    stappen: [
      { naam: "Tuin leeghalen", tekst: "Wat hergebruikt wordt, leggen we netjes opzij. De rest voeren we voor u af." },
      { naam: "Grondwerk", tekst: "We graven af en maken een zandbed, en leggen meteen kabels voor verlichting of beregening." },
      { naam: "Bestrating", tekst: "Paden en terrassen gaan erin, met aandacht voor de afwatering." },
      { naam: "Beplanting en gazon", tekst: "Als laatste planten, gazon en opruimen. Daarna kan het onderhoud ook bij ons." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Robertino B.", tekst: "Jasper denkt met je mee, komt met goede ideeën en is erg flexibel en zeer prettig in de omgang. Het resultaat mag er wezen. Een prachtige opgeleverde tuin, met overkapping en schuur, kunstgras, buitendouche …" },
      { naam: "Gertjan Z.", tekst: "Jasper van Hoveniersbedrijf Wessels is meerdere malen langs geweest om alles te bespreken. Dit gaf ons veel vertrouwen … Net als in het voortraject heeft Jasper ook de installatie en de nazorg perfect uitgevoerd." },
      { naam: "Jason L.", tekst: "Jasper heeft de gigantische berkenboom in mijn voortuin helemaal tot op het maaiveld verwijderd. Stukje bij beetje de boom \"uitgekleed\" om de rest van de voortuin niet te beschadigen. Erg knap gedaan." },
      { naam: "Nancy B.", sterren: 4, tekst: "Bedankt voor het aanleggen van onze voortuin. Het is prachtig geworden. Zo blij mee. Maar ook bedankt voor de leuke samenwerking. Jasper en Martin echt top. Niets was teveel." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Jasper *Wessels*",
    rol: "Eigenaar en allround hovenier",
    tekst: [
      "Als klein jongetje ging Jasper al met zijn vader mee, die ook hovenier was. Sindsdien is hij niet meer opgehouden met het aanleggen en onderhouden van tuinen.",
      "Hij kwam vanuit Dordrecht naar Dongen en werkt vanuit daar in Tilburg en de hele regio, voor grote en kleine tuinen. Boomverzorging is zijn favoriete werk: grote bomen terugsnoeien of verplanten ziet hij als een mooie uitdaging."
    ],
    foto: "img/poolhouse.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met poolhouse en zwembad",
    knop: "Stuur Jasper een bericht"
  },

  werkgebied: {
    titel: "Dongen, Tilburg en omgeving",
    tekst: "Vanuit Dongen werken we in Tilburg en de omliggende regio, in Noord-Brabant en Zuid-Holland. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Dongen", "Tilburg", "Noord-Brabant", "Zuid-Holland"]
  },

  faq: [
    { v: "Hoe snel krijg ik reactie?", a: "Binnen 24 uur krijgt u altijd een reactie terug, of het nu om een vraag of een offerte gaat." },
    { v: "Komen jullie eerst kijken?", a: "Ja. We komen graag bij u langs om de mogelijkheden te bespreken. Dat is vrijblijvend." },
    { v: "Kan ik alleen onderhoud afnemen?", a: "Zeker. Wekelijks, maandelijks, halfjaarlijks, jaarlijks of op contractbasis. We maken uw tuin ook winter- of zomerklaar." },
    { v: "Wat voor zwembaden bouwen jullie?", a: "HDPE-inbouwzwembaden: sterk, onderhoudsvriendelijk, kleurvast en in elke vorm en elk formaat mogelijk." }
  ],

  band: {
    foto: "img/terras.jpg", fotoPos: "50% 60%",
    titel: "Klaar om *te genieten*?",
    tekst: "Vertel ons wat u wilt met uw tuin. Jasper komt graag langs om mee te denken."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Heeft u een vraag of wilt u een vrijblijvende offerte? Laat het weten, binnen 24 uur heeft u reactie. Of stuur Jasper direct een app met een foto van uw tuin.",
    onderwerpen: ["Tuinaanleg", "Bestrating en terrassen", "Gazon en beregening", "Schuttingen en overkappingen", "Zwembad aanleg", "Tuinonderhoud", "Boomverzorging"],
    voorbeeld: "Bijvoorbeeld: nieuwe bestrating en een schutting in de achtertuin"
  }
};
