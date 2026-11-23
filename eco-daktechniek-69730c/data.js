// Eco Daktechniek B.V. (Zwolle). Bron: ecodaktechniek.nl + Google (4,6 / 16). Alle foto's van hun eigen site. Zie content.md.
window.SITE = {
  naam: "Eco Daktechniek",
  plaats: "Zwolle",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 44,
  kleuren: { brand: "#10233a", accent: "#93c152" },
  telefoon: "038 303 2561",
  telBel: "+31383032561",
  telefoonIntl: "31642008412", waTekst: "WhatsApp", // WhatsApp-knop van hun eigen site (joinchat)
  email: "info@ecodaktechniek.nl",
  adres: ["Simon Stevinweg 5", "8013 NA Zwolle"],
  google: { score: "4,6", aantal: "16" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Duurzame platte daken en valbeveiliging. Vanuit Zwolle voor particulieren, bedrijven, woningcorporaties en zorginstellingen.",

  hero: {
    regels: ["Duurzame", "platte daken."],
    tekst: "Wij leggen, vernieuwen en onderhouden duurzame platte daken. Van één woning tot een bedrijfsdak van duizenden vierkante meters.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 55%", fotoPosMobiel: "42% 50%",
    fotoAlt: "Dronefoto van een appartementengebouw met een nieuw plat dak van Eco Daktechniek",
    donker: true,
    punten: ["Aangesloten bij VEBIDAK", "Particulier en zakelijk", "Advies over subsidies"]
  },

  marquee: ["Bitumen daken", "PVC en EPDM", "Groendaken", "Dakrenovatie", "Dakonderhoud", "Lekkages", "Valbeveiliging", "Kooiladders", "Zonnepanelen"],

  spoed: {
    titel: "Lekkage op uw platte dak?",
    tekst: "Bel ons tijdens kantooruren (8:00 tot 17:00). We zoeken eerst de echte oorzaak, zodat het probleem in één keer is opgelost."
  },

  intro: {
    kicker: "Over Eco Daktechniek",
    tekst: "Heldere communicatie, goede afspraken en deskundig advies. Zo krijgt u een dak dat jaren meegaat, en hoeft u er zelf niet naar om te kijken.",
    stats: [
      { getal: "4,6", label: "Gemiddeld op Google" },
      { getal: "16", tel: 16, label: "Reviews op Google" },
      { getal: "7100 m²", label: "Ons grootste dak, in Zwolle" },
      { getal: "25+ jaar", label: "Levensduur van onze dakbedekking" }
    ]
  },

  diensten: {
    titel: "Alles voor het platte dak",
    tekst: "Nieuwbouw, renovatie of onderhoud. We kiezen het materiaal dat past bij uw dak, uw gebouw en uw budget.",
    items: [
      { naam: "Bitumen daken", soort: "Dakbedekking", foto: "img/bitumen.jpg", pos: "50% 60%", tekst: "Dakleer van APP of SBS, in één of meer lagen. Bewezen kwaliteit met een lange levensduur, voor vrijwel elk plat dak.",
        punten: ["Levensduur meer dan 25 jaar", "Ook voor terrassen en galerijen", "Gebrand, gelijmd of geballast"] },
      { naam: "Kunststof daken", soort: "Dakbedekking", foto: "img/kunststof.jpg", pos: "50% 55%", tekst: "PVC, EPDM of TPO: licht, brandveilig verwerkt en recyclebaar. Voor EPDM kiezen we Resitrix, zonder kitnaden.",
        punten: ["UV- en ozonbestendig", "Wortelwerend", "Weinig onderhoud"] },
      { naam: "Groendaken", soort: "Groendak", foto: "img/groendak.jpg", pos: "50% 60%", tekst: "Een sedumdak beschermt de dakbedekking, buffert regenwater en houdt het binnen koeler. We checken eerst of uw dak het gewicht aankan.",
        punten: ["Langere levensduur van het dak", "Meer rendement uit zonnepanelen", "Renovatie en nieuwbouw"] },
      { naam: "Onderhoud en lekkages", soort: "Lekkage melden", foto: "img/onderhoud.jpg", pos: "50% 60%", tekst: "Een of twee keer per jaar een inspectie voorkomt lekkages en vervolgschade. Is het al raak, dan zoeken we eerst de echte oorzaak.",
        punten: ["Jaarlijkse inspectie", "Levensduurrapport van uw dak", "Grondige lekkage-analyse"] },
      { naam: "Valbeveiliging", soort: "Valbeveiliging", foto: "img/valbeveiliging.jpg", pos: "50% 50%", tekst: "Hekwerken, ankerpunten, lijnsystemen en kooiladders, zodat op uw dak veilig gewerkt kan worden. We keuren ook bestaande valbeveiliging.",
        punten: ["Verplicht vanaf 2,20 meter", "Kooiladders op maat", "Keuring van uw systeem"] },
      { naam: "Zonnepanelen", soort: "Zonnepanelen", foto: "img/zonnepanelen.jpg", pos: "50% 50%", tekst: "Een dak dat sterk genoeg is en lang meegaat, met de panelen erop. We komen kijken, adviseren eerlijk en installeren meestal binnen 3 tot 6 weken.",
        punten: ["Vrijblijvend advies aan huis", "Btw-teruggave kosteloos geregeld", "Hulp bij een duurzaamheidslening"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken van boven bekeken",
    tekst: "Van een vrijstaande woning tot een bedrijfshal. Een greep uit ons werk.",
    items: [
      { foto: "img/proj-woning.jpg", label: "Wit dak", sub: "Vrijstaande woning", pos: "50% 50%" },
      { foto: "img/proj-rij.jpg", label: "Woningen met zonnepanelen", sub: "Nieuwe dakbedekking op een rij woningen", pos: "50% 50%" },
      { foto: "img/proj-bedrijf.jpg", label: "Bedrijfsdak", sub: "Nieuwe dakbedekking op een bedrijfshal", pos: "50% 50%" },
      { foto: "img/proj-vrijstaand.jpg", label: "Plat dak", sub: "Strak afgewerkt tot in de randen", pos: "50% 40%" },
      { foto: "img/proj-pvc.jpg", label: "Kunststof dakbedekking", sub: "Met valbeveiliging", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Eerst rekenen, dan pas bouwen",
    tekst: "Een dak dat vakkundig is gemaakt, gaat langer mee en geeft minder problemen.",
    foto: "img/isolatie.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuwe isolatie wordt op een plat dak gelegd",
    stappen: [
      { naam: "We bekijken uw dak", tekst: "We controleren het afschot en zoeken uit hoe het huidige dak is opgebouwd." },
      { naam: "Advies op maat", tekst: "Op basis van een bouwfysische berekening adviseren we over isolatie, materiaal en afwerking." },
      { naam: "Duidelijke offerte", tekst: "U weet vooraf wat er gebeurt. We wijzen u ook op subsidies en regelingen die voor u gelden." },
      { naam: "Uitvoering", tekst: "Vakkundig gelegd. Als u wilt, nemen we ook het installatie- en bouwkundig werk voor onze rekening." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Zeer vakkundig bedrijf en vriendelijke en deskundige mensen zowel in de uitvoering als op kantoor en receptie. Het was voor hun en ons een zeer hectische tijd na de februaristorm maar wij zijn goed en snel geholpen voor een heel schappelijke prijs.", naam: "Nico W." },
      { tekst: "Waar vele partijen bij een complex probleem weg liepen, ging Eco Daktechniek de uitdaging aan. Uitstekend werk van hele kundige mannen.", naam: "Sanne" },
      { tekst: "Ondanks grote drukte na februari-storm, werd snel op mijn noodoproep gereageerd. Vriendelijke mensen in de uitvoering én op kantoor. De rekening viel erg mee.", naam: "Jan A." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakpartner uit Zwolle",
    rol: "Marco van Houten, directeur, met Remco Knol (calculatie en werkvoorbereiding) en Jolanda Hasselt (administratie)",
    tekst: [
      "We ontwikkelen, leggen en onderhouden duurzame platte daksystemen en valbeveiliging. We werken voor projectontwikkelaars, vastgoedbeheerders, woningcorporaties, zorginstellingen, scholen, aannemers en particulieren.",
      "Duurzaam waar het kan: nieuwe materialen en technieken die goed zijn voor het klimaat én uw dak langer laten meegaan. En we houden subsidies en regels voor u bij, zodat u daar zelf niet in hoeft te duiken."
    ],
    foto: "img/bus-kerk.jpg", fotoPos: "40% 60%", fotoAlt: "Bussen van Eco Daktechniek bij een project naast een kerk",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Vanuit Zwolle, door het hele land",
    tekst: "We werkten onder meer aan daken in deze plaatsen.",
    plaatsen: ["Zwolle", "Deventer", "Apeldoorn", "Oosterbeek", "Almere", "Bunschoten", "Tollebeek", "Driebergen-Rijsenburg", "Sliedrecht"]
  },

  faq: [
    { v: "Bitumen of kunststof, wat past bij mijn dak?", a: "Beide gaan meer dan 25 jaar mee. Kunststof is licht en brandveilig te verwerken, bitumen is bewezen sterk en geschikt voor vrijwel elk dak. We adviseren op basis van uw dakopbouw en gebruik." },
    { v: "Hoe vaak heeft een plat dak onderhoud nodig?", a: "Meestal een of twee keer per jaar. Met een vaste inspectie ziet u problemen op tijd en voorkomt u lekkages door verstopte afvoeren." },
    { v: "Kan mijn dak een groendak dragen?", a: "Een verzadigd sedumdak weegt al gauw 75 kg per m². We controleren daarom altijd eerst of uw dakconstructie dat aankan." },
    { v: "Is er subsidie voor mijn dak?", a: "Vaak wel, bijvoorbeeld voor isolatie (ISDE) of voor bedrijven via de EIA en MIA/Vamil. We houden de regelingen bij en helpen u op weg." }
  ],

  band: {
    foto: "img/band-dak.jpg", fotoPos: "50% 60%",
    titel: "Tijd voor een nieuw dak?",
    tekst: "Vertel ons over uw dak. We denken mee en sturen een duidelijke offerte."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Laat een bericht achter, mail of bel ons. We zijn bereikbaar op werkdagen van 8:00 tot 17:00.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakbedekking", "Lekkage melden", "Groendak", "Valbeveiliging", "Zonnepanelen", "Dakgoten"],
    voorbeeld: "Bijvoorbeeld: ons platte dak lekt bij de dakrand, of we willen het dak isoleren en vernieuwen",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
