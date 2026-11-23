// Tolmeijer Dakdekkers (Haarlem). Bron: tolmeijerdakdekkers.nl (alle dienstpagina's + vraag en antwoord) + Google (4,8 / 121), opgehaald 23-11-2026. Zie content.md.
window.SITE = {
  naam: "Tolmeijer Dakdekkers",
  kortNaam: "Tolmeijer",
  plaats: "Haarlem",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 52,
  kleuren: { brand: "#18191b", accent: "#d39a4a" },
  telefoon: "06 10 900 200",
  telefoonIntl: "31610900200",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@tolmeijerdakdekkers.nl",
  adres: ["Hofmeijerstraat 33", "2033 KC Haarlem"],
  kvk: "67879837",
  google: { score: "4,8", aantal: "121" },
  ctaTekst: "Gratis offerte op maat",
  navCta: "Offerte",
  voetTekst: "Dakdekker in Haarlem en omgeving met meer dan twintig jaar ervaring. Platte en hellende daken, isolatie, lood- en zinkwerk. 24/7 bereikbaar bij spoed.",

  hero: {
    regels: ["Vakwerk op", "elk dak in", "Haarlem."],
    tekst: "Meer dan twintig jaar ervaring met platte en hellende daken. Dakbedekking, reparaties, isolatie en lood- en zinkwerk, met 10 jaar garantie.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 55%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Plat dak in Haarlem in renovatie: nieuwe isolatieplaten, rollen bitumen en gereedschap",
    donker: true,
    punten: ["10 jaar garantie", "24/7 spoedservice", "Gratis offerte op maat"]
  },

  marquee: ["Bitumen daken", "Pannendaken", "Dakpanplaat", "Dakisolatie", "Loodwerk", "Zinkwerk", "Dakgoten", "Schoorsteenrenovatie", "Lekkages"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "We zijn 24/7 bereikbaar. In noodgevallen zijn we dezelfde dag nog bij u voor een noodreparatie."
  },

  intro: {
    kicker: "Tolmeijer Dakdekkers",
    tekst: "Wij zien elk dak als ons visitekaartje. Daarom werken we zorgvuldig, zetten we in de offerte precies wat we gaan doen en wat het kost, en geven we 10 jaar garantie.",
    stats: [
      { getal: "20+", tel: 20, label: "Jaar ervaring in vakwerk" },
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "121", tel: 121, label: "Reviews op Google" },
      { getal: "10 jaar", label: "Garantie op ons werk" }
    ]
  },

  diensten: {
    titel: "Alles onder één dak",
    tekst: "Van de toplaag tot het dakbeschot, de isolatie en het lood- en zinkwerk. Geen gedoe met verschillende bedrijven voor één klus.",
    items: [
      { naam: "Dakbedekking", soort: "Dakbedekking", foto: "img/dakbedekking.jpg", pos: "50% 55%", tekst: "Bitumen voor platte daken, pannen voor hellende daken. Op uw huis, aanbouw, schuur of garage, nieuw of als vervanging.",
        punten: ["Bitumen gaat zeker 25 tot 30 jaar mee", "Pannendaken en dakpanplaat", "Overlagen waar het kan"] },
      { naam: "Dak repareren", soort: "Dak repareren", foto: "img/repareren.jpg", pos: "50% 55%", tekst: "Schade aan uw dak? Hoe sneller het hersteld is, hoe minder gevolgschade. Ook voor een kleine reparatie na een storm.",
        punten: ["10 jaar garantie op de reparatie", "Specialist in bitumen en pannen", "Ook met spoed"] },
      { naam: "Lekkage", soort: "Lekkage / spoed", foto: "img/lekkage.jpg", pos: "50% 50%", tekst: "Een vochtplek op het plafond of water binnen? We sporen de oorzaak op en verhelpen het, in noodgevallen dezelfde dag.",
        punten: ["24/7 bereikbaar", "Lekdetectie en noodreparatie", "Hulp bij uw verzekering"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/isolatie.jpg", pos: "50% 55%", tekst: "Warm in de winter, koel in de zomer. We isoleren platte en hellende daken met hoogwaardige PIR-platen.",
        punten: ["Plat en hellend dak", "Brandveilig en vochtbestendig", "Mooi te combineren met een nieuw dak"] },
      { naam: "Lood- en zinkwerk", soort: "Lood- en zinkwerk", foto: "img/zinkwerk.jpg", pos: "50% 50%", tekst: "Waterdichte overgangen bij schoorsteen, dakkapel en muur, en zinken goten en daklijsten op maat.",
        punten: ["Loodslabben, standaard 18-ponds lood", "Zinkwerk van Rheinzink, op maat", "Dakgoten reinigen"] },
      { naam: "Schoorsteenrenovatie", soort: "Schoorsteen", foto: "img/schoorsteen.jpg", pos: "50% 45%", tekst: "Weer en wind laten sporen na. We voegen, metselen en impregneren, en vernieuwen het loodwerk.",
        punten: ["Opnieuw voegen en vastmetselen", "Impregneren tegen vocht en vorst", "Nieuwe loodslabben"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Daken in Haarlem en omgeving",
    tekst: "Platte daken, pannendaken en alles daartussen. Een greep uit ons werk.",
    items: [
      { foto: "img/p-dakopbouw.jpg", label: "Plat dak", sub: "Strak afgewerkt rond een dakopbouw", pos: "50% 50%" },
      { foto: "img/p-pannendak.jpg", label: "Pannendak", sub: "Nieuwe folie en panlatten", pos: "50% 40%" },
      { foto: "img/p-plat.jpg", label: "Bitumen dak", sub: "Strak afgewerkte dakrand", pos: "50% 60%" },
      { foto: "img/p-aanbouw.jpg", label: "Aanbouw", sub: "Nieuw dak met strakke dakrand", pos: "50% 50%" },
      { foto: "img/p-stadspand.jpg", label: "Stadspand", sub: "Dakwerk vanaf de steiger", pos: "50% 40%" }
    ]
  },

  werkwijze: {
    titel: "Geen verrassingen",
    tekst: "U weet altijd waar u aan toe bent. Zo pakken we het aan.",
    foto: "img/werkwijze.jpg", fotoPos: "50% 50%", fotoAlt: "Plat dak met nieuwe isolatieplaten, tijdens het werk",
    stappen: [
      { naam: "U neemt contact op", tekst: "Bel of stuur een bericht. Is het spoed? Dan komen we direct." },
      { naam: "Inspectie", tekst: "Geen spoed? Dan komen we op afspraak langs en bekijken we uw dak grondig." },
      { naam: "Offerte op maat", tekst: "Gratis en vrijblijvend, met precies wat we gaan doen en wat het kost. Vergelijk gerust met andere dakdekkers." },
      { naam: "Uitvoering", tekst: "Kiest u voor ons, dan plannen we het werk in. Bij schade helpen we u ook met de verzekering." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie",
    tekst: "We zijn trots op elk dak dat we leggen of repareren. Daarom krijgt u 10 jaar garantie op ons werk, ook op dakisolatie en reparaties.",
    lijst: {
      titel: "Daarom Tolmeijer Dakdekkers",
      punten: [
        "Meer dan twintig jaar ervaring",
        "24/7 spoedservice",
        "Schade-expertise voor uw verzekering",
        "Gratis en vrijblijvende offerte op maat",
        "Expert in platte en hellende daken",
        "Specialist in isolatie en lood- en zinkwerk"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Wij hebben na meerdere dakdekkers benaderd te hebben, Tolmeijer dakdekkers ingeschakeld vanwege een lekkage, waar enige haast bij was. Mr Tolmeijer heeft dezelfde dag nog iemand onze kant op kunnen sturen. De lekkage is snel en vakkundig afgehandeld.", naam: "Leigh V." },
      { tekst: "Milo en z'n team hebben echt topwerk geleverd! Wat begon als een noodreparatie werd uiteindelijk een heel nieuw dak maar de heren hebben ons keurig van elke stap op de hoogte gehouden en in goed overleg gehandeld.", naam: "Jeroen Sleyfer" },
      { tekst: "Complete dakrenovatie laten doen en is een prachtig dak geworden. … Na de bezichtiging een uitgebreide offerte gehad met meerdere opties. … Altijd bereikbaar en alles is bespreekbaar. Zeker een aanrader als je een nieuw en droog dak nodig hebt.", naam: "Dennis" },
      { tekst: "Omdat de lekkage bij ons aanbouw heel vervelend was en zijn agenda vol was heeft hij in het weekend gewerkt om dit op te lossen. Wij zijn heel blij dat de lekkage op korte termijn was verholpen.", naam: "Leon" },
      { tekst: "Een geweldig team voor een (naar later bleek) lastige klus: niets was teveel met als resultaat de mooiste dubbele schuur van de omgeving! Milo, dank voor je professionaliteit, perfectionistische en eerlijke instelling!", naam: "Thilly van der Honing" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dak is ons visitekaartje",
    rol: "Tolmeijer Dakdekkers, onderhoud- en montagebedrijf uit Haarlem",
    tekst: [
      "Met meer dan twintig jaar ervaring zijn we thuis op elk dak in Haarlem en omgeving: van een Haarlems volkstuinhuisje tot een complete op- of aanbouw. We hebben ook veel ervaring met het veilig demonteren van oude daken.",
      "Vakwerk en transparantie staan voorop. In onze offerte staat precies hoe we te werk gaan en wat alles kost. Zo komt u nooit voor verrassingen te staan."
    ],
    foto: "img/over.jpg", fotoPos: "50% 40%", fotoAlt: "Steiger tegen een stadspand voor dakwerk door Tolmeijer Dakdekkers",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Haarlem en omgeving",
    tekst: "Vanuit Haarlem zijn we actief in de hele regio.",
    plaatsen: ["Haarlem", "Heemstede", "Zandvoort", "Hoofddorp", "Nieuw-Vennep", "Hillegom"]
  },

  faq: [
    { v: "Hoe lang gaat een bitumen dak mee?", a: "Een goed onderhouden bitumen dak gaat gemiddeld ruim 30 jaar mee. Een dak dat veel in de zon ligt, gaat wat korter mee dan een dak in de schaduw." },
    { v: "Wat is overlagen?", a: "We leggen een nieuwe laag dakbedekking over de bestaande laag. Dat scheelt tijd en kosten. Het kan niet altijd: bijvoorbeeld als er al veel lagen liggen, het dakbeschot beschadigd is of er mastiek op het dak ligt." },
    { v: "Waarom bitumen en geen EPDM?", a: "Bitumen heeft zijn kwaliteit al tientallen jaren bewezen, is 100% recyclebaar en is, door een vakman gelegd, voordeliger dan EPDM. Het jaarlijkse onderhoud is nauwelijks meer." },
    { v: "Hoe vaak moet ik mijn dak laten nakijken?", a: "Kijk één keer per jaar zelf, in het voor- of najaar. Haal mos, algen en bladeren weg en let op blaasjes, barstjes en scheuren. Ziet u die? Neem dan contact op, dan voorkomt u een lekkage." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Twijfelt u over uw dak?",
    tekst: "We komen gratis langs voor een inspectie en maken een vrijblijvende offerte op maat."
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Bij lekkage of schade zijn we 24/7 bereikbaar.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakbedekking", "Dak repareren", "Lekkage / spoed", "Dakisolatie", "Lood- en zinkwerk", "Schoorsteen"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij de schoorsteen van ons platte dak",
    belofte: "We nemen zo spoedig mogelijk contact met u op."
  }
};
