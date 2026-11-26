// Zilveren Roos Tuinen (Stoutenburg, regio Amersfoort/Hoevelaken/Nijkerk). Bron: zilverenroostuinen.nl (26-11-2026, Joomla) + Google (4,5 uit 2, geen reviewteksten -> geen reviews/score getoond).
// Foto's: eigen projectfoto's van hun site (max 1024px). Slideshow-foto "fontein met gele bloemen" is waarschijnlijk stock -> NIET gebruikt.
// Logo: alleen het roos-icoon uit hun (kleine) logo, naam als tekst.
window.SITE = {
  naam: "Zilveren Roos Tuinen",
  kortNaam: "Zilveren Roos",
  vak: "Hovenier",
  plaats: "Amersfoort",
  titelExtra: "Hovenier in Amersfoort, Hoevelaken en Nijkerk",
  logo: "img/logo.png",
  logoOpFoto: "img/logo.png",
  logoHoogte: 38,
  kleuren: { brand: "#2c4632", accent: "#9a3b36" },
  telefoon: "06 130 847 94",
  telefoonIntl: "31613084794",
  waTekst: "WhatsApp",
  email: "info@zilverenroostuinen.nl",
  adres: ["Honthorsterweg 2", "3835 PP Stoutenburg"],
  kvk: "32099459",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Hovenier in de regio Hoevelaken, Nijkerk en Amersfoort, voor particulieren en bedrijven. Tuinontwerp, tuinaanleg en tuinonderhoud.",

  hero: {
    regels: ["Een tuin", "waar u zich", "*thuis voelt.*"],
    tekst: "Tuinontwerp, aanleg en onderhoud in de regio Amersfoort, Hoevelaken en Nijkerk. Voor particulieren en bedrijven, van het eerste ontwerp tot het snoeiwerk.",
    foto: "img/hero.jpg", fotoPos: "50% 62%", fotoPosMobiel: "58% 60%", donker: true,
    fotoAlt: "Zonnige tuin met gazon, oude fruitboom en een loungebank op het terras",
    badge: "Gratis en vrijblijvende offerte",
    punten: ["Ontwerp in 3D", "Particulieren en bedrijven"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Sierbestrating", "Vijvers", "Overkappingen en tuinhuizen", "Vlonderterrassen", "Boomverzorging"],

  intro: {
    kicker: "Zilveren Roos Tuinen",
    tekst: "Uw wensen staan centraal, zodat uw nieuwe tuin ook echt *úw tuin* is. Dé plek voor een goed boek, een lekker drankje en familie en vrienden.",
    stats: [
      { getal: "3D", label: "Uw ontwerp vooraf in beeld" },
      { getal: "Gratis", label: "Vrijblijvende offerte" },
      { getal: "100×100", label: "Ook grote tegels, vakkundig gelegd" },
      { getal: "FSC", label: "Zoveel mogelijk FSC-hout" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *onderhoud*",
    tekst: "Een totaalplaatje: van het allereerste ontwerp tot de vijver, de bestrating en de overkapping met haard.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "Een origineel ontwerp, helemaal naar uw wens. We laten het u driedimensionaal zien en maken er vrijblijvend een offerte bij. Ook voor een compleet beplantingsplan.",
        punten: ["Ontwerp in 3D", "Beplantingsplan", "Offerte op uw eigen ontwerp"] },
      { naam: "Tuinaanleg", foto: "img/vlonder.jpg", pos: "50% 60%", tekst: "Een compleet nieuwe tuin, of uw bestaande tuin aanpassen of renoveren. Van beplanten en bestraten tot verlichting, tuinhuizen en een ingegraven trampoline.",
        punten: ["Nieuwe tuin of make-over", "Beplanten en bestraten", "Advies voor later onderhoud"] },
      { naam: "Sierbestrating", foto: "img/tegels.jpg", pos: "50% 55%", tekst: "Van grote natuursteen of keramische tegels tot oud gebakken waaltjes. Met het juiste voorwerk en de afwatering meegenomen, en de machines voor tegels tot 100×100 cm.",
        punten: ["Keramiek en natuursteen", "Gebakken klinkers", "Afwatering meegenomen"] },
      { naam: "Vijvers en water", foto: "img/vijver.jpg", pos: "50% 55%", tekst: "Ruime ervaring met het aanleggen en onderhouden van vijvers, ook op maat ontworpen. Plus beregening, afwatering en ondergrondse wateropvang.",
        punten: ["Vijvers op maat", "Beregening", "Wateropvang en afwatering"] },
      { naam: "Hout: overkapping, vlonder, schutting", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Pergola's, overkappingen, tuinhuizen en schuttingen, standaard of op maat gemaakt. Vlonders het liefst van FSC-hout of houtcomposiet.",
        punten: ["Overkappingen en tuinhuizen", "Schuttingen op maat", "Vlonderterrassen"] },
      { naam: "Tuinonderhoud en bomen", foto: "img/haag.jpg", pos: "50% 55%", tekst: "Het hele jaar, een paar keer per jaar of eenmalig. Met een onderhoudscontract op maat, en gecertificeerd voor het snoeien en kappen van ook de grootste bomen.",
        punten: ["Onderhoudscontract", "Zomer- of winterklaar", "Bomen snoeien en kappen"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Zilveren Roos*",
    tekst: "Een greep uit tuinen die we ontwierpen en aanlegden in Amersfoort, Hoevelaken en omgeving. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/boerderij.jpg", label: "Erf met sierbestrating", sub: "Bestrating" },
      { foto: "img/vijver-terras.jpg", label: "Terras met verhoogde vijver", sub: "Aanleg" },
      { foto: "img/stadstuin.jpg", label: "Stadstuin met waterpartij", sub: "Ontwerp en aanleg" },
      { foto: "img/vijver-rond.jpg", label: "Ronde vijver met stapelmuur", sub: "Vijvers" },
      { foto: "img/veranda.jpg", label: "Veranda van hout", sub: "Overkapping" },
      { foto: "img/water.jpg", label: "Zitplek aan het water", sub: "Aanleg" },
      { foto: "img/plantenbak.jpg", label: "Plantenbak met verlichting", sub: "Tuinverlichting" },
      { foto: "img/gazon.jpg", label: "Nieuw gazon met borders", sub: "Gras" },
      { foto: "img/haard.jpg", label: "Terras met haard en houtopslag", sub: "Aanleg" },
      { foto: "img/bank.jpg", label: "Voortuin met houten bank", sub: "Bestrating" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot leven*",
    tekst: "Duidelijk vanaf het begin: u ziet vooraf hoe uw tuin wordt en wat het kost.",
    stappen: [
      { naam: "Uw wensen", tekst: "We bespreken wat u wilt en bekijken uw tuin. Heeft u al een eigen ontwerp? Dan kan dat ook." },
      { naam: "Ontwerp in 3D", tekst: "U krijgt een origineel ontwerp dat u driedimensionaal kunt bekijken." },
      { naam: "Vrijblijvende offerte", tekst: "Bij het ontwerp hoort een duidelijke offerte, gratis en zonder verplichtingen." },
      { naam: "Aanleg en onderhoud", tekst: "We leggen de tuin vakkundig aan en geven advies, of nemen het onderhoud van u over." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Elke tuin *iets moois*",
    rol: "Zilveren Roos Tuinen, Stoutenburg",
    tekst: [
      "Zilveren Roos Tuinen is hovenier in de regio Hoevelaken, Nijkerk en Amersfoort, voor particulieren en bedrijven. We werken professioneel en creatief, met goede materialen en beplanting.",
      "Van het allereerste ontwerp tot vijvers, bestrating en buitenkeukens en overkappingen met haard. Bij onze stenenleverancier 'd Ouwe Steen in Amersfoort legden we zelfs de showtuin aan."
    ],
    foto: "img/border.jpg", fotoPos: "50% 55%", fotoAlt: "Verhoogde border met siergras en grind",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Amersfoort en omgeving",
    tekst: "Vanuit Stoutenburg werken we in de hele regio. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Amersfoort", "Hoevelaken", "Nijkerk", "Leusden", "Hoogland", "Vathorst", "Baarn", "Soest"]
  },

  faq: [
    { v: "Kan ik mijn ontwerp vooraf zien?", a: "Ja. We laten uw tuinontwerp driedimensionaal zien, met een vrijblijvende offerte erbij." },
    { v: "Ik heb zelf al een ontwerp. Kan dat?", a: "Zeker. Op basis van uw eigen ontwerp maken we graag een vrijblijvende offerte." },
    { v: "Kan ik alleen onderhoud afnemen?", a: "Ja, voor particulieren en bedrijven. Het hele jaar, een paar keer per jaar of eenmalig, bijvoorbeeld om de tuin zomer- of winterklaar te maken." },
    { v: "Snoeien jullie ook grote bomen?", a: "Ja. We hebben de certificaten om ook de grootste bomen en fruitbomen veilig en vakkundig te snoeien of te verwijderen." }
  ],

  band: {
    foto: "img/vijver-breed.jpg", fotoPos: "50% 55%",
    titel: "Benieuwd naar *de mogelijkheden?*",
    tekst: "Vraag gratis en vrijblijvend een offerte aan, of stuur een appje met een foto van uw tuin."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Bel, app of mail ons via info@zilverenroostuinen.nl. We nemen snel contact met u op.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Sierbestrating", "Vijvers en water", "Overkapping, vlonder of schutting", "Tuinonderhoud en bomen"],
    voorbeeld: "Bijvoorbeeld: nieuwe achtertuin met terras van keramische tegels en een vijver"
  }
};
