// Sebastiani Hoveniers (Almere), Alessio Sebastiani + Jarrich van Woersem. Bron: sebastiani.nl (Wix, gecrawld 26-11-2026) + Google 5,0 uit 7.
// Foto's: eigen foto's van hun site (olijfboom bij avond, tuinhuis, kunstgras, onderhoud). Leveranciersbeelden (catalogi, houtstructuur, tegels) NIET gebruikt.
// Seizoenen-blok: gebaseerd op hun eigen onderhoudspagina (winter-, voorjaars-, zomer- en najaarsonderhoud).
window.SITE = {
  naam: "Sebastiani Hoveniers",
  kortNaam: "Sebastiani",
  vak: "Hovenier",
  plaats: "Almere",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 58,
  kleuren: { brand: "#2e3d22", accent: "#7a9a2c" },
  telefoon: "06 38 24 47 26",
  telefoonIntl: "31638244726",
  telefoon2: "06 41 71 77 32",
  waTekst: "App Alessio",
  email: "alessio@sebastiani.nl",
  adres: ["Televisieweg 135", "1322 BE Almere"],
  google: { score: "5,0", aantal: 7 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Hoveniersbedrijf in Almere sinds 2014. Tuinontwerp, aanleg, renovatie en onderhoud, voor particulieren en bedrijven in de regio Almere-Amsterdam.",

  hero: {
    regels: ["Een tuin die", "*klopt,* tot in", "het kleinste detail."],
    tekst: "Ontwerp, aanleg en onderhoud in Almere en Amsterdam. Hoge kwaliteit voor een eerlijke prijs: de prijs is de prijs, zonder verwarrende kortingen.",
    foto: "img/hero.jpg", fotoPos: "40% 50%", fotoPosMobiel: "38% 50%", donker: true,
    fotoAlt: "Olijfboom in een witte plantenbak met verlichting bij avond, met lounge op de achtergrond",
    punten: ["Sinds 2014", "Vakbekwaam hovenier (Aeres MBO)"],
    notitie: { label: "Nu in het seizoen", tekst: "Najaarsonderhoud: verplanten en achterstallig onderhoud inhalen" }
  },

  marquee: ["Tuinontwerp in 2D en 3D", "Aanleg en renovatie", "Bestrating", "Tuinhuizen en overkappingen", "In-lite verlichting", "Kunstgras", "Beregening", "Onderhoudscontracten"],

  intro: {
    kicker: "Sebastiani Hoveniers",
    tekst: "We zijn geen offertemachine. U krijgt *advies en een plan,* een eerlijke offerte en persoonlijke aandacht, van ontwerp tot het laatste onderhoud.",
    stats: [
      { getal: "2014", label: "Hovenier sinds mei" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "2D / 3D", label: "Tuinontwerp en beplantingsplan" },
      { getal: "5", label: "Onderhoudspakketten op maat", tel: 5 }
    ]
  },

  diensten: {
    titel: "Alles voor de tuin, *uit één hand*",
    tekst: "Van een eenmalige snoeibeurt tot een tuin helemaal leeghalen, opnieuw ontwerpen en aanleggen. Niets is te gek.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "Na een goed gesprek over uw wensen maken we een ontwerp in 2D of 3D, zodat u precies ziet hoe de tuin wordt. Ook een beplantingsplan, met oog voor zon, grond, bloeitijd en onderhoud.",
        punten: ["2D- en 3D-ontwerp", "Beplantingsplan", "Planten van een vast groencentrum"] },
      { naam: "Aanleg en renovatie", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Tuinen, gazons, bestrating, schuttingen en overkappingen, voor particulieren en bedrijven. Met een snelle schatting per vierkante meter, en daarna een plan van A tot Z.",
        punten: ["Bestrating in beton, natuursteen of keramiek", "Gazon en borders", "Klein grondverzet"] },
      { naam: "Hout in de tuin", foto: "img/werk.jpg", pos: "50% 40%", tekst: "Een overkapping, pergola, vlonder of schutting, met de juiste houtsoort voor elke toepassing.",
        punten: ["Overkappingen en pergola's", "Vlonders", "Schuttingen"] },
      { naam: "Verlichting, kunstgras en beregening", foto: "img/verlichting.jpg", pos: "50% 50%", tekst: "Energiezuinige tuinverlichting van In-lite, veilig kunstgras van Royal Grass, en beregening op maat die u met een app op uw telefoon bedient.",
        punten: ["In-lite verlichting", "Royal Grass kunstgras", "Beregening met app"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 40%", tekst: "Flexibele onderhoudscontracten voor particulieren en bedrijven, die we na elke ronde samen evalueren. Ook voor een tuin die lang niet is onderhouden.",
        punten: ["Basis tot wekelijks", "Grasmaaipakket", "Of gewoon op oproep"] }
    ]
  },

  seizoenen: {
    kicker: "Onderhoud door het jaar",
    titel: "Elk seizoen *zijn eigen werk*",
    tekst: "Elk jaar heeft vier seizoenen, en elk seizoen vraagt om een ander soort onderhoud.",
    items: [
      { naam: "Lente", maanden: "maart – mei", foto: "img/gazon.jpg", pos: "50% 50%", titel: "De tuin *wordt wakker*",
        tekst: "De winter is zo goed als voorbij. Tijd om dood plantmateriaal weg te snoeien, zoals oud blad van siergrassen en uitgebloeide stengels van vaste planten.",
        punten: ["Siergrassen terugknippen", "Vaste planten opschonen"] },
      { naam: "Zomer", maanden: "juni – augustus", foto: "img/onderhoud.jpg", pos: "50% 40%", titel: "Hagen *in vorm*",
        tekst: "Rond eind mei of begin juni kan de coniferenhaag gesnoeid worden. Een tweede keer volgt rond augustus of september, zodat hij voor de winter herstelt.",
        punten: ["Coniferenhaag snoeien", "Maaien en bijhouden"] },
      { naam: "Herfst", maanden: "september – november", foto: "img/herfst.jpg", pos: "50% 50%", titel: "Het beste moment *om te verplanten*",
        tekst: "Bladverliezende heesters verplanten we als het blad eraf is. Onkruid en beplanting groeien minder snel, dus dit is het moment om achterstallig onderhoud in te halen.",
        punten: ["Verplanten", "Achterstallig onderhoud inhalen"] },
      { naam: "Winter", maanden: "december – februari", foto: "img/verlichting.jpg", pos: "50% 50%", titel: "Tijd voor *de bomen*",
        tekst: "In de winter en het vroege voorjaar kunnen bomen gesnoeid worden, bijvoorbeeld een bolcatalpa in februari.",
        punten: ["Bomen snoeien", "Plannen maken voor het voorjaar"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Uit onze *fotoalbums*",
    tekst: "Een greep uit tuinen die we aanlegden in Almere en omgeving.",
    items: [
      { foto: "img/lounge.jpg", label: "Loungeterras", sub: "Aanleg", pos: "50% 60%" },
      { foto: "img/zwembad.jpg", label: "Terras bij het zwembad", sub: "Bestrating" },
      { foto: "img/trap.jpg", label: "Treden in keramiek", sub: "Bestrating" },
      { foto: "img/terras.jpg", label: "Nieuw terras", sub: "Aanleg" },
      { foto: "img/kunstgras.jpg", label: "Kunstgras leggen", sub: "Royal Grass", pos: "50% 40%" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Hans K.", tekst: "Er is heel goed geluisterd naar onze wensen, en het is in de praktijk nog beter geworden dan we hadden durven dromen. … Sebastiani heeft laten zien dat ze niet zomaar een hovenier zijn, maar goed vakwerk leveren." },
      { naam: "I. Verhagen", tekst: "Wij zijn na 2 jaar nog erg tevreden over de tuin maar ook over de service. Goede enthousiaste jongens die goed werk leveren tegen een zeer nette prijs! Aanrader!" },
      { naam: "owen1975", tekst: "Duidelijke communicatie over de uit te voeren werkzaamheden vooraf, tijdens en na het werk. … Leuk team met oprechte belangstelling voor de tuin en je wensen. … Werken netjes en ruimen alles op." },
      { naam: "Mariska DB", tekst: "Een hele fijne hovenier om je ideeen mee te bespreken. Jarrich dacht met ons mee en wil het beste voor je tuin!" }
    ]
  },

  over: {
    kicker: "Ons team", navNaam: "Over ons",
    titel: "Ons team, *uw ervaring*",
    rol: "Alessio (onderhoud) en Jarrich (aanleg en ontwerp)",
    tekst: [
      "Sebastiani Hoveniers werkt sinds mei 2014 met plezier en passie in elke tuin, vanuit Almere. We zijn opgeleid tot vakbekwaam hovenier aan het Aeres MBO in Almere.",
      "Alessio is onze onderhoudsspecialist, Jarrich doet aanleg en ontwerp. Op ons YouTube-kanaal 'Sebastiani on Tour' laten we zien wat het vak inhoudt. U bent ook van harte welkom op ons kantoor in Almere."
    ],
    foto: "img/tuinhuis.jpg", fotoPos: "50% 55%", fotoAlt: "Houten tuinhuis met overkapping en lounge",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Almere, Amsterdam *en verder*",
    tekst: "We werken vooral in de regio Almere-Amsterdam, maar komen ook graag verder in Nederland.",
    plaatsen: ["Almere", "Amsterdam", "en de rest van Nederland"]
  },

  faq: [
    { v: "Hoe werkt een onderhoudscontract?", a: "Kies uit Basis (2x per jaar), Comfort (4-6x), Excellent (12x), Pro (wekelijks) of een grasmaaipakket. Na elke ronde evalueren we en passen we het contract zo nodig aan. Liever nergens aan vast? Dan kan het ook op oproep." },
    { v: "Wat kost een nieuwe tuin?", a: "We geven u snel een schatting per vierkante meter. Daarna volgt een plan met ontwerp en een gespecificeerde offerte. De prijs is de prijs, zonder verwarrende kortingen." },
    { v: "Kan ik de tuin eerst in 3D zien?", a: "Ja. We werken uw ontwerp uit in 2D of 3D, zodat u vooraf een goed beeld hebt en knelpunten snel opgelost zijn." },
    { v: "Doen jullie ook kleine klussen?", a: "Zeker: snoeien, een terras, gazon of border aanleggen, of de tuin winterklaar maken." }
  ],

  band: {
    foto: "img/lounge.jpg", fotoPos: "50% 60%",
    titel: "Klaar voor een tuin *naar uw wens?*",
    tekst: "Vertel ons wat u wilt. U krijgt advies, een plan en een eerlijke prijs."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft, of stuur Alessio direct een WhatsApp met een foto van uw tuin. Voor aanleg en ontwerp kunt u ook Jarrich bellen.",
    onderwerpen: ["Tuinontwerp", "Aanleg en renovatie", "Hout in de tuin", "Verlichting of kunstgras", "Beregening", "Onderhoudscontract"],
    voorbeeld: "Bijvoorbeeld: nieuwbouwtuin van 6 bij 10 meter, ontwerp en aanleg met verlichting"
  }
};
