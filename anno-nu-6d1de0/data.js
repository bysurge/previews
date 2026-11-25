// Tuinen Anno Nu (Deventer). Bron: tuinenannonu.nl + Google (5,0 / 26), 25-11-2026. Zie content.md.
// Foto's: hun eigen site + hun Google-profiel. Geen stock.
window.SITE = {
  naam: "Tuinen Anno Nu",
  kortNaam: "Tuinen Anno Nu",
  vak: "Hovenier",
  plaats: "Deventer",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png", logoWit: "img/logo-wit.png",
  logoHoogte: 38,
  kleuren: { brand: "#243c27", accent: "#5f9a3c" },
  telefoon: "06 14 36 23 35",
  telefoonIntl: "31614362335",
  waTekst: "Stuur een appje",
  email: "info@tuinenannonu.nl",
  adres: ["Noorwegenstraat 6a", "7418 BC Deventer"],
  google: { score: "5,0", aantal: "26" },
  voetTekst: "De Groene Vormgever. Tuinontwerp, aanleg en onderhoud in Deventer en omgeving.",

  hero: {
    regels: ["Jouw tuin,", "van gevel tot", "*erfgrens.*"],
    tekst: "Al meer dan 30 jaar ontwerpen, bouwen en onderhouden we tuinen in Deventer en omgeving. Met oog voor detail en een no-nonsense aanpak.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 55%",
    fotoAlt: "Achtertuin met tuinhuis, overkapping, gazon en terras",
    badge: "Vrijblijvend advies of offerte",
    punten: ["Ontwerp, aanleg en onderhoud", "Duidelijke afspraken"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Overkappingen", "Beplanting", "Drainage", "Schaduwdoeken", "Tuinverlichting", "Onderhoud"],

  intro: {
    kicker: "De Groene Vormgever",
    tekst: "Een team van vier *gedreven hoveniers.* We houden van duidelijke afspraken, hard werken en een topresultaat. Van kleine stadstuin tot ruime buitenplaats.",
    stats: [
      { getal: "30+", label: "Jaar ervaring" },
      { getal: "165+", label: "Aangelegde tuinen" },
      { getal: "300+", label: "Tevreden klanten" },
      { getal: "5,0", label: "Op Google" }
    ]
  },

  keurmerkenTitel: "Lid en erkend",
  keurmerken: [
    { naam: "VHG", sub: "Koninklijke Vereniging van Hoveniers", logo: "img/vhg.png" },
    { naam: "SBB", sub: "Erkend leerbedrijf", logo: "img/sbb.png" }
  ],

  diensten: {
    titel: "Alles voor je tuin, *uit één hand*",
    tekst: "Van het eerste ontwerp tot het periodieke onderhoud. Vraag gerust wat er mogelijk is.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "Een ontwerp op maat dat past bij jouw wensen en de stijl van je woning. Eigentijds en praktisch in gebruik.",
        punten: ["Ontwerp op maat", "Advies over bodem en beplanting", "Kleine en grote tuinen"] },
      { naam: "Tuinaanleg en bestrating", foto: "img/aanleg.jpg", tekst: "Van grondwerk en drainage tot bestrating en gazon. Ook bij harde nieuwbouwgrond zorgen we dat het water weg kan.",
        punten: ["Bestrating", "Drainage en grondwerk", "Gazon en kunstgras"] },
      { naam: "Bouwwerken", foto: "img/bouwwerk.jpg", tekst: "Overkappingen, schuren en erfafscheidingen, stevig gebouwd en mooi afgewerkt.",
        punten: ["Overkappingen", "Schuren", "Erfafscheiding"] },
      { naam: "Beplanting", foto: "img/beplanting.jpg", tekst: "Samen kiezen we planten die passen bij zon, schaduw en wind in jouw tuin.",
        punten: ["Borders en heesters", "Bomen", "Afgestemd op de plek"] },
      { naam: "Schaduw en verlichting", foto: "img/schaduwdoek.jpg", tekst: "Schaduwdoeken voor de zomer en tuinverlichting voor de avond.",
        punten: ["Schaduwdoeken", "Tuinverlichting"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", tekst: "Periodiek onderhoud, gazononderhoud en boomverzorging. Eén of meer keren per jaar, wat jij wilt.",
        punten: ["Periodiek onderhoud", "Gazon", "Boomverzorging"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Anno Nu*",
    tekst: "Een greep uit tuinen die we ontwierpen en aanlegden in en rond Deventer.",
    items: [
            { foto: "img/hangmat.jpg", label: "Pergola met hangmat", sub: "Bouwwerk en beplanting" },
      { foto: "img/vlonder.jpg", label: "Vlonder aan de vijver", sub: "Aanleg" },
      { foto: "img/verlichting.jpg", label: "Tuin in de avond", sub: "Verlichting" },
      { foto: "img/border.jpg", label: "Voortuin vol vaste planten", sub: "Beplanting" }
    ]
  },

  werkwijze: {
    titel: "Zo komt jouw tuin *tot leven*",
    tekst: "Duidelijke afspraken en goed op de hoogte blijven, ook als de planning verandert. Dat waarderen klanten het meest.",
    foto: "img/terras.jpg", fotoPos: "50% 60%", fotoAlt: "Nieuw terras met schutting en border",
    stappen: [
      { naam: "Kennismaken", tekst: "We komen langs, bekijken je tuin en horen wat je wilt." },
      { naam: "Ontwerp en offerte", tekst: "Een plan op maat en een offerte, voor elk budget." },
      { naam: "Aanleg", tekst: "We werken netjes en houden je op de hoogte, van grondwerk tot laatste plant." },
      { naam: "Onderhoud, als je wilt", tekst: "We komen een of meer keren per jaar langs om de tuin mooi te houden." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "De tuin is strak en stijlvol aangelegd, met veel zorg en aandacht voor de kleinste details. … We wonen in een nieuwbouwwijk waar de grond hard is. Ze hebben effectieve maatregelen getroffen, zodat bij regenval het water netjes wordt afgevoerd …", naam: "Engeltje B." },
      { tekst: "Bijna twee jaar geleden hebben Harold en zijn mannen onze achtertuin aangelegd. Wij zijn super blij hoe alles is verlopen. Het was heel fijn dat Harold ons altijd keurig op de hoogte hield als er een wijziging in de planning was. …", naam: "Connie K." },
      { tekst: "Al jaren komt Harold met zijn ploeg 1 of 2 x per jaar de voor en achtertuin doen. Ook een keer een schutting geplaatst en een terras aangelegd. Uiterst vriendelijke en fatsoenlijke mensen en ze leveren altijd top werk af!", naam: "Jan N." },
      { tekst: "Harold en zijn team hebben onze kleine tuin omgetoverd tot een warme, gezellige plek! …", naam: "Kevin K." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Passie voor groen *en vakmanschap*",
    rol: "Tuinen Anno Nu, Deventer",
    tekst: [
      "Bij Tuinen Anno Nu draait alles om buiten. Met een team van vier hoveniers werken we aan tuinen die niet alleen mooi zijn, maar ook praktisch en duurzaam.",
      "Een complete tuinrenovatie, periodiek onderhoud of een stevig stukje grondwerk: we denken met je mee en steken graag de handen uit de mouwen."
    ],
    foto: "img/lounge.jpg", fotoPos: "50% 50%", fotoAlt: "Overkapping met loungeset op een nieuw terras",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Deventer *en omgeving*",
    tekst: "Onze klanten wonen in Deventer en de plaatsen eromheen. Twijfel je of we bij jou komen? Vraag het gerust.",
    plaatsen: ["Deventer", "Schalkhaar", "Diepenveen", "Gorssel", "Twello", "Wijhe", "Olst", "Raalte", "Apeldoorn", "Zutphen", "Warnsveld", "Lochem", "Zwolle", "Terwolde", "Welsum"]
  },

  band: {
    foto: "img/onderhoud.jpg", fotoPos: "50% 60%",
    titel: "Jouw *droomtuin* begint hier",
    tekst: "Vraag vrijblijvend advies of een offerte op maat. Bel of app 06 14 36 23 35."
  },

  contact: {
    titel: "Vraag *vrijblijvend* advies",
    tekst: "Vertel kort wat je voor ogen hebt. Maandag t/m zaterdag bereikbaar per telefoon, WhatsApp en mail.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Overkapping of schuur", "Onderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: nieuwbouwtuin van 8 bij 12 meter, terras, gazon en een overkapping"
  }
};
