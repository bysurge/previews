// Vlot Hoveniers (Almere). Bronnen: vlothoveniers.nl (home, diensten, portfolio) + Google-profiel (score, reviews). Alle foto's van hun eigen site. Geen stockfoto's.
window.SITE = {
  naam: "Vlot Hoveniers",
  kortNaam: "Vlot Hoveniers",
  vak: "Hovenier",
  plaats: "Almere",
  logo: "img/logo.png",
  logoHoogte: 38,
  kleuren: { brand: "#2d4330", accent: "#a5773f" },
  telefoon: "06 15 03 33 66",
  telefoonIntl: "31615033366",
  waTekst: "App Fred",
  email: "info@vlothoveniers.nl",
  google: { score: "4,8", aantal: 16 },
  voetTekst: "Tuinonderhoud, tuinaanpassingen en tuinaanleg in Almere en omstreken. Van ontwerp tot oplevering: alles verloopt vlot.",

  hero: {
    regels: ["Een tuin die", "er altijd", "*verzorgd uitziet.*"],
    tekst: "Onderhoud, aanpassingen en aanleg in Almere en omstreken. Fred denkt mee tot het resultaat klopt, en houdt het daarna netjes bij.",
    donker: true,
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "45% 50%",
    fotoAlt: "Verzorgde tuin met heesters, bolvormen en gazon",
    punten: ["Vrijblijvend plan en advies", "Onderhoud het hele seizoen"]
  },

  marquee: ["Tuinonderhoud", "Tuinaanpassingen", "Tuinaanleg", "Schuttingen", "Overkappingen", "Beplanting", "Schoonspuiten", "Betonbielzen borders"],

  intro: {
    kicker: "Vlot Hoveniers",
    tekst: "Een tuin is altijd *in beweging.* Vlot Hoveniers zorgt dat die van u er altijd netjes en verzorgd uitziet, met heldere afspraken en een praktische aanpak.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "Almere", label: "En omstreken" },
      { getal: "Op maat", label: "Plan, ontwerp of onderhoudsplan" }
    ]
  },

  diensten: {
    titel: "Alles voor *uw tuin*",
    tekst: "Van vast onderhoud tot een tuin die helemaal op de schop gaat. Fred werkt het uit in een helder plan, geheel vrijblijvend.",
    items: [
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Snoeien, onkruid weg, aanplanten, schoonspuiten en afval afvoeren. Eenmalig of het hele seizoen door.",
        punten: ["Snoeien", "Onkruid", "Hele seizoen"] },
      { naam: "Tuinaanpassingen", foto: "img/borders.jpg", pos: "50% 60%", tekst: "Een deel van de tuin anders, of alles op de schop. Met bestaande materialen of nieuwe: er is veel mogelijk.",
        punten: ["Tuin op de schop", "Kleine aanpassingen", "Hergebruik materialen"] },
      { naam: "Tuinaanleg", foto: "img/achtertuin.jpg", pos: "50% 60%", tekst: "Grote of kleine tuinen, helemaal naar uw wensen. Met veel aandacht voor de praktische kant, zoals goede afwatering.",
        punten: ["Bestrating", "Kunstgras en gazon", "Borders"] },
      { naam: "Schuttingen en overkappingen", foto: "img/overkapping.jpg", pos: "50% 55%", tekst: "Schuttingen, overkappingen, prieeltjes en blokhutten, vaak in combinatie met de aanleg van de tuin.",
        punten: ["Schuttingen", "Overkappingen", "Blokhutten"] },
      { naam: "Borders van betonbielzen", foto: "img/voortuin.jpg", pos: "50% 60%", tekst: "Plantenbakken en borders van duurzame betonbielzen, met terrastegels eromheen. Mooi en makkelijk te onderhouden.",
        punten: ["Plantenbakken", "Erfscheiding", "Onderhoudsarm"] },
      { naam: "Beplanting en tuinontwerp", foto: "img/rondtuin.jpg", pos: "50% 50%", tekst: "Fred adviseert over planten en bomen voor zon of schaduw, zodat er elk seizoen iets bloeit.",
        punten: ["Beplantingsadvies", "Fruit- en sierbomen", "Tuinontwerp"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Vlot Hoveniers*",
    tekst: "Een greep uit tuinen die Fred aanlegde, aanpaste of onderhoudt.",
    items: [
      { foto: "img/gazon-terras.jpg", label: "Terras aan het gazon", sub: "Tuinaanleg", pos: "50% 60%" },
      { foto: "img/vijver.jpg", label: "Borders rond de vijver", sub: "Betonbielzen en beplanting" },
      { foto: "img/kunstgras.jpg", label: "Terras met kunstgras", sub: "Tuinaanleg" },
      { foto: "img/overkapping2.jpg", label: "Overkapping op maat", sub: "Houtwerk" },
      { foto: "img/tuinproject.jpg", label: "Achtertuin vernieuwd", sub: "Tuinaanpassing" }
    ]
  },

  werkwijze: {
    titel: "Zo verloopt het *vlot*",
    tekst: "Van ontwerp tot oplevering weet u waar u aan toe bent.",
    stappen: [
      { naam: "Kennismaken", tekst: "Fred komt kijken en hoort wat u wilt met uw tuin." },
      { naam: "Plan op maat", tekst: "Een stappenplan, ontwerp of onderhoudsplan. Geheel vrijblijvend." },
      { naam: "Heldere offerte", tekst: "Een voordelige en duurzame oplossing, zonder verrassingen." },
      { naam: "Uitvoering", tekst: "Netjes uitgevoerd en pas klaar als het resultaat klopt." }
    ]
  },

  reviews: {
    titel: "Wat klanten over *Fred* zeggen",
    items: [
      { naam: "Mandy A.", tekst: "Wij zijn erg tevreden. Fred heeft continu nagedacht over hoe het ontwerp het mooist zou uitpakken, zelfs tijdens het aanleggen van de tuin nog. De tuin is geweldig geworden!" },
      { naam: "Irma de W.", tekst: "Positieve ervaringen bij het renoveren van onze tuin. Fred heeft meegedacht bij het ontwerpen van het plan en vooral bruikbare tips gegeven. De uitvoering verliep volgens plan en we zijn erg blij met het resultaat." },
      { naam: "Patrick", tekst: "Fred is nu voor de tweede keer bij ons geweest. Altijd duidelijk, eerlijk en deskundig. Hij denkt met je mee en houdt zich aan zijn afspraken." },
      { naam: "Nik V.", tekst: "In slechts 2 dagen heeft hij mega veel werk verzet. … Hij kwam bovendien met slimme en creatieve plannen waar ik zelf nooit op was gekomen." }
    ]
  },

  over: {
    kicker: "Over Vlot", navNaam: "Over ons",
    titel: "Fred van den *Boogaard*",
    rol: "Hovenier, Vlot Hoveniers",
    tekst: [
      "Vlot staat voor Verzorging, Logisch Onderhoud, Tuinen. Fred is dagelijks in tuinen in Almere en omgeving aan het werk, van onderhoud tot complete aanleg.",
      "Als groenliefhebber denkt hij graag mee over een tuin die makkelijk te onderhouden is en toch groen blijft. Meer groen is meer leven."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 55%", fotoAlt: "De bus van Vlot Hoveniers",
    knop: "Stuur Fred een bericht"
  },

  werkgebied: {
    titel: "Almere en omstreken",
    tekst: "Vlot Hoveniers werkt in Almere en de omliggende plaatsen. Twijfelt u of Fred bij u komt? Vraag het gerust.",
    plaatsen: ["Almere", "En omstreken"]
  },

  faq: [
    { v: "Kost een plan of advies iets?", a: "Nee. Fred werkt uw wensen uit in een stappenplan, ontwerp of onderhoudsplan, geheel vrijblijvend." },
    { v: "Kan ik een onderhoudsarme tuin krijgen die toch groen is?", a: "Zeker. Bijvoorbeeld een mix van zo'n zestig procent bestrating en veertig procent groen, met borders van betonbielzen die weinig werk geven." },
    { v: "Doen jullie ook kleine klussen?", a: "Ja. Van een snoeibeurt of het schoonspuiten van het terras tot een kleine aanpassing in de tuin." },
    { v: "Nemen jullie nog tuinaanleg aan?", a: "Ja, al is er minder ruimte voor grote aanlegprojecten. Vraag gerust wat er mogelijk is." }
  ],

  band: {
    foto: "img/rondtuin.jpg", fotoPos: "50% 50%",
    titel: "Zin in een tuin die *altijd klopt?*",
    tekst: "Vraag vrijblijvend een plan aan. Fred komt langs en denkt met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt. Fred neemt contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinonderhoud", "Tuinaanpassing", "Tuinaanleg", "Schutting of overkapping", "Betonbielzen borders", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: voortuin opnieuw bestraten met een border van betonbielzen"
  }
};
