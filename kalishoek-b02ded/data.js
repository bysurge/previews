// Kalishoek Tuinen (Rotterdam). Bron: kalishoek-tuinen.nl + Google (4,7 / 23, 25-11-2026).
// Eigen foto's uit hun fotoboek + Google-profiel; hun hortensia-header (stock) niet gebruikt. Logo: alleen het bladmotief, naam als tekst.
// Google-adres Lage Nes 9, Heerjansdam; site-adres Swiftstraat 70, Rotterdam aangehouden.
window.SITE = {
  naam: "Kalishoek Tuinen",
  kortNaam: "Kalishoek Tuinen",
  vak: "Hovenier",
  plaats: "Rotterdam",
  logo: "img/logo-icoon.png",
  logoVorm: "icoon",
  logoHoogte: 34,
  kleuren: { brand: "#212a30", accent: "#3fae2a" },
  telefoon: "06 42 67 13 55",
  telefoonIntl: "31642671355",
  waTekst: "App Jeffrey",
  email: "info@kalishoek-tuinen.nl",
  adres: ["Swiftstraat 70", "3076 SP Rotterdam"],
  kvk: "81297165",
  google: { score: "4,7", aantal: "23" },
  voetTekst: "Aanleg en onderhoud van particuliere en zakelijke tuinen in Rotterdam en omgeving. Uw tuin tot in de puntjes verzorgd.",

  hero: {
    regels: ["Uw tuin", "tot in de", "*puntjes verzorgd.*"],
    tekst: "Aanleg en onderhoud van tuinen in Rotterdam en omgeving: overkappingen, bestrating, vijvers en natuurlijk beplanting.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "40% 60%",
    fotoAlt: "Nieuwe houten overkapping met bestrating bij een woning",
    badge: "Vrijblijvende offerte",
    donker: true,
    punten: ["21 jaar hoveniersvak", "Particulier en zakelijk"]
  },

  marquee: ["Tuinaanleg", "Tuinonderhoud", "Overkappingen", "Bestrating", "Beplanting", "Schuttingen", "Vijvers", "Tuinverlichting"],

  intro: {
    kicker: "Kalishoek Tuinen",
    tekst: "Een jong bedrijf met *21 jaar ervaring.* Jeffrey leerde het vak vanaf zijn vijftiende, en pakt uw tuin met beide handen aan.",
    stats: [
      { getal: "4,7", label: "Op Google, 23 reviews" },
      { getal: "21 jaar", label: "In het hoveniersvak" },
      { getal: "2021", label: "Eigen bedrijf sinds" },
      { getal: "Ma–vr", label: "Geopend van 7:00 tot 17:30" }
    ]
  },

  diensten: {
    titel: "Alles in en *rond uw tuin*",
    tekst: "Voor particuliere en zakelijke tuinen, van een nieuwe voortuin tot een complete achtertuin met overkapping.",
    items: [
      { naam: "Tuinaanleg", foto: "img/gazon.jpg", pos: "50% 55%", tekst: "Een nieuwe tuin, van grondwerk en afwatering tot gazon, borders en paden.",
        punten: ["Grondwerk en ophogen", "Gazon en borders", "Afwatering oplossen"] },
      { naam: "Overkappingen en tuinhuizen", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Houten overkappingen, tuinhuizen en schuttingen, stevig gebouwd en netjes afgewerkt.",
        punten: ["Overkappingen", "Tuinhuizen", "Schuttingen en trappen"] },
      { naam: "Bestrating", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Terrassen, paden, opritten en binnenplaatsen. Materialen via Tegelhandel Boer, op tijd geleverd.",
        punten: ["Terrassen en paden", "Opritten", "Keramische tegels"] },
      { naam: "Beplanting en verlichting", foto: "img/voortuin-pad.jpg", pos: "50% 55%", tekst: "Beplanting maakt de tuin. En met tuinverlichting van Inlite geniet u er ook 's avonds van.",
        punten: ["Beplanting", "Tuinverlichting", "Stroompunten"] },
      { naam: "Tuinonderhoud", foto: "img/voortuin.jpg", pos: "50% 55%", tekst: "Snel en netjes onderhoud, zodat er weer licht en ruimte in uw tuin is. We denken mee over ideeën voor later.",
        punten: ["Snoeien", "Opruimen", "Advies voor de toekomst"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Fotoboek",
    titel: "Tuinen die we *aanlegden*",
    tekst: "Een greep uit onze projecten in Rotterdam en omgeving.",
    items: [
      { foto: "img/terras-weids.jpg", label: "Terras met weids uitzicht", sub: "Bestrating", pos: "50% 55%" },
      { foto: "img/stapstenen.jpg", label: "Voortuin met stapstenen", sub: "Aanleg", pos: "50% 55%" },
      { foto: "img/terras-tegels.jpg", label: "Overkapping met tegelvloer", sub: "Aanleg", pos: "50% 55%" },
      { foto: "img/trap.jpg", label: "Houten trap en keerwand", sub: "Houtwerk", pos: "50% 55%" },
      { foto: "img/tuinhuis.jpg", label: "Tuinhuis met overkapping", sub: "Houtbouw", pos: "50% 55%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken *wij*",
    tekst: "Korte lijntjes via telefoon en WhatsApp, zodat u altijd weet waar u aan toe bent.",
    foto: "img/schutting-werk.jpg", fotoPos: "50% 55%", fotoAlt: "Aan het werk aan een nieuwe schutting",
    stappen: [
      { naam: "Persoonlijk gesprek", tekst: "Neem contact op, we bespreken uw wensen en mogelijkheden." },
      { naam: "Vrijblijvende offerte", tekst: "U krijgt een duidelijke offerte met een afgesproken doorlooptijd." },
      { naam: "Aanleg", tekst: "We werken netjes en houden ons aan de afspraken." },
      { naam: "Genieten", tekst: "En ook later kunt u bij ons terecht voor onderhoud." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Wat ons vooral is bijgebleven, is hoe duidelijk en prettig de communicatie verliep. We hadden korte lijntjes via telefoon en WhatsApp en wisten altijd waar we aan toe waren. Alle afspraken zijn nagekomen, inclusief de afgesproken doorlooptijd van anderhalve week.", naam: "Stan V." },
      { tekst: "Heel tevreden over het tuinonderhoud! Het verschil was meteen zichtbaar: ineens had ik weer licht en ruimte in mijn tuin. Er werd snel en netjes gewerkt en er werd ook meegedacht over ideeën voor de toekomst.", naam: "Desiré v. d. H." },
      { tekst: "Jef heeft een prachtige tuin bij ons aangelegd. Na enkele weken hebben we nu iets om trots op te zijn, en waar we lekker in kunnen genieten.", naam: "Kevin F." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Jeffrey *Kalishoek*",
    rol: "Hovenier en eigenaar",
    tekst: [
      "Vanaf zijn vijftiende leerde Jeffrey het hoveniersvak. Na 21 jaar passie voor groen was het tijd voor de volgende stap: in 2021 begon hij Kalishoek Tuinen.",
      "We zijn gespecialiseerd in het aanleggen en onderhouden van particuliere en zakelijke tuinen. Van overkappingen, vijvers en bestrating tot beplanting, want dat maakt de tuin."
    ],
    foto: "img/overkapping-2.jpg", fotoPos: "50% 55%", fotoAlt: "Nieuwe overkapping in een achtertuin",
    knop: "Stuur Jeffrey een bericht"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Benieuwd naar *de mogelijkheden?*",
    tekst: "Vraag een vrijblijvende offerte aan. We helpen u graag verder in een persoonlijk gesprek."
  },

  contact: {
    titel: "Neem *contact* op",
    tekst: "Vertel kort wat u wilt, of app een foto van uw tuin. We zijn bereikbaar van maandag tot en met vrijdag, 7:00 tot 17:30.",
    onderwerpen: ["Tuinaanleg", "Overkapping of tuinhuis", "Bestrating", "Beplanting", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: nieuwe oprit en voortuin, en een boom laten weghalen"
  }
};
