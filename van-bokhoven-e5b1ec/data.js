// Hoveniersbedrijf Van Bokhoven (Engelen / 's-Hertogenbosch). Bron: vbokhoven.nl (gecrawld 26-11-2026) + Google 5,0 uit 5.
// Foto's: alle eigen foto's van hun site (800x600, klein -> hero iets zacht). Geen logo op hun site: eenvoudig blad-icoon + naam.
window.SITE = {
  naam: "Hoveniersbedrijf Van Bokhoven",
  kortNaam: "Van Bokhoven",
  vak: "Hovenier",
  plaats: "'s-Hertogenbosch",
  titelExtra: "Hovenier in Den Bosch en Engelen",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#33402c", accent: "#8f9a1f" },
  telefoon: "06 48 77 66 75",
  telefoonIntl: "31648776675",
  telefoon2: "073 614 96 79",
  waTekst: "App ons",
  email: "info@vbokhoven.nl",
  adres: ["De Meerheuvel 6", "5221 EA 's-Hertogenbosch"],
  google: { score: "5,0", aantal: 5 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Hoveniersbedrijf Van Bokhoven adviseert, ontwerpt, legt aan, renoveert en onderhoudt tuinen, voor particulieren en bedrijven.",

  hero: {
    regels: ["Een tuin die past", "bij hoe u *leeft.*"],
    tekst: "Advies, ontwerp, aanleg en onderhoud in Den Bosch en omgeving. Persoonlijk, vakkundig en betrouwbaar, voor particulieren en bedrijven.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "60% 50%", donker: true,
    fotoAlt: "Aangelegde tuin met gazon, hagen, leibomen en hortensia's",
    punten: ["Ontwerp, aanleg en onderhoud", "Particulier en zakelijk"],
    notitie: { label: "Nu in het seizoen", tekst: "De najaarsbeurt: snoeien en de tuin opschonen" }
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Schuttingen en vlonders", "Verlichting en beregening", "Tuinonderhoud", "Snoeiadvies"],

  intro: {
    kicker: "Hoveniersbedrijf Van Bokhoven",
    tekst: "Een tuin om in te loungen, waar de kinderen kunnen spelen of vol *flora en fauna.* Elke klant heeft eigen wensen, en die maken we graag waar.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "A tot Z", label: "Advies, ontwerp, aanleg en onderhoud" },
      { getal: "Op maat", label: "Onderhoud per uur of met contract" }
    ]
  },

  diensten: {
    titel: "Alles voor uw tuin, *uit één hand*",
    tekst: "Persoonlijke benadering, vakmanschap, betrouwbaarheid, kwaliteit en service: daar draait het bij ons om.",
    items: [
      { naam: "Tuinontwerp", foto: "img/tekening.jpg", pos: "50% 40%", tekst: "Na een gesprek over uw wensen maken we een ontwerp. We houden rekening met ligging en grondsoort, en maken als u wilt ook een beregenings- en elektriciteitsplan. Daarna volgt een offerte.",
        punten: ["Persoonlijk tuinontwerp", "Beregenings- en elektriciteitsplan", "Advies bij uw eigen ontwerp"] },
      { naam: "Tuinaanleg en renovatie", foto: "img/bestraten.jpg", pos: "50% 50%", tekst: "Een goede voorbereiding is het allerbelangrijkst: grond, afwatering en de juiste materialen. Daarna leggen we alles vakkundig aan, in één keer of gefaseerd.",
        punten: ["Grondwerk en bestrating", "Gazon, bomen en beplanting", "Hergebruik van planten en materialen"] },
      { naam: "Schuttingen, vlonders en tuinhuisjes", foto: "img/schuur.jpg", pos: "50% 55%", tekst: "Van een schutting of vlonder tot een tuinhuisje, met waterpartijen, verlichting en beregening om de tuin compleet te maken.",
        punten: ["Schuttingen en vlonders", "Tuinhuisjes", "Water, verlichting en beregening"] },
      { naam: "Tuinonderhoud", foto: "img/border.jpg", pos: "50% 55%", tekst: "Van een voor- en najaarsbeurt tot wekelijks of maandelijks onderhoud: hagen knippen, onkruid wieden, bemesten en het gazon maaien. Werkt u zelf graag in de tuin? Dan geven we ook snoeiadvies.",
        punten: ["Voor- en najaarsbeurt", "Vast onderhoud", "Snoeiadvies"] },
      { naam: "Bedrijfstuinen", foto: "img/bedrijf.jpg", pos: "50% 60%", tekst: "Ook voor bedrijven verzorgen we aanleg en onderhoud, zodat uw terrein er het hele jaar verzorgd bij ligt.",
        punten: ["Aanleg en onderhoud", "Op uurbasis of met contract"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Van Bokhoven*",
    tekst: "Een greep uit tuinen die we ontwierpen, aanlegden en onderhouden.",
    items: [
      { foto: "img/lavendel.jpg", label: "Stadstuin met lavendel en pergola", sub: "Ontwerp en aanleg", pos: "50% 60%" },
      { foto: "img/leibomen.jpg", label: "Gazon met leibomen", sub: "Aanleg" },
      { foto: "img/terras.jpg", label: "Terras tussen de borders", sub: "Bestrating en beplanting" },
      { foto: "img/gazon.jpg", label: "Grote tuin met vaste borders", sub: "Aanleg en onderhoud" },
      { foto: "img/border.jpg", label: "Border met siergrassen", sub: "Beplanting" }
    ]
  },

  werkwijze: {
    titel: "Zo pakken we het *aan*",
    tekst: "Een goede voorbereiding is het halve werk. U weet vooraf waar u aan toe bent.",
    stappen: [
      { naam: "Kennismaken", tekst: "U vertelt ons uw wensen en verwachtingen voor de tuin." },
      { naam: "Ontwerp", tekst: "We maken een ontwerp, met oog voor ligging en grondsoort." },
      { naam: "Offerte", tekst: "Op basis van het ontwerp krijgt u een duidelijke offerte." },
      { naam: "Aanleg en onderhoud", tekst: "We leggen de tuin aan en houden hem daarna mooi, als u dat wilt." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Lonneke van B.", tekst: "Altijd professioneel, vriendelijk en oprecht. Er wordt grondig en zorgvuldig gewerkt en alles ook weer keurig opgeruimd. Er wordt ook pro-actief meegedacht over verbeteringen en aanpassingen. … Een dikke aanrader dus voor alle type werkzaamheden in de tuin." },
      { naam: "Inez M.", tekst: "Wauw,.. ik heb de trampoline uit de tuin laten halen en een super mooie vlonder laten maken! … Komt afspraken na. Stuurt netjes een offerte en alles is volgens wens afgehandeld. Ik ben ontzettend tevreden!!!" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Vakmanschap met een *persoonlijke* aanpak",
    rol: "Hoveniersbedrijf Van Bokhoven, Engelen",
    tekst: [
      "Hoveniersbedrijf Van Bokhoven adviseert, ontwerpt, legt aan, renoveert en onderhoudt tuinen, bij particulieren en bij bedrijven.",
      "Persoonlijke benadering, vakmanschap, betrouwbaarheid, kwaliteit en service zijn onze belangrijkste pijlers. Zo bieden we een totaaloplossing voor uw tuin."
    ],
    foto: "img/overkapping.jpg", fotoPos: "50% 50%", fotoAlt: "Hoveniers aan het werk bij een nieuwe overkapping",
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Kan ik mijn tuin ook in fases laten aanleggen?", a: "Ja. Als de fundering van de tuin goed is, kunnen we later makkelijk elementen toevoegen. U kunt dus gefaseerd aanleggen of renoveren." },
    { v: "Ik heb zelf al een ontwerp. Kunnen jullie helpen?", a: "Zeker. We adviseren u graag over de gemaakte keuzes en materialen, ook als u de tuin zelf wilt aanpakken." },
    { v: "Hoe werkt het onderhoud?", a: "We werken op uurbasis of met een contract, met diverse mogelijkheden op maat. Van een voor- en najaarsbeurt tot wekelijks of maandelijks onderhoud." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja, we verzorgen aanleg en onderhoud voor zowel particulieren als bedrijven." }
  ],

  band: {
    foto: "img/lavendel.jpg", fotoPos: "50% 55%",
    titel: "Klaar voor een tuin *naar uw wens?*",
    tekst: "Vertel ons wat u voor ogen heeft. We denken graag met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt laten doen. We nemen snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg en renovatie", "Schuttingen, vlonders en tuinhuisjes", "Tuinonderhoud", "Bedrijfstuin"],
    voorbeeld: "Bijvoorbeeld: nieuwe bestrating en een vlonder in de achtertuin"
  }
};
