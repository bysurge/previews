// Dakonderhoud van Zundert (Weert). Bron: dakonderhoudvanzundert.nl (alle dienstpagina's) + Google (4,5 / 23). Foto's: alleen Google-profiel (site heeft alleen kleine grijze/stockachtige plaatjes). Logo = naam in tekst. Zie content.md.
window.SITE = {
  naam: "Dakonderhoud van Zundert",
  kortNaam: "Van Zundert",
  plaats: "Weert",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Weert",
  logo: "img/leeg.svg", logoVorm: "icoon",
  kleuren: { brand: "#1c2024", accent: "#d9a520" },
  telefoon: "06 52 30 59 89",
  telefoonIntl: "31652305989",
  waTekst: "App ons",
  waContact: "Stuur ons een bericht",
  email: "info@dakonderhoudvanzundert.nl",
  adres: ["Romeinenstraat 19", "6004 BB Weert"],
  kvk: "55247814",
  google: { score: "4,5", aantal: "23" },
  ctaTekst: "Plan een inspectie",
  navCta: "Offerte",
  voetTekst: "Onderhoud, reparatie en renovatie van daken, schoorstenen en gevels. Gevestigd in Weert, actief in heel Nederland.",

  hero: {
    regels: ["Dak en schoorsteen", "weer in orde."],
    tekst: "Reparatie, onderhoud en renovatie van pannendaken en platte daken. Voor particulieren, woningbouwverenigingen en bouwbedrijven, vanuit Weert.",
    foto: "img/hero.jpg", fotoPos: "50% 40%",
    fotoPosMobiel: "60% 50%",
    fotoAlt: "Pannendak in renovatie met nieuwe isolatieplaten en panlatten",
    donker: true,
    punten: ["24-uurservice bij lekkage", "Pannen- en platte daken", "Ook schoorsteen en gevel"]
  },

  marquee: ["Dakinspectie", "Pannendaken", "Platte daken", "Dakrenovatie", "Schoorsteenrenovatie", "Loodwerk", "Dakgoten", "Daklichtsystemen", "Rookkanalen", "Gevelreiniging", "Gevelbekleding"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "Wij hebben een 24-uurservice. Bel of app, dan komen we zo snel mogelijk."
  },

  intro: {
    kicker: "Over ons",
    tekst: "Zolang het niet lekt, kijkt bijna niemand naar zijn dak. Toch voorkomt tijdig onderhoud grote kosten. Wij doen alles aan uw dak, schoorsteen en gevel: van inspectie tot complete renovatie.",
    stats: [
      { getal: "24/7", label: "Service bij lekkage en stormschade" },
      { getal: "4,5", label: "Gemiddeld op Google" },
      { getal: "23", tel: 23, label: "Reviews op Google" },
      { getal: "NL", label: "Heel Nederland, vanuit Weert" }
    ]
  },

  diensten: {
    titel: "Alles aan uw dak",
    tekst: "Pannendak of plat dak, schoorsteen of goot. Eén vakman voor het hele dak.",
    knop: "Vraag een offerte",
    items: [
      { naam: "Dakrenovatie en isolatie", soort: "Pannendak", foto: "img/renovatie.jpg", pos: "50% 40%", tekst: "Is reparatie niet meer genoeg? Dan vernieuwen we uw pannendak, en isoleren we meteen goed.",
        punten: ["Compleet nieuw pannendak", "Isolatie", "Nokvorsten met Flexim"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 50%", tekst: "Reparatie en onderhoud van uw platte dak, of nieuwe dakbedekking als het oude dak op is.",
        punten: ["Reparatie en onderhoud", "Nieuwe dakbedekking", "Ook golfplaten"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 50%", tekst: "Opnieuw voegen, loszittende stenen vastzetten, nieuw lood en impregneren. Zo is uw schoorsteen weer veilig.",
        punten: ["Voegen en metselwerk", "Schoorsteenkappen met 5 jaar garantie", "Vogelnesten verwijderen"] },
      { naam: "Daklichtsystemen", soort: "Licht", foto: "img/dakraam.jpg", pos: "50% 50%", tekst: "Dakramen op hellende en platte daken, en lichtkoepels. Waterdicht geplaatst en netjes afgewerkt.",
        punten: ["Dakramen vervangen of nieuw", "Lichtkoepels", "Persoonlijk advies"] },
      { naam: "Lood, goten en rookkanalen", soort: "Lood en zink", foto: "img/loodwerk.jpg", pos: "50% 50%", tekst: "Lood rond schoorsteen en dakkapel, dakgoten reinigen of vervangen, en veilige rookkanalen voor uw haard of kachel.",
        punten: ["Loodwerk", "Dakgoten en bladroosters", "Rookkanalen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Daken in Weert en omgeving.",
    items: [
      { foto: "img/project-1.jpg", label: "Dakwerk", sub: "Rij woningen in de steigers", pos: "50% 50%" },
      { foto: "img/project-2.jpg", label: "Plat dak", sub: "Woning met carport in de steigers", pos: "50% 50%" },
      { foto: "img/project-4.jpg", label: "Overkapping", sub: "Met plat dak", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Schade aan dak of schoorsteen zie je vanaf de grond vaak niet. Daarom beginnen we met kijken.",
    stappen: [
      { naam: "Inspectie", tekst: "We controleren dakbedekking, pannen, nokvorsten, lood, goten en schoorsteen." },
      { naam: "Uitleg en offerte", tekst: "We leggen precies uit wat we van plan zijn, en waarom." },
      { naam: "Vakwerk", tekst: "Netjes uitgevoerd en volgens afspraak. Bij lekkage of stormschade ook met spoed." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Kevin en zn mannen hebben goed werk afgeleverd! Ze denken met je mee, proberen zo goed mogelijk naar je wensen te luisteren en zijn niet te beroerd iets extra voor je te doen! Ze hebben bij ons het complete dak vervangen en zijn alle afspraken netjes nagekomen!", naam: "Stefan S." },
      { tekst: "Wij hebben al meerdere klussen aan Kevin uitbesteed, vakwerk, kwaliteit en altijd volgens afspraak. Wij kunnen Kevin super aanbevelen als het gaat voor onderhoudswerk aan het platdak of de renovatie en isolatie van een pannendak.", naam: "Mike K." },
      { tekst: "Dakonderhoud K. van Zundert heeft ons dak vervangen plus rondom keurig afgetimmerd. Betrouwbaar, vakkundig en super prijs-kwaliteitverhouding. … Super service, 100% tevreden. TOP.", naam: "Wim S." },
      { tekst: "In 2017 al gebruik gemaakt van hun service, destijds heel tevreden. Nu we wederom een dakvervanging nodig hadden bij onze nieuwe woning, direct contact opgenomen met Kevin. Zeer snelle installatie, goede kwaliteit en service.", naam: "Manon" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Dakonderhoud van Zundert",
    rol: "Gevestigd in Weert, actief in heel Nederland",
    tekst: [
      "We zijn gespecialiseerd in alle voorkomende onderhoudswerkzaamheden aan dak, schoorsteen en gevel. Voor particulieren, woningbouwverenigingen en bouwbedrijven.",
      "Bij lekkage en stormschade staan we 24 uur per dag voor u klaar. Een snelle reparatie voorkomt grote schade."
    ],
    foto: "img/project-3.jpg", fotoPos: "50% 60%", fotoAlt: "Woning met plat dak",
    knop: "Stuur ons een bericht"
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Bel, app of mail ons, of laat hieronder een bericht achter. Bij lekkage of stormschade: bel direct.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Lekkage / stormschade", "Dakinspectie", "Pannendak", "Plat dak", "Schoorsteen", "Dakraam of lichtkoepel", "Gevel", "Anders"],
    voorbeeld: "Bijvoorbeeld: er zijn pannen verschoven na de storm",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
